# Channel Methods
| Url | Quick Link |
| --- | --- |
| `/api/v1/channels.create` | [Channels Create Method](#channels-create-details) |

## Channels Create Details
| URL | Requires Auth | HTTP Method | Payload |
| --- | --- | --- | --- |
| `/api/v1/channels.create` | `yes` | `post` | Object: `{ name }` |

### Example Call
```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/channels.create \
     -d "name=channelname"
```

### Example Result
```json
{
   "channel": {
      "_id": "ByehQjC44FwMeiLbX",
      "name": "channelname",
      "t": "c",
      "usernames": [
         "username"
      ],
      "msgs": 0,
      "u": {
         "_id": "aobEdbYhXfu5hkeqG",
         "username": "username"
      },
      "ts": "2016-05-30T13:42:25.304Z"
   },
   "success": true
}
```