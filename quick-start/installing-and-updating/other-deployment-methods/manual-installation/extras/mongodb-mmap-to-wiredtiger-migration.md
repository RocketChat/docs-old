---
description: Migrate your existing mmap based MongoDB instance into a wiredTiger manually.
---

# MongoDB mmap to wiredTiger migration

Starting with the major release 4.X.Y of Rocket.Chat, MongoDB has to be setup with a _WiredTiger_ storage engine rather than the deprecated _mmapv1_ one. This is mandatory, if you plan to upgrade to one of the future Rocket.Chat versions and has to be prepared before initiating the application upgrade.

If you are using a Docker setup, [click here to find an alternative article](https://docs.rocket.chat/installation/docker-containers/mongodb-mmap-to-wiredtiger-migration) in our docs about migration.

## Requirements

* MongoDB instance with _mmap_ storage engine

## Quick usage

1. Stop running Rocket.Chat
2. Create a database dump from the _mmapv1_ MongoDB \(also to have a backup in place\)
3. Stop _mmapv1_ MongoDB service, drop existing data files, start up with _wiredTiger_
4. Import the dump into the new _wiredTiger_ MongoDB
5. Start Rocket.Chat

## Detailed usage

1. Stop Rocket.Chat service to ensure a consistent database dump:

   ```text
   systemctl stop rocketchat
   ```

2. Create a database dump from the current _mmapv1_ MongoDB:

   ```text
   mongodump --archive=~/mmapdump.gz --gzip
   ```

3. Stop MongoDB service:

   ```text
   systemctl stop mongod
   ```

4. Delete the _mmapv1_ based data files of your existing MongoDB:

   ```text
   rm -rf /var/lib/mongodb/*
   ```

5. Adjust MongoDB configuration to make use of _wiredTiger_ storage engine:

   ```text
   vi /etc/mongod.conf
   ```

   ```text
   [...]
   engine: wiredTiger
   [...]
   ```

6. Start MongoDB service again:

   ```text
   systemctl start mongod
   ```

7. If running with a Replica-Set in your mongo.conf initialize replica set

   ```text
   mongo --eval 'rs.initiate()'
   ```

8. Import dump back into \(_wiredTiger_\) MongoDB:

   ```text
   mongorestore --drop --archive=~/mmapdump.gz --gzip --noIndexRestore
   ```

9. Repair databases and rebuild indices:

   ```text
   mongo --eval 'db.repairDatabase()'
   ```

10. Start Rocket.Chat service:

    ```text
    systemctl start rocketchat
    ```

