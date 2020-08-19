---
permalink: /developer-guides/rest-api/miscellaneous/spotlight/
redirect_from:
  - /developer-guides/rest-api/spotlight
  - /developer-guides/rest-api/spotlight/
---

# Spotlight

Searches for users or rooms that are visible to the user.

WARNING: It will only return rooms that user didn't join yet.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/spotlight` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: 6eWs4ECxUITYYoZ_bAYK5OE2srkxAepQqQA1cGGv3jK" \
     -H "X-User-Id: hvzu8z6mHFigiXy6Y" \
     http://localhost:3000/api/v1/spotlight?query=foobar
```

## Example Call

```bash
curl -H "X-Auth-Token: 6eWs4ECxUITYYoZ_bAYK5OE2srkxAepQqQA1cGGv3jK" \
     -H "X-User-Id: hvzu8z6mHFigiXy6Y" \
     http://localhost:3000/api/v1/spotlight?query=@foobar
```

## Example Call

```bash
curl -H "X-Auth-Token: 6eWs4ECxUITYYoZ_bAYK5OE2srkxAepQqQA1cGGv3jK" \
     -H "X-User-Id: hvzu8z6mHFigiXy6Y" \
     http://localhost:3000/api/v1/spotlight?query=#foobar
```

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `query` | `john` | Required | The term to be searched. Supports '\#' for channels and '@' for users |

## Example Result

```javascript
{
  "users": [
    {
      "_id": "rocket.cat",
      "name": "Rocket.Cat",
      "username": "rocket.cat",
      "status": "online",
      "avatarETag": "5BB9B5ny5DkKdrwkq"
    }
  ],
  "rooms": [],
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.64.0 | Added support to '\#' and '@' searches, for channels and users respectively. |
| 0.61.0 | Added. |

