This is the easiest way to setup RocketChat on Docker Swarm:

  1. Make sure your cloudflare domain has entries for `traefik.$DOMAIN_NAME` and `rocketchat.$DOMAIN_NAME`
  2. Download `docker-stack.yml` and `launch-rocket.sh` to the same directory on a manager node of your docker swarm
  3. Run `sh launch-rocket.sh`
  4. Enter the requested information
  5. Wait for your stack's `rocketchat-mongo-replicator` to complete. Running `docker service ls` rocketchat-mongo-replicator will show `0/1` replicas and a status of `Completed`.  Your MongoDB service is now ready for RocketChat.
  6. Wait for `rocketchat-app` to finish launching. `docker service logs` for the service will show a square message that says the server is up.
  7. In your browser go to `rocketchat.$DOMAIN_NAME` or `traefik.$DOMAIN_NAME`
  8. Use RocketChat, and I guess Traefik if you want to reverse proxy stuff and get free trusted TLS certs

By default this docker-stack.yml file will not generate trusted certs to avoid rate limiting from Let's Encrypt.  Comment out the appropriate line in `docker-stack.yml` and this stack will pull a trusted cert from traefik.


