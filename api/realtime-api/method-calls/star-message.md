# Star Message

Starring messages allows a user to quickly save for future reference, or something similar, for their own personal usage.

## Requirements

| Logged In | Permission | Setting |
| :--- | :--- | :--- |
| Yes | _none_ | `Message_AllowStarring` - "Allow Message Starring" |

## Example Call

The only parameter that needs to be passed in is an object with the `_id`, `rid`, and `starred` properties. The `starred` property is a boolean and it determines whether the user is starring the message or removing the star from the message.

```javascript
{
    "msg": "method",
    "method": "starMessage",
    "id": "21",
    "params": [{
        "_id": "sBYLyaHFkMdr7LKGt",
        "rid": "QFtTnPJ4XbG634Skm",
        "starred": true || false
    }]
}
```

## Example Response

```javascript
{
    "msg": "result",
    "id": "21",
    "result": 1
}
```

## See Also:

* [Starring Messages User Guide](../../../guides/user-guides/messaging.md)

