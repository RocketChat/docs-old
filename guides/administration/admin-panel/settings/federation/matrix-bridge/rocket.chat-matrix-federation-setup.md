# Rocket.Chat Matrix Federation Setup

### Set up the Rocket.Chat Matrix Federation <a href="#install-rocketchat-and-dendrite" id="install-rocketchat-and-dendrite"></a>

To set up Rocket.Chat Matrix Federation, you need to run this script:

```
curl -L -s https://go.rocket.chat/i/federation-setup
```

After running it, the next step is to type your server's hostname (without `https` or trailing slashes): `demo-see.fed.rocket.chat,` and then you can create the following DNS records pointing to your servers' IP addresses. All of these records need to point to the same IP address and then everything is to be set up.  You can see that a `docker compose` file is generated with everything you need.

* `demo-see.fed.rocket.chat`
* `matrix.demo-see.fed.rocket.chat`
* `synapse.demo-see.fed.rocket.chat`
* `element.demo-see.fed.rocket.chat`
* `traefik.demo-see.fed.rocket.chat`

Copy the generated `docker-compose.yaml`file to your server. edit the file as necessary.

#### Setting up Docker Compose

```
services:
  traefik:
    image: "traefik:latest"
    restart: "unless-stopped"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
      - "./data/traefik/traefik.yml:/etc/traefik/traefik.yml:ro"
      - "./data/traefik/config:/config:ro"
      - "./data/traefik/acme.json:/acme.json"
      
    labels:
      - "traefik.enable=true"
      - "traefik.http.services.traefik.loadbalancer.server.port=8080"
      - "traefik.http.routers.traefik.rule=Host(`traefik.${HOSTNAME}`)"
      - "traefik.http.routers.traefik.entrypoints=web-secure"
      - "traefik.http.routers.traefik.tls.certresolver=letsencrypt"
  
  postgres:
    image: "postgres:14"
    restart: "unless-stopped"
    environment:
      POSTGRES_PASSWORD: itsasecret
      POSTGRES_USER: synapse
      POSTGRES_DB: synapse
      POSTGRES_INITDB_ARGS: "--encoding='UTF8' --lc-collate='C' --lc-ctype='C'"
    volumes:
      - "./data/postgres/data:/var/lib/postgresql/data"

  redis:
    image: "redis:latest"
    restart: "unless-stopped"

  synapse:
    image: "matrixdotorg/synapse:latest"
    restart: "unless-stopped"
    environment:
      SYNAPSE_CONFIG_DIR: "/data"
      SYNAPSE_CONFIG_PATH: "/data/homeserver.yaml"
      UID: "1000"
    
      GID: "1000"
      TZ: "America/New_York"
    volumes:
      - "./data/matrix/synapse:/data"
    labels:
      - "traefik.enable=true"
      - "traefik.http.services.synapse.loadbalancer.server.port=8008"
      - "traefik.http.routers.synapse.rule=Host(`synapse.${HOSTNAME}`)"
      - "traefik.http.routers.synapse.entrypoints=web-secure"
      - "traefik.http.routers.synapse.tls=true"
      - "traefik.http.routers.synapse.tls.certresolver=letsencrypt"

  nginx:
    image: "nginx:latest"
    restart: "unless-stopped"
    volumes:
      - "./data/matrix/nginx/matrix.conf:/etc/nginx/conf.d/matrix.conf"
      - ./data/matrix/nginx/www:/var/www/
    environment:
      HOSTNAME: matrix.${HOSTNAME}
    labels:
      - "traefik.enable=true"
      - "traefik.http.services.nginx.loadbalancer.server.port=80"
      - "traefik.http.routers.nginx.rule=Host(`matrix.${HOSTNAME}`)"
      - "traefik.http.routers.nginx.entrypoints=web-secure"
      - "traefik.http.routers.nginx.tls=true"
      - "traefik.http.routers.nginx.tls.certresolver=letsencrypt"

  element:
    image: vectorim/element-web:latest
    restart: unless-stopped
    volumes:
      - ./data/element/config.json:/app/config.json
    labels:
      - "traefik.enable=true"
      - "traefik.http.services.element.loadbalancer.server.port=80"
      - "traefik.http.routers.element.rule=Host(`element.${HOSTNAME}`)"
      - "traefik.http.routers.element.entrypoints=web-secure"
      - "traefik.http.routers.element.tls=true"
      - "traefik.http.routers.element.tls.certresolver=letsencrypt"

  rocketchat:
    image: ghcr.io/rocketchat/rocket.chat:pr-26283.official
    command: >
      bash -c
        "for i in `seq 1 30`; do
          node main.js &&
          s=$$? && break || s=$$?;
          echo \"Tried $$i times. Waiting 5 secs...\";
          sleep 5;
        done; (exit $$s)"
    restart: unless-stopped
    volumes:
      - ./uploads:/app/uploads
    environment:
      - PORT=3000
      - ROOT_URL=https://localhost:3000
      - MONGO_URL=mongodb://mongodb:27017/rocketchat?replicaSet=rs0&directConnection=true
      - MONGO_OPLOG_URL=mongodb://mongodb:27017/local?replicaSet=rs0&directConnection=true
      - REG_TOKEN=${REG_TOKEN}
    depends_on:
      - mongodb
    labels:
      - "traefik.enable=true"
      - "traefik.http.services.rc.loadbalancer.server.port=3000"
      - "traefik.http.routers.rc.rule=Host(`${HOSTNAME}`)"
      - "traefik.http.routers.rc.entrypoints=web-secure"
      - "traefik.http.routers.rc.tls=true"
      - "traefik.http.routers.rc.tls.certresolver=letsencrypt"

  mongodb:
    image: mongo:5.0
    restart: unless-stopped
    volumes:
     - ./data/mongo/db:/data/db
    command: mongod --oplogSize 128 --replSet rs0
    labels:
      - "traefik.enable=false"

  # this container's job is just run the command to initialize the replica set.
  # it will run the command and remove itself (it will not stay running)
  mongo-init-replica:
    image: mongo:5.0
    command: >
      bash -c
        "for i in `seq 1 30`; do
          mongo mongodb/rocketchat --eval \"
            rs.initiate({
              _id: 'rs0',
              members: [ { _id: 0, host: 'localhost:27017' } ]})\" &&
          s=$$? && break || s=$$?;
          echo \"Tried $$i times. Waiting 5 secs...\";
          sleep 5;
        done; (exit $$s)"
    depends_on:
      - mongo
```

