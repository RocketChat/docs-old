# Auto SSL with Snaps

We now include the option to enable Caddy in your snap.  Caddy makes use of [letsencrypt](https://letsencrypt.org/) to automatically provide you SSL protection for your communications.

## Enabling Caddy

The first step is to generate some default configuration by running:

```
sudo rocketchat-server.initcaddy
```

Alternatively if you are on Debian or another distro:

```
sudo snap run rocketchat-server.initcaddy
```

Then, edit the Caddyfile found at: `/var/snap/rocketchat-server/current/Caddyfile`

It'll look like this out of the box:

```
http://:8080
proxy / localhost:3000 {
  websocket
  transparent
}
```

Replace `http://:8080` with your site information.  For instance, let's say I have example-domain.com pointing at my server. To get secured communications, I can do:

```
example-domain.com
proxy / localhost:3000 {
  websocket
  transparent
}
```

**Please note: using an IP address will not work for automatically enabling SSL. You must use a valid hostname ([here's why](https://caddyserver.com/docs/automatic-https)).**

Now you can restart the Caddy service by running:

```
sudo systemctl restart snap.rocketchat-server.rocketchat-caddy
```

You can check that the Caddy service started correctly by running:

```
sudo systemctl status snap.rocketchat-server.rocketchat-caddy
```

If everything went well, the site will be accessible at `https://example-domain.com`.

## Testing with an untrusted self-signed certificate

Simply add the `tls self_signed` directive to your Caddyfile like so:

```
https://example-domain.com
tls self_signed
proxy / localhost:3000 {
  websocket
  transparent
}
```

Remember to restart the Caddy service:

```
sudo systemctl restart snap.rocketchat-server.rocketchat-caddy
```

This will enable SSL with an untrusted, self-signed certificate for testing purposes.

For details on the Caddy TLS directive, visit <https://caddyserver.com/docs/tls>

## Redirecting HTTP to HTTPS

Redirecting is handled automatically by caddy by omitting the http / https in front.

```
example-domain.com {
  proxy / localhost:3000 {
    websocket
    transparent
  }
}
```

Remember to restart the Caddy service:

```
sudo systemctl restart snap.rocketchat-server.rocketchat-caddy
```

## Disabling SSL or listening on custom ports

This configuration will listen **without SSL** on the default port 80:

```
http://example-domain.com {
  proxy / localhost:3000 {
    websocket
    transparent
  }
}
```

This configuration will listen **without SSL** on port 8080:

```
http://example-domain.com:8080 {
  proxy / localhost:3000 {
    websocket
    transparent
  }
}
```

This configuration will listen **with SSL** on port 8080:

```
https://example-domain.com:8080 {
  proxy / localhost:3000 {
    websocket
    transparent
  }
}
```

Note that, without SSL, you can use an IP address:

```
http://192.168.1.1:8080 {
  proxy / localhost:3000 {
    websocket
    transparent
  }
}
```

Remember to restart the Caddy service:

```
sudo systemctl restart snap.rocketchat-server.rocketchat-caddy
```

## Opening ports when running Rocket.Chat server from behind router

For Caddy to be able to work from behind a router, the following ports need to be opened between the internet and the server. This is usually achieved through router software or web-interface.

- HTTP: port **80**
- HTTPS: port **443**
