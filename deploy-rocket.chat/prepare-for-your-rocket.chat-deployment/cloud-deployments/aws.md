---
description: Deploying Rocket.Chat on Amazon Web Services
---

# AWS

{% hint style="info" %}
[**👉 Trouble installing or deploying Rocket.Chat?** Join our Weekly Technical Helpline to get real-time help from our team!](https://app.livestorm.co/rocket-chat/rocketchats-weekly-technical-helpline?type=detailed)
{% endhint %}

This guide covers the following:

* Hosting Rocket.Chat on an Amazon EC2 instance
* Hosting a domain name with Amazon Route 53
* Securing your server with a free SSL certificate from [Let's Encrypt](https://letsencrypt.org/)

## Launch an EC2 Instance

{% hint style="info" %}
The minimum requirement to successfully run Rocket.Chat is 2Gb 2 cores.

It is not recommended to use this method for large production. Instead, check how to deploy with [helm.md](../rapid-deployment-methods/helm.md "mention")
{% endhint %}

To create a new EC2 instance:

1. Log into your [AWS Console](https://console.aws.amazon.com), and open the **EC2 Service**
2. Click on **Instances** in the left sidebar and then click on **Launch Instances** to set up a new EC2 instance.
   * Set the instance name and select at least _Ubuntu Server 18.04 LTS_" with "_64-bit (x86)_ architecture as the OS image
   * Select an instance type of your choice according to our recommendation above&#x20;
   * Choose an existing key pair or create a new one for ssh connections
   * Adjust the instance details as needed or keep the defaults
   * Adjust the storage size and configuration as required&#x20;
   * Make sure to add a tag called **Name** and assign a value.
   * Allow **SSH, HTTP,** and **HTTPS** in the security group configuration, and proceed with **Review and Launch**.
3. Review your instance configuration and when confirmed, **Launch Instance**.

## Allocate an Elastic IP

Back in the [EC2 Service](https://signin.aws.amazon.com/signin?redirect\_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fec2%2Fv2%2Fhome%3Fstate%3DhashArgs%2523%26isauthcode%3Dtrue\&client\_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fec2\&forceMobileApp=0\&code\_challenge=9eFrxS4u\_-ut1PIoNw1-Cx5EmHMwRGaqLYRat\_RnBGE\&code\_challenge\_method=SHA-256) dashboard, click on **Elastic IPs** to get started

1. Click on **Allocate Elastic IP address.**
2. Select **Amazon's pool of IPv4 addresses** and click on **Allocate.**
3. After successfully creating, click and open up the newly created IP address and select **Associate Elastic IP address.**
4. Select your instance and click **Associate.**
5.  In the details below, copy the **Public DNS**. You will need it in the DNS step.

    (It should be in a format like this: `ec2-18-XXX-XXX-XXX.eu-central-1.compute.amazonaws.com`)

## Configure DNS w/ AWS Route 53

Open the **Route 53** service dashboard:

* Create a new hosted zone by clicking on **Create Hosted Zone.**
* Enter your domain name and select _Public Hosted Zone_ as type, then click on **Create hosted zone**
* Select your newly created zone and click on **Create Record Set**
* Enter "_www_" as subdomain (if desired), select Type _CNAME_, enter the Public DNS name from the above step to the value field, and click "**Create**"

## Get an SSL Certificate from Let's Encrypt

We use Let's Encrypt to get a free & open-source SSL certificate:

1.  SSH to your instance:

    ```bash
    ssh -i <path_to_key_file.pem> ubuntu@<public_ip_address>
    ```

    Note: You may replace it with your domain name if your DNS has resolved.
2.  Install `certbot` using `apt`:

    ```bash
    sudo apt update
    sudo apt install certbot
    ```
3.  Obtain certificate from Let's Encrypt:

    ```bash
    sudo certbot certonly --standalone --email <emailaddress@email.com> -d <domain.com> -d <subdomain.domain.com>
    ```



**Note:** Second (or more) domain is optional.

{% hint style="info" %}
Optional Step: Restrict access using security groups

If you would like to restrict traffic to your AWS instance, you may adjust the security groups again. Make sure you allow "_TCP/22_" from your current location for the SSH connection, as well as "_TCP/443_" from the location you wish to use to access from.
{% endhint %}

## Configure Nginx Web Server with TLS/SSL

1.  Install Nginx web server:

    ```bash
     sudo apt-get install nginx
    ```
2.  Backup the default config file for reference:

    ```bash
     cd /etc/nginx/sites-available
     sudo mv default default.reference
    ```
3.  Create a new site configuration for Rocket.Chat:

    ```bash
     sudo nano /etc/nginx/sites-available/default
    ```

    ```nginx
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

    ```bash
    sudo nginx -t
    ```
5.  If the syntax test went successful, restart Nginx:

    ```bash
    sudo systemctl restart nginx
    ```

Confirm that it is running properly by opening a web browser and going to your domain name. You will get a page stating "_502 Bad Gateway_". This is expected, since the Rocket.Chat backend is not yet running. Make sure the SSL connection is working properly by clicking the lock icon next to the address bar, make sure it's valid and issued by "_Let's Encrypt Authority X3_".

## Install Rocket.Chat

The process to install Rocket.Chat involves

1. Installing [Docker](https://docs.docker.com/install) and [Docker-compose](https://docs.docker.com/compose/install/) (v2 is required)
2. Fetching the Rocket.Chat compose file
3. Configuring environmental variables and installing

Follow this guide to get Rocket.Chat installed with Docker & Docker Compose.

{% content-ref url="../rapid-deployment-methods/docker-and-docker-compose/" %}
[docker-and-docker-compose](../rapid-deployment-methods/docker-and-docker-compose/)
{% endcontent-ref %}

## Use it

Log in to your site at `https://ABC.DOMAIN.COM.`

{% hint style="info" %}
**Note:** the first user to log in will be an administrator user.
{% endhint %}
