# Get One

Get the subscription by room id.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/subscriptions.getOne` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The channel's id |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/subscriptions.getOne?roomId=5of4weEXaH7yncxz9 \
```

## Example Result

```javascript
{
    "subscription": {
        "_id": "Rd8qisB7G4tF4Fibu",
        "open": true,
        "alert": false,
        "unread": 0,
        "userMentions": 0,
        "groupMentions": 0,
        "ts": "2018-03-12T17:52:13.041Z",
        "rid": "5of4weEXaH7yncxz9",
        "name": "test",
        "fname": "test",
        "customFields": {},
        "t": "p",
        "u": {
            "_id": "47cRd58HnWwpqxhaZ",
            "username": "rocket.cat",
            "name": null
        },
        "ls": "2018-03-12T17:52:13.041Z",
        "_updatedAt": "2018-03-13T19:36:27.696Z",
        "roles": [
            "owner"
        ],
        "disableNotifications": false,
        "emailNotifications": "nothing",
        "audioNotificationValue": "beep",
        "desktopNotificationDuration": 2,
        "audioNotifications": "all",
        "mobilePushNotifications": "mentions",
        "f": false,
        "meta": {
            "revision": 0,
            "created": 1521051029632,
            "version": 0
        }
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.63.0 | Added |

