# Docker Mongo Backup and Restore

This guide shows how you can perform backup and restore of your Rocket.Chat's mongo database in docker.

### Docker Mongo Backup

To back up your MongoDB database in docker follow these steps:

* Run the following command on your terminal to list out the label of the container running mongo

```
docker ps -a
```

You see a list of containers running, note the name of the mongo container in this case `rocketchat_mongo_1`

![List of running docker containers](<../../../../../.gitbook/assets/List of running docker containers>)

* Run this to dump the database into a binary file `db.dump`

```
docker exec <database_name> sh -c 'mongodump --archive' > db.dump
```

When successful, you should see `db.dump` file in the current directory.

### Docker Mongo Restore

To restore the backup, run the following command

```
docker exec -i <database_name> sh -c 'mongorestore --archive' < db.dump
```

{% hint style="info" %}
You can export your database dump directly to MongoDB Atlas by simply running

`mongorestore --uri mongodb+srv://<user>:<password>@cluster0.w2btl.mongodb.net --archive=db.dump`
{% endhint %}
