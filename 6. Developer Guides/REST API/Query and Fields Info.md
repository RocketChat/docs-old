# Query, Fields, and Sort Information
Starting in version `0.49`, some of the endpoints support the query parameters `query` and `fields`.
These two fields are special in that they accept a json object.
If an invalid json object is passed, the request will fail.

## Query Parameter Information
* `query` - json object which accepts [MongoDB](https://docs.mongodb.com/manual/reference/operator/query/) query operators
* `fields` - json object with properties that have either `true` or `false` to include them or exclude them

## Query Example
To query the users which has a name that has `g` in it somewhere.

`https://localhost:3000/api/v1/users.list?query={ "name": { "$regex": "g" } }`

## Fields Example
To only return the usernames for users, you would do something like this:

`http://localhost:3000/api/v1/users.list?fields={ "username": true }`
