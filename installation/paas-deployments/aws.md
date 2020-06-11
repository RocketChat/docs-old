---
description: Deploying Rocket.Chat on Amazon Web Services
---

# AWS

This guide covers the following:

1. Hosting Rocket.Chat on an Amazon EC2 instance
2. Hosting a domain name with Amazon Route 53
3. Securing your server with a free SSL certificate from Let's Encrypt

## Launch an EC2 instance

Log into AWS console, open the ["_EC2_" service](https://console.aws.amazon.com/ec2/), click on "_Instances_" in the left sidebar and click on "_Launch Instance_" to setup a new EC2 instance. Now follow the steps below:

1. In the first step search for "_Ubuntu Server 18.04 LTS_" with "_64-bit \(x86\)_" architecture and click on "_Select_"
2. Select an instance type of your choice and click "_Next_"
3. Adjust the instance details as needed or keep the defaults. Proceed with "_Next_"
4. Adjust the storage size and configuration as needed and click on "_Next_"
5. Make sure to add a tag called "_Name_" and assign a value
6. Allow "_SSH_", "_HTTP_" and "_HTTPS_" in the security group configuration, proceed with "_Review and Launch_"
7. Review your instance configuration and confirm with "_Launch_"
8. Choose an existing key pair or create a new one and click on "_Launch Instance_"

## Allocate an Elastic IP

Back in the ["_EC2_" service](https://console.aws.amazon.com/ec2/) dashboard, click on "_Elastic IPs_" in the left sidebar:

1. Click on "_Allocate New Address_"
2. Select "_Amazon's pool of IPv4 addresses_" and click on "_Allocate_"
3. Click on the newly created IP address and select "_Associate Elastic IP address_"
4. Select your instance and click "_Associate_"
5. In the details below, copy the "_Public DNS_". You will need it in the DNS step.

   \(It should be in a format like this: `ec2-18-197-161-168.eu-central-1.compute.amazonaws.com`\)

## Configure DNS w/ AWS Route 53

Open the "_Route 53_" service dashboard:

1. Create a new hosted zone by clicking on "_Create Hosted Zone_":
2. Enter your domain name and select "_Public Hosted Zone_" as type, then click on "_Create"_
3. Select your newly created zone and click on "_Create Record Set_"
4. Enter "_www_" as subdomain \(if desired\), select Type "_CNAME_", enter the Public DNS name from the above step to the value field and click "_Create_"

## Get an SSL certificate from Let's Encrypt

We will use Let's Encrypt to get a free & open-source SSL certificate:

1. SSH to your instance:

   ```text
    ssh -i <path_to_key_file.pem> ubuntu@<public_ip_address>
   ```

   Note: You may replace with domain name if your DNS has resolved.

2. Install `certbot` using `apt`:

   ```text
    sudo apt update
    sudo apt install certbot
   ```

3. Obtain certificate from Let's Encrypt:

   ```text
    sudo certbot certonly --standalone --email <emailaddress@email.com> -d <domain.com> -d <subdomain.domain.com>
   ```

   Note: Second \(or more\) domain is optional.

4. Optional step: restrict access using security groups

   If you would like to restrict traffic to your instance on AWS, you may now adjust the security groups again. Make sure you allow "_TCP/22_" from your current location for the SSH connection, as well as "_TCP/443_" from the location you wish to use to access from.

## Configure Nginx web server with TLS/SSL

1. Install Nginx web server:

   ```text
    sudo apt-get install nginx
   ```

2. Backup the default config file for reference:

   ```text
    cd /etc/nginx/sites-available
    sudo mv default default.reference
   ```

3. Create a new site configuration for Rocket.Chat:

   ```text
    sudo nano /etc/nginx/sites-available/default
   ```

   ```text
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
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto http;
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

   Make sure to replace `ABC.DOMAIN.COM` with your domain \(it appears 4 times\). Make sure to update it in the path to your key files as well:

4. Test the Nginx configuration to make sure there are no syntax errors:

   ```text
    sudo nginx -t
   ```

5. If the syntax test went successful, restart Nginx:

   ```text
    sudo systemctl restart nginx
   ```

Confirm that it is running properly by opening a web browser and going to your domain name. You will get a page stating "_502 Bad Gateway_". This is expected, since the Rocket.Chat backend is not yet running. Make sure the SSL connection is working properly by clicking the lock icon next to the address bar, make sure it's valid and issued by "_Let's Encrypt Authority X3_".

## Install Docker & Docker Compose

1. Install Docker \(and any dependencies\)

   ```text
    sudo apt-get update
    sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo apt-key fingerprint 0EBFCD88
    # confirm the fingerprint matches "9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88"
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
    sudo apt-get update
    sudo apt-get install docker-ce docker-ce-cli containerd.io
   ```

2. Install `docker-compose`:

   ```text
    sudo curl -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
   ```

## Set up Docker containers

1. Create local directories

   ```text
    sudo mkdir -p /opt/docker/rocket.chat/data/runtime/db
    sudo mkdir -p /opt/docker/rocket.chat/data/dump
   ```

2. Create the `docker-compose.yml` file, again make sure to replace `ABC.DOMAIN.COM` with your actual domain name:

   ```text
    sudo nano /opt/docker/rocket.chat/docker-compose.yml
   ```

   ```text
    version: '2'

    services:
      rocketchat:
        image: rocket.chat:latest
        command: >
          bash -c
            "for i in `seq 1 30`; do
              node main.js &&
              s=$$? && break || s=$$?;
              echo \"Tried $$i times. Waiting 5 secs...\";
              sleep 5;
            done; (exit $$s)"
        restart: unless-stopped
        volumes:
          - ./uploads:/app/uploads
        environment:
          - PORT=3000
          - ROOT_URL=https://<ABC.DOMAIN.COM>
          - MONGO_URL=mongodb://mongo:27017/rocketchat
          - MONGO_OPLOG_URL=mongodb://mongo:27017/local
        depends_on:
          - mongo
        ports:
          - 3000:3000

      mongo:
        image: mongo:4.0
        restart: unless-stopped
        command: mongod --smallfiles --oplogSize 128 --replSet rs0 --storageEngine=mmapv1
        volumes:
          - ./data/runtime/db:/data/db
          - ./data/dump:/dump

      # this container's job is just to run the command to initialize the replica set.
      # it will run the command and remove himself (it will not stay running)
      mongo-init-replica:
        image: mongo:4.0
        command: >
          bash -c
            "for i in `seq 1 30`; do
              mongo mongo/rocketchat --eval \"
                rs.initiate({
                  _id: 'rs0',
                  members: [ { _id: 0, host: 'localhost:27017' } ]})\" &&
              s=$$? && break || s=$$?;
              echo \"Tried $$i times. Waiting 5 secs...\";
              sleep 5;
            done; (exit $$s)"
        depends_on:
        - mongo
   ```

3. Start containers:

   ```text
    cd /opt/docker/rocket.chat
    sudo docker-compose up -d
   ```

4. Wait a bit for the replica set to be initialized for MongoDB \(about 30-60 seconds\) and confirm Rocket.Chat is running properly:

   ```text
    sudo docker-compose logs -f rocketchat
   ```

## Use it

1. Login to your site at `https://ABC.DOMAIN.COM`

   Note: the first user to login will be an administrator user.

