This is the easiest way to setup rocketchat on Docker Swarm:

  1. `htpasswd -bn username password`
  2. `DOCKER_STACK_NAME` - the name your docker stack will run as
  3. `DOMAIN_WITH_DNS_HANDLED_BY_CLOUDFLARE` - your domain that has dns handled by cloudflare
  4. `CLOUDFLARE_API_TOKEN_WITH_DOMAIN_EDIT_PRIVILEGES` - an API Token with edit privileges for that domain
  5. `ROCKETCHAT_BOT_USERNAME` - the name the rocketchat-hubot service will use to connect to rocketchat
  6. `ROCKETCHAT_BOT_PASSWORD` - the password for that bot
  7. `LETS_ENCRYPT_EMAIL_ADDRESS` - the email address used by let's encrypt to generate your account
  8. `TRAEFIK_USER` - username from step 1
  9. `HASHED_TRAEFIK_PASSWORD` - the output of step 1
