# Running in a sub folder with Apache

> NOTE:   Running in a sub folder has been officially deprecated.  It will no longer be supported in upcoming 4.0 release.  See our [April 2020 announcement](https://forums.rocket.chat/t/support-for-installation-in-subdirectory-will-be-discontinued/6371).

If you want to run your server in a subfolder like `https://your.domain.com/chat/` you have to setup a reverse proxy. See [Run Rocket.Chat behind a SSL Reverse Proxy](configuring-ssl-reverse-proxy.md)

If you are using apache you have to tweak the configuration. First you have to put the Rewrite/Proxy into a Location-tag. For example, if you want to provide the service under the "chat" subfolder, your config should look like this:

```text
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

The main difference to the standard reverse proxy configuration is an additional RewriteRule, `/var/www` in the example, which must be changed to your DocumentRoot \(if it's not already your DocumentRoot\).

If you pass the whole path, including the DocumentRoot to the Rocket.Chat server, you'll get a 404 response and an `Unknown path` server error.

In our example we used the `/chat` as subfolder \(it's parsed out of the ROOT\_URL provided\) but the Rocket.Chat server gets a request for `/var/www/chat`, detects a mismatch and returns the above mentioned error.

**Additional notes:**

* Using the RewriteBase Directive won't work.
* The ProxyPassReverse can be used inside a Location-tag and the first parameter must be omitted in this case.
* You don't need to configure a Location for the root folder `/` when using Rocket.Chat in a subfolder \(it's likely configured for other stuff already in this case\).
* For the those curious about the details: the mentioned path-handling is in `webapp.js`, search for `Unknown path`.
* Please make sure that the modules `rewrite`, `proxy_http` and `proxy_wstunnel` are enabled in the apache configuration. Otherwise the websocket calls will return a 500 http response.

## Running the application

To run in a subfolder you should pass the environment variable `ROOT_URL` to the process. For example:

```text
ROOT_URL=https://your.domain.com/chat/ node main.js
```

If you followed the manual installation guide, you may already have configured \(and persisted\) this environment variable - in this case you can ignore this advice.

