---
order: 50
---

# Integrations List
Lists all of the integrations on the server. It supports the [Offset, Count, and Sort Query Parameters](../Offset%20and%20Count%20and%20Sort%20Info.md) along with [Query and Fields Query Parameters](../Query%20and%20Fields%20Info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/integrations.list` | `yes` | `GET` |

## Example Call
```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/integrations.list
```

## Example Result
```json
{
    "integrations": [
        {
            "_id": "WMQDChpnYTRmFre9h",
            "enabled": true,
            "username": "rocket.cat",
            "alias": "Guggy",
            "avatar": "https://image.crisp.im/avatar/website/17651a90-e082-43f6-b308-957cea6e323c/128",
            "name": "Guggy",
            "triggerWords": [
                "!guggy",
                "guggy",
                "gif+"
            ],
            "urls": [
                "http://text2gif.guggy.com/guggify"
            ],
            "token": "aobEdbYhXfu5hkeqG",
            "script": ...,
            "scriptEnabled": true,
            "impersonateUser": false,
            "scriptCompiled": ...,
            "scriptError": null,
            "type": "webhook-outgoing",
            "userId": "rocket.cat",
            "channel": [],
            "_createdAt": "2017-01-05T17:06:05.660Z",
            "_createdBy": {
                "username": "graywolf336",
                "_id": "R4jgcQaQhvvK6K3iY"
            },
            "_updatedAt": "2017-01-05T17:06:05.660Z"
        },
        {
            "_id": "3aazpZ2WzoBP8msi9",
            "type": "webhook-outgoing",
            "name": "Testing via REST API",
            "enabled": false,
            "username": "rocket.cat",
            "urls": [
                "http://text2gif.guggy.com/guggify"
            ],
            "scriptEnabled": false,
            "userId": "rocket.cat",
            "channel": [],
            "_createdAt": "2017-01-06T13:23:46.018Z",
            "_createdBy": {
                "username": "graywolf336",
                "_id": "R4jgcQaQhvvK6K3iY"
            },
            "_updatedAt": "2017-01-06T13:23:46.018Z"
        }
    ],
    "offset": 0,
    "items": 2,
    "total": 2,
    "success": true
}
```

## Change Log
| Version | Description |
| :--- | :--- |
| 0.49.0 | Added |
