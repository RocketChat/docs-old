# Get Rooms

This is the method call used to get all the rooms a user belongs to. It accepts a timestamp with the latest client update time in order to just send what changed since last call. If it's the first time calling, just send a `0` as date.

The `result` is an object with two fields: `update` and `remove`.

## Remove field

The `remove` field is a collection of room id identifying the rooms that were removed from the server.

## Update field

The `update` field is a collection of `room` and its content varies according to the `room type`. You can read more about the `room` object on [its own page](../../schema-definition/the-room-object.md).

## Example call

```javascript
{
    "msg": "method",
    "method": "rooms/get",
    "id": "42",
    "params": [ { "$date": 1480377601 } ]
}
```

## Response

```javascript
{
    "msg": "result",
    "id": "42",
    "result": {
        "update": [
            ... // rooms
        ],
        "remove": [
            ... // room ids
        ]
    }
}
```

