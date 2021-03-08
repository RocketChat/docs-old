# User Presence

Used to set the user presence status. There are two ways to use this call; to set the default status and to set a temporary status.

There are four different statuses available:

* `online`
* `busy`
* `away`
* `offline`

## Setting the default status

In order to set the default status we need to call the `UserPresence:setDefaultStatus` method passing the status in the parameters of the call.

Example call \(setting the user presence to `online`\):

```javascript
{
    "msg": "method",
    "method": "UserPresence:setDefaultStatus",
    "id": "42",
    "params": [ "online" ]
}
```

## Setting a temporary status

Setting a temporary status requires a call to `UserPresence:{status}` with empty params. Only `away` and `online` are accepted. This method call is useful when the client identifies that the user is not using the application \(and therefore away\) and when he got back.

Example call \(setting the user presence to `away`\):

```javascript
{
    "msg": "method",
    "method": "UserPresence:away",
    "id": "42",
    "params":[]
}
```

