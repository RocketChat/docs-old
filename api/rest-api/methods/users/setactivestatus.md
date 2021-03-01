# Set Active Status

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.setActiveStatus` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `activeStatus` | `true` | Required | The value of the active status. |
| `userId` | `5HmCfpoB7jp2uibTC` | Required | The user's id to be changed. |
| `confirmRelinquish` | `true` | Optional Default: `false` | Allows user to be deactivated even if it is the last owner of a room. |

**Note:**  
If `activeStatus=false` & `confirmRelinquish=true` and the user is the last remaining owner of a room, the oldest member of that room will be chosen as the new owner.

## Example call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/users.setActiveStatus \
     -d '{"activeStatus": false, "userId": "5HmCfpoB7jp2uibTC"}'
```

## Example Result

```javascript
{
    "user": {
        "_id": "jJNyu4BQFqdgEcqnR",
        "active": false
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 3.7.0 | Added `confirmRelinquish` to the payload. |
| 0.75.0 | Added. |

