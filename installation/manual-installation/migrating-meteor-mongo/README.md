# Migrating database from Meteor built in MongoDB

This guide will help you migrate from the mongo server built into meteor to an external mongo server

We advise against running Rocket.Chat in production from source using the meteor command. Instead we recommend using a separate mongo database and using a compiled meteor bundle. Either our official release or your own.

Before starting make sure meteor is running.

Then run: `mongodump -h 127.0.0.1 --port 3001 -d meteor`

It'll dump the database in a folder called dump.

Then install mongodb on your system. Please see the [mongo section](../) in one of our guides for your current OS

Once Mongo is installed restore the data using: `mongorestore -d meteor dump/meteor`

If you want to use a different database, you'd take this as your opportunity to change the database name. Replacing -d meteor with your desired database name.

Then follow the remainder of the guide on [setting up Rocket.Chat](../) for your current OS.