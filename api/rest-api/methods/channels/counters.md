# Channel Counters

Gets channel counters.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/channels.counters` | `yes` | `GET` |

## Payload

One of roomId or roomName is required.

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `GENERAL` | Required | The channel's id |
| `roomName` | `general` | Required | The channel's name |
| `userId` | `RtycPC29hqLJfT9xj` | Optional | Counters for provided user id \(need to have a view-room-administration right for calling user\) |

## Example Call

```bash
curl -H "X-Auth-Token: 8h2mKAwxB3AQrFSjLVKMooJyjdCFaA7W45sWlHP8IzO" \
     -H "X-User-Id: ew28FnZqipDpvKw3R" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/channels.counters?roomId=GENERAL
```

## Example Result

```javascript
{
  "joined":true,
  "members":78,
  "unreads":2,
  "unreadsFrom":"2018-02-23T17:15:51.907Z",
  "msgs":304,
  "latest":"2018-02-23T17:17:03.110Z",
  "userMentions":0,
  "success":true
}

where:

joined - boolean flag that shows that user is joined the room or not
members - count of current room members
unreads - count of unread messages for specified user (calling user or provided userId)
unreadsFrom - start date-time of unread interval for specified user
msgs - count of messages in the room
latest - end date-time of unread interval for specified user (or date-time of last posted message)
userMentions - count of user mentions in messages
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.65.0 | Added |

