# Running in a sub folder with Apache

If you want to run your server in a sub folder like `https://your.domain.com/chat/` you have to setup a reverse proxy.
See [Run Rocket.Chat behind a SSL Reverse Proxy](../../../installation/manual-installation/configuring-ssl-reverse-proxy/)

If you are using apache you have to tweak the configuration. First you have to put the Rewrite/Proxy into a Location-tag.
For example, if you want to provide the service under the "chat" subfolder, your config should look like this:

```
<Location /chat>
    Order allow,deny
    Allow from all

    RewriteEngine On
    RewriteCond %{HTTP:Upgrade} =websocket [NC]
    RewriteRule /var/www/(.*)           ws://localhost:3000/$1 [P,L]
    RewriteCond %{HTTP:Upgrade} !=websocket [NC]
    RewriteRule /var/www/(.*)           http://localhost:3000/$1 [P,L]

    ProxyPassReverse http://localhost:3000
</Location>
```

The main difference to the standard reverse proxy configuration is an additional RewriteRule, `/var/www` in the example, which must be changed to your DocumentRoot (if it's not already your DocumentRoot).

If you pass the whole path, including the DocumentRoot to the rocket.chat server, you'll get a 404 response and an `Unknown path` server error.

In our example we used the `/chat` as subfolder (it's parsed out of the ROOT_URL provided) but the rocket.chat server gets a request for `/var/www/chat`, detects a mismatch and returns the above mentioned error.

**Additional notes:**

- Using the RewriteBase Directive won't work.
- The ProxyPassReverse can be used inside a Location-tag and the first parameter must be omitted in this case.
- You don't need to configure a Location for the root folder `/` when using rocket.chat in a subfolder (its likely configured for other stuff already in this case).
- For the those curious about the details: the mentioned path-handling is in `webapp.js`, search for `Unknown path`.

## Running the application

To run in a sub folder you should pass the environment variable `ROOT_URL` to the process.
For example:

```shell
ROOT_URL=https://your.domain.com/chat/ node main.js
```

If you followed the manual installation guide, you may already have configured (and persisted) this environment variable - in this case you can ignore this advice.
