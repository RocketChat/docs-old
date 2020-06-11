# Channel Set Custom Fields

Sets the custom fields for the channel.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/channels.setCustomFields` | `yes` | `POST` |

## Payload

One of roomId or roomName is required.

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `GENERAL` | Required | The channel's id |
| `roomName` | `general` | Required | The channel's name |
| `customFields` | `{"organization": "tra-la-la"}` | Required | The custom fields to set for the channel. |

## Example Call

```bash
curl -H "X-Auth-Token: 8h2mKAwxB3AQrFSjLVKMooJyjdCFaA7W45sWlHP8IzO" \
     -H "X-User-Id: ew28FnZqipDpvKw3R" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/channels.setCustomFields \
     -d '{"roomId": "GENERAL", "customFields":{"organization": "tra-la-la"} }'
```

## Example Result

```javascript
{
  "channel":{
    "_id":"GENERAL",
    "ts":"2018-02-18T19:41:02.875Z",
    "t":"c",
    "name":"general",
    "msgs":236,
    "default":true,
    "_updatedAt":"2018-02-23T11:09:05.973Z",
    "lm":"2018-02-18T22:18:20.288Z",
    "customFields":{
      "organization":"tra-la-la"
    }
  },
  "success":true,
  "developerWarning":"[WARNING]: The \"usernames\" field has been removed for performance reasons. Please use the \"*.members\" endpoint to get a list of members/users in a room."
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.62.0 | Added |

