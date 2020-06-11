# Query and Fields

Starting in version `0.49`, some of the endpoints support the query parameters `query` and `fields`. These two fields are special in that they accept a json object. If an invalid json object is passed, the request will fail.

## Query Parameter Information

* `query` - json object which accepts [MongoDB](https://docs.mongodb.com/manual/reference/operator/query/) query operators
* `fields` - json object with properties that have either `1` or `0` to include them or exclude them

## Query Example

To query the users which has a name that has `g` in it somewhere.

`https://localhost:3000/api/v1/users.list?query={ "name": { "$regex": "g" } }`

### **Note**

The allowed structure is [EJSON](https://docs.meteor.com/api/ejson.html), which is similar to JSON, except in the `Date` and `binary` fields. For query objects that use `Date` fields, you should use the structure as the example below:

`query={"_updatedAt": {"$gt": { "$date": 1542814057 } }}` or `query={"_updatedAt":{"$gt":{"$date":"2018-11-21T15:27:28.202Z"}}}`

## Fields Example

To only return the usernames for users, you would do something like this:

`http://localhost:3000/api/v1/users.list?fields={ "username": 1 }`

Top tip: Providing a `fields` value of `{"_id": false, "value": false}` will return all other fields.

