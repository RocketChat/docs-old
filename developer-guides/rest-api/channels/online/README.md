# Channel Online

List all online users of a channel.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/channels.online` | `yes` | `GET` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The channel's id |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/channels.online?roomId=74nd3hTbYrZbiTDp6
```

## Example Result

```json
{
  "online": [
    {
      "_id": "47cRd58HnWwpqxhaZ",
      "username": "test"
    }
  ],
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.52.0 | Added |
