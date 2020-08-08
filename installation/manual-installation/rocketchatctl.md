# RocketChatCTL

rocketchatctl is a command line tool written in bash to help you install and configure a RocketChat server in a Linux host, it will take care of everything needed for the server to run, configure extra repositories and install needed libraries to install the correct node version and mongo server, and it will also set up directories and permissions, and configure the systemd files for these new services.

Once you have your rocketchat server installed and running, you can use the same command to easily keep that Rocketchat server installation up to date, rocketchatctl can check for Rocketchat updates available and update it to the latest release.

Furthermore, rocketchatctl optionally installs a loadbalancer/proxy with auto SSL provided by Let's Encrypt.

Check it out here: [https://github.com/RocketChat/install.sh](https://github.com/RocketChat/install.sh)

## Environment

Currently rocketchatctl is supported in these Linux distributions:

* Supported OS:

  Ubuntu 18.04, 19.04, 20.04 CentOS 7 Debian 9

And installs these software versions, but this can change for future rocketchatctl versions:

* Node version: 12.14.0
* Mongo version: 4.0.10
* Web Proxy/Loadbalancer optional:

  Traefik 1.7.12 Caddy 1.0.0

We understand that some users could already have node, mongo, or even a webserver already installed in their servers, `rocketchatctl install` will check for previously installed versions of node and mongo in your system.

## Options and flags

Run `rocketchatctl help` and check options and flags:

```text
rocketchatctl command line tool to install and update RocketChat server

Usage: rocketchatctl [options] [--root-url=ROOT_URL --port=PORT --letsencrypt-email=EMAIL --webserver=WEBSERVER  --version=VERSION --install-node --use-mongo]
Installs node, mongo, RocketChat server and optionally a webserver (Caddy or Traefik), sets up directories and permissions to use Let's Encrypt certificates.
In case node or mongo already installed, it uses already installed versions though confirmation is required.
For node it set v8.11.4 as default in your system, for mongo mmapv1 storage engine and no authentication enabled is required during installation.
If you wish this script to run unattended, provide extra flags to the install option, server URL is required (--root-url).

OPTIONS
  -h help                   Display this message
  install                   Install latest RocketChat server version
  update                    Update RocketChat server from current version to latest version
  check-updates             Check for updates of RocketChat server
  upgrade-rocketchatctl     Upgrade the rocketchatctl command line tool.

FOR UNATTENDED INSTALLATION
  --root-url=ROOT_URL       the public URL where RocketChat server will be accessible on the Internet (REQUIRED)
  --port=PORT               port for the RocketChat server, default value 3000
  --webserver=WEBSERVER     webserver to install as reverse proxy for RocketChat server, options are caddy/traefik/none (REQUIRED)
  --letsencrypt-email=EMAIL e-mail address to use for SSL certificates (REQUIRED if webserver is not none)
  --version=VERSION         RocketChat server version to install, default latest
  --install-node            in case node installed, sets node to RocketChat server recommended version, default behavoir cancel RocketChat server installation
  --use-mongo               in case mongo installed, and storage engine configured is mmapv1, skip mongo installation but uses systems mongo for RocketChat server database, default database name rocketchat
```

## How to use it

### Install Rocket.Chat

You can run `rocketchatctl install` directly curling the install.sh script from our website, install.sh will download rocketchatctl save it in /usr/local/bin and call rocketchatctl with the install option, this installation will be interactive:

```bash
bash -c "$(curl https://install.rocket.chat)"
```

In case you want to have an unattended install, use unattended install flags with install.sh script like this:

```bash
bash -c "$(curl https://install.rocket.chat)" -s --root-url=https://www.example.com --webserver=traefik --letsencrypt-email=myemail@mydomain.com
```

If you already have rocketchatctl installed just run:

```bash
rocketchatctl install
```

Or if you want to use your mongo server, change node to the current needed version for Rocket.Chat, listen in a different port, and install another release, you can for example use these command:

```bash
rocketchatctl install --root-url=https://www.example.com --webserver=none --use-mongo --install-node --port=4000 --version=3.0.0
```

### Update Rocket.Chat

Check for release updates:

```bash
rocketchatctl check-updates
Current update available for RocketChat server: from 3.0.3 to 3.2.1
```

And update to the latest release:

```bash
rocketchatctl update
```

The update option creates a temporary backup directory, download the latest rocketchat release, starts it and checks that is healthy querying the info api. In case something goes wrong in the startup process, the previous installed version from backup is resotored and a error message is displayed.

### Upgrade rockectchatctl

This option will download the latest version available for rocketchatctl in the install repo, compare it to your current rocketchatctl and upgrade to the latest version if needed, be sure to check that you are running the latest rocketchactl.

```bash
rocketchatctl upgrade-rockectchatctl
```

#### **Use rocketchatctl to automate your previously Rocket.Chat manual installation deployments !**

Check out our webinar about it here:

