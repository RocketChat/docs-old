# Deploying Rocket.Chat on Digital Ocean

You can now install Rocket.Chat on DigitalOcean using a 1-Click install from the DigitalOcean Marketplace.

[![do-btn-blue](https://user-images.githubusercontent.com/51996/58146107-50512580-7c1a-11e9-8ec9-e032ba387c2a.png)](https://marketplace.digitalocean.com/apps/rocket-chat?action=deploy&refcode=1940fe28bd31)

--- 

After you create your 1-Click install using the Rocket.Chat app in DigitalOcean Marketplace, you'll likely want a registered domain name to access Rocket.Chat.

We recommend setting up an A record from your domain to your servers IP address. Ex: chat.mycompany.com

Rocket.Chat will not work with HTTPS out of the box because certificates are unique for each instalation, but with this setup HTTPS will be available using Let's Encrypt certificates.

After the Rocket.Chat One-Click is finished and your domain is setup. You will need to login to your droplet to finish setup. 

```
ssh root@your_droplet_ip
```

Once you are connected you should see something like:

```
Rocket.Chat is the leading open source team chat software solution. Free, unlimited and completely customizable with on-premises and SaaS cloud hosting.
Replace email, HipChat & Slack with the ultimate team chat software solution.

 To get started you must set a site url:

 rocketchatctl configure --rocketchat --root-url=http://chat.yourcompany.com

 If you would like your server to be accessible over https you can use letsencrypt by running:

 rocketchatctl configure --lets-encrypt --root-url=https://chat.yourcompany.com --letsencrypt-email=admin@yourcompany.com

 In case you do not own a public domain, you could use the public IP of your droplet, but traefik will not be able to fetch certificates for you so you will see a privacy alert message when loading https://droplet-IP

 If you would like https with something other than letsencrypt provided cert you will have to manually edit the traefik config to add it.

 Keep your RocketChat server updated using rocketchatctl update. Run rocketchatctl -h to see the full list of available options.

 Looking for how to use Rocket.Chat? Be sure to check our docs: https://rocket.chat/docs
 Need some help? Join our community forums https://forums.rocket.chat

```

Besides the recommended setup you can out of the box access Rocket.Chat server at: [http://Droplet-IP:3000](<http://Droplet-IP:3000>)

## Setting up HTTPS

We recommend you to finish the Traefik loadbalancer configuration to handle HTTPS. Run this command to fetch Let's Encrypt certificates for your installation:

```
rocketchatctl configure --lets-encrypt --root-url=https://chat.yourcompany.com --letsencrypt-email=admin@yourcompany.com
```

You can then access at: [https://chat.yourcompany.com](<https://chat.yourcompany.com>) replacing chat.yourcompany.com with the address you set in your DNS.

The Loadbalancer will redirect HTTP to HTTPS
