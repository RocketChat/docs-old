# Deploying Rocket.Chat on Sloppy.io

[sloppy.io](http://sloppy.io) is a CaaS (Container as a Service) Provider. You can deploy, scale and manage your dockerized applications in seconds. [Try it for free](http://sloppy.io/#signup)

Host your docker container at [sloppy.io](http://sloppy.io). Get an account and use the [quickstarter](https://github.com/sloppyio/quickstarters/tree/master/rocketchat)

## Start it

```
sloppy start rocketchat.json  -var=USERNAME:yourusername,URI:mydomain.sloppy.zone
```

Example:

```
sloppy start rocketchat.json  -var=USERNAME:john,URI:coolchat.sloppy.zone
```