6\. Finally now we can start the matrix up with`docker-compose up -d.`

### Test Rocket.Chat Matrix Federation

After setting up the matrix federation, you need to check if everything works.

To do this, you need to run the following script:

```
curl -L -s https://go.rocket.chat/i/federation-test
```

It might take a few minutes to everything to be running.

```
checkURL () {
  echo ""
  printf "Checking $URL_TO_TEST..."
  RESPONSE=$(curl -s -L $URL_TO_TEST)
  if [[ "$RESPONSE" == *"$EXPECTED_URL_SUBSTRING"* ]]; then
    echo "OK!"
  else
    echo "$URL_TO_TEST is not as expected"
    exit 1
  fi
}

# Import env vars
if [ -f "$PWD/.env" ]; then
  printf "Loading env vars...\n"
  export $(grep -v '^#' .env | xargs)
fi

if [ -z "${SERVER_HOSTNAME}" ]; then
  echo "You must run the setup script first and have a .env file on your directory"
  exit 1
fi

# Check if synapse URL is correct
URL_TO_TEST="https://synapse.$SERVER_HOSTNAME"
EXPECTED_URL_SUBSTRING="<h1>It works! Synapse is running</h1>"
checkURL

# Check if client's well known is correct
URL_TO_TEST="https://matrix.$SERVER_HOSTNAME/.well-known/matrix/client"
EXPECTED_URL_SUBSTRING="\"base_url\": \"https://matrix.$SERVER_HOSTNAME\""
checkURL

# Check if servers's well known is correct
URL_TO_TEST="https://matrix.$SERVER_HOSTNAME/.well-known/matrix/server"
EXPECTED_URL_SUBSTRING="\"synapse.$SERVER_HOSTNAME:443\""
checkURL

# Check if Element's URL is correct
URL_TO_TEST="https://element.$SERVER_HOSTNAME/"
EXPECTED_URL_SUBSTRING="<noscript>Sorry, Element requires JavaScript to be enabled.</noscript>"
checkURL

# Check if Rocket.Chat's URL is correct
URL_TO_TEST="https://$SERVER_HOSTNAME/"
EXPECTED_URL_SUBSTRING="<title>Rocket.Chat</title>"
checkURL
```

Now that you have your homeserver and Rocket.Chat ready. You can now go into Rocket.Chat and try inviting and sending a message out to a user connected with another server (Rocket.Chat Server, dendrite, synapse and etc.,) through the Matrix Protocol.
