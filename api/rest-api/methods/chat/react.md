---
description: Chat Message Reactions
---

# React

Toggles the authenticated user's reaction to the provided message.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/chat.react` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `emoji` | `smile` | Required | The emoji to react with. |
| `messageId` | `7aDSXtjMA3KPLxLjt` | Required | The message id to react to. |
| `shouldReact` | `true` | Optional: `true` or `false` | Parameter to specify if the reaction should be added or removed. |

The `emoji` does not have to contain the `:`'s. However, the emoji _does_ have to exist.

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/chat.react \
     -d '{ "messageId": "7aDSXtjMA3KPLxLjt", "emoji": "smile", "shouldReact": true }'
```

## Example Result

```javascript
{
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.64.0 | Added parameter "shouldReact" to make endpoint work like a setter |
| 0.63.0 | Emoji has to exist now |
| 0.62.2 | Added |

