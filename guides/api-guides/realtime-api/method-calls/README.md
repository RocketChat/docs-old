# Method Calls

TODO: List all the calls and possible responses - as directories

Method calls are used to trigger actions based on the passed data. The response to any method call is completely asynchronous and there's no way to guarantee the order on the fulfillment of the calls. Because of that, it is really important that a `unique-id` is used on the method call since the same ID will be used on the response so the client may know the result of a call.

Example: Create a private room

Method call

```javascript
{
    "msg": "method",
    "id": "42",
    "method": "createPrivateGroup",
    "params": [ "example-private-room", [], false ]
}
```

Response

```javascript
{
    "msg": "result",
    "id": "42",
    "result": { "rid": "server-generated-room-id" }
}
```

The provided ID is the only way to recognize to which call a response is been given.

