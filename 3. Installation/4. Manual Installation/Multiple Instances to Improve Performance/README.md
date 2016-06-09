## Running Multiple Instances Per Host To Improve Performance

You may find that Rocket.Chat slows down once you have a lot of concurrent users. When this sluggishness begins,
you will likely see Rocket.Chat node process approaching 100% CPU (even if the host CPU load is low). This is
due to the single-threaded nature of Node.js applications; they can't take advantage of multiple cores natively.

While its possible to scale out by adding more servers (and this is recommended for HA purposes), you can achieve
better utilization of your existing hardware by running multiple instances of the Rocket.Chat application
(Node.js/Meteor app) on your current host(s). Of course, you only want to do this if you're already running on
a multi-core machine. A reasonable rule-of-thumb may be to run `N-1` Rocket.Chat instances, where `N=num_cores`.

Running multiple instances of Rocket.Chat on a single host requires a reverse proxy in front of your application.
This tutorial assumes that you've already followed the tutorial for [Running behind a Nginx SSL Reverse Proxy]
(https://rocket.chat/docs/installation/manual-installation/configuring-ssl-reverse-proxy-with-nginx-md/).

There's essentially just two steps:
1. Start multiple instances of Rocket.Chat bound to different ports
2. Update your proxy to point at all local Rocket.Chat instances

We'll be working with Nginx in our examples, but it should be possible with other reverse proxies as well.

## Run multiple instances of Rocket.Chat

We'll assume that you've configured Rocket.Chat to run as a service. Since we want to run multiple instances
simultaneously, we need to run two services. The only difference is the service name, port, and logging path.
If you don't have a service yet, the easiest way to do this for Rocket.Chat is to use `forever-service` to
create the services and run them with `forever` for you.

Let's create two services: `rocketchat1` runs on port 3001 and `rocketchat2` runs on port 3002.

    sudo npm install -g forever
    sudo npm install -g forever-service
    cd ~/Rocket.Chat
    sudo forever-service install -s main.js -e "ROOT_URL=https://example.com/ MONGO_URL=mongodb://localhost:27017/rocketchat PORT=3001" rocketchat1
    sudo forever-service install -s main.js -e "ROOT_URL=https://example.com/ MONGO_URL=mongodb://localhost:27017/rocketchat PORT=3002" rocketchat2

On debian/ubuntu, these generate upstart scripts in `/etc/init/rocketchat1.conf` and `/etc/init/rocketchat2.conf`.
Notice that it automatically uses the service name to configure logging, e.g., `/var/log/rocketchat1.conf`.

Now you can run `start`, `stop`, `restart`, and `status` for your two services. Go ahead and start both services:

    sudo service rocketchat1 start
    sudo service rocketchat2 start

You can confirm they stayed up / started successfully:

    sudo service rocketchat1 status
    sudo service rocketchat2 status

Note: if you name one "rocketchat" and the other "rocketchat2" with forever-service, then stopping "rocketchat"
will also stop "rocketchat2" since its just doing a grep for the name to stop.

## Update your Nginx proxy config

Edit ```/etc/nginx/sites-enabled/default``` or if you use nginx from docker ```/etc/nginx/conf.d/default.conf```
and be sure to use your actual hostname in lieu of the sample hostname "your_hostname.com" below.

You just need to setup a backend if one doesn't already exist. Add all local Rocket.Chat instances to it.
Then swap out the host listed in the proxy section for the backend you defined with no port.

Continuing the example, we'll update our Nginx config to point to the two Rocket.Chat instances
that we started running on ports 3001 and 3002.

```
# Upstreams
upstream backend {
    server 127.0.0.1:3001;
    server 127.0.0.1:3002;
}
```

Now just replace `proxy_pass http://IP:3000/;` with `proxy_pass http://backend;`.
Updating the [sample Nginx configuration](https://rocket.chat/docs/installation/manual-installation/configuring-ssl-reverse-proxy-with-nginx-md/)
would result in a config like this:

```
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
        proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forward-Proto http;
        proxy_set_header X-Nginx-Proxy true;

        proxy_redirect off;
    }
}
```

Now restart Nginx: ```service nginx restart```

Visit https://your_hostname.com just as before the update. **Ooh, so fast!**

To confirm you're actually using both services like you'd expect, you can stop one rocketchat
service at a time and confirm that chat still works. Restart that service and stop the other.
Still work? Yep, you're using both services!
