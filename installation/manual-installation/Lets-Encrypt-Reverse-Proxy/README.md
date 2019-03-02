# Configuring SSL Reverse Proxy with Let’s Encrypt

Rocket.Chat is a middle tier application server, by itself it does not handle SSL.   However, Rocket.Chat works well with several industrial grade, battle-tested reverse proxy servers (see nginx below, for example) that you can configure to handle SSL.

**Note:** You must use the outside HTTPS address for the value at ```ROOT_URL``` in [[Section 3|Deploy-Rocket.Chat-without-docker#3-download-rocketchat]] above.  This includes the `https://` and leave off the port number.  So instead of ```ROOT_URL=http://localhost:3000``` use something like ```https://your_hostname.com```

**Note:** Let’s Encrypt does require your Rocket.Chat server to be fully accessible to the internet for your SSL certificate to be issued.

## Running behind a nginx SSL Reverse Proxy (CentOS)
**Install Dependencies**
```
sudo yum install -y epel-release && sudo yum install -y certbot-nginx && sudo yum install -y nginx && sudo yum install -y vim
```
**Start Nginx**
``` 
sudo systemctl start nginx
```

**Create the rocketchat.conf File**
```
Sudo Vim /etc/nginx/conf.d/rocketchat.conf
```
Add the follow lines of code to the rockertchat.conf file and change the “example.com” on the server _name line to your ROOT_URL without the http or https.
```
# Upstreams
upstream backend {
    server 127.0.0.1:3000;
}
server {
    server_name example.com;
    location / {
   proxy_pass http://backend/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $http_host;

        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forward-Proto http;
        proxy_set_header X-Nginx-Proxy true;

        proxy_redirect off; }
}

```
Save and Exit the File


**Verify the Syntax of Your Configuration Edits**
```
sudo nginx -t
```

**Reload Nginx**
```
sudo systemctl reload nginx
```
**Request a Certificate From Let’s Encrypt**

Certbot provides a variety of ways to obtain SSL certificates, through various plugins. The Nginx plugin will take care of reconfiguring Nginx and reloading the config whenever necessary. Change “example.com” to your ROOT_URL without HTTP or HTTPS. You will be asked to enter in your email and agree to the Let’s Encrypt Terms of service.
```
sudo certbot --nginx -d example.com
```
**Configure HTTPS Settings**

If all is successful with the above command you will get an option to configure your HTTPS settings:
Output
```
Please choose whether HTTPS access is required or optional.
-------------------------------------------------------------------------------
1: Easy - Allow both HTTP and HTTPS access to these sites
2: Secure - Make all requests redirect to secure HTTPS access
-------------------------------------------------------------------------------
Select the appropriate number [1-2] then [enter] (press 'c' to cancel):
```
Choose option 2 “Secure - Make all requests redirect to secure HTTPS access” to force only HTTPS.

Setting Up Auto Renewal
```
sudo crontab -e
```
Copy and past the below into the cronjob file:
```
. . .
15 3 * * * /usr/bin/certbot renew –quiet
```
At this point you should be able to load your Rocket.Chat install at Https://Root_URL.
