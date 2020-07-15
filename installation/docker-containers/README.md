---
description: Docker-Ubuntu 16.04 LTS (64 bit) VPS with Nginx SSL and Hubot
---

# Docker Containers

## Introduction

This guide will walk you through the installation and configuration of a Docker-based Rocket.Chat instance on Ubuntu 16.04 LTS \(64 bit\) VPS, using Nginx as a reverse SSL proxy, Hubot chatbot, and necessary scripts for an automatic restart and crash recovery.

For people new to docker here's a quick primer: Docker is a program to allow other programs and their dependencies to be run in a type of virtual container. Using this deployment guide, you do not need to download any of the rocket chat program files manually whatsoever. Docker will get everything that is needed for Rocket.Chat to run. If you follow this guide closely, it provides everything from start to finish needed to install, create, and run your own Rocket.Chat web instance with Nginx handling SSL termination, and a Hubot chatbot keeping your general chat channel warm on those cold winter mornings.

This guide is designed for everyone, however, it is intentionally detailed to help new users who may need a little extra guidance. If you're experienced with things like docker, Nginx, etc. you may prefer one of the other deployment guides found elsewhere on this wiki.

## What we'll cover in this guide

1. [Securing the server: Firewall basics \(optional\)](https://github.com/RocketChat/docs/tree/0492569ecfbb133bf76abc8166af5d5c15166ec9/installation/docker-containers/index.html#1-securing-the-server-firewall-basics-optional-recommended)
2. [Securing the server: Fail2Ban IDS \(optional\)](https://github.com/RocketChat/docs/tree/0492569ecfbb133bf76abc8166af5d5c15166ec9/installation/docker-containers/index.html#2-securing-the-server-fail2ban-optional-recommended)
3. [Installing Docker and Docker-Compose](https://github.com/RocketChat/docs/tree/0492569ecfbb133bf76abc8166af5d5c15166ec9/installation/docker-containers/index.html#3-installing-docker-and-docker-compose)
4. [Editing the hosts file](https://github.com/RocketChat/docs/tree/0492569ecfbb133bf76abc8166af5d5c15166ec9/installation/docker-containers/index.html#4-editing-the-hosts-file)
5. [Installing Nginx SSL Reverse Proxy](https://github.com/RocketChat/docs/tree/0492569ecfbb133bf76abc8166af5d5c15166ec9/installation/docker-containers/index.html#5-installing-nginx--ssl-certificate)
6. [Creating docker-compose.yml](https://github.com/RocketChat/docs/tree/0492569ecfbb133bf76abc8166af5d5c15166ec9/installation/docker-containers/index.html#6-create-the-docker-composeyml-file--local-directories)
7. [Automatic start-up, and crash recovery](https://github.com/RocketChat/docs/tree/0492569ecfbb133bf76abc8166af5d5c15166ec9/installation/docker-containers/index.html#7-automatic-startup--crash-recovery)
8. [Reboot & Status check](https://github.com/RocketChat/docs/tree/0492569ecfbb133bf76abc8166af5d5c15166ec9/installation/docker-containers/index.html#8-reboot-and-status-check)
9. [Registering & Configuring Hubot, the chat robot](https://github.com/RocketChat/docs/tree/0492569ecfbb133bf76abc8166af5d5c15166ec9/installation/docker-containers/index.html#9-registering--configuring-hubot-the-chat-robot)
10. [FAQ & Troubleshooting](https://github.com/RocketChat/docs/tree/0492569ecfbb133bf76abc8166af5d5c15166ec9/installation/docker-containers/index.html#10-troubleshooting--faq)
11. [TODO](https://github.com/RocketChat/docs/tree/0492569ecfbb133bf76abc8166af5d5c15166ec9/installation/docker-containers/index.html#11-todo)
12. [Known Issues](https://github.com/RocketChat/docs/tree/0492569ecfbb133bf76abc8166af5d5c15166ec9/installation/docker-containers/index.html#12-known-issues)

## Prerequisites

This guide is written assuming that you're starting with:

* a clean new installation of Ubuntu 16.04 LTS \(64 bit\)
* properly configured DNS that resolves requests to your domain name

## 1. Securing the server: Firewall basics \(optional, recommended\)

First, make sure UFW \(Uncomplicated Fire Wall\) is installed. It should be installed by default in Ubuntu, but if it’s not, you can install the package using apt-get. **IMPORTANT:** We're going to add a firewall rule to permit your SSH connection on port 22/tcp. That is the default SSH port. If you have changed it to something else, you must modify the rule below to reflect your required port number. Failure to do so will break your SSH connection and lock you out of the server as soon as you enable the firewall!

**Confirm UFW is installed:**

```text
sudo apt-get install ufw
```

_Set the default access rules:\*_

```text
sudo ufw default deny incoming

sudo ufw default allow outgoing
```

**Set the service rules \(SSH / HTTPS\):**

```text
sudo ufw allow 22/tcp

sudo ufw allow 443/tcp
```

**Enable the firewall:**

```text
sudo ufw enable
```

**Check the Firewall status:**

```text
sudo ufw status
```

**If you ever add or delete rules you should reload the firewall:**

```text
sudo ufw reload
```

**If you ever need to turn off the firewall:**

```text
sudo ufw disable
```

## 2. Securing the server: Fail2ban \(optional, recommended\)

Fail2ban is an intrusion prevention software framework which protects computer servers from brute-force attacks.

**Install:**

```text
sudo apt-get update

sudo apt-get install fail2ban
```

Press **Y** when prompted to proceed with the install.

## 3. Installing Docker and Docker-Compose

**Install Docker** [https://docs.docker.com/linux/step\_one/](https://docs.docker.com/linux/step_one/)

**Install Docker-Compose version 1.24.0 \(64 bit\) via cURL**

```text
sudo curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-Linux-x86_64" -o /usr/local/bin/docker-compose
```

**Set the executable permissions:**

```text
sudo chmod +x /usr/local/bin/docker-compose
```

**Notes:** We're using version 1.24.0 for this guide. If you wish to try a newer version, you will need to edit the cURL command to reflect the alternate version number. If you get a "Permission denied" error, your `/usr/local/bin` directory probably isn't writable and you'll need to install Compose as the superuser. Run `sudo -i`, then the two commands above, then `exit`. \(credit: docker compose docs\)

**Confirm docker-compose is properly installed**

```text
sudo docker-compose --version
```

## 4. Editing the hosts file

If your hostname.domain.tld is mapped to a publicly routable IP, it needs to be set to your local address, for example, 127.0.0.1. Please note that the order in which localhost and your hostname are placed in this file is important; make sure localhost is first.

**Edit the hosts file:**

```text
sudo nano /etc/hosts
```

```text
127.0.0.1    localhost.localdomain    localhost
127.0.0.1    chat.inumio.com          chat
```

Save and Exit. \(Press **CTRL-X** to save, **Y** for yes, then **ENTER** to save as current filename.\)

## 5. Installing Nginx & SSL certificate

**Install Nginx**

```text
sudo apt-get install nginx
```

### 5a. Using a commercial SSL cert \(recommended\)

If you don't have a certificate already, you can grab one for free at [Let's Encrypt](https://letsencrypt.org/).

Or, if you want to use a self-signed SSL cert instead, skip ahead to [Self-Signed SSL](./#5b-self-signed-ssl).

**Install the private key \(created when you generated the CSR\):**

```text
sudo nano /etc/nginx/certificate.key
```

Open the private key and Copy the entire private key text-block from the file that was generated when you created the CSR. Right click on the terminal window and select paste to paste it into nano. Alternatively, if you have a tool such as filezilla, you can use it via SSH over FTP to upload your cert and key files instead of copy / paste.

Save and Exit.

**Install the SSL certificate \(note that this goes in certificate.**_**crt**_**, not .**_**key**_**\):**

```text
sudo nano /etc/nginx/certificate.crt
```

Open the SSL Certificate provided by the SSL vendor \(will probably have a .crt or .pem extension\) and copy the entire text-block. Right click on the terminal window and select paste to paste it into nano.

Save and Exit.

### 5b. Self-Signed SSL

If you acquired an SSL cert and installed it via the steps above, skip this step.

**Create and install a self-signed SSL certificate:**

```text
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/certificate.key -out /etc/nginx/certificate.crt
```

**Follow the prompts.**

Tip: It is **IMPORTANT** that the **Common Name** be set properly. Enter your fully qualified domain name \(FQDN\) here or, if you don’t have a FQDN, use your public IP address. For example, my FQDN for the chat server is `chat.inumio.com`.

Save and Exit.

### 5c. Set Key Permissions, Dhparams, Configure NGINX

**Set permissions:**

```text
sudo chmod 400 /etc/nginx/certificate.key
```

**Generate Strong Diffie Helman group**

```text
sudo openssl dhparam -out /etc/nginx/dhparams.pem 2048
```

**Configure Nginx:**

```text
sudo nano /etc/nginx/sites-available/default
```

Delete the example in this file, and paste in the following:

```bash
# HTTPS Server
    server {
        listen 443 ssl;
        server_name chat.inumio.com;

        error_log /var/log/nginx/rocketchat_error.log;

        ssl_certificate /etc/nginx/certificate.crt;
        ssl_certificate_key /etc/nginx/certificate.key;
        ssl_dhparam /etc/nginx/dhparams.pem;
        ssl_protocols TLSv1.2;
        ssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:AES:CAMELLIA:DES-CBC3-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!aECDH:!EDH-DSS-DES-CBC3-SHA:!EDH-RSA-DES-CBC3-SHA:!KRB5-DES-CBC3-SHA';
        ssl_prefer_server_ciphers on;
        ssl_session_cache shared:SSL:20m;
        ssl_session_timeout 180m;

        location / {
            proxy_pass http://chat.inumio.com:3000/;
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

**Edit the config** Change the server name and proxy\_pass to reflect your own details.

Save and Exit.

**Test the config & Restart nginx:**

```text
sudo service nginx configtest && sudo service nginx restart
```

**TIP:** You can pinpoint problems in your nginx config using the following command

```text
sudo nginx -t
```

## 6. Create the docker-compose.yml file & local directories

**Create the directories:**

```text
sudo mkdir -p /var/www/rocket.chat/data/runtime/db
sudo mkdir -p /var/www/rocket.chat/data/dump
```

**Create the docker-compose.yml file:**

* Edit the ROOT\_URL value to be your FQDN.
* Edit the ROCKETCHAT\_URL to be your _public_ IP address. Keep the port \(3000\) the same.
* Edit ROCKETCHAT\_USER, ROCKETCHAT\_PASSWORD, and BOT\_NAME.
* If your Rocket.Chat docker instance is behind a proxy, set the additional env-variable "Accounts\_UseDNSDomainCheck" to "false" \(this only works, if these is a completely new deployment\)

Save and Exit.

Start the services by:

```bash
docker-compose up -d
```

## 7. Automatic Startup & Crash Recovery

**Create the upstart job for MongoDB**

```text
sudo nano /etc/init/rocketchat_mongo.conf
```

```bash
description "MongoDB service manager for rocketchat"

# Start MongoDB after docker is running
start on (started docker)
stop on runlevel [!2345]

# Automatically Respawn with finite limits
respawn
respawn limit 99 5

# Path to our app
chdir /var/www/rocket.chat

script
    # Showtime
    exec /usr/local/bin/docker-compose up mongo
end script
```

Save and Exit.

**Create the upstart job for Rocket.Chat**

```bash
sudo nano /etc/init/rocketchat_app.conf
```

```bash
description "Rocketchat service manager"

# Start Rocketchat only after mongo job is running
start on (started rocketchat_mongo)
stop on runlevel [!2345]

# Automatically Respawn with finite limits
respawn
respawn limit 99 5

# Path to our app
chdir /var/www/rocket.chat

script
    # Bring up rocketchat app and hubot
    exec /usr/local/bin/docker-compose up rocketchat hubot
end script
```

Save and Exit.

## 8. Reboot and Status check

We're ready to start the show! With luck, you should be able to reboot, and the chat system will come online by itself. The first time the system runs, it will have to download a bunch of docker image files. You won't see this occurring when you log back in. It's important to allow the downloads to complete without interruption.

After the downloads are extracted, the total combined installation is around 800 MB, so this initial downloading may take it awhile. On a commercial server with a fast connection, this will typically take a few minutes.

**Restart the server:**

```text
sudo reboot
```

**Reconnect via SSH, and do a systems check by viewing the docker containers:**

```text
sudo docker ps -a
```

```text
[![docker ps -a](https://www.imageforge.us/images/c90bd55a7b357c20b18815a5560f43f3.png)](https://www.imageforge.us/image/60kNT)
```

As you can see, our three docker containers are up and running: Rocket.Chat, MongoDB, and Hubot. NOTE: You may see only one, or none at all if the downloads are still in progress. Be patient, and check it periodically. Eventually, it should look similar to our sample screenshot. If it does, congratulations, you did it! GREAT JOB!

Next, let's try opening the web browser and going to your new chat room. Provided that your DNS is properly configured, you should be able to simply type your chatroom URL into the browser and open it up.

**First try with HTTPS:**

```text
https://chat.inumio.com
```

**If for some reason that fails, try HTTP:** **Open port 3000/tcp in the firewall, and reload to set the new policy**

```text
sudo ufw allow 3000/tcp

sudo ufw reload
```

**Try accessing in your web browser via HTTP**

```text
http://chat.inumio.com:3000
```

**PROBLEM?** See [Section 10: Troubleshooting](./#10-troubleshooting--faq)

Once you've successfully reached your chat room login page, you need to register your admin account. By default, the first account to register on Rocket.Chat becomes the admin, so if your chat room is public, do this immediately in order to prevent someone else from registering and becoming the administrator.

_Great! I'm in, but the bot is nowhere to be seen!_

No worries! In order to get your bot up and running, we must register it…

## 9. Registering & Configuring Hubot, the chat robot

Previously, we created the docker-compose.yml file. It's this file where we defined the basic attributes for Hubot. We set the bot name, password, room to join, and scripts to run. Before the bot can join the chat room, we must manually create the bot using the configuration details we provided in docker-compose.yml.

[https://github.com/RocketChat/hubot-rocketchat\#creating-a-user-on-the-server](https://github.com/RocketChat/hubot-rocketchat#creating-a-user-on-the-server)

You can now optionally login and set some of the preferences, such as bot avatar. When finished, log out of the bot account.

With the bot account created, you can force it to join by simply rebooting the server, upon which the init script should automatically launch your chat room, and the bot should join the “General” room.

For basic command help, in the chat message box, type BOTNAME help \(where BOTNAME is your bot's name\).

## 10. Troubleshooting & FAQ

### FAQ

Q: _It works! But how do I add more functionality to the bot?_ A: You can add more scripts to the bot by adding them to the EXTERNAL\_SCRIPTS definitions: `nano /var/www/rocket.chat/docker-compose.yml`

Find out more about Hubot scripts here: [https://github.com/RocketChat/hubot-rocketchat](https://github.com/RocketChat/hubot-rocketchat) and here: [https://github.com/hubot-scripts](https://github.com/hubot-scripts). Some of the available scripts for example: hubot-help, hubot-isup, hubot-4chan, hubot-strawpoll, hubot-seen, hubot-weather, hubot-hackerman, hubot-links, hubot-greetings, hubot-tell, hubot-geo, hubot-decides, hubot-praise, hubot-hello-ninja, hubot-thank-you, hubot-cool-ascii-faces, hubot-insulter, hubot-reddit

Q: _How do I get email working?_ A: You need to configure SMTP parameters via the Administration UI \(from inside rocketchat\).

### TROUBLESHOOTING

**PROBLEM:** _I can't bring up my chat page in the browser using HTTPS!_

**POSSIBLE SOLUTIONS:** If you're able to resolve HTTP, but not HTTPS, you need to re-visit sections 4 & 5 of this guide. Make sure you've correctly entered the data in the hosts file, as well as in the /etc/nginx/sites-available/default file.

**Check the nginx logs for any errors or other clues**

```text
sudo cat /var/log/nginx/error.log
```

**Check the Firewall policy to make sure port 443 is open**

```text
sudo ufw status
```

**Check your SSL installation** [https://www.digicert.com/help/](https://www.digicert.com/help/)

**PROBLEM:** _I rebooted and waited forever for docker to download everything and start the chat room. NOTHING happened. It's like it didn't even try!_

**POSSIBLE SOLUTION:** If there are errors in the docker-compose.yml file, it will fail to bring up the rocketchat app. Improperly formatted yml will cause problems.

**Check upstart jobs for log errors**

```text
cd /var/log/upstart

sudo cat rocketchat_mongo.log

sudo cat rocketchat_app.log
```

Look for any errors in the output of those last two commands, which show the log contents of the upstart jobs we created in step 7.

**Test your YML** [http://www.yamllint.com/](http://www.yamllint.com/) simply copy the contents of docker-compose.yml and paste into the tool.

**Try to start it manually**

```text
cd /var/www/rocket.chat

/usr/local/bin/docker-compose up
```

If docker-compose doesn't throw an error and instead launches the job, then the problem is possibly in the upstart script.

**PROBLEM:** _When I upload a file the server crashes!_

**POSSIBLE SOLUTION:** If you're running low on system resources, such as RAM, this can cause problems with not just performance, but stability. Make sure that you're not running out of memory, or have any other choke points, like not enough CPU, etc. One way to check is to issue the following command via SSH \(or console\) which runs TOP, a utility that will show valuable information about system resources and processes.

```text
sudo top
```

With TOP running, try to replicate the problem while watching TOP for high loads, overloaded CPU, etc. While Rocket.Chat can be run on a single core with 512MB of memory, that's really not enough for stable performance. If you're seeing high values in TOP, consider upgrading your server to at least 1GB or RAM, or more.

## 11. TODO

* Add section for updating & backing up

## 12. KNOWN ISSUES

* \[FIXED\] Issue \#978: Avatars not saving, or crashing the server. [https://github.com/RocketChat/Rocket.Chat/issues/978](https://github.com/RocketChat/Rocket.Chat/issues/978)
* If you are saving your avatars inside the container, they will be lost after a "docker pull" update job

## See Also

You can also deploy using Docker and Docker Compose by following one of these guides:

* [Docker Compose](docker-compose.md)
* [Available Images](available-images.md)

