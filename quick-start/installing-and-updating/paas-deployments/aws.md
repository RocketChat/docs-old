---
description: Deploying Rocket.Chat on Amazon Web Services
---

# AWS

This guide covers the following:

1. Hosting Rocket.Chat on an Amazon EC2 instance
2. Hosting a domain name with Amazon Route 53
3. Securing your server with a free SSL certificate from [Let's Encrypt](https://letsencrypt.org/)

## Launch an EC2 Instance

Log into AWS Console, open the **EC2 Service**, click on **Instances** in the left sidebar and click on **Launch Instance** to set up a new EC2 instance. you can now follow the steps given below:

1. In the first step search for _Ubuntu Server 18.04 LTS_" with "_64-bit (x86)_ architecture and click on **Select**.
2. Select an instance type of your choice and click **Next.**
3. Adjust the instance details as needed or keep the defaults. Proceed with **Next**.
4. Adjust the storage size and configuration as needed and click on **Next**.
5. Make sure to add a tag called **Name** and assign a value.
6. Allow **SSH, HTTP** and **HTTPS** in the security group configuration, proceed with **Review and Launch**.
7. Review your instance configuration and confirm with **Launch**.
8. Choose an existing key pair or create a new one and click on **Launch Instance**.

## Allocate an Elastic IP

Back in the [EC2 Service](https://signin.aws.amazon.com/signin?redirect\_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fec2%2Fv2%2Fhome%3Fstate%3DhashArgs%2523%26isauthcode%3Dtrue\&client\_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fec2\&forceMobileApp=0\&code\_challenge=9eFrxS4u\_-ut1PIoNw1-Cx5EmHMwRGaqLYRat\_RnBGE\&code\_challenge\_method=SHA-256) dashboard, click on **Elastic IPs** in the left sidebar:

1. Click on **Allocate New Address.**
2. Select **Amazon's pool of IPv4 addresses** and click on **Allocate.**
3. Click on the newly created IP address and select **Associate Elastic IP address.**
4. Select your instance and click **Associate.**
5.  In the details below, copy the **Public DNS**. You will need it in the DNS step.

    (It should be in a format like this: `ec2-18-197-161-168.eu-central-1.compute.amazonaws.com`)

## Configure DNS w/ AWS Route 53

Open the **Route 53** service dashboard:

* Create a new hosted zone by clicking on **Create Hosted Zone.**
* Enter your domain name and select "_Public Hosted Zone_" as type, then click on "**Create**_"_
* Select your newly created zone and click on "**Create Record Set**"
* Enter "_www_" as subdomain (if desired), select Type "_CNAME_", enter the Public DNS name from the above step to the value field and click "**Create**"

## Get an SSL Certificate from Let's Encrypt

We use Let's Encrypt to get a free & open-source SSL certificate:

1.  SSH to your instance:

    ```
     ssh -i <path_to_key_file.pem> ubuntu@<public_ip_address>
    ```

    Note: You may replace with domain name if your DNS has resolved.
2.  Install `certbot` using `apt`:

    ```
     sudo apt update
     sudo apt install certbot
    ```
3.  Obtain certificate from Let's Encrypt:

    ```
     sudo certbot certonly --standalone --email <emailaddress@email.com> -d <domain.com> -d <subdomain.domain.com>
    ```



**Note:** Second (or more) domain is optional.

Optional Step: Restrict access using security groups

If you would like to restrict traffic to your instance on AWS, you may now adjust the security groups again. Make sure you allow "_TCP/22_" from your current location for the SSH connection, as well as "_TCP/443_" from the location you wish to use to access from.

## Configure Nginx Web Server with TLS/SSL

1.  Install Nginx web server:

    ```
     sudo apt-get install nginx
    ```
2.  Backup the default config file for reference:

    ```
     cd /etc/nginx/sites-available
     sudo mv default default.reference
    ```
3.  Create a new site configuration for Rocket.Chat:

    ```
     sudo nano /etc/nginx/sites-available/default
    ```

    ```
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

    Make sure to replace `ABC.DOMAIN.COM` with your domain (it appears 4 times). Make sure to update it in the path to your key files as well:
4.  Test the Nginx configuration to make sure there are no syntax errors:

    ```
     sudo nginx -t
    ```
5.  If the syntax test went successful, restart Nginx:

    ```
     sudo systemctl restart nginx
    ```

Confirm that it is running properly by opening a web browser and going to your domain name. You will get a page stating "_502 Bad Gateway_". This is expected, since the Rocket.Chat backend is not yet running. Make sure the SSL connection is working properly by clicking the lock icon next to the address bar, make sure it's valid and issued by "_Let's Encrypt Authority X3_".

## Install Docker & Docker Compose

* Install Docker (and any dependencies)

```bash
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo apt-key fingerprint 0EBFCD88
 # confirm the fingerprint matches "9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88"
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

* Install `docker-compose`:

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

## Set up Docker Containers

* Create local directories.

```bash
 sudo mkdir -p /opt/docker/rocket.chat/data/runtime/db
 sudo mkdir -p /opt/docker/rocket.chat/data/dump
```

* Create the `docker-compose.yml` file, again make sure to replace `ABC.DOMAIN.COM` with your actual domain name:

```bash
 sudo nano /opt/docker/rocket.chat/docker-compose.yml
```

```yaml
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
     command: mongod --oplogSize 128 --replSet rs0 --storageEngine=wiredTiger
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

* Start containers:

```shell
 cd /opt/docker/rocket.chat
 sudo docker-compose up -d
```

* Wait a bit for the replica set to be initialized for MongoDB (about 30-60 seconds) and confirm Rocket.Chat is running properly:

```shell
 sudo docker-compose logs -f rocketchat
```

## Use it

Login to your site at `https://ABC.DOMAIN.COM.`

{% hint style="info" %}
**Note:** the first user to log in will be an administrator user.
{% endhint %}
