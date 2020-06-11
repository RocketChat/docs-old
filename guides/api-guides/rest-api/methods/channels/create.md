# Channel Create

Creates a new public channel, optionally including specified users. The channel creator is always included.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/channels.create` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `name` | `channelname` | Required | The name of the new channel |
| `members` | `["rocket.cat"]` | Optional   Default: `[]` | The users to add to the channel when it is created. |
| `readOnly` | `true` | Optional   Default: `false` | Set if the channel is read only or not. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/channels.create \
     -d '{ "name": "channelname" }'
```

## Example Result

```javascript
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

## Change Log

| Version | Description |
| :--- | :--- |
| 0.13.0 | Added |

