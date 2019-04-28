# Updating to 1.0

With the release of Rocket.Chat 1.0 a few things have changed to prevent the need for breaking changes down the road.

## Oplog Required

With 1.0 we now require oplog be enabled.  Attempting to start Rocket.Chat without oplog will result in an error.

To enable you will need to connect to mongo and type `rs.initiate()`

Then for Rocket.Chat you will need to provide the MONGO_OPLOG_URL environment url.  If mongo is on the same host the environment variable will look something like this:
```
MONGO_OPLOG_URL=mongodb://localhost:27017/local?replicaSet=rs01
```

For more information [see here](https://rocket.chat/docs/installation/manual-installation/mongo-replicas/)
