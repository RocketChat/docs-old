# Spotlight

Searches for users or rooms that are visible to the user.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/spotlight` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: 6eWs4ECxUITYYoZ_bAYK5OE2srkxAepQqQA1cGGv3jK" \
     -H "X-User-Id: hvzu8z6mHFigiXy6Y" \
     http://localhost:3000/api/v1/spotlight?query=foobar
```

## Query Parameters

```
| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `query` | `john` | Required | The term to be searched |
```

## Example Result

```json
{
  "users": [
    {
      "_id": "rocket.cat",
      "name": "Rocket.Cat",
      "username": "rocket.cat",
      "status": "online"
    }
  ],
  "rooms": [],
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.61.0 | Added. |