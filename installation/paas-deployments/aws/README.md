# Deploying Rocket.Chat on Amazon Web Services

This guide covers the following:

1. Hosting Rocket.Chat on an Amazon EC2 instance
2. Hosting a domain name with Amazon Route 53
3. Securing your server with a free SSL certificate from Let's Encrypt

## Launch an EC2 instance

### In AWS Services, go to **EC2**, **Instances**, and **Launch Instance**

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

## Allocate an Elastic IP

### In AWS Services, go to **EC2** and **Elastic IPs**

1. Select **Allocate New Address**
2. Search for your instance, and click **Associate**
3. In the details below, copy the **Public DNS** value. You will need it in the DNS step. (It should be in this format: ec2-11-222-33-44.us-west-2.compute.amazonaws.com)

## Configure DNS w/ AWS Route 53

### In AWS Services, go to **Route 53**

- **Create Hosted Zone**
- Enter Domain Name and select Type: **Public Hosted Zone**, then **Create**
- Select your new Hosted Zone and **Create Record Set**
- Enter the subdomain (if desired), select Type **CNAME**, enter the Public DNS name from the above step to the value field and click **Create**

## Get an SSL certificate from Let's Encrypt

### We will use **Let's Encrypt** to get a free & open-source SSL certificate

- SSH to your instance:

    ```shell
    ssh -i <path_to_key_file.pem> ubuntu@<public_ip_address>
    ```

    Note: You may replace <public_ip_address> with domain name if your DNS has resolved.
- Clone the **letsencrypt** repository from github. (If it is available via a package manager, you may use that).

    ```shell
    sudo git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt
    ```

    This will copy the **letsencypt** repository to `/opt/letsencrypt`
- Confirm no applications are listening to port 80:

    ```shell
    netstat -na | grep ':80.*LISTEN'
    ```

    If any processes are returned, kill them.
- Get Certificate from Let's Encrypt
    Change to Let's Encrypt repository location

    ```shell
    cd /opt/letsencrypt
    ```

    Run the Standalone plugin. (This will open a web server listening on port 80 to validate the server).

    ```shell
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
- Confirm by listing the following directory:

    ```shell
    sudo ls /etc/letsencrypt/live/<domain.com>
    ```

## Configure Nginx web server with TLS/SSL

1. Install Nginx web server.

    ```shell
    sudo apt-get install nginx
    ```

2. Backup the default config file for reference:

    ```shell
    cd /etc/nginx/sites-available
    sudo mv default default.reference
    ```

3. Create a new site configuration for Rocket.Chat:

    ```shell
    sudo nano /etc/nginx/sites-available/default
    ```

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

    Make sure to replace `ABC.DOMAIN.COM` with your domain (it appears 4 times below). Make sure to update it in the path to your key files as well:

    - Explanation: remove the listen to port 80 by default and replace with port 443 ssl as well as giving the path to the certificate. Restrict to certain SSL protocols and ciphers (you may add more if you like). In the location section, use Nginx as a proxy to forward to port 3000 (where Rocket.Chat is set up. Create a second server block listening on port 80 that will redirect to https."
    - Write & exit
    - Stop Nginx:

        ```shell
        sudo service nginx stop
        ```

    - Test starting Nginx to make sure there are no syntax errors in your configuration file. If there are errors in your file, it will give you a clue as to the issue.

        ```shell
        sudo nginx -t
        ```

    - If the syntax test is successful, Start Nginx:

        ```shell
        sudo service nginx start
        ```

    - Confirm that it is running properly by opening a web browser and going to your domain name. You will get a page stating **502 Bad Gateway** This is expected. Look above, next to the domain name, you should see a lock icon. If you click this, you should be able to see the certificates, where your browser will verify that Let's Encrypt Authority X1 issued this website's certificate, as well as a report of which cipher is being used.
    - Note: The certificate will expire in 90 days
    - ** TODO: Add script for auto-renewal of certificate.

## Install Docker & Docker Compose

1. SSH to your instance

    ```shell
    ssh -i <path_to_key_file.pem> ubuntu@<public_ip_address>
    ```

    Note: You may replace <public_ip_address> with domain name if your DNS has resolved.
2. Install Docker (and any dependencies)

    ```shell
    sudo wget -qO- https://get.docker.com/ | sh
    ```

3. Add ubuntu user to docker group to use Docker as a non-root user.

    ```shell
    sudo usermod -aG docker ubuntu
    ```

4. Install Docker Compose:

    ```shell
    sudo -i
    curl -L "https://github.com/docker/compose/releases/download/1.25.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
    exit
    ```

5. Logout, and log back in again.

    ```shell
    exit
    ```

6. SSH to your instance again following the directions above

## Set up Docker containers

1. Create local directories

    ```shell
    sudo mkdir -p /var/www/rocket.chat/data/runtime/db
    sudo mkdir -p /var/www/rocket.chat/data/dump
    ```

2. Create docker-compose.yml, **replacing the ROOT_URL of ABC.DOMAIN.COM with your site**

    ```shell
    sudo nano /var/www/rocket.chat/docker-compose.yml
    ```

    ```
    version: '2'

    services:
    rocketchat:
        image: rocket.chat:latest
        restart: unless-stopped
        volumes:
        - ./uploads:/app/uploads
        environment:
        - PORT=3000
        - ROOT_URL=https://<ABC.DOMAIN.COM>
        - MONGO_URL=mongodb://mongo:27017/rocketchat
        - MONGO_OPLOG_URL=mongodb://mongo:27017/local
        - Accounts_UseDNSDomainCheck=True
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

    - Write & Exit
3. Start containers:

    ```shell
    cd /var/www/rocket.chat
    docker-compose up -d
    ```

## Use it

1. Login to your site at `https://ABC.DOMAIN.COM`
    - Note: the first user to login will be an administrator
2. You can then use the native apps to connect to your Rocket.Chat server.
