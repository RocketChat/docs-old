# Matrix Homeserver Setup

## System Requirements

* 8GB of RAM
* 2CPU
* 20GB of Storage
* [Ubuntu 20.04](https://docs.rocket.chat/quick-start/installing-and-updating/other-deployment-methods/manual-installation/debian-based-distros/ubuntu)

## Prerequisites

* A domain to host your Matrix Homeserver on

## Important warning about the installation

There is an important setting you must be aware of before proceeding with the installation.&#x20;

Having the setting to enable ephemeral events (users' typing indicator) enabled can impact the performance of either your Matrix homeserver and Rocket.Chat as well.

Please be careful about enabling this.

To enable it in your Application Service configuration file, add the following property:

```yaml
de.sorunome.msc2409.push_ephemeral: true
```

Also, there are other 2 settings that enable the search for public rooms in your Matrix homeserver, they must be explicitly set to true to allow the search, otherwise, it will be disabled by default. In case you have disabled these settings keep in mind that people from outside will not be able to search for public rooms within your server (through the Matrix network), which means the Search for Federated Public Rooms feature will be impacted.

```yaml
allow_public_rooms_without_auth: true
allow_public_rooms_over_federation: true
```

Following the automated installation, it will enable everything by default, if you want to disable it, please go to the generated data and either remove this line or set it to `false`.

```bash
cd data/matrix/synapse
// edit the file registration.yaml using your preferred editor
```

## Automated Installation (recommended)

This is the most automated installation guide since you still have to do some things manually.\
To start this automated installation you need to have:

* [Docker](https://www.docker.com/)
* [Docker compose](https://docs.docker.com/compose/) (> 2.3.3)

Steps:

* Download and execute the [script](https://go.rocket.chat/i/federation-setup):

```bash
bash <(curl -L -s https://go.rocket.chat/i/federation-setup)
```

The script will create a docker-compose and a .env file with everything to set up the environment. You can edit those files as needed.

* Follow the script instructions:
  * Add your domain when asked.
  * Point all the generated DNS records by the script to your server's IP address (all to the same IP).
* Start the containers:

```bash
docker compose up -d
```

**For further automated installations, we will start to use the setup CLI (**_**coming soon).**_

## Manual installation

* Install [Synapse](https://matrix.org/docs/projects/server/synapse).
* Obtain [Lets Encrypt](https://letsencrypt.org/) Certificate.
* Setup [Element ](https://github.com/vector-im/element-web)(Optional).
* Configure [Nginx](https://docs.rocket.chat/quick-start/deploying-rocket.chat/rapid-deployment-methods/docker-and-docker-compose/docker-containers#5.-installing-nginx-and-ssl-certificate) using the certificates, reverse proxying the requests to Synapse.
* Point all the generated DNS records to your server's IP address (all to the same IP).
* [Configure ](https://matrix-org.github.io/synapse/latest/application\_services.html)the support for [Application Service](https://matrix.org/docs/guides/application-services) on the Matrix homeserver. (You can find the AS .yaml configuration file in your Rocket.Chat admin panel under _**Administration => Manage workspace => Settings => Federation => Matrix Bridge**_). **Important:** make sure the URL property in the AS file is pointing to your Rocket.Chat Bridge address. You can also create a folder (`app/matrix-federation-config`) inside the build version of Rocket.Chat and create a file `registration.yaml` using the registration file you got from the Rocket.Chat admin panel.

<figure><img src="../../../../../../../.gitbook/assets/image (1) (3).png" alt=""><figcaption><p>AS Registration file</p></figcaption></figure>

## Testing your setup

If you have used the automated flow, you can do the following:

* Download and execute the [test script](https://go.rocket.chat/i/federation-test):

```bash
bash <(curl -L -s https://go.rocket.chat/i/federation-test)
```

_**Or**_

Test it manually:

* Make sure Synapse is up and running.
* Make sure the federation setup is running, go to [Matrix Federation Tester](https://federationtester.matrix.org/) and paste your Matrix homeserver name (only the server name, not the full link).

