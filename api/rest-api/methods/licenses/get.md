# Get

Gets all active licenses.

| URL | Requires Auth | Required Permission | HTTP Method |
| :--- | :--- |:--- | :--- |
| `/api/v1/licenses.get` | `yes` | `view-privileged-setting` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: xytlUWJtCuxuDiwBfnoJpPR3qI7FWIB6LZbOKFeiIEu" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/licenses.get
```

## Example Result

```javascript
{
    "licenses": [
        {
            "url": "localhost:3000",
            "expiry": "2021-01-01",
            "modules": [
                "enterprise:*"
            ],
            "maxActiveUsers": 200,
            "maxGuestUsers": 3,
            "maxRoomsPerGuest": 10
        }
    ],
        "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 3.10 | Added |
