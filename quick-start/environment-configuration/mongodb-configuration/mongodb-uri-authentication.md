# MongoDB URI Authentication

The connection between Rocket.Chat and MongoDB instance is achieved using a [MongoDB Connection String URI](https://www.mongodb.com/docs/manual/reference/connection-string/). MongoDB authentication is done with the username and password.

Adding the following snippet in your `env` does the trick.

```
MONGO_URL=mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
```

In your container, passing in `MONGO_URL` and `MONGO_OPLOG_URL` with the right values for connection.

{% hint style="info" %}
Depending on the password you're using, you might need to escape some characters, for example.. Please take a look at MongoDB documentation [https://docs.mongodb.com/manual/reference/connection-string/](https://docs.mongodb.com/manual/reference/connection-string/)
{% endhint %}

Your `docker-compose.yml` file should look like this

```
environment:
      - "MONGO_URL=mongodb://rctestuser:mymongopassword@mongo:27017/rocketchat?authSource=admin"
      - "MONGO_OPLOG_URL=mongodb://rctestuser:mymongopassword@mongo:27017/local?authSource=admin"
```

If using `docker run`, it should look like this:

```
docker run \                                                                                                                                                                                                                   -e "MONGO_URL=mongodb://rctestuser:mymongopassword@mongo:27017/rocketchat?authSource=admin" \
-e "MONGO_OPLOG_URL=mongodb://rctestuser:mymongopassword@mongo:27017/local?authSource=admin" \
rocketchat/rocket.chat:X.X.X
```

