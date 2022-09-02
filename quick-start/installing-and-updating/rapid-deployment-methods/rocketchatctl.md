# RocketChatCTL

`rocketchatctl` is a command line tool written in bash to help you install and configure a Rocket.Chat server in a Linux host, it will take care of everything needed for the server to run, configure extra repositories and install needed libraries to install the correct node version and mongo server, and it will also set up directories and permissions, and configure the systemd files for these new services.

Once you have your rocketchat server installed and running, you can use the same command to easily keep that Rocket.Chat server installation up to date, rocketchatctl can check for Rocket.Chat updates available and update it to the latest release.

Furthermore, rocketchatctl optionally installs a loadbalancer/proxy with auto SSL provided by Let's Encrypt.

Check it out here: [https://github.com/RocketChat/install.sh](https://github.com/RocketChat/install.sh)

## Environment

Currently, `rocketchatctl` is supported in these Linux distributions:

**Supported OS:**

* Ubuntu 18.04, 19.04, 20.04
* CentOS 7, 8
* Debian 9, 10, 11

`rocketchatctl` automatically install the latest supported node and MongoDB versions (CentOS Support WIP).

We understand that some users could already have node, mongo, or even a webserver already installed in their servers, `rocketchatctl install` will check for previously installed versions of node and mongo in your system.

## Options and Flags

Run `rocketchatctl help` and check options and flags:

```
rocketchatctl command line tool to install and update Rocket.Chat server

Usage: rocketchatctl [options] [--root-url=ROOT_URL --port=PORT --letsencrypt-email=EMAIL --webserver=WEBSERVER  --version=VERSION --install-node --use-mongo]
Installs node, mongo, Rocket.Chat server and optionally a webserver (Caddy or Traefik), sets up directories and permissions to use Let's Encrypt certificates.
In case node or mongo already installed, it uses already installed versions though confirmation is required.
For node it set v8.11.4 as default in your system, for mongo mmapv1 storage engine and no authentication enabled is required during installation.
If you wish this script to run unattended, provide extra flags to the install option, server URL is required (--root-url).

OPTIONS
  -h help                   Display this message
  install                   Install latest Rocket.Chat server version
  update                    Update Rocket.Chat server from current version to latest version
  check-updates             Check for updates of Rocket.Chat server
  upgrade-rocketchatctl     Upgrade the rocketchatctl command line tool.

FOR UNATTENDED INSTALLATION
  --root-url=ROOT_URL       the public URL where Rocket.Chat server will be accessible on the Internet (REQUIRED)
  --port=PORT               port for the Rocket.Chat server, default value 3000
  --webserver=WEBSERVER     webserver to install as reverse proxy for Rocket.Chat server, options are caddy/traefik/none (REQUIRED)
  --letsencrypt-email=EMAIL e-mail address to use for SSL certificates (REQUIRED if webserver is not none)
  --version=VERSION         Rocket.Chat server version to install, default latest
  --install-node            in case node installed, sets node to Rocket.Chat server recommended version, default behavoir cancel Rocket.Chat server installation
  --use-mongo               in case mongo installed, and storage engine configured is mmapv1, skip mongo installation but uses systems mongo for Rocket.Chat server database, default database name rocketchat
```

## How to use it

### Install Rocket.Chat

You can run `rocketchatctl install` directly curling the install.sh script from our website, `install.sh` will download rocketchatctl save it in `/usr/local/bin` and call `rocketchatctl` with the install option, this installation will be interactive:

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
rocketchatctl install --root-url=https://www.example.com --webserver=none --use-mongo --install-node --port=4000 --version=3.9.0
```

### Update Rocket.Chat

Check for release updates:

```bash
rocketchatctl check-updates
Current update available for Rocket.Chat server: from 3.8.0 to 3.9.0
```

And update to the latest release:

```bash
rocketchatctl update
```

The update option creates a temporary backup directory, downloads the latest rocketchat release, starts it, and checks that it is healthy by querying the info api. In case something goes wrong in the startup process, the previously installed version from the backup is restored and an error message is displayed.

### Upgrade `rockectchatctl`

This option will download the latest version available for rocketchatctl in the install repo, compare it to your current rocketchatctl and upgrade to the latest version if needed, be sure to check that you are running the latest rocketchactl.

```bash
rocketchatctl upgrade-rockectchatctl
```

### **Backup `rocketchatctl`**

Backup `rocketchatctl` data by running

```
rocketchatctl backup
```

By default, a backup will be made in the `/tmp` directory. You can specify where using the `--backup-dir` flag. See more help in the help section `rocketchatctl --help`
