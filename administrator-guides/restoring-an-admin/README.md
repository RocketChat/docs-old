# Restoring an Admin User

You might accidently lost access to an important admin user (or the only admin in the server) and need to restore it without using another admin user. This guide will help you in this process.

_Note: To do this, you will need access to the database_

## Finding the database

### Docker based installations

Open Mongo shell within Mongo container

Change into docker-compose directory (where your `docker-compose.yml` is located):

```bash
cd /opt/docker/Rocket.Chat
docker-compose run mongo bash
```

or run

```
docker exec -it -u root mongo-image /bin/bash
```

Make sure to replace `mongo` with your MongoDB container name in case you use a different one.

Login to mongo shell using :

```
mongo
```

On the Mongo shell:

```sql
use rocketchat
```

Make sure to replace `rocketchat` with your actual Mongo database. If you're not sure how it's called either check your `docker-compose.yml` file or run:

```sql
show dbs
```

### Ubuntu Snaps

Connect to MongoDB:

```bash
sudo rocketchat-server.mongo
```

Select Rocket.Chat Database:

```sql
use parties
```

## Updating the admin password

You can either use a one time access token (that will require the user to change his password):

```javascript
db.getCollection('users').update({username:"administrator"}, {$set: { "services":{"loginToken":{"token":"some-token-id-that-you-will-use-to-login-once"}}, "requirePasswordChange":true} })
```

Then access `http://{your server url}/login-token/some-token-id-that-you-will-use-to-login-once` to login

or you can update the admin password to `12345`

```javascript
db.getCollection('users').update({username:"administrator"}, { $set: {"services" : { "password" : {"bcrypt" : "$2a$10$n9CM8OgInDlwpvjLKLPML.eizXIzLlRtgCh3GRLafOdR9ldAUh/KG" } } } })
```

_Replace `administrator` with the admin username in question._

Make sure to restart your application container in case the new password is not accepted yet.

### Reset user role to "admin"

```javascript
db.users.update({username:"administrator"}, {$set: {'roles' : [ "admin" ]}})
```

Again, make sure to replace `administrator` with the admin username in question.
