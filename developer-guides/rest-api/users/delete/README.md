# User Delete

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.delete` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `userId` | `BsNr28znDkG8aeo7W` | Required | The id of the user. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/users.delete \
     -d '{ "userId": "BsNr28znDkG8aeo7W" }'
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
| 0.35.0 | Added |
