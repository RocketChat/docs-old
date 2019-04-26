# Deploying Rocket.Chat on Amazon Web Services

This guide covers the following:

1. Hosting Rocket.Chat on an Amazon EC2 instance
2. Hosting a domain name with Amazon Route 53
3. Securing your server with a free SSL certificate from Let's Encrypt

## Table of Contents

1. [Launch an EC2 Instance](#1-launch-an-ec2-instance)
2. [Allocate an Elastic IP](#2-allocate-an-elastic-ip)
3. [Configure DNS with AWS Route 53](#3-configure-dns-w-aws-route-53)
4. [Get an SSL Certificate from Let's Encrypt](#4-get-an-ssl-certificate-from-lets-encrypt)
5. [Configure Nginx with TLS/SSL](#5-configure-nginx-web-server-with-tlsssl)
6. [Install Docker & Docker Compose](#6-install-docker--docker-compose)
7. [Set up Docker Containers](#7-set-up-docker-containers)
8. [Automatic start with Upstart](#8-automatic-start--restarting-with-upstart)
9. [Reboot & Test](#9-reboot--test)
10. [Use it!](#10-use-it)

### 1. Launch an EC2 instance

#### In AWS Services, go to **EC2**, **Instances**, and **Launch Instance**

1. Choose an AMI
    - Select **Ubuntu Server 14.04 LTS** AMI
2. Choose an Instance Type
    - Select Type: **t2.micro** and click **Next**
3. Configure Instance Details
    - Leave as defaults or change if needed and click **Next**
4. Add Storage
    - Adjust the size, or add a second encrypted volume if needed and click **Next**
5. Tag Instance
    - Add a Value to the **Name** Key and click **Next**
6. Configure Security group
    - Create a new Security group if you would like to restrict traffic to a certain IP address range. **Note: If you will be using Let's Encrypt in Step 4 to get an SSL certificate, you will need to allow traffic to the server on port 80 until your certificate is created. After this, you may remove that security group and restrict access to a specific IP range.**
7. Review Instance Launch
    - Click **Launch**
8. Key Pairs
    - Choose an existing key pair or create a new one and **Launch Instance**

### 2. Allocate an Elastic IP

#### In AWS Services, go to **EC2** and **Elastic IPs**

1. Select **Allocate New Address**
2. Search for your instance, and click **Associate**
3. In the details below, copy the **Public DNS** value. You will need it in the DNS step. (It should be in this format: ec2-11-222-33-44.us-west-2.compute.amazonaws.com)

### 3. Configure DNS w/ AWS Route 53

#### In AWS Services, go to **Route 53**

- **Create Hosted Zone**
- Enter Domain Name and select Type: **Public Hosted Zone**, then **Create**
- Select your new Hosted Zone and **Create Record Set**
- Enter the subdomain (if desired), select Type **CNAME**, enter the Public DNS name from the above step to the value field and click **Create**

### 4. Get an SSL certificate from Let's Encrypt

#### We will use **Let's Encrypt** to get a free & open-source SSL certificate

- SSH to your instance:
    `ssh -i <path_to_key_file.pem> ubuntu@<public_ip_address>`
    Note: You may replace <public_ip_address> with domain name if your DNS has resolved.
- Clone the **letsencrypt** repository from github. (If it is available via a package manager, you may use that).
     `sudo git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt`
    This will copy the **letsencypt** repository to `/opt/letsencrypt`
- Confirm no applications are listening to port 80:
    `netstat -na | grep ':80.*LISTEN'`
    If any processes are returned, kill them.
- Get Certificate from Let's Encrypt
    Change to Let's Encrypt repository location
    `cd /opt/letsencrypt`
    Run the Standalone plugin. (This will open a web server listening on port 80 to validate the server).

```
./letsencrypt-auto certonly --standalone --email <emailaddress@email.com> -d <domain.com> -d <subdomain.domain.com>
```

_Note: Second (or more) domain is optional._

- If you would like to restrict traffic to your instance on AWS, you may now restrict the security groups. Make sure you allow **TCP/22** from your current location for the SSH connection, as well as **TCP/443** from the location you wish to use to access from.
- Check for certificates and keys
    The following files will be created in `/etc/letsencrypt/archive` with symbolic links placed in `/etc/letsencrypt/live/<domain.com>`

    - **cert.pem** - domain certificate
    - **chain.pem** - Let's Encrypt chain certificate
    - **fullchain.pem** - both the above certs (This will be your **certificate file**)
    - **privkey.pem** - certificate's private key (This will be your **certificate key file**).
  Confirm by listing the following directory
  `sudo ls /etc/letsencrypt/live/<domain.com>`

### 5. Configure Nginx web server with TLS/SSL

1. Install Nginx web server.
    `sudo apt-get install nginx`
2. Edit the Nginx configuration file.
    - Backup the default config file for reference:
    `cd /etc/nginx/sites-available`
    `sudo mv default default.reference`
    - Create a new file with the following contents. Replace `ABC.DOMAIN.COM` with your domain (it appears 4 times below). Make sure to update it in the path to your key files as well.

   `sudo nano /etc/nginx/sites-available/default`

```bash
server {
listen 443 ssl;
server_name <ABC.DOMAIN.COM>;
ssl_certificate /etc/letsencrypt/live/<ABC.DOMAIN.COM>/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/<ABC.DOMAIN.COM>/privkey.pem;
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
    proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forward-Proto http;
    proxy_set_header X-Nginx-Proxy true;
    proxy_redirect off;
}
}
server {
listen 80;
server_name <ABC.DOMAIN.COM>;
return 301 https://$host$request_uri;
}
```

```
- Explanation: remove the listen to port 80 by default and replace with port 443 ssl as well as giving the path to the certificate. Restrict to certain SSL protocols and ciphers (you may add more if you like). In the location section, use Nginx as a proxy to forward to port 3000 (where Rocket.Chat is set up. Create a second server block listening on port 80 that will redirect to https."
- Write & exit
- Stop Nginx:
`sudo service nginx stop`
- Test starting Nginx to make sure there are no syntax errors in your configuration file. If there are errors in your file, it will give you a clue as to the issue.
`sudo nginx -t`
- If the syntax test is successful, Start Nginx:
`sudo service nginx start`
- Confirm that it is running properly by opening a web browser and going to your domain name. You will get a page stating **502 Bad Gateway** This is expected. Look above, next to the domain name, you should see a lock icon. If you click this, you should be able to see the certificates, where your browser will verify that Let's Encrypt Authority X1 issued this website's certificate, as well as a report of which cipher is being used.
- Note: The certificate will expire in 90 days
- ** TODO: Add script for auto-renewal of certificate.
```

### 6. Install Docker & Docker Compose

1. SSH to your instance
    `ssh -i <path_to_key_file.pem> ubuntu@<public_ip_address>`
    Note: You may replace <public_ip_address> with domain name if your DNS has resolved.
2. Install Docker (and any dependencies)
    `sudo wget -qO- https://get.docker.com/ | sh`
3. Add ubuntu user to docker group to use Docker as a non-root user.
    `sudo usermod -aG docker ubuntu`
4. Install Docker Compose:
    `sudo -i`
    `curl -L https://github.com/docker/compose/releases/download/1.4.2/docker-compose-Linux-x86_64 > /usr/local/bin/docker-compose`
    `chmod +x /usr/local/bin/docker-compose`
    `exit`
5. Logout, and log back in again.
    `exit`
6. SSH to your instance again following the directions above

### 7. Set up Docker Containers

1. Create local directories
    `sudo mkdir -p /var/www/rocket.chat/data/runtime/db`
    `sudo mkdir -p /var/www/rocket.chat/data/dump`
2. Create docker-compose.yml, **replacing the ROOT_URL of ABC.DOMAIN.COM with your site**
    `sudo nano /var/www/rocket.chat/docker-compose.yml`

```
db:
    image: mongo:3.0
    volumes:
    - ./data/runtime/db:/data/db
    - ./data/dump:/dump
    command: mongod --smallfiles

rocketchat:
    image: rocketchat/rocket.chat:latest
    environment:
    - MONGO_URL=mongodb://db:27017/rocketchat
    - ROOT_URL=https://<ABC.DOMAIN.COM>
    links:
    - db:db
    ports:
    - 3000:3000
```

- Write & Exit

### 8. Automatic start & restarting with Upstart

- Create upstart job for MongoDB

`sudo nano /etc/init/rocketchat_mongo.conf`

```bash
description "MongoDB service manager for Rocket.Chat"

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
    exec /usr/local/bin/docker-compose up db
end script
```

- Save and Exit.
- Create the upstart job for Rocket.Chat

`sudo nano /etc/init/rocketchat_app.conf`

```
description "Rocket.Chat service manager"

# Start Rocket.Chat only after mongo job is running
start on (started rocketchat_mongo)
stop on runlevel [!2345]

# Automatically Respawn with finite limits
respawn
respawn limit 99 5

# Path to our app
chdir /var/www/rocket.chat

script
    # Bring up Rocket.Chat app
    exec /usr/local/bin/docker-compose up rocketchat
end script
```

### 9. Reboot & Test

1. Restart
    `sudo reboot`
2. Wait a minute or so and login with SSH again
    `ssh -i <path_to_key_file.pem> ubuntu@<public_ip_address>`
3. Check status of docker
    sudo docker ps -a`
    - When it's up and running, you should see 2 images, one for Rocket.Chat and one for mongo.
    - If you don't see the containers yet, don't panic. It may take a few minutes to download and setup the containers. If you still don't see the images listed with the above `docker` command, check the logs of your upstart jobs.
  `sudo cat /var/log/upstart/rocketchat_mongo.log`
  `sudo cat /var/log/upstart/rocketchat_app.log`
    - While the services are starting and downloading, the end of the logs (particularly rocketchat_app.log) will likely show the status of Download/Extract/Pull. If there are other errors, you will likely see this information in the log.

### 10. Use it

1. Login to your site at `https://ABC.DOMAIN.COM`
    - Note: the first user to login will be an administrator
2. You can then use the native apps to connect to your Rocket.Chat server.
