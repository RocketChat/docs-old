This folder contains examples for how to deploy RocketChat on Docker Swarm for various DNS Providers.

We recommend utilizing the `DNS-01` challenge to allow for the creation of wildcard certificates in containerized deployments to facilitate easier TLS certificate management.

The following DNS providers are fully supported and have a working example:

  1. Cloudflare

The following DNS providers are planned for inclusion:

  1. Amazon Route 53
  2. Google DNS
  3. Digital Ocean
  4. Microsoft Azure DNS

If your preferred DNS provider is not yet supported, please submit a pull request to this repository to add support for it.

Additional [documentation](https://letsencrypt.org/docs/) is available from `Let's Encrypt` regarding their service.  Important pages to check before you get started include:

  1. [Frequently Asked Questions](https://letsencrypt.org/docs/faq)
  2. [Rate Limits](https://letsencrypt.org/docs/rate-limits)
  3. [Staging Environment](https://letsencrypt.org/docs/staging-environment)
  4. [Challenge Types](https://letsencrypt.org/docs/challenge-types/)

Additional [documentation](https://docs.traefik.io/) is available from [Containo.us](https://containo.us/) regarding the traefik software.  Important pages to check before you get started include:

  1. [Let's Encrypt](https://docs.traefik.io/https/acme/)
  2. [TLS](https://docs.traefik.io/https/tls/)
  3. [Docker](https://docs.traefik.io/providers/docker/)
  4. [Middlewares - Redirect Scheme](https://docs.traefik.io/middlewares/redirectscheme/)
  5. [Middlewares - Basic Auth](https://docs.traefik.io/middlewares/basicauth/)
