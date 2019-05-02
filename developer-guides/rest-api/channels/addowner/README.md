# Channel Add Owner

Gives the role of owner for a user in the current channel.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/channels.addOwner` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The channel's id |
| `userId` | `nSYqWzZ4GsKTX4dyK` | Required | The user id |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/channels.addOwner \
     -d '{ "roomId": "ByehQjC44FwMeiLbX", "userId": "nSYqWzZ4GsKTX4dyK" }'
```

## Example Result

```json
{
   "success": true
}
```
## Bad Request Example Result

If the user is already a owner, it will return a `400 bad request` status.

```json
{
    "success": false,
    "error": "User is already a owner [error-user-already-owner]",
    "errorType": "error-user-already-owner"
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.49.4 | Added |
