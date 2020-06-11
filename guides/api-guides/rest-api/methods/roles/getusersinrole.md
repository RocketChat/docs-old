# Role Get Users In Role

Gets the users that belongs to a role. It supports the [Offset and Count Only](../../offset-and-count-and-sort-info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/roles.getUsersInRole` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `role` | `admin` | Required | The role. |
| `roomId` | `GENERAL` | Optional | The room's id. |

## Example call to get all the roles

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/roles.getUsersInRole
```

## Example Result

```javascript
{
  "users": [
    {
      "_id": "voakrL3cHjYBwwRPq",
      "username": "a",
      "type": "user",
      "status": "offline",
      "active": true,
      "name": "a"
    },
    {
      "_id": "N2s7KG6YkzgJfXbyn",
      "username": "b",
      "type": "user",
      "status": "offline",
      "active": true,
      "name": "b"
    },
  ],
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 1.3.0 | Added |

