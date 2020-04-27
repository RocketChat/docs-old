# Channel Invite

Adds a user to the channel.

| URL                       | Requires Auth | HTTP Method |
| :------------------------ | :------------ | :---------- |
| `/api/v1/channels.invite` | `yes`         | `POST`      |

## Payload

| Argument | Example             | Required | Description                  |
| :------- | :------------------ | :------- | :--------------------------- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The channel's id             |
| `userId` | `nSYqWzZ4GsKTX4dyK` | Required | The user id of who to invite |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/channels.invite \
     -d '{ "roomId": "ByehQjC44FwMeiLbX", "userId": "nSYqWzZ4GsKTX4dyK" }'
```

## Example Result

```json
{
  "channel": {
    "_id": "ByehQjC44FwMeiLbX",
    "ts": "2016-11-30T21:23:04.737Z",
    "t": "c",
    "name": "testing",
    "usernames": [
      "testing",
      "testing1"
    ],
    "msgs": 1,
    "_updatedAt": "2016-12-09T12:50:51.575Z",
    "lm": "2016-12-09T12:50:51.555Z"
  },
  "success": true
}
```

## Change Log

| Version | Description |
| :------ | :---------- |
| 0.48.0  | Added       |
