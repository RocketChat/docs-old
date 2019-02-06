# Remove Integration

Removes an integration from the server. Requires `manage-integrations` or `manage-own-integrations` permissions.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/integrations.remove` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `type` | `webhook-outgoing` | Required | The type of integration to remove, `webhook-outgoing` and `webhook-incoming` are supported. |
| `integrationId` | `oNLthAt9RwMw39N2B` | Required | The id of the integration to remove. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/integrations.remove \
     -d '{ "type": "webhook-outgoing", "integrationId": "oNLthAt9RwMw39N2B" }'
```

## Example Result

```json
{
    "integration": {
        "_id": "oNLthAt9RwMw39N2B",
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
        "_createdAt": "2017-01-06T13:42:14.143Z",
        "_createdBy": {
            "username": "graywolf336",
            "_id": "R4jgcQaQhvvK6K3iY"
        },
        "_updatedAt": "2017-01-06T13:42:14.144Z"
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.49.0 | Added |
