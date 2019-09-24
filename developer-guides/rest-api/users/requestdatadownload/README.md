# Request Data Download

Request your personal data.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.requestDataDownload` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `fullExport` | `true` | Required | Full Export(JSON format with all data). |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/users.requestDataDownload \
     -d '{ "fullExport": true }'
```

## Example Result

```json
{
    "requested": true,
    "status": "pending",
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.2.0 | Added |
