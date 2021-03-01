# Get

Retrieves an integration by id.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/integrations.get` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `integrationId` | `ByehQjC44FwMeiLbX` | Required | The integration's id |
| `createdBy` | `fn5u45ui34fvb` | Optional | The user's id who created the integration |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/integrations.get?integrationId=ByehQjC44FwMeiLbX
```

## Example Result

```javascript
{
  "history": [
    {
      "_id": "f2sd51f65sd1f65sd1fs",
      "type": "outgoing-webhook",
      "step": "after-http-call",
      "integration": {
        "event": "roomJoined",
        "enabled": true,
        "username": "rocket.cat",
        "channel": [
          "#general"
        ],
        "name": "testeytyrtyrtyrtyer",
        "triggerWords": [
          "!webhhok"
        ],
        "urls": [
          "http://localhost:3000/admin/integrations/outgoing"
        ],
      },
      "event": "roomJoined",
      "_createdAt": "2019-11-29T14:15:27.518Z",
      "_updatedAt": "2019-11-29T14:15:27.606Z",
      "data": {
        "token": "xMxa3o95xzJSpbyEjz4Z72LJ",
        "bot": false,
        "timestamp": "2019-11-29T14:15:27.522Z",
        "channel_id": "GENERAL",
        "channel_name": "general",
        "user_id": "8pdja8tTb2s2XbvkQ",
        "user_name": "dsds",
        "user": {
          "_id": "8pdja8tTb2s2XbvkQ",
          "createdAt": "2019-11-29T14:14:36.936Z",
          "username": "dsds",
          "emails": [
            {
              "address": "ddsds@d.com",
              "verified": false
            }
          ],
          "type": "user",
          "status": "offline",
          "active": true,
          "_updatedAt": "2019-11-29T14:15:15.677Z",
          "roles": [
            "user"
          ],
          "name": "dsdsds",
          "requirePasswordChange": true,
          "settings": {}
        },
        "room": {
          "_id": "GENERAL",
          "ts": "2019-10-17T22:56:31.861Z",
          "t": "c",
          "name": "general",
          "usernames": [],
          "msgs": 125,
          "usersCount": 45,
          "default": true,
          "_updatedAt": "2019-11-29T14:13:14.752Z",
          "lastMessage": {
            "_id": "6CiNGq8FPEYCfceNL",
            "rid": "GENERAL",
            "msg": "!webhook",
            "ts": "2019-11-29T14:13:14.645Z",
            "u": {
              "_id": "CaevAPDbXN252kyXa",
              "username": "marcos.defendi",
              "name": "Marcos Defendi"
            },
            "_updatedAt": "2019-11-29T14:13:14.705Z",
            "mentions": [],
            "channels": []
          },
          "lm": "2019-11-29T14:13:14.645Z",
          "jitsiTimeout": "2019-10-22T19:20:28.404Z"
        }
      },
      "url": "http://localhost:3000/admin/integrations/outgoing",
   }
  ],
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.4.0 | Added |

