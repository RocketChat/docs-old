# MatrixBridge FAQs



<details>

<summary>What is the Matrix Protocol?</summary>

[Matrix](https://matrix.org/) is an open standard for interoperable, decentralized, real-time communication over IP.

</details>

<details>

<summary>How does Matrix work in Rocket.Chat?</summary>

Rocket.Chat aims to enable seamless communication and collaboration across platforms, empowering individuals and organizations to connect on their terms and fluently share information with other platforms.

</details>

<details>

<summary>What is a homeserver?</summary>

Each account in the Matrix federation is associated with a single homeserver (Synapse/ Dendrite). Yes. It is an access point for clients to connect to the Matrix network.

</details>

<details>

<summary>How do I install Matrix -Synapse server?</summary>

* For information on how to install Synapse, see [https://matrix.org/docs/guides/installing-synapse](https://matrix.org/docs/guides/installing-synapse)

<!---->

* For more information on how to configure Synapse for federation, see [https://matrix-org.github.io/synapse/latest/federate.html](https://matrix-org.github.io/synapse/latest/federate.html)

</details>

<details>

<summary>What are the prerequisites for using Matrix on Rocket.Chat?</summary>

* Setup [Docker Compose](https://docs.rocket.chat/quick-start/deploying-rocket.chat/rapid-deployment-methods/docker-and-docker-compose)
* Setup PostgresSQL
* Install [Docker](https://docs.docker.com/get-docker/) and Set up [Docker Compose](https://docs.rocket.chat/quick-start/deploying-rocket.chat/rapid-deployment-methods/docker-and-docker-compose)
* Element Setup
* [Traefik](https://traefik.io/) Setup&#x20;
* Configure [nginx](https://docs.rocket.chat/quick-start/deploying-rocket.chat/rapid-deployment-methods/docker-and-docker-compose/docker-containers#5.-installing-nginx-and-ssl-certificate)
* Obtain [Lets Encrypt](https://letsencrypt.org/) Certificate
* Install [Synapse](https://matrix.org/docs/projects/server/synapse) that supports application services.
* A domain to host your homeserver on

</details>

<details>

<summary>How do I test if matrix federation works fine?</summary>

After setting up the matrix federation, run the following script:

```
curl -L -s https://go.rocket.chat/i/federation-test
```

</details>
