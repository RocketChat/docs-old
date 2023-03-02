# Matrix Homeserver Setup

## Introduction

In the Matrix protocol and federated architecture, Homeservers are key components that host user accounts and other data related to communication. It also facilitates communication between users on different servers by relaying messages through a network of Matrix servers until it reaches the destination.

Rocket.Chat listens to events happening in the Homeserver and also sends events that gets relayed to other networks.

You can choose to install a Homeserver following and of the two methods listed below:

* ****[**Automated Installation**](./#automated-installation): Install Synapse and Rocket.Chat using a simple setup script.
* ****[**Manual Installation**](./#manual-installation): Manually install and configure your Homeserver with Rocket.Chat.

{% hint style="success" %}
We recommend using automatic installation since this comes with some configurations done.
{% endhint %}

### System Requirements

* 8GB of RAM
* 2CPU
* 20GB of Storage
* [Ubuntu 20.04](https://docs.rocket.chat/quick-start/installing-and-updating/other-deployment-methods/manual-installation/debian-based-distros/ubuntu)

{% hint style="info" %}
You are required to have a domain available to host your Matrix Homeserver.
{% endhint %}

### Important warning about the installation

There is an important setting you must be aware of before proceeding with the installation.&#x20;

* Enabling ephemeral events like _user typing indicator_ can affect the performance of your Matrix Homeserver and Rocket.Chat server for federated communicaation. \
  This can be enabled by adding the following property in your Application Service configuration file

```yaml
de.sorunome.msc2409.push_ephemeral: true
```

* Add and enable the following properties to make public rooms visible and searchable on other Matrix networks.

```yaml
allow_public_rooms_without_auth: true
allow_public_rooms_over_federation: true
```

* Following the automated installation enables everything by default and can be disabled by editing the generated configuration at `data/matrix/synapse`.

## Automated Installation

The Automated install makes it simple for you to install a Matrix Homeserver pre-configured with Rocket.Chat.

#### Prerequisites&#x20;

You are required to have the following on your system before installing.

* [Docker](https://www.docker.com/)
* [Docker compose](https://docs.docker.com/compose/) (> 2.3.3)

#### Installation Steps

* Open your terminal in any directory of your choice
* Download and execute the [script](https://go.rocket.chat/i/federation-setup) by running the following command. This creates a `docker-compose` and a `.env` file that can be edited as needed

```bash
bash <(curl -L -s https://go.rocket.chat/i/federation-setup)
```

* Follow the instructions provided by the script to configure the workspace:
  * **Server's hostname**: Add your domain when asked.
  * Create `A` domain records pointing to your server's IP address as requested.
    * `synapse.<your-domain>`
    * `matrix.<your-domain>`
    * `traefik.<your-domain>`
  * Enter your email address, this is used to issue an SSL certificate for your domain.
* Start the container by running:

```bash
docker compose up -d
```

{% hint style="success" %}
Installing with the Automated setup automatically sets the values at **Administration** > **Workspace** > **Settings** > **Federation** > **Matrix Bridge.**
{% endhint %}

{% hint style="info" %}
Rocket.Chat Matrix setup CLI coming soon.
{% endhint %}

#### Testing the Setup

To test and make sure your Matrix setup is successful,

* In the same directory where the setup was initiated, download and execute the [test script](https://go.rocket.chat/i/federation-test).

```bash
bash <(curl -L -s https://go.rocket.chat/i/federation-test)
```

You get a notice about the setup status.

## Manual installation

Follow this guide to set up a Matrix Homeserver with Synapse manually.

* Install [Synapse](https://matrix.org/docs/projects/server/synapse).
* Obtain [Lets Encrypt](https://letsencrypt.org/) Certificate.
* Setup [Element ](https://github.com/vector-im/element-web)(Optional).
* Configure [Nginx](https://docs.rocket.chat/quick-start/deploying-rocket.chat/rapid-deployment-methods/docker-and-docker-compose/docker-containers#5.-installing-nginx-and-ssl-certificate) using the certificates, reverse proxying the requests to Synapse.
* Point all the generated DNS records to your server's IP address (all to the same IP).
* [Configure ](https://matrix-org.github.io/synapse/latest/application\_services.html)the support for [Application Service](https://matrix.org/docs/guides/application-services) on the Matrix Homeserver: This can be done by creating a `registration.yaml` file under the `app/matrix-federation-config` directory with the content provided in **Workspace** > **Settings** > **Federation** > **Matrix Bridge** > **Registration File**.&#x20;

<figure><img src="../../../../../../../.gitbook/assets/App Service Registration File content.png" alt=""><figcaption><p>App Service Registration File content</p></figcaption></figure>

* Complete Matrix Bridge Configuration following this guide

{% content-ref url="../matrixbridge-configuration.md" %}
[matrixbridge-configuration.md](../matrixbridge-configuration.md)
{% endcontent-ref %}

#### Testing your setup

To test your manual installation:

* Make sure Synapse is up and running.
* Ensure the federation setup is running, go to [Matrix Federation Tester](https://federationtester.matrix.org/), and paste your Matrix Homeserver name (only the server name, not the full link).
