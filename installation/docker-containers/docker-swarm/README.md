This is the easiest way to setup RocketChat on Docker Swarm:

  1. Make sure your cloudflare domain has entries for `traefik.$DOMAIN_NAME` and `rocketchat.$DOMAIN_NAME`
  2. If you want to pull a live TLS cert, comment out the `caserver` line in `template.yml` (But first read about [Rate Limiting](https://letsencrypt.org/docs/rate-limits/)).  By default the `template.yml` file will not generate trusted certs to avoid rate limiting from Let's Encrypt.
     Comment out the appropriate line in `template.yml` and this stack will pull a trusted cert from traefik.
  3. Download `template.yml` and `launch-rocket.sh` to the same directory on a manager node of your docker swarm
  4. Run `sh launch-rocket.sh` or `chmod +x launch-rocket.sh && ./launch-rocket.sh`
  5. Enter the requested information
  6. Wait for your stack to start up.  This might take a few minutes.  The results of `docker service ls` should look like this when your stack is ready:
```
$ docker service ls
ID                  NAME                                  MODE                REPLICAS            IMAGE                                PORTS
iabjfq216jwb        yourmob_rocketchat-app                replicated          1/1                 rocketchat/rocket.chat:latest        
p9yzr32ylv5n        yourmob_rocketchat-hubot              replicated          1/1                 rocketchat/hubot-rocketchat:latest   *:3001->8080/tcp
epvv9yeern1j        yourmob_rocketchat-mongo              replicated          1/1                 mongo:latest                         
l1fmyk2gp7je        yourmob_rocketchat-mongo-replicator   replicated          0/1                 mongo:latest                         
e2s85hb98j7i        yourmob_traefik                       replicated          1/1                 traefik:latest                       *:80->80/tcp, *:443->443/tcp, *:8080->8080/tcp
1egi5h42f4jc        yourmob_traefik-ssl-exporter          replicated          1/1                 ldez/traefik-certs-dumper:latest     
```
  7. In your browser, open `rocketchat.${DOMAIN_WITH_DNS_HANDLED_BY_CLOUDFLARE}` to use the RocketChat web application
  8. In your browser, open `traefik.${DOMAIN_WITH_DNS_HANDLED_BY_CLOUDFLARE}` to use the Traefik dashboard
  9. Use RocketChat over free trusted ssl without specifying a port number like an absolute boss
