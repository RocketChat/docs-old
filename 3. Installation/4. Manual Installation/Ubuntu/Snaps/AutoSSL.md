# Auto SSL with Snaps

We now include the option to enable Caddy in your snap.  Caddy makes use of [letsencrypt](https://letsencrypt.org/) to automatically provide you SSL protection for your communications.

## Enabling Caddy

First off we need to generate some default configuration by running:

```
sudo rocketchat-server.initcaddy
```

Now we need to edit the Caddyfile found at: `/var/snap/rocketchat-server/current/Caddyfile`

It'll look something like this out of the box:
```
http://:8080
proxy / localhost:3000 {
  websocket
  transparent
}
```

Now replace `http://:8080` with your site information.  For instance lets say I have my-example-domain.com pointing at my server. To get secured communications I can do:
```
https://my-example-domain.com
proxy / localhost:3000 {
  websocket
  transparent
}
```

Now you restart the caddy service by running:

```
sudo systemctl restart snap.rocketchat-server.rocketchat-caddy
```

If everything went well you should be able to access my site at https://my-example-domain.com.

## Redirect
Lets say you want to redirect http://my-example-domain.com to https://my-example-domain.com you can do:
```
http://my-example-domain.com {
	redir 301 {
		/ https://{host}{uri}
	}
}

https://my-example-domain.com {
  proxy / localhost:3000 {
    websocket
    transparent
  }
}
```

Now you restart the caddy service:

```
sudo systemctl restart snap.rocketchat-server.rocketchat-caddy
```

## Changing ports
If for some reason you don't want ssl, you can use caddy to simply change the port by using a config file like this:

```
http://my-example-domain.com {
  proxy / localhost:3000 {
    websocket
    transparent
  }
}
```
Or:

```
http://my-example-domain.com:80 {
  proxy / localhost:3000 {
    websocket
    transparent
  }
}
```

Restarting the caddy service afterwards:

```
sudo systemctl restart snap.rocketchat-server.rocketchat-caddy
```
