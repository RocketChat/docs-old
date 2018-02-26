# Migrating database from Meteor built in MongoDB

This is a guide to migrate a manual installation database that is using the mongo database that comes built in meteor to an external mongo data base.

We advise against using meteor's built in mongo on a production environment due performance reasons.

Before starting make sure meteor is running.

Then run: `mongodump -h 127.0.0.1 --port 3001 -d meteor`

It'll dump the database in a folder called dump.

Then install mongodb on your system. Please see the [mongo section](../ubuntu/) in one of our guides

Once Mongo is installed restore the data using: `mongorestore -d meteor dump/meteor`

If you want to use a different database, you'd take this as your opportunity to change the database name. Replacing -d meteor with your desired database name.

Then follow the remainder of the guide on [setting up Rocket.Chat](../) for your current OS.