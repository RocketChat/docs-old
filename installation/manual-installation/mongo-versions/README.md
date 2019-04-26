# Supported Mongo Versions

Rocket.Chat currently requires MongoDB from version 3.2 and higher. We recommend using version 3.6.9.

## Supported Storage Engines

The Storage engine recommended for Rocket.Chat is [MMAPv1](https://docs.mongodb.com/manual/core/mmapv1/).

We are currently testing [WiredTiger](http://www.wiredtiger.com/) for better performance with larger servers, but for now you should stick to MMAPv1 for large installs.
