---
description: Deploying Rocket.Chat on Sloppy.io
---

# Sloppy.io

> **NOTE:**  Has not yet been updated to work with 1.0+

[sloppy.io](http://sloppy.io) is a CaaS \(Container as a Service\) Provider. You can deploy, scale and manage your dockerized applications in seconds. [Try it for free](http://sloppy.io/#signup)

Host your docker container at [sloppy.io](http://sloppy.io). Get an account and use the [quickstarter](https://github.com/sloppyio/quickstarters/tree/master/rocketchat)

## Start it

```text
sloppy start rocketchat.json  -var=USERNAME:yourusername,URI:mydomain.sloppy.zone
```

Example:

```text
sloppy start rocketchat.json  -var=USERNAME:john,URI:coolchat.sloppy.zone
```

