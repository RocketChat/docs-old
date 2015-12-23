## Deprecation Notice
This article is no longer applicable to current releases of Rocket.Chat. As of most recent versions, the first user who was(is) created will be made an Admin so this isn't required if you are running an up to date version.
  
## Introduction
This is a one-time process to grant Admin Rights to the first admin. After that, you can use the Administration page to grant and manage Admin Rights.

## Execute Rocket.Chat on a terminal

Just `cd` into the Rocket.Chat folder and

    $ meteor 

Now open Rocket.Chat on your browser (usually at `http://localhost:3000`) and register your first user. For the sake of this guide, we'll create the user `rocket`

## On a different terminal window, open the mongodb client

Again `cd` into the Rocket.Chat folder and

    $ meteor mongo

## Find the user you've created
We want the user id that will receive admin rights:

    db.users.find({ username: 'rocket' });

This will print the object:

```json
{ "_id" : "wtZXffQZwvNXMzcTm", "createdAt" : ISODate("2015-09-03T01:04:09.681Z"), "services" : { "password" : { "bcrypt" : "$2a$10$iGEjzfVHOYCTVy6AF5wsc.EfYhufWhaF1rgCGaeAjwEIWbxDFLt4m" }, "email" : { "verificationTokens" : [ { "token" : "G-HE3IoSdjEaFJI63SaDb7upqN4bJbKTPpBRfpUwMSY", "address" : "rocket@rocket.chat", "when" : ISODate("2015-09-03T01:04:09.717Z") } ] }, "resume" : { "loginTokens" : [ { "when" : ISODate("2015-09-03T01:04:09.907Z"), "hashedToken" : "e0eMnJnhxZDExxgZbYOFL/GZ1xlnO4mXZwLYkm2JNJw=" } ] } }, "emails" : [ { "address" : "rocket@rocket.chat", "verified" : false } ], "status" : "online", "active" : true, "name" : "teste", "lastLogin" : ISODate("2015-09-03T01:09:33.504Z"), "statusConnection" : "online", "utcOffset" : -3, "username" : "rocket" }
```
Using the ID we just found, let's grant this user admin rights:

    db.users.update( { "_id" : "wtZXffQZwvNXMzcTm" }, { $set: { "roles" : { "__global_roles__" : [ "admin" ] } } } )

## Log out and Log into Rocket.Chat 

Test if you're an admin by visiting `http://localhost:3000/admin`.

That's it.
