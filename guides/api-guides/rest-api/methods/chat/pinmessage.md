# Pins Message

Pins a chat message to the message's channel.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/chat.pinMessage` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `messageId` | `7aDSXtjMA3KPLxLjt` | Required | The message id to pin. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: Z3cpiYN6CNK2oXWKv" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/chat.pinMessage \
     -d '{ "messageId": "7aDSXtjMA3KPLxLjt" }'
```

## Example Result

```javascript
{
    "message": {
        "t": "message_pinned",
        "rid": "GENERAL",
        "ts": "2017-09-27T20:39:57.921Z",
        "msg": "",
        "u": {
            "_id": "Z3cpiYN6CNK2oXWKv",
            "username": "graywolf336"
        },
        "groupable": false,
        "attachments": [
            {
                "text": "Hello",
                "author_name": "graywolf336",
                "author_icon": "/avatar/graywolf336?_dc=0",
                "ts": "2017-09-27T19:36:01.683Z"
            }
        ],
        "_updatedAt": "2017-09-27T20:39:57.921Z",
        "_id": "hmzxXKSWmMkoQyiAd"
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.59.0 | Added |

