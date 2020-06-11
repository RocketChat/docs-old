# Create Direct Message

Prior to sending a direct message to a user, a direct message should be created. This will return a roomID which you can then use to send future messages.

The only parameter you need to send is the desired target username as follows:

```javascript
{
    "msg": "method",
    "method": "createDirectMessage",
    "id": "42",
    "params": ["username-goes-here"]
}
```

The response is as follows:

```javascript
{
    "msg": "result",
    "id": "42",
    "result": {
        "rid": "room-id-would-be-here"
    }
}
```

## Notes

Making this call additional times, if a room has already been established, does not result in an error. In addition, the same roomID is returned. This means it's safe to use this method to obtain the roomID every time prior to making calls to loadHistory.

