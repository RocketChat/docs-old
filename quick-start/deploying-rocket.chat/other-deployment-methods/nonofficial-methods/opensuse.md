---
description: Install and Run Rocket.Chat on OpenSUSE Leap 42.2
---

# OpenSUSE Leap 42.2

_Note: This is a community supported installation method. You can discuss about this in the_ [_forum thread_](https://forums.rocket.chat/t/opensuse-installation-guide/657)_._

_Last updated 2017-08-26_

Node.js version: 8.9.3

Rocket.Chat version: 0.60.0

These are barebones instructions for how to set up a Rocket.Chat server on OpenSUSE Leap 42.2 using nginx as a reverse proxy. These will help you set up a system you can experiment with. **THEY ARE NOT INTENDED FOR SETUP OF A PRODUCTION SYSTEM!** They are oriented on using a VM from AWS, but should work for any Leap 42.2 system.

## Overview

You will install and configure:

1. Node.js
2. MongoDB
3. Let's Encrypt SSL certificates
4. nginx
5. Rocket.Chat and its dependencies

To do this, you will:

1. Acquire a VM to install on
2. Install all the packages you'll need
3. Start and configure MongoDB
4. Install Let's Encrypt SSL certificates
5. Configure and start nginx
6. Install and start Rocket.Chat

Things you'll need to do afterwards on your own, **especially if you want a production-worthy system**:

* Create a `systemctl` script to restart Rocket.Chat if the server is rebooted
* Configure email on the server \(so Rocket can request account validation\)
* Secure the server \(e.g. get rid of the default user on a VM, etc.\)
* Monitor the server so you can respond if it goes down
  * Rocket.Chat availability
  * MongoDB availability
  * nginx availability
* Configure MongoDB for production use
  * Use an XFS volume
  * Use persistent \(e.g. non-local\) storage if you're using a VM
  * Configure replica sets
  * Consider setting /sys/kernel/mm/transparent\_hugepage/enabled to "never" as recommended by Mongo at startup
* Set up periodic updates for the system

## Acquire a VM with OpenSUSE Leap 42.2

I like to use AWS spot instances as a very cheap way to experiment with things. I find I can usually get an m3.medium \(1 vCPU, 3.75GB RAM\) for ~$0.01/hour, or ~$7/month if run continuously. Pick the right region and you'll rarely if ever be shut down.

There's a `spot_instance.json` below that I generally use to set up an instance. I already have a few security groups to lock down all but the ports I need, an IAMS profile to allow just the privileges I want, and an SSH keypair generated; I'm not going to tackle those here, so if you want to do this, you probably should do some quick research and set those up yourself.

I also use the AWS CLI, so it's preconfigured for my favorite region, credentials, etc. If you don't have that set up, you'll want to.

When you've got those set, getting an instance is really straightforward:

```text
aws ec2 request-spot-instances --cli-input-json file://spot_instance.json
```

Note: if you get an error saying that you must subscribe to the AMI before using it, copy the URL in the error message and open it in a browser. The "subscription" costs $0.00/hour, so it's just a formality.

## Configure the Box

The default user in the Leap 42.2 image is `ec2-user`. You'll ssh into the box using that user, and immediately become root.

```text
> ssh ec2-user@IP-OR-HOSTNAME-FOR-YOUR-BOX
> sudo su -
```

### Update and Install Packages using zypper

1. Add the repo for MongoDB
2. Refresh metadata for all repos
3. Update all the packages on the box
4. Install the new packages we need

```text
zypper addrepo http://download.opensuse.org/repositories/server:database/openSUSE_Leap_42.2/server:database.repo
zypper refresh
zypper -n update
zypper -n install mongodb nodejs4 npm4 nginx GraphicsMagick gcc-c++
```

### Start and Configure MongoDB

1. Enable and start MongoDB
2. Create the admin user
3. Create the DB and user for Rocket.Chat

In a shell:

```text
systemctl enable mongodb
systemctl start mongodb
```

Now start a MongoDB shell and add the admin user:

```text
> mongo
use admin

db.createUser({
    user: "root",
    pwd: "fl!bb3rtyJ!bb3tt",
    roles: [ "root" ]
})

exit
```

Now re-open a MongoDB shell as your admin user and create the Rocket.Chat db and admin user. You'll use these later to tell Rocket how to access its DB.

Note: Don't use `:` or `@` in this user's password or you'll need to URL escape them later. It's easier to avoid those characters.

```text
> mongo --authenticationDatabase admin -u root -p

use rocketchat

db.createUser({
    user: "rocket",
    pwd: "4rgl3b4rgl3",
    roles: [ "readWrite", "dbAdmin" ]
})

exit
```

### Install Let's Encrypt SSL Certificates

This is so crazy easy. Remember when this was hard, and when it cost $20-$200 per year? Please consider using one of the donation links given afterwards as a way to support continued development of CertBot.

* [https://letsencrypt.org/donate](https://letsencrypt.org/donate)
* [https://eff.org/donate-le](https://eff.org/donate-le)

Replace `YOUR.SERVER.NAME` below with the hostname your server will be accessed from, e.g. `chat.example.com`, and replace `YOUR@EMAIL.ADDRESS` with your email address, e.g. `admin@example.com`

```text
git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt
cd /opt/letsencrypt && ./letsencrypt-auto certonly --standalone --email YOUR@EMAIL.ADDRESS -d YOUR.SERVER.NAME
```

### Configure and Start nginx

1. Set up a more modern site config management scheme
2. Set the base `nginx` config
3. Add the config needed for Rocket.Chat
4. Enable and start nginx

```text
cd /etc/nginx
mkdir sites-enabled sites-available
```

Now do two things:

1. Replace the contents of `/etc/nginx.conf` with the `nginx.conf` below.
2. Copy the contents of `rocket_chat.conf` below to `/etc/nginx/sites-available/rocket_chat.conf`

Now you can enable the Rocket.Chat config, then enable and start nginx

```text
cd /etc/nginx/sites-enabled
ln -s ../sites-available/rocket_chat.conf .

systemctl enable nginx
systemctl start nginx
```

### Install and Configure Rocket.Chat

1. Add a `rocket` user and group
2. Download the latest Rocket.Chat
3. Install all the node.js dependencies for Rocket.Chat using `npm`
4. Set the required environment variables
5. Start the Rocket.Chat server

Replace `YOUR.SERVER.NAME` below with the hostname your server will be accessed from, e.g. `chat.example.com`

```text
groupadd -g 2000 rocket
useradd -g rocket -u 2000 rocket

cd /opt
curl -L https://releases.rocket.chat/latest/download -o rocket.chat.tgz
tar zxvf rocket.chat.tgz
mv bundle Rocket.Chat
chown -R rocket:rocket /opt/Rocket.Chat

su - rocket
cd /opt/Rocket.Chat/programs/server
npm install
cd ../..

# TODO: Make a script for this for systemctl
export ROOT_URL=http://YOUR.SERVER.NAME/
export MONGO_URL=mongodb://rocket:4rgl3b4rgl3@localhost:27017/rocketchat
export PORT=3000

node main.js
```

If everything is working as planned, you'll see something like:

```text
Will load cache for users
0 records load from users
Will load cache for rocketchat_room
0 records load from rocketchat_room
Will load cache for rocketchat_subscription
0 records load from rocketchat_subscription
Will load cache for rocketchat_settings
0 records load from rocketchat_settings
Updating process.env.MAIL_URL
Will load cache for rocketchat_permissions
0 records load from rocketchat_permissions
Will load cache for rocketchat_roles
0 records load from rocketchat_roles
LocalStore: store created at
LocalStore: store created at
Setting default file store to GridFS
Updating process.env.MAIL_URL
Using GridFS for custom sounds storage
Using GridFS for custom emoji storage
ufs: temp directory created at "/tmp/ufs"
➔ System ➔ startup
➔ +--------------------------------------------------------+
➔ |                     SERVER RUNNING                     |
➔ +--------------------------------------------------------+
➔ |                                                        |
➔ |  Rocket.Chat Version: 0.60.0                           |
➔ |       NodeJS Version: 8.9.3 - x64                      |
➔ |             Platform: linux                            |
➔ |         Process Port: 3000                             |
➔ |             Site URL: http://YOUR.SERVER.NAME:3000/    |
➔ |     ReplicaSet OpLog: Disabled                         |
➔ |          Commit Hash: 988103d449                       |
➔ |        Commit Branch: HEAD                             |
➔ |                                                        |
➔ +--------------------------------------------------------+
```

... and that's Rocket.Chat all set. Direct a browser to `https://YOUR.SERVER.NAME` and register a yourself as new user. The first user you register will be made the server admin.

## Sources

These are docs and snippets I used to figure all of this out.

[https://en.opensuse.org/MongoDB](https://en.opensuse.org/MongoDB)

[https://docs.rocket.chat/installation/manual-installation/ubuntu/](https://docs.rocket.chat/installation/manual-installation/ubuntu/)

[https://docs.rocket.chat/installation/paas-deployments/aws/](https://docs.rocket.chat/installation/paas-deployments/aws/)

[https://www.digitalocean.com/community/tutorials/how-to-install-configure-and-deploy-rocket-chat-on-ubuntu-14-04](https://www.digitalocean.com/community/tutorials/how-to-install-configure-and-deploy-rocket-chat-on-ubuntu-14-04)

## Config Files

### `/etc/nginx.conf`

This config relies on you creating `/etc/nginx/sites-available` and `/etc/nginx/sites-enabled`

```text
user rocket;
worker_processes auto;
pid /run/nginx.pid;

events {
    worker_connections 768;
    # multi_accept on;
}

http {

    ##
    # Basic Settings
    ##

    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
    # server_tokens off;

    # server_names_hash_bucket_size 64;
    # server_name_in_redirect off;

    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    ##
    # SSL Settings
    ##

    ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # Dropping SSLv3, ref: POODLE
    ssl_prefer_server_ciphers on;

    ##
    # Logging Settings
    ##

    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    ##
    # Gzip Settings
    ##

    gzip on;
    gzip_disable "msie6";

    # gzip_vary on;
    # gzip_proxied any;
    # gzip_comp_level 6;
    # gzip_buffers 16 8k;
    # gzip_http_version 1.1;
    # gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    ##
    # Virtual Host Configs
    ##

    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}


#mail {
#   # See sample authentication script at:
#   # http://wiki.nginx.org/ImapAuthenticateWithApachePhpScript
#
#   # auth_http localhost/auth.php;
#   # pop3_capabilities "TOP" "USER";
#   # imap_capabilities "IMAP4rev1" "UIDPLUS";
#
#   server {
#       listen     localhost:110;
#       protocol   pop3;
#       proxy      on;
#   }
#
#   server {
#       listen     localhost:143;
#       protocol   imap;
#       proxy      on;
#   }
#}
```

### `/etc/nginx/sites-available/rocket_chat.conf`

Replace `YOUR.SERVER.NAME` below with the hostname your server will be accessed from, e.g. `chat.example.com`

```text
server {
  listen 443 ssl;
  server_name YOUR.SERVER.NAME;
  ssl_certificate /etc/letsencrypt/live/YOUR.SERVER.NAME/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/YOUR.SERVER.NAME/privkey.pem;
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
  ssl_prefer_server_ciphers on;
  ssl_ciphers 'EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH';
  root /usr/share/nginx/html;
  index index.html index.htm;
  # Make site accessible from http://localhost/
  server_name localhost;
  location / {
    proxy_pass http://localhost:3000/;
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
server {
  listen 80;
  server_name YOUR.SERVER.NAME;
  return 301 https://$host$request_uri;
}
```

### `spot_instance.json`

Replace `Subnet-Id`, `Arn`, and `SecurityGroupIds` content below with your own. The `ImageId` given is for the OpenSUSE Leap 42.2 AMI.

```text
{
  "InstanceCount": 1,
  "SpotPrice": "0.015",
  "LaunchSpecification":
    {
      "ImageId": "ami-49570529",
      "InstanceType": "m3.medium",
      "SubnetId": "subnet-########",
      "KeyName": "tinyjoy",
      "IamInstanceProfile": {
        "Arn": "arn:aws:iam::############:instance-profile/IAMS-PROFILE-NAME"
      },
      "SecurityGroupIds": ["sg-########"]
    },
  "Type": "one-time"
}
```

