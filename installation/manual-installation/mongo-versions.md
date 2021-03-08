# Supported Mongo Versions

Rocket.Chat currently requires MongoDB from version 3.6 and higher. [Support of MongoDB 3.2 will be removed from Rocket.Chat 2.0.0 and MongoDB 3.4 will be removed from Rocket.Chat 4.x](https://github.com/RocketChat/Rocket.Chat/pull/15199). We recommend using version 3.6.9.

**Note** Without mongodb version we can't ensure you are running a compatible version. If you are running your mongodb with auth enabled and an **user different from admin** you may need to grant permissions for this user to check cluster data. You can do it via mongo shell running the following command replacing the string _YOUR\_USER_ by the correct user\'s name:

```text
db.runCommand({ grantRolesToUser: "YOUR_USER" , roles: [{role: "clusterMonitor", db: "admin"}]})
```

## Supported Storage Engines

The Storage engine recommended for Rocket.Chat is [WiredTiger](https://docs.mongodb.com/manual/core/wiredtiger/).

