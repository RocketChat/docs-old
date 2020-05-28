# Delete Own Account

Deletes your own user. Requires `Allow Users to Delete Own Account` enabled. Accessible from Administration -&gt; Accounts.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.deleteOwnAccount` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `password` | `BsNr28znDkG8aeo7W` | Required | The password of user \(encrypted in SHA256\). |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/users.deleteOwnAccount \
     -d '{ "password": "BsNr28znDkG8aeo7W" }'
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
| 0.67.0 | Added |

