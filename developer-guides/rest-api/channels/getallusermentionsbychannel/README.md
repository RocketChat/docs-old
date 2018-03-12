# Get all the mentions od a channel

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/channels.getAllUserMentionsByChannel` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The channel's id |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/channels.getAllUserMentionsByChannel?roomId=ByehQjC44FwMeiLbX
```

## Example Result

```json
{
    "mentions": [
        {
            "messageId": "Gptx3mc6TjSv5tLWb",
            "roomId": "ByehQjC44FwMeiLbX",
            "timestamp": "2018-03-12T14:59:14.166Z",
            "user": {
                "id": "47cRd58HnWwpqxhaZ",
                "username": "rocket.cat",
                "name": "Rocket cat"
            }
        }
    ],
    "success": true
}
```
