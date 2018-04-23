# Passing extra options to the Mongo driver

It's possible to provide extra [connection settings](http://mongodb.github.io/node-mongodb-native/2.2/reference/connecting/connection-settings/) to the Mongo driver by setting the `MONGO_OPTIONS` environment variable to a JSON string, e.g.:

```
export MONGO_OPTIONS='{"sslCA":"/path/to/ssl.ca","sslCert":"/path/to/ssl.crt"}'
```

You might want to do this, for example, if you're backing Rocket Chat with a TLS-secured Mongo [replica set](https://docs.mongodb.com/manual/replication/) and need to pass the paths to certificates/PEM files, etc. to connect to it.

