# Channel Set Announcement

Sets the announcement for the channel.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/channels.setAnnouncement` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Announcement |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The channel's id |
| `announcement` | `Test out everything.` | Required | The announcement to set for the channel. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/channels.setAnnouncement \
     -d '{ "roomId": "ByehQjC44FwMeiLbX", "announcement": "Test out everything" }'
```

## Example Result

```javascript
{
  "announcement": "Test out everything.",
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.63.0 | Added |

