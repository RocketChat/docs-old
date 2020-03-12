#!/bin/sh

echo "We will now configure your stack variables for Rocketchat"
echo
read -p "Enter a stack name using only lowercase letters: " stackname
echo
read -p "enter the email address for your Let's Encrypt TLS certs: " emailaddress
echo
read -p "enter a domain (like example.com) that cloudflare is handling DNS for: " domain
echo
read -p "paste in an API token that has edit privileges for that domain: " token
echo
read -p "enter a username for your rocketchat bot user: " botname
echo
read -p "enter the bot's password :" botpassword
echo
read -p "enter the username for the traefik dashboard: " traefikuser
echo "Please ente ther password for the traefik dashboard user"
echo
htpasswdoutput=$(htpasswd -n $traefikuser)
hashedpassword=

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
echo
echo "making acme.json file for traefik certificate storage"
touch traefik/acme.json
echo
echo "setting permissions on acme.json"
chmod 600 traefik/acme.json
echo
echo "Paste the following block into your terminal to set your environment variables:"
echo
echo export DOCKER_STACK_NAME=$stackname
echo export LETS_ENCRYPT_EMAIL_ADDRESS=$emailaddress
echo export DOMAIN_WITH_DNS_HANDLED_BY_CLOUDFLARE=$domain
echo export CLOUDFLARE_API_TOKEN_WITH_DOMAIN_EDIT_PRIVILEGES=$token
echo export ROCKETCHAT_BOT_USERNAME=$botname
echo export ROCKETCHAT_BOT_PASSWORD=$botpassword
echo export TRAEFIK_USER=$traefikuser
echo export HASHED_TRAEFIK_PASSWORD=$hashedpassword
echo
echo "then paste this command into your terminal to launch your stack:"
echo
echo "docker stack deploy -c docker-stack.yml ${DOCKER_STACK_NAME}"
echo
