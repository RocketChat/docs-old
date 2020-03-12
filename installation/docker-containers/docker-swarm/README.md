This is the easiest way to setup RocketChat on Docker Swarm:

  1. Make sure your cloudflare domain has entries for `traefik.$DOMAIN_NAME` and `rocketchat.$DOMAIN_NAME`
  2. Download `docker-stack.yml` and `launch-rocket.sh` to the same directory on a manager node of your docker swarm
  3. Run `sh launch-rocket.sh`
  4. Enter the requested information
  5. Copy the URL `launch-rocket.sh` outputs on completion 
  6. Wait for your stack's `rocketchat-mongo-replicator` to complete. Running `docker service ls` rocketchat-mongo-replicator will show `0/1` replicas and a status of `Completed`.  Your MongoDB service is now ready for RocketChat.
  7. Wait for `rocketchat-app` to finish launching. `docker service logs` for the service will show a square message that says the server is up.
  8. Paste the url from step 5 into your browser
  9. Use RocketChat
