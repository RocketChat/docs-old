# Settings oAuth

A simple method, requires no authentication, that returns list of all available oauth services.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- | :--- |
| `/api/v1/settings.oauth` | `no` | `GET` |

## Example Call

```bash
curl http://localhost:3000/api/v1/settings.oauth
```

## Example Result

```json
{
    "services": [
        {
            "id": "iJeY7x4wxnh2p3pLr",
            "name": "facebook",
            "appId": "test",
            "buttonLabelText": "test",
            "buttonColor": "#13679A",
            "buttonLabelColor": "#FFFFFF"
        },
        {
            "id": "iJeY7x4wxnh2p3pLr",
            "name": "twitter",
            "appId": "test",
            "buttonLabelText": "",
            "buttonColor": "",
            "buttonLabelColor": ""
        }
    ],
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.63.0 | Added |
