# Group Counters

Gets group counters.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/groups.counters` | `yes` | `GET` |

## Payload

One of roomId or roomName is required.

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `euzoT67Gx6nXcn66M` | Required | The group's id |
| `roomName` | `channel.cf.1518990680083` | Required | The group's name |
| `userId` | `RtycPC29hqLJfT9xj` | Optional | Counters for provided user id \(need to have a view-room-administration right for calling user\) |

## Example Call

```bash
curl -H "X-Auth-Token: 8h2mKAwxB3AQrFSjLVKMooJyjdCFaA7W45sWlHP8IzO" \
     -H "X-User-Id: ew28FnZqipDpvKw3R" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/groups.counters?roomId=euzoT67Gx6nXcn66M
```

## Example Result

```javascript
{
  "joined":true,
  "members":1,
  "unreads":1,
  "unreadsFrom":"2018-02-18T21:51:20.091Z",
  "msgs":1,
  "latest":"2018-02-23T17:20:17.345Z",
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

