# Running Multiple Instances Per Host To Improve Performance

You may find that Rocket.Chat slows down once you have a lot of concurrent users. When this sluggishness begins, you will likely see Rocket.Chat node process approaching 100% CPU \(even if the host CPU load is low\). This is due to the single-threaded nature of Node.js applications; they can't take advantage of multiple cores natively.

While it's possible to scale out by adding more servers \(and this is recommended for HA purposes\), you can achieve better utilization of your existing hardware by running multiple instances of the Rocket.Chat application \(Node.js/Meteor app\) on your current host\(s\). Of course, you only want to do this if you're already running on a multi-core machine. A reasonable rule-of-thumb may be to run `N-1` Rocket.Chat instances, where `N=num_cores`.

Running multiple instances of Rocket.Chat on a single host requires a reverse proxy in front of your application. This tutorial assumes that you've already followed the tutorial for [Running behind a Nginx SSL Reverse Proxy](https://docs.rocket.chat/installation/manual-installation/configuring-ssl-reverse-proxy).

There's essentially just three steps:

1. Enable ReplicaSet on your MongoDB installation \([https://docs.mongodb.com/manual/tutorial/deploy-replica-set/](https://docs.mongodb.com/manual/tutorial/deploy-replica-set/)\)
2. Start multiple instances of Rocket.Chat bound to different ports
3. Update your proxy to point at all local Rocket.Chat instances

We'll be working with Nginx in our examples, but it should be possible with other reverse proxies as well.

## Run multiple instances of Rocket.Chat

We'll assume that you've configured Rocket.Chat to run as a systemd service. Since we want to run multiple instances simultaneously, we need to run at least two services. The only difference is the service name and port. If you don't have a service yet, the easiest way to do this for Rocket.Chat is to create a file in /usr/lib/systemd/system/ and call it rocketchat.service

```text
[Unit]
Description=Rocket.Chat Server
After=syslog.target
After=network.target

[Service]
Type=simple
Restart=always
StandardOutput=syslog
SyslogIdentifier=RocketChat
User=rocketchat
Group=rocketchat
Environment=MONGO_URL=mongodb://your_mongodb:27017/your_database?replicaSet=your_replica_set_name
Environment=MONGO_OPLOG_URL=mongodb://your_mongodb1:27017/local?replicaSet=your_replica_set_name
Environment=ROOT_URL=https://your_rocketchat_domain.com
Environment=PORT=3000
WorkingDirectory=/path.to.rocketchat/rocket.chat
ExecStart=/usr/local/bin/node /path.to.rocketchat/rocket.chat/bundle/main.js

[Install]
WantedBy=multi-user.target
```

Make sure the User and Group exist and both have read/write/execute Permissions for the rocketchat. Now you can run start, stop, restart, and status your rocketchat service.

If you want multiple Services create another file in /usr/lib/systemd/system and call it rocketchat@.service with the following content:

```text
[Unit]
Description=Rocket.Chat Server
After=syslog.target
After=network.target

[Service]
Type=simple
Restart=always
StandardOutput=syslog
SyslogIdentifier=RocketChat
User=rocketchat
Group=rocketchat
Environment=MONGO_URL=mongodb://your_mongodb:27017/your_database?replicaSet=your_replica_set_name
Environment=MONGO_OPLOG_URL=mongodb://your_mongodb1:27017/local?replicaSet=your_replica_set_name
Environment=ROOT_URL=https://your_rocketchat_domain.com
Environment=PORT=%I
WorkingDirectory=/path.to.rocketchat/rocket.chat
ExecStart=/usr/local/bin/node /path.to.rocketchat/rocket.chat/bundle/main.js

[Install]
    WantedBy=rocketchat.service
```

Start the other Rocket.Chat Services with

`systemctl start rocketchat@3001 (or any other desired port after the @)`

If you want to run rocketchat at boot just enable the services with

`systemctl enable rocketchat`

The other Services will be enable since they are "WantedBy"=RocketChat.service

### Ensure nodes can communicate

If you run Rocket.Chat instances on multiple physical nodes. Or even in multiple containers make sure they can communicate with each other.

Rocket.Chat makes use of a peer to peer connection to inform each other of events. Let's say you type a message and tag a friend or coworker that is connected to another instance.

Two different events are fired: 1. The user \(you\) is typing 2. Notify user \(friend\)

Each Rocket.Chat instance registers in your database the ip address it detected for its self. Other instances then use this list to discover and establish connections with each other.

If you find instances unable to talk to each other you can try setting the `INSTANCE_IP` environment variable to the ip the other instances can use to talk to it.

## Update your Nginx proxy config

Edit `/etc/nginx/sites-enabled/default` or if you use nginx from docker `/etc/nginx/conf.d/default.conf` and be sure to use your actual hostname in lieu of the sample hostname "your\_hostname.com" below.

You just need to setup a backend if one doesn't already exist. Add all local Rocket.Chat instances to it. Then swap out the host listed in the proxy section for the backend you defined with no port.

Continuing the example, we'll update our Nginx config to point to the two Rocket.Chat instances that we started running on ports 3001 and 3002.

```text
# Upstreams
upstream backend {
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
    #server 127.0.0.1:3002;
    #server 127.0.0.1:3003;
    .
    .
    .
}
```

Now just replace `proxy_pass http://IP:3000/;` with `proxy_pass http://backend;`. Updating the [sample Nginx configuration](https://docs.rocket.chat/installation/manual-installation/configuring-ssl-reverse-proxy#running-behind-a-nginx-ssl-reverse-proxy) would result in a config like this:

```text
    # HTTPS Server
server {
    listen 443;
    server_name your_hostname.com;

    error_log /var/log/nginx/rocketchat.access.log;

    ssl on;
    ssl_certificate /etc/nginx/certificate.crt;
    ssl_certificate_key /etc/nginx/certificate.key;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # don’t use SSLv3 ref: POODLE

    location / {
        proxy_pass http://backend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $http_host;

        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Nginx-Proxy true;

        proxy_redirect off;
    }
}
```

Now restart Nginx: `service nginx restart`

## Update your Apache proxy config

Run this as root \(to enable the necessary modules to use proxy balancer\):

```text
a2enmod proxy_html
a2enmod proxy_balancer
a2enmod headers
a2enmod session
a2enmod session_cookie
```

Edit `/etc/apache2/sites-enabled/rocketchat.conf` and be sure to use your actual hostname in lieu of the sample hostname "your\_hostname.com" below.

```text
<VirtualHost *:443>
    ServerAdmin it@domain.com
    ServerName chat.domain.com

    LogLevel info
    ErrorLog /var/log/chat.domain.com_error.log
    TransferLog /var/log/chat.domain.com_access.log

    SSLEngine On
    SSLCertificateFile /etc/ssl/certs/chat.domain.com.crt
    SSLCertificateKeyFile /etc/ssl/private/chat.domain.com.key

    Header add Set-Cookie "ROUTEID=.%{BALANCER_WORKER_ROUTE}e; path=/" env=BALANCER_ROUTE_CHANGED
    ProxyPreserveHost On

    <Proxy balancer://http>
        BalancerMember http://localhost:3000 route=1
        BalancerMember http://localhost:3001 route=2
        ...
        ProxySet stickysession=ROUTEID
    </Proxy>

    <Proxy balancer://ws>
        BalancerMember ws://localhost:3000 route=1
        BalancerMember ws://localhost:3001 route=2
        ...
        ProxySet stickysession=ROUTEID
    </Proxy>

    <Location />
        Require all granted
    </Location>

    RewriteEngine On
    RewriteCond %{HTTP:Upgrade} =websocket [NC]
    RewriteRule /(.*)           balancer://ws/$1 [P,L]
    RewriteCond %{HTTP:Upgrade} !=websocket [NC]
    RewriteRule /(.*)           balancer://http/$1 [P,L]

    ProxyPassReverse /          http://localhost/
</VirtualHost>
```

Now restart Apache: `systemctl restart apache2.service`

Visit `https://your_hostname.com` just as before the update. **Ooh, so fast!**

To confirm you're actually using both services like you'd expect, you can stop one rocketchat service at a time and confirm that chat still works. Restart that service and stop the other. Still work? Yep, you're using both services!

## Check your database

Another very important part is your database. As mentioned above, you will need to make sure you are running a replicaset.

This is important for a couple of reasons: 1. Database reliability. You will want to make sure that your data is replicated, and you have another node if something happens to your primary. 2. Rocket.Chat does what's called oplog tailing. The oplog is turned on when you setup a replicaset. Mongo makes use of this to publish events so the other nodes in the replicaset can make sure its data is up to date. Rocket.Chat makes use of this to watch for database events. If someone sends a message on Instance 1 and you are connected to Instance 2. Instance 2 watches for message insert events and then is able to show you a new message has arrived.

### Database engine

Another thing to keep in mind is the storage engine you are using. By default mongo uses Wiredtiger. Wiredtiger under some loads can be very CPU and Memory intensive. Under small single instance setups we don't typically see issues. But when you run multiple instances of Rocket.Chat it can sometimes get a bit unruly.

It's because of this we recommend in multiple instance situations that you switch the mongo storage engine to mmapv1.

