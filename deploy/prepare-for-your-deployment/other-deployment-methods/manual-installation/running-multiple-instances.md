# Running Multiple Instances

![](<../../../../.gitbook/assets/2021-06-10\_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (1) (1) (1) (11) (17).jpg>)

While it's possible to scale up by adding more servers (recommended for HA purposes), you can better utilize your existing hardware by running multiple instances of the Rocket.Chat application (Node.js/Meteor app) on your current host(s). You should only do this if you already use a multi-core computer. A reasonable rule of thumb may be to run `N-1` Rocket.Chat instances, where `N=num_cores`. Running multiple instances of Rocket.Chat on a single host requires a reverse proxy before your application. This tutorial assumes you've already followed the instructions for [running behind an Nginx SSL Reverse Proxy](https://docs.rocket.chat/deploy/rocket.chat-environment-configuration/configuring-ssl-reverse-proxy#running-behind-a-nginx-ssl-reverse-proxy).

Essentially, there are just three steps:

* [Enable ReplicaSet on your MongoDB installation](https://docs.mongodb.com/manual/tutorial/deploy-replica-set/).
* Start multiple instances of Rocket.Chat bound to different ports.
* Update your proxy to point at all local Rocket.Chat instances.

{% hint style="info" %}
In the examples, we'll be using Nginx. However, you can use other reverse proxies.
{% endhint %}

## Run multiple instances of Rocket.Chat

* Configure Rocket.Chat to run as a systemd service. Since you want to run multiple instances simultaneously, you must run at least two services. The only difference is the service name and port. If you don't have a service yet, the easiest way to do this for Rocket.Chat is to create a file in `/usr/lib/systemd/system/` and call it `rocketchat.service`

```
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

* Ensure the User and Group exist, and both have `read/write/execute permissions` for `rocketchat`. Now you can start, stop, restart, and see the status of your `rocketchat` service. If you want multiple services, create another file in `/usr/lib/systemd/system` and call it `rocketchat@.service` updating  the content with the these data:

```
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
    WantedBy=multi-user.target
```

* Start the other Rocket.Chat services.&#x20;

`systemctl start rocketchat@3001`&#x20;

{% hint style="info" %}
You can use any desired port instead of `3001`.
{% endhint %}

* To run Rocket.Chat during boot; use the command below to enable the services:&#x20;

`systemctl enable rocketchat or systemctl enable rocketchat@3001`

### Ensure nodes can communicate

If you run Rocket.Chat instances on multiple physical nodes or containers, ensure they can communicate with each other. Rocket.Chat uses a peer-to-peer connection to inform each other of events. For example, when you type a message and tag a friend or coworker connected to another instance. Two different events are fired; the user (you) is typing and notifying the user (friend).

Each Rocket.Chat instance registers in your database the IP address it detected for itself. Other instances use this list to discover and establish connections with each other. If you find instances  unable to communicate, set the `INSTANCE_IP` environment variable to the IP the other instances can use to talk to it.

## Update your Nginx proxy config

Edit `/etc/nginx/sites-enabled/default` or `/etc/nginx/conf.d/default.conf` ( if you use nginx from docker) and replace the sample hostname "your\_hostname.com" with your actual hostname. You need to set up a backend if one doesn't already exist and add all local Rocket.Chat instances to it. Then swap out the host listed in the proxy section for the backend you defined with no port.

* Now, update the Nginx config to point to the two Rocket.Chat instances that started running on ports `3001` and `3002`.

```json
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

* Replace `proxy_pass http://IP:3000/;` with `proxy_pass http://backend;`. Updating the [sample Nginx configuration](https://docs.rocket.chat/installation/manual-installation/configuring-ssl-reverse-proxy#running-behind-a-nginx-ssl-reverse-proxy) would result in a config like this:

```apacheconf
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
        client_max_body_size 0;
    }
}
```

* Restart Nginx.

&#x20;`service nginx restart`

## Update your Apache proxy config

Run this as a root user to enable the necessary modules to use the proxy balancer.

```
a2enmod proxy_html
a2enmod proxy_balancer
a2enmod headers
a2enmod session
a2enmod session_cookie
```

Edit `/etc/apache2/sites-enabled/rocketchat.conf` and confirm that your hostname has been updated.

```apacheconf
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

* Restart Apache.

&#x20;`systemctl restart apache2.service`

* Visit `https://your_hostname.com` and confirm the updates.

{% hint style="info" %}
To prove you're using both services as you'd expect, you can stop one Rocket.Chat service at a time and ensure that the chat still works. Restart that service and stop the other. That will show you are using both instances. Be sure to maintain time in sync between all instances.
{% endhint %}

## Check your database

The database is another vital part of this setup. First, you must ensure you are running a replicaset. It is essential due to the following reasons:&#x20;

* **Database reliability:** Confirm that your data is replicated and you have another node if something happens to your primary.
* **Oplog Tailing**: The oplog is turned on when you set up a replicaset. Mongo uses this to publish events so the other nodes in the replicaset can ensure its data is updated. Rocket.Chat uses this to watch for database events. If someone sends a message on Instance 1 and you are connected to Instance 2. Instance 2 watches for message insert events, showing you a new message has arrived.
