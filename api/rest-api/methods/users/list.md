# List

Gets all of the users in the system and their information, the result is only limited to what the callee has access to view. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info.md) along with [Query and Fields Query Parameter](../../query-and-fields-info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.list` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `fields` | `{ name: 1, emails: 0 }` | Optional | Field include hash \(value of `1` to include, `0` to exclude\). |
| `query` | `{ active: true, type: { $in: ['user', 'bot'] } }` | Optional | Query filter hash. |

## Other Users Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/users.list
```

## Example Result Regular User Callee

```javascript
{
  "users": [
    {
      "_id": "nSYqWzZ4GsKTX4dyK",
      "type": "user",
      "status": "offline",
      "active": true,
      "name": "Example User",
      "utcOffset": 0,
      "username": "example"
    },
    {
      ...
    }
  ],
  "count": 10,
  "offset": 0,
  "total": 10,
  "success": true
}
```

## Example Result Admin Callee

```javascript
{
  "users": [
    {
      "_id": "nSYqWzZ4GsKTX4dyK",
      "createdAt": "2016-12-07T15:47:46.861Z",
      "services": {
        "password": {
          "bcrypt": ...
        },
        "email": {
          "verificationTokens": [
            {
              "token": "...",
              "address": "example@example.com",
              "when": "2016-12-07T15:47:46.930Z"
            }
          ]
        },
        "resume": {
          "loginTokens": [
            {
              "when": "2016-12-07T15:47:47.334Z",
              "hashedToken": "..."
            }
          ]
        }
      },
      "emails": [
        {
          "address": "example@example.com",
          "verified": true
        }
      ],
      "type": "user",
      "status": "offline",
      "active": true,
      "roles": [
        "user"
      ],
      "name": "Example User",
      "lastLogin": "2016-12-08T00:22:15.167Z",
      "statusConnection": "offline",
      "utcOffset": 0,
      "username": "example"
    },
    {
      ...
    }
  ],
  "count": 3,
  "offset": 2,
  "total": 10,
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.49.0 | Count and offset query parameters supported. |
| 0.35.0 | Added |

