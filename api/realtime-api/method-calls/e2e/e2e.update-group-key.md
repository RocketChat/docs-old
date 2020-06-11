# Update Group Key

This method updates the user subscription to save the E2E key

## Requirements

| Logged In | Permission | Setting |
| :--- | :--- | :--- |
| Yes | _none_ | _none_ |

## Payload

1. String - the room id of the subscription
2. String - the user id of the subscription
3. String - the key that will be saved on the subscription

## Example Call

```javascript
{
    "msg": "method",
    "method": "e2e.updateGroupKey",
    "id": "8",
    "params": [
        "rid",
        "uid",
        "key"
    ]
}
```

## Example Response

```javascript
{
    "msg": "result",
    "id": "8",
    "result": {
        "_id":"hBGYqzTeAkiMvpM8S",
        "open":true,
        "alert":false,
        "unread":0,
        "userMentions":0,
        "groupMentions":0,
        "ts":{"$date":1542114790461},
        "rid":"iKPufpLHcHaQLF6Bv",
        "name":"a1a",
        "fname":"a1a",
        "customFields":{},
        "t":"p",
        "u":{
            "_id":"AAoQ7b25AAXcJQryY",
            "username":"usuario3-1",
            "name":null
        },
        "ls":{
            "$date":1542114790461
        },
        "_updatedAt":{
            "$date":1542114878329
        },
        "roles":["owner"],
        "E2EKey":"eyJhbGciOiJBT4JwSCA+9LNyOPfSW94DhcJNgUpzfXsNABiHEV7W01UwwDf6WC5wfHa0JPZATK9QOrVZbhqufXhYOsWO1/vYocX5gfnSFVDWXCsp4aX4XjfydVh0CYB54VUgL5VJwGGlvErTAVJrWblSxuz0xaWLXiu2NpXJ6r6q2xJClt59SDVImUzCdAzmYFMmwAnHbLHZLqyJIB0fXiMDb+WH6dv9I5PMOcTApw1YJkSrsSnbPOQFDTH3i+aQvyryu9E7BMAMp0D1ZDy+uX0gCAyw4kiIIUU1l7mm50BB+TV84yv3TH55v3G/muHxnXjZRyo/SG0VOZCGqgO0J9L0fhyrxyzT9g=="
    }
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.70.0 | Added |

