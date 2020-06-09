# Group Set Custom Fields

Sets the custom fields for the private group.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/groups.setCustomFields` | `yes` | `POST` |

## Payload

One of roomId or roomName is required.

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `euzoT67Gx6nXcn66M` | Required | The private group's id |
| `roomName` | `channel.cf.1518990680083` | Required | The private group's name |
| `customFields` | `{"company": "sell-and-more"}` | Required | The custom fields to set for the private group. |

## Example Call

```bash
curl -H "X-Auth-Token: 8h2mKAwxB3AQrFSjLVKMooJyjdCFaA7W45sWlHP8IzO" \
     -H "X-User-Id: ew28FnZqipDpvKw3R" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/groups.setCustomFields \
     -d '{"roomId": "euzoT67Gx6nXcn66M", "customFields":{"company": "sell-and-more"} }'
```

## Example Result

```javascript
{
  "group":{
    "_id":"euzoT67Gx6nXcn66M",
    "name":"channel.cf.1518990680083",
    "fname":"channel.cf.1518990680083",
    "t":"p",
    "msgs":0,
    "u":{
      "_id":"ew28FnZqipDpvKw3R",
      "username":"rocketchat.internal.admin.test"
    },
    "customFields":{
      "company":"sell-and-more"
    },
    "ts":"2018-02-18T21:51:20.091Z",
    "ro":false,
    "sysMes":true,
    "_updatedAt":"2018-02-23T11:27:01.411Z",
    "username":"rocketchat.internal.admin.test"
  },
  "success":true,
  "developerWarning":"[WARNING]: The \"usernames\" field has been removed for performance reasons. Please use the \"*.members\" endpoint to get a list of members/users in a room."
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.62.0 | Added |

