# Ignore user

Ignores an user in a chat.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/chat.ignoreUser` | `yes` | `GET` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `rid` | `KLTM332QEwWLPJrjRPtcPHimPnLHsusiDF` | Required | The room ID. |
| `userId` | `7aDSXtjMA3KPLxLjt` | Required | The User ID. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/chat.ignoreUser?rid=KLTM332QEwWLPJrjRPtcPHimPnLHsusiDF&userId=7aDSXtjMA3KPLxLjt
```

## Example Result

```json
{
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
|  | Added |