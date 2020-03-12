#!/bin/sh
echo "Let's configure your RocketChat stack"
echo
echo "Please read Let's Encrypt's document on Rate Limiting before you proceed"
echo "https://letsencrypt.org/docs/rate-limits/"
echo
read -p "Enter a stack name using only lowercase letters: " stackname
read -p "Enter the email address for your Let's Encrypt TLS certs: " emailaddress
read -p "Enter a domain (such as 'example.com') that Cloudflare is handling DNS for: " domain
read -p "Paste in an API token that has edit privileges for that domain: " token
read -p "Enter a username for your rocketchat bot user: " botname
read -p "Enter the bot's password :" botpassword
read -p "Enter the username for the traefik dashboard: " traefikuser
echo "Please enter the password for the traefik dashboard user: "
htpasswdoutput=$(htpasswd -n $traefikuser)
STRLENGTH=$(echo $traefikuser | wc -m)
hashedpassword=${htpasswdoutput:$STRLENGTH}
echo $hashedpassword
echo "making stack folders"
mkdir logs
mkdir logs/rocketchat
mkdir logs/traefik
mkdir rocketchat
mkdir rocketchat/database
mkdir rocketchat/dump
mkdir rocketchat/uploads
mkdir rocketchat/hubot-scripts
mkdir traefik
mkdir traefik/ssl
echo "creating empty traefik/acme.json file for traefik certificate storage"
touch traefik/acme.json
echo "setting permissions of 0600 on traefik/acme.json (required by traefik)"
chmod 600 traefik/acme.json
echo
echo "setting ENV variables"
DOCKER_STACK_NAME=$stackname
LETS_ENCRYPT_EMAIL_ADDRESS=$emailaddress
DOMAIN_WITH_DNS_HANDLED_BY_CLOUDFLARE=$domain
CLOUDFLARE_API_TOKEN_WITH_DOMAIN_EDIT_PRIVILEGES=$token
ROCKETCHAT_BOT_USERNAME=$botname
ROCKETCHAT_BOT_PASSWORD=$botpassword
TRAEFIK_USER=$traefikuser
HASHED_TRAEFIK_PASSWORD=$hashedpassword
echo
env | grep TRAEFIK_USER
env | grep HASHED_TRAEFIK_PASSWORD
env | grep ROCKETCHAT_BOT_USERNAME
env | grep ROCKETCHAT_BOT_PASSWORD
env | grep DOMAIN_WITH_DNS_HANDLED_BY_CLOUDFLARE
env | grep CLOUDFLARE_API_TOKEN_WITH_DOMAIN_EDIT
echo
echo "Launching stack: ${DOCKER_STACK_NAME}"
docker stack deploy -c template.yml ${DOCKER_STACK_NAME}
echo "Run…"
echo
echo "docker stack ps ${DOCKER_STACK_NAME}"
echo
echo "   …to check on your stack, or run …"
echo
echo "docker service ls"
echo
echo "                                   …to see every service on your swarm."

