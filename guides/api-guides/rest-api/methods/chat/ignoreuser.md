# Ignore User

Ignores an user in a chat. If you pass ignore as false, the user will be unignored.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/chat.ignoreUser` | `yes` | `GET` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `rid` | `KLTM332QEwWLPJrjRPtcPHimPnLHsusiDF` | Required | The room ID. |
| `userId` | `7aDSXtjMA3KPLxLjt` | Required | The User ID. |
| `ignore` | `true` | Optional | If the user will be ignored or not, default is true. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/chat.ignoreUser?rid=KLTM332QEwWLPJrjRPtcPHimPnLHsusiDF&userId=7aDSXtjMA3KPLxLjt
```

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/chat.ignoreUser?rid=KLTM332QEwWLPJrjRPtcPHimPnLHsusiDF&ignore=true
```

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/chat.ignoreUser?rid=KLTM332QEwWLPJrjRPtcPHimPnLHsusiDF&ignore=false
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
| 0.64.0 | Added |

