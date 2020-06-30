# Get

Get specification of the slash command.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/commands.get` | `yes` | `GET` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `command` | `me` | Required | The name of the command. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/commands.get?command=me
```

## Example Result

```javascript
{
    "command": {
        "command": "me",
        "params": "your_message",
        "description": "Displays_action_text",
        "clientOnly": false
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.60.2 | Added |

