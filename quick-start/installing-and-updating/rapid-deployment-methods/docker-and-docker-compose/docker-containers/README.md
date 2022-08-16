# Docker Containers

## Introduction

This guide will walk you through the installation and configuration of a Docker-based Rocket.Chat instance, using Nginx as a reverse SSL proxy.

[Docker ](https://www.docker.com/)provides the ability to package and run an application in a loosely isolated environment called a container. This isolation and security allow you to run many containers simultaneously on a given host. [Docker containers](https://www.docker.com/resources/what-container/) are instances of [Docker Image](https://docs.docker.com/engine/reference/commandline/images/).

## What we'll cover in this guide

1. [Securing the server: Firewall basics (optional)](https://docs.rocket.chat/quick-start/installing-and-updating/rapid-deployment-methods/docker-and-docker-compose/docker-containers#1.-securing-the-server-firewall-basics-optional-recommended)
2. [Securing the server: Fail2Ban IDS (optional)](./#2.-securing-the-server-fail2ban-optional-recommended)
3. [Installing Docker and Docker-Compose](./#3.-installing-docker-and-docker-compose)
4. [Editing the hosts file](./#4.-editing-the-hosts-file)
5. [Installing Nginx SSL Reverse Proxy](./#5.-installing-nginx-and-ssl-certificate)
6. [Creating docker-compose.yml](./#6.-create-the-docker-compose.yml-file-and-local-directories)
7. [Automatic start-up, and crash recovery](./#7.-automatic-startup-and-crash-recovery)
8. [Reboot & Status check](./#8.-reboot-and-status-check)
9. [Registering & Configuring Hubot, the chat robot](./#9.-registering-and-configuring-hubot-the-chat-robot)
10. [FAQ](./#faq) [& Troubleshooting](./#troubleshooting)
11. [Known Issues](./#11.-known-issues)

## Prerequisites

This guide is written assuming that you're starting with:

* A clean machine workable Linux machine
* properly configured DNS that resolves requests to your domain name

## 1. Securing the server: Firewall basics (optional, recommended)

First, make sure [UFW](https://en.wikipedia.org/wiki/Uncomplicated\_Firewall) (Uncomplicated FireWall) is installed. It should be installed by default in Ubuntu, but if itÃÂ¢ÃÂÃÂs not, you can check if it is installed by running.

```
apt -qq list ufc
```

It will return simple information about the package if it is found. Otherwise, install the package by running

```
sudo apt-get install ufw
```

{% hint style="info" %}
**IMPORTANT**: We're going to add a firewall rule to permit your default SSH connection port on port 22/tcp.
{% endhint %}

In case you have the port changed on your device, be sure to use the corresponding port.\
Failure to do so will break your SSH connection and log you out of the server as soon as you enable the firewall!

**Set the default access rules:**

```
sudo ufw default deny incoming

sudo ufw default allow outgoing
```

**Set the service rules (SSH / HTTPS):**

```
sudo ufw allow 22/tcp

sudo ufw allow 443/tcp
```

**Enable the firewall:**

```
sudo ufw enable
```

**Check the Firewall status:**

```
sudo ufw status
```

**If you ever add or delete rules you should reload the firewall:**

```
sudo ufw reload
```

**If you ever need to turn off the firewall:**

```
sudo ufw disable
```

## 2. Securing the server: Fail2ban (optional, recommended)

Fail2ban is an intrusion prevention software framework that protects computer servers from brute-force attacks.

**Install:**

```
sudo apt-get update

sudo apt-get install fail2ban
```

Press **Y** when prompted to proceed with the install.

## 3. Installing Docker and Docker-Compose

**Install Docker**

Follow this guide [https://docs.docker.com/linux/step\_one/](https://docs.docker.com/linux/step\_one/) to get Docker installed.

**Install Docker-Compose version 1.24.0 (64 bit) via cURL**

```
sudo curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-Linux-x86_64" -o /usr/local/bin/docker-compose
```

**Set the executable permissions**

```
sudo chmod +x /usr/local/bin/docker-compose
```

{% hint style="info" %}
**Notes:** We're using version 1.24.0 for this guide. If you wish to try a newer version, you will need to edit the cURL command to reflect the alternate version number. If you get a "Permission denied" error, your `/usr/local/bin` directory probably isn't writable and you'll need to install Compose as the superuser. Run `sudo -i`, then the two commands above, then `exit`. (credit: docker compose docs)
{% endhint %}

**Confirm docker-compose is properly installed**

```
sudo docker-compose --version
```

**Notes:** For minimal distributions, or systems where `/usr/local/bin` is not part of the `$PATH` env you might need to symlink the binary into `/usr/bin` as well:

```
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

## 4. Editing the hosts file

If your hostname.domain.tld is mapped to a publicly routable IP, it needs to be set to your local address, for example, 127.0.0.1. Please note that the order in which localhost and your hostname are placed in this file is important; make sure localhost is first.

**Edit the hosts file**

```
sudo nano /etc/hosts
```

```
127.0.0.1    localhost.localdomain    localhost
127.0.0.1    chat.inumio.com          chat
```

Save and Exit. (Press **CTRL-X** to save, **Y** for yes, then **ENTER** to save as current filename.)

## 5. Installing Nginx & SSL certificate

**Install Nginx**

```
sudo apt-get install nginx
```

### 5a. Using a commercial SSL cert (recommended)

If you don't have a certificate already, you can grab one for free at [Let's Encrypt](https://letsencrypt.org).

Or, if you want to use a self-signed SSL cert instead, skip ahead to [Self-Signed SSL](./#5b-self-signed-ssl).

**Install the private key (created when you generated the CSR)**

```
sudo nano /etc/nginx/certificate.key
```

Open the private key and Copy the entire private key text-block from the file that was generated when you created the CSR. Right click on the terminal window and select paste to paste it into nano. Alternatively, if you have a tool such as FileZilla, you can use it via SSH over FTP to upload your cert and key files instead of copy or paste.

Save and Exit.

**Install the SSL certificate (note that this goes in certificate.**_**crt**_**, not .**_**key**_**)**

```
sudo nano /etc/nginx/certificate.crt
```

Open the SSL Certificate provided by the SSL vendor (will probably have a .crt or .pem extension) and copy the entire text-block. Right click on the terminal window and select paste to paste it into nano.

Save and Exit.

### 5b. Self-Signed SSL

If you acquired an SSL cert and installed it via the steps above, skip this step.

**Create and install a self-signed SSL certificate:**

```
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/certificate.key -out /etc/nginx/certificate.crt
```

**Follow the prompts.**

Tip: It is **IMPORTANT** that the **Common Name** be set properly. Enter your fully qualified domain name (FQDN) here or, if you donÃÂ¢ÃÂÃÂt have a FQDN, use your public IP address. For example, my FQDN for the chat server is `chat.inumio.com`.

Save and Exit.

### 5c. Set Key Permissions, Dhparams, Configure NGINX

**Set permissions:**

```
sudo chmod 400 /etc/nginx/certificate.key
```

**Generate Strong Diffie Helman group**

```
sudo openssl dhparam -out /etc/nginx/dhparams.pem 2048
```

**Configure Nginx:**

```
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

```
sudo service nginx configtest && sudo service nginx restart
```

**Note:** You can pinpoint problems in your nginx config using the following command:

```
sudo nginx -t
```

## 6. Create the docker-compose.yml file & local directories

#### Create docker-compose.yml file:

To create a docker-compose file, please follow the instructions [here](../).

**Create the directories:**

```
sudo mkdir -p /var/www/rocket.chat/data/runtime/db
sudo mkdir -p /var/www/rocket.chat/data/dump
```

**Create the docker-compose.yml file:**

* Edit the ROOT\_URL value to be your FQDN.
* Edit the ROCKETCHAT\_URL to be your _public_ IP address. Keep the port (3000) the same.
* Edit ROCKETCHAT\_USER, ROCKETCHAT\_PASSWORD, and BOT\_NAME.
* If your Rocket.Chat docker instance is behind a proxy, set the additional env-variable "Accounts\_UseDNSDomainCheck" to "false" (this only works, if these is a completely new deployment)

Save and Exit.

Start the services by:

```bash
docker-compose up -d
```

## 7. Automatic Startup & Crash Recovery

**Create the upstart job for MongoDB**

```
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

```
sudo reboot
```

**Reconnect via SSH, and do a systems check by viewing the docker containers:**

```
sudo docker ps -a
```

![](<../../../../../.gitbook/assets/image (677) (1) (1).png>)

As you can see, our three docker containers are up and running: Rocket.Chat, MongoDB, and Hubot. NOTE: You may see only one, or none at all if the downloads are still in progress. Be patient, and check it periodically. Eventually, it should look similar to our sample screenshot. If it does, congratulations, you did it! GREAT JOB!

Next, let's try opening the web browser and going to your new chat room. Provided that your DNS is properly configured, you should be able to simply type your chatroom URL into the browser and open it up.

**First try with HTTPS:**

```
https://chat.inumio.com
```

**If for some reason that fails, try HTTP:** **Open port 3000/tcp in the firewall, and reload to set the new policy.**

```
sudo ufw allow 3000/tcp

sudo ufw reload
```

**Try accessing in your web browser via HTTP**

```
http://chat.inumio.com:3000
```

**PROBLEM?** See [Section 10: Troubleshooting](./#10-troubleshooting--faq)

Once you've successfully reached your chat room login page, you need to register your admin account. By default, the first account to register on Rocket.Chat becomes the admin, so if your chat room is public, do this immediately in order to prevent someone else from registering and becoming the administrator.

_Great! I'm in, but the bot is nowhere to be seen!_

No worries! In order to get your bot up and running, we must register itÃÂ¢ÃÂÃÂ¦

## 9. Registering & Configuring Hubot, the chat robot

Previously, we created the docker-compose.yml file. It's this file where we defined the basic attributes for Hubot. We set the bot name, password, room to join, and scripts to run. Before the bot can join the chat room, we must manually create the bot using the configuration details we provided in docker-compose.yml.

[https://github.com/RocketChat/hubot-rocketchat#creating-a-user-on-the-server](https://github.com/RocketChat/hubot-rocketchat#creating-a-user-on-the-server)

You can now optionally login and set some of the preferences, such as bot avatar. When finished, log out of the bot account.

With the bot account created, you can force it to join by simply rebooting the server, upon which the init script should automatically launch your chat room, and the bot should join the ÃÂ¢ÃÂÃÂGeneralÃÂ¢ÃÂÃÂ room.

For basic command help, in the chat message box, type BOTNAME help (where BOTNAME is your bot's name).

## 10. Troubleshooting & FAQ

### FAQ

Q: _It works! But how do I add more functionality to the bot?_ A: You can add more scripts to the bot by adding them to the EXTERNAL\_SCRIPTS definitions: `nano /var/www/rocket.chat/docker-compose.yml`

Find out more about Hubot scripts here: [https://github.com/RocketChat/hubot-rocketchat](https://github.com/RocketChat/hubot-rocketchat) and here: [https://github.com/hubot-scripts](https://github.com/hubot-scripts). Some of the available scripts for example: hubot-help, hubot-isup, hubot-4chan, hubot-strawpoll, hubot-seen, hubot-weather, hubot-hackerman, hubot-links, hubot-greetings, hubot-tell, hubot-geo, hubot-decides, hubot-praise, hubot-hello-ninja, hubot-thank-you, hubot-cool-ascii-faces, hubot-insulter, hubot-reddit

Q: _How do I get email working?_ A: You need to configure SMTP parameters via the Administration UI (from inside rocketchat).

### TROUBLESHOOTING

**PROBLEM:** _I can't bring up my chat page in the browser using HTTPS!_

**POSSIBLE SOLUTIONS:** If you're able to resolve HTTP, but not HTTPS, you need to re-visit sections 4 & 5 of this guide. Make sure you've correctly entered the data in the hosts file, as well as in the /etc/nginx/sites-available/default file.

**Check the nginx logs for any errors or other clues**

```
sudo cat /var/log/nginx/error.log
```

**Check the Firewall policy to make sure port 443 is open**

```
sudo ufw status
```

**Check your SSL installation** [https://www.digicert.com/help/](https://www.digicert.com/help/)

**PROBLEM:** _I rebooted and waited forever for docker to download everything and start the chat room. NOTHING happened. It's like it didn't even try!_

**POSSIBLE SOLUTION:** If there are errors in the docker-compose.yml file, it will fail to bring up the rocketchat app. Improperly formatted yml will cause problems.

**Check upstart jobs for log errors**

```
cd /var/log/upstart

sudo cat rocketchat_mongo.log

sudo cat rocketchat_app.log
```

Look for any errors in the output of those last two commands, which show the log contents of the upstart jobs we created in step 7.

**Test your YML** [http://www.yamllint.com/](http://www.yamllint.com) simply copy the contents of docker-compose.yml and paste into the tool.

**Try to start it manually**

```
cd /var/www/rocket.chat

/usr/local/bin/docker-compose up
```

If docker-compose doesn't throw an error and instead launches the job, then the problem is possibly in the upstart script.

**PROBLEM:** _When I upload a file the server crashes!_

**POSSIBLE SOLUTION:** If you're running low on system resources, such as RAM, this can cause problems with not just performance, but stability. Make sure that you're not running out of memory, or have any other choke points, like not enough CPU, etc. One way to check is to issue the following command via SSH (or console) which runs TOP, a utility that will show valuable information about system resources and processes.

```
sudo top
```

With TOP running, try to replicate the problem while watching TOP for high loads, overloaded CPU, etc. While Rocket.Chat can be run on a single core with 512MB of memory, that's really not enough for stable performance. If you're seeing high values in TOP, consider upgrading your server to at least 1GB or RAM, or more.

## 11. KNOWN ISSUES

* \[FIXED] Issue #978: Avatars not saving, or crashing the server. [https://github.com/RocketChat/Rocket.Chat/issues/978](https://github.com/RocketChat/Rocket.Chat/issues/978)
* If you are saving your avatars inside the container, they will be lost after a "docker pull" update job

## See Also

You can also deploy using Docker and Docker Compose by following one of these guides:

* [Docker Compose](broken-reference/)
* [Available Images](available-images.md)
