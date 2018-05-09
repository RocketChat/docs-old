# Passing extra options to the Mongo driver

It's possible to provide extra [connection settings](http://mongodb.github.io/node-mongodb-native/2.2/reference/connecting/connection-settings/) to the Mongo driver by setting the `MONGO_OPTIONS` environment variable to a JSON string, e.g.:

```
# we need to pass the contents of PEMs, etc in a format compatible with JSON, so add '\n' to the end of each line.
export TLS_CRT=$(cat /pems/tls.crt | awk '{printf "%s\\n",$0} END {print ""}')
export PEM=$(cat /pems/mongo.pem | awk '{printf "%s\\n",$0} END {print ""}')
export KEY=$(cat /pems/mongo.key | awk '{printf "%s\\n",$0} END {print ""}')
# now insert all the credentials into the JSON OPTIONS string
export MONGO_OPTIONS='{"sslCA":["'${TLS_CRT}'"],"sslCert":"'${PEM}'","sslKey":"'${KEY}'"}'
```

You might want to do this, for example, if you're backing Rocket Chat with a TLS-secured Mongo [replica set](https://docs.mongodb.com/manual/replication/) and need to pass certificates/PEM files, etc. to connect to it.

