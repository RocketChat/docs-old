# Configure a replica set for MongoDB

Rocket.Chat uses the [MongoDB replica set](http://docs.mongodb.org/manual/replication/) **OPTIONALLY** to improve performance via Meteor Oplog tailing.

To configure the replica set:

## For older MongoDB versions (2.4 and below)

Append `replSet=rs01` into `mongod.conf` file:

```bash
echo replSet=rs01 | sudo tee -a /etc/mongod.conf
```

## For new MongoDB versions (2.6 and above)

Using YAML syntax add this section into `mongod.conf`:

```bash
echo -e "replication:\n  replSetName: \"rs01\"" | sudo tee -a /etc/mongod.conf
```

## Restart MongoDB and inititate the replica set

Restart MongoDB service:

```
sudo systemctl restart mongod
```

Start the MongoDB shell and initiate the replica set:

```
mongo
> rs.initiate()
```

The output of the command should look like this:

```
{
    "info2" : "no configuration specified. Using a default configuration for the set",
    "me" : "127.0.0.1:27017",
    "ok" : 1,
    "operationTime" : Timestamp(1538772048, 1),
    "$clusterTime" : {
        "clusterTime" : Timestamp(1538772048, 1),
        "signature" : {
            "hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
            "keyId" : NumberLong(0)
        }
    }
}
rs01:SECONDARY>
```

Note the "ok" value should be 1.  Any other value, i.e. 93, means something is wrong.

Hit enter, you should see your prompt turn into `rs01:PRIMARY>`, this indicates the replica set is being used. Type exit to get back to your regular shell:

```
rs01:PRIMARY> exit
bye
```

Depending on your network settings, including /etc/hosts and DNS, if you have configured Rocket.Chat to use localhost:27017 you may see an error similar to this:

`[conn1] created this configuration for initiation : { _id: "rs0", version: 1, members: [ { _id: 0, host: "test:27017" } ] }`

rs.initiate() may be defaulting to the host name e.g. 'test'

You can force a different hostname as follows:

```
rs.initiate({ _id: 'rs01', members: [ { _id: 0, host: 'localhost:27017' } ]})
```

You should get a response similar to:

```
> rs.initiate({ _id: 'rs01', members: [ { _id: 0, host: 'localhost:27017' } ]})
{ "ok" : 1 }
rs0:OTHER>
```

## Reconfigure and restart Rocket.Chat service

After you configured  replica set, you **MUST** add the `MONGO_OPLOG_URL` environment variable to the service definition and restart Rocket.Chat server.

In CentOS open file `/usr/lib/systemd/system/rocketchat.service`

In Ubuntu or Debian open file `/lib/systemd/system/rocketchat.service`

and add this to the Environment line:

```
MONGO_OPLOG_URL=mongodb://localhost:27017/local?replSet=rs01
```

Reload systemd state and restart Rocket.Chat:

```
sudo systemctl daemon-reload && sudo systemctl restart rocketchat
```
