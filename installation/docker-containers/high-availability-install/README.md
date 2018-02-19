# Guide to install Rocket.Chat as HA with mongodb replicaset as backend

## Install MongoDB Replicaset

- Use <https://medium.com/@gargar454/deploy-a-mongodb-cluster-in-steps-9-using-docker-49205e231319#.8dfln7n8c> to setup the mongodb replicaset
- Create a user called oploguser with rights on local oplog database:
    `db.createUser({user: "oploguser", pwd: "password", roles: [{role: "read", db: "local"}]})`
- Create rocket user to authenticate with rocketchat database:
    `db.createUser({user: "rocket", pwd: "password", roles: [{role: "readWrite", db: "rocketchat"}]})`

## Create rocket.chat docker container

- Use example docker-compose.yaml in repo
- Fill the INSTANCE_IP env with the local ip of the docker-host (in a 3 node setup this is unique on every host)
- Fill the passwords from rocket and oplogger
- Change the IP of every host in the example docker-compose.yaml -> extra_hosts inserts host entrys so each rocketchat-container could resolve the others by the name
- Be sure that the instances could communicate on port 3000 with each other, this is important to see messages on other hosts directly

```
rocketchat:
    image: rocketchat/rocket.chat:latest
    environment:
        - PORT=3000
        - ROOT_URL=https://chat.domain.de
        - MONGO_URL=mongodb://rocket:password@rocket-1:27017,rocket-2:27017,rocket-3:27017/rocketchat?replicaSet=rs0&readPreference=nearest&w=majority
        - MONGO_OPLOG_URL=mongodb://username:password@rocket-1:27017,rocket-2:27017,rocket-3:27017/local?authSource=admin&replicaSet=rs0
        - INSTANCE_IP=<ip of the local instance>
    ports:
        - 3000:3000
    extra_hosts:
        - "rocket-1:10.250.250.13"
        - "rocket-2:10.250.250.14"
        - "rocket-3:10.250.250.17"
```

### Create Loadbalancer

- Now setup up a reverse proxy on each host to terminate ssl on each rocket.chat node (use example apache2 config in repo) or terminate ssl on the loadbalancer, this is up to you
- Setup a loadbalancer to reach each instance on 443 or 3000 (depends on the choice above)

```
<VirtualHost *:443>
    ServerName chat.domain.de
    ServerAdmin webmaster@domain.de

    #Log
    ErrorLog ${APACHE_LOG_DIR}/error-chat.log
    CustomLog ${APACHE_LOG_DIR}/access-chat.log combined
    #SSL
    SSLEngine on
    SSLCertificateFile      /etc/apache2/ssl/cert.public
    SSLCertificateKeyFile /etc/apache2/ssl/cert.private
    SSLCertificateChainFile /etc/apache2/ssl/intermediate.crt
    #SSL Tuning
    SSLCompression off
    SSLProtocol All -SSLv2 -SSLv3
    SSLCipherSuite EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH
    #HSTS
    Header always set Strict-Transport-Security "max-age=15768000; preload"

    #Proxy
    SSLProxyEngine On
    ProxyPreserveHost On
    ProxyPassMatch ^/sockjs/(.*)/websocket ws://127.0.0.1:3000/sockjs/$1/websocket
    ProxyPass / http://127.0.0.1:3000/
    ProxyPassReverse / http://127.0.0.1:3000/
</VirtualHost>
```
