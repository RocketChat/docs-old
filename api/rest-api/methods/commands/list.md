# List

Lists all available slash commands.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/commands.list` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/commands.list
```

## Example Result

```javascript
{
    "commands": [
        {
            "command": "invite-all-from",
            "clientOnly": false
        },
        {
            "command": "slackbridge-import",
            "clientOnly": false
        },
        {
            "command": "gimme",
            "params": "your_message_optional",
            "description": "Slash_Gimme_Description",
            "clientOnly": false
        },
        {
            "command": "lennyface",
            "params": "your_message_optional",
            "description": "Slash_LennyFace_Description",
            "clientOnly": false
        },
        {
            "command": "shrug",
            "params": "your_message_optional",
            "description": "Slash_Shrug_Description",
            "clientOnly": false
        },
        {
            "command": "tableflip",
            "params": "your_message_optional",
            "description": "Slash_Tableflip_Description",
            "clientOnly": false
        },
        {
            "command": "unflip",
            "params": "your_message_optional",
            "description": "Slash_TableUnflip_Description",
            "clientOnly": false
        },
        {
            "command": "create",
            "clientOnly": false
        },
        {
            "command": "help",
            "clientOnly": false
        },
        {
            "command": "invite",
            "clientOnly": false
        },
        {
            "command": "invite-all-to",
            "clientOnly": false
        },
        {
            "command": "archive",
            "clientOnly": false
        },
        {
            "command": "join",
            "clientOnly": false
        },
        {
            "command": "kick",
            "clientOnly": false
        },
        {
            "command": "leave",
            "clientOnly": false
        },
        {
            "command": "part",
            "clientOnly": false
        },
        {
            "command": "me",
            "params": "your_message",
            "description": "Displays_action_text",
            "clientOnly": false
        },
        {
            "command": "msg",
            "clientOnly": false
        },
        {
            "command": "mute",
            "clientOnly": false
        },
        {
            "command": "unmute",
            "clientOnly": false
        },
        {
            "command": "topic",
            "params": "Slash_Topic_Params",
            "description": "Slash_Topic_Description",
            "clientOnly": false
        },
        {
            "command": "unarchive",
            "clientOnly": false
        }
    ],
    "offset": 0,
    "count": 22,
    "total": 22,
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.60.2 | Added |

