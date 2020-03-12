This is the easiest way to setup RocketChat on Docker Swarm:

  1. Make sure your Cloudflare dashboard shows correct DNS entries for `traefik.${DOMAIN_WITH_DNS_HANDLED_BY_CLOUDFLARE}` and `rocketchat.${DOMAIN_WITH_DNS_HANDLED_BY_CLOUDFLARE}` pointing to your docker swarm.
  2. Download `template.yml` and `launch-rocket.sh` to the same directory on a manager node of your docker swarm
  3. If you want to pull a trusted TLS cert, comment out the `caserver` line in `template.yml` (But **first read about [Rate Limiting](https://letsencrypt.org/docs/rate-limits/)**).  By default the `template.yml` file will not generate trusted certs to avoid rate limiting from Let's Encrypt. If you comment out the appropriate line in `template.yml` this stack will instead pull a **trusted certificate** from Let's Encrypt.  You almost definitely want these, but you should absolutely make sure that your stack works in production before you start playing with the Rate Limits.  Rate Limiting can prevent you from launching your production site for a week if you aren't careful.
  4. Run `sh launch-rocket.sh` or `chmod +x launch-rocket.sh && ./launch-rocket.sh`and then enter the requested information.  Alternatively, you could set the ENV variables or create a `.env` file and run `docker stack deploy -c template.yml ${DOCKER_STACK_NAME}` after you've generated the folder structure and acme.json with 0600 permissions file that traefik stores certs in if you want to persist this installation.  Or create your own `docker-stack.yml` from our `template.yml`.  Or paste RocketChat into your existing stack.
  5. Wait a few minutes for your stack to start up.  The results of `docker service ls` should look like this when your stack is ready:

```
$ docker service ls
ID                  NAME                                  MODE                REPLICAS            IMAGE                                PORTS
iabjfq216jwb        yourmob_rocketchat-app                replicated          1/1                 rocketchat/rocket.chat:latest
p9yzr32ylv5n        yourmob_rocketchat-hubot              replicated          1/1                 rocketchat/hubot-rocketchat:latest   *:3001->8080/tcp
epvv9yeern1j        yourmob_rocketchat-mongo              replicated          1/1                 mongo:latest
l1fmyk2gp7je        yourmob_rocketchat-mongo-replicator   replicated          0/1                 mongo:latest
e2s85hb98j7i        yourmob_traefik                       replicated          1/1                 traefik:latest
*:80->80/tcp, *:443->443/tcp, *:8080->8080/tcp
1egi5h42f4jc        yourmob_traefik-ssl-exporter          replicated          1/1                 ldez/traefik-certs-dumper:latest

```
  6. In your browser, open `rocketchat.${DOMAIN_WITH_DNS_HANDLED_BY_CLOUDFLARE}` to use the RocketChat web application and `traefik.${DOMAIN_WITH_DNS_HANDLED_BY_CLOUDFLARE}` to use the Traefik dashboard.  You can join this RocketChat server in the desktop or mobile apps at the same url you view the web app.
