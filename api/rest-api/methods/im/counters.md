# Counters

Gets counters of direct messages.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/im.counters` | `yes` | `GET` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `RtycPC29hqLJfT9xjew28FnZqipDpvKw3R` | Required | The id of Direct Messages' Room |
| `username` | `RtycPC29hqLJfT9xj` | Optional | Counters for provided username \(need to have a view-room-administration right for calling user\) |

## Example Call

```bash
curl -H "X-Auth-Token: 8h2mKAwxB3AQrFSjLVKMooJyjdCFaA7W45sWlHP8IzO" \
     -H "X-User-Id: ew28FnZqipDpvKw3R" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/im.counters?roomId=RtycPC29hqLJfT9xjew28FnZqipDpvKw3R
```

## Example Result

```javascript
{
  "joined":true,
  "members":2,
  "unreads":0,
  "unreadsFrom":"2018-02-21T21:08:51.026Z",
  "msgs":0,
  "latest":"2018-02-21T21:08:51.026Z",
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

