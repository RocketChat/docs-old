# Supported Mongo Versions

Rocket.Chat currently requires MongoDB from version 3.2 and higher. We recommend using version 4.0.

**Note** <br>
Without mongodb version we can't ensure you are running a compatible version.
If you are running your mongodb with auth enabled and an **user different from admin**
you may need to grant permissions for this user to check cluster data. <br>
You can do it via mongo shell running the following command replacing the string _YOUR_USER_ by the correct user\'s name:

```
db.runCommand({ grantRolesToUser: "YOUR_USER" , roles: [{role: "clusterMonitor", db: "admin"}]})
```

## Supported Storage Engines

The Storage engine recommended for Rocket.Chat is [WiredTiger](https://docs.mongodb.com/manual/core/wiredtiger/) since MMAPv1 is deprecated in 4.0 version and removed in 4.2 version.
