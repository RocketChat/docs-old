# Unread

Mark messages as unread by roomId or from a message. NOTE: You can send `roomId` or the id of the message \(`firstUnreadMessage._id`\) you want from it to be unread.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/subscriptions.unread` | `yes` | `POST` |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-Type: application/json" \
     http://localhost:3000/api/v1/subscriptions.unread \
     -d '{"roomId":"L6su9mxwdDkvdSaT9hvzu8z6mHFigiXy6Y"}'
```

## Example Result

```javascript
{
    "success": true
}
```

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-Type: application/json" \
     http://localhost:3000/api/v1/subscriptions.unread \
     -d '{"firstUnreadMessage": { "_id": "L6su9mxwdDkvdSaT9hvzu8z6mHFigiXy6Y"} }'
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
| 0.65.0 | Endpoint Added. |

