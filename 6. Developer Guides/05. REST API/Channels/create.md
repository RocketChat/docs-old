---
order: 20
---

# Channel Create
Creates a new public channel, optionally including users.

| URL | Requires Auth | HTTP Method | Payload |
| --- | --- | --- | --- |
| `/api/v1/channels.create` | `yes` | `post` | Object: `{ "name": "channelname", "members": ["usernames"] }` |

## Example Call
```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/channels.create \
     -d '{ "name": "channelname" }'
```

## Example Result
```json
{
   "channel": {
      "_id": "ByehQjC44FwMeiLbX",
      "name": "channelname",
      "t": "c",
      "usernames": [
         "example"
      ],
      "msgs": 0,
      "u": {
         "_id": "aobEdbYhXfu5hkeqG",
         "username": "example"
      },
      "ts": "2016-05-30T13:42:25.304Z"
   },
   "success": true
}
```