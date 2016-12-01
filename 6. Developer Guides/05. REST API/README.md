# Rocket Chat REST API

The Rocket Chat REST API allow you control and extend Rocket Chat.

> **This API is on BETA, feel free to test, ask us questions and submit Pull Requests!**

Our RESTful APIs should be easy to extend, and the current implementation is specifically coded to illustrate techniques required to overcome common problems.

If you're an end-user and not a dev or a tester, [create an issue](https://github.com/RocketChat/Rocket.Chat/issues/new) to request new APIs -- and consider [make a donation](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZL94ZE6LGVUSN) to the project.

> All API calls are made using curl in this doc.  However, you are free to use
> Java / Python / PHP / Golang / Ruby / Swift / Objective-C / Rust / Scala / C# or other
> programming languages for your integration client.

#### Very Important
For security reasons, if you are deploying in production, make sure you have:

* configured and only call REST APIs over HTTPS
* implement a timed authorization token expiry strategy

#### Adding permissions for the caller

The bulk register user and bulk create channel methods require the logged in user to have the following permissions:
* bulk/register - 'bulk-register-user'
* bulk/createRoom - 'bulk-create-c'

> By default, any user with the, "admin", role can execute the methods.

Users are assigned roles, and roles are assigned permissions.  Thus, to execute the above method(s), a user must have a role that is assigned the required permission(s).

> Assigning permissions must be done via the MongoDB command line until the roles & permissions UI is built.

To assign a role to a user, insert the role's name into the user's, "roles.__global_roles__", field in the users collection.
```
# replace 'someuser' and 'therolename'
db.users.update({username:'someuser'}, {$push: {'roles.__global_roles__' : 'therolename'}});
```
To assign a permission to a role, insert the role's name in the permission's, "roles", field in the rocketchat_permissions collection.
```
# replace 'therolename' and 'bulk-create-c'
db.rocketchat_permissions.update({_id:'bulk-create-c'}, {$push: {'roles' : 'therolename'}});
```

If you need to create a new role, insert it into the roles collection.
```
# replace 'therolename'
db.roles.insert({_id:'newroleid',name:'therolename'})
```
## Language specific wrappers

