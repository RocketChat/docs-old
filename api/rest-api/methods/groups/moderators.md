# Group Moderators List

Lists all group moderators.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/groups.moderators` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required \(if no roomName\) | The group's id |
| `roomName` | `general` | Required \(if no roomId\) | The group's name |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/groups.moderators?roomId=ByehQjC44FwMeiLbX
```

## Example Result

```javascript
{
    "moderators": [
        {
            "_id": "rocket.cat",
            "username": "rocket.cat",
            "name": Rocket.Cat
        }
    ],
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.70.0 | Added |