### Java
* [rocket-chat-rest-client](https://github.com/baloise/rocket-chat-rest-client)

## Obtaining the running Rocket.Chat version via REST API

This is the only API you can call without logging in.  It is useful to ensure that you have activated REST API properly.

```json
curl http://localhost:3000/api/version

{
   "status": "success",
   "versions": {
      "api": "0.1",
      "rocketchat": "0.5"
   }
}
```

## Logon
* requires authentication: `no`
* http method: `post`
* url: `/api/login`
* expected payload:
 * `user`: the username to use authentication as
 * `password`: the password for that user
* Notes:
 * **You will need to provide the `authToken` and `userId` for any of the authenticated methods.**

```json
curl http://localhost:3000/api/login \
     -d "user=myusername&password=mypassword"

{
  "status": "success",
  "data": {
      "authToken": "9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq",
      "userId": "aobEdbYhXfu5hkeqG"
   }
}
```

## Logout
* requires authentication: `no`
* http method: `post`
* url: `/api/logout`
* expected payload:
 * `user`: the username to use authentication as
 * `password`: the password for that user
```json
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/logout

{
   "status": "success",
   "data": {
     "message": "You've been logged out!"
   }
}
```
## Get list of public rooms
* requires authentication: `yes`
* http method: `get`
* url: `/api/publicRooms`
* expected payload:
 * `user`: the username to use authentication as
 * `password`: the password for that user
* Notes:
 * **Parse this output to translate human readable name into uuid of room to use in api**
```json
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/publicRooms

{
  "status": "success",
  "rooms": [
    {
      "_id": "GENERAL",
      "usernames": [
        "admin",
        "sing"
      ],
     "ts": "2015-07-24T14:35:23.542Z",
     "t": "c",
      "other fields": "other fields ...."
```
## Join a room
* requires authentication: `yes`
* http method: `post`
* url: `/api/rooms/<room uuid>/join`
* expected payload:
 * `user`: the username to use authentication as
 * `password`: the password for that user
```json
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/rooms/x4pRahjs5oYcTYu7i/join \
     -d "{}"

{
   "status": "success"
}
```
## Leave a room
* requires authentication: `yes`
* http method: `post`
* url: `/api/rooms/<room uuid>/leave`
* expected payload:
 * `user`: the username to use authentication as
 * `password`: the password for that user
```json
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/rooms/x4pRahjs5oYcTYu7i/leave \
     -d "{}"

 {
   "status": "success"
 }
```

## Get all messages in a room
* requires authentication: `yes`
* http method: `get`
* url: `/api/publicRooms`
* expected payload:
 * `user`: the username to use authentication as
 * `password`: the password for that user
```json
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
   http://localhost:3000/api/rooms/x4pRahjs5oYcTYu7i/messages

 {
    "status": "success",
    "messages": [
      {
        "_id": "apr5LTtj6ACYEFAJi",
        "rid": "x4pRahjs5oYcTYu7i",
        "msg": "We don't play games with your data.",
        "ts": "2015-07-27T15:25:43.549Z",
         "u": {
           "_id": "GaRouhq7BFWz2tSJd",
           "other fields": "other fields ...."
```
## Sending a message
* requires authentication: `yes`
* http method: `post`
* url: `/api/rooms/<room uuid>/post`
* expected payload:
 * `user`: the username to use authentication as
 * `password`: the password for that user
 * `message` : the message you wish to send
```json
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "Content-Type: application/json" \
     -X POST \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
        http://localhost:3000/api/rooms/x4pRahjs5oYcTYu7i/send \
     -d "{ \"msg\" : \"OK\" }"

{
  "status": "success"
}
```

## Create a channel
```json
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/channels.create \
     -d "name=channelname"

{"channel":{"_id":"ByehQjC44FwMeiLbX","name":"channelname","t":"c","usernames":["username"],"msgs":0,"u":{"_id":"aobEdbYhXfu5hkeqG","username":"username"},"ts":"2016-05-30T13:42:25.304Z"},"success":true}
```

## Create a user
```json
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/users.create \
     -d '{"name": "name", "email": "email@user.tld", "password": "anypassyouwant", "username": "uniqueusername", "customFields": { "twitter":"userstwitter" } }'

{"user":{"_id":"BsNr28znDkG8aeo7W","createdAt":"2016-09-13T14:57:56.037Z","services":{"password":{"bcrypt":"$2a$10$5I5nUzqNEs8jKhi7BFS55uFYRf5TE4ErSUH8HymMNAbpMAvsOcl2C"}},"username":"uniqueusername","emails":[{"address":"email@user.tld","verified":false}],"type":"user","status":"offline","active":true,"roles":["user"],"_updatedAt":"2016-09-13T14:57:56.175Z","name":"name","customFields":{"twitter":"userstwitter"}},"success":true}
```

## Update a user
```json
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/user.update \
     -d '{"userId": "", "data": { "name": "new name", "email": "newemail@user.tld" }'

{"user":{"_id":"BsNr28znDkG8aeo7W","createdAt":"2016-09-13T14:57:56.037Z","services":{"password":{"bcrypt":"$2a$10$5I5nUzqNEs8jKhi7BFS55uFYRf5TE4ErSUH8HymMNAbpMAvsOcl2C"}},"username":"uniqueusername","emails":[{"address":"newemail@user.tld","verified":false}],"type":"user","status":"offline","active":true,"roles":["user"],"_updatedAt":"2016-09-13T14:57:56.175Z","name":"new name","customFields":{"twitter":"userstwitter"}},"success":true}
```

Rocket.Chat's real-time messaging API is a thin semantics layer on top of [Meteor's DDP](https://www.meteor.com/ddp).   To access Rocket.Chat's internal message streaming firehose directly from an external client application:

```javascript
// Connect to Rocket.Chat via DDP
connection = DDP.connect('http://localhost:3000');

//// LISTEN EVENT
// Create a new collection to monitor typing events in remote connection
collection = new Meteor.Collection('stream-typing', connection);

// Subscribe to typing events
connection.subscribe('stream-typing');

// Handle events on add of collection and reserve an especial item of
// type subscriptionId to be used with Meteor Calls
collection.find({}).observe({
  added: function(item){
    if (item.type == 'subscriptionId') {
      window.subscriptionId = item._id;
    }
    console.log(item)
  }
});


//// EMIT EVENT
// Call stream on connection passing subscription id and arguments
// first argument must be event name, stream-typing is the stream name
connection.call('stream-typing', subscriptionId, ['typing', {room: 'GENERAL', username: 'rodrigo.rocket.team', start: true}]);
```
