# Integrations Settings

Retrieves a list of integration settings.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/integrations.settings` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/livechat/integrations.settings
```

## Example Result

```javascript
{
    "settings": [
        {
            "_id": "Livechat_secret_token",
            "_updatedAt": "2019-10-17T13:56:07.285Z",
            "autocomplete": true,
            "blocked": false,
            "createdAt": "2019-10-07T18:52:20.484Z",
            "group": "Livechat",
            "hidden": false,
            "i18nDescription": "Livechat_secret_token_Description",
            "i18nLabel": "Secret_token",
            "packageValue": "",
            "secret": true,
            "section": "CRM_Integration",
            "sorter": 25,
            "ts": "2019-10-07T21:00:01.287Z",
            "type": "string",
            "value": "",
            "valueSource": "meteorSettingsValue",
            "meteorSettingsValue": ""
        }
    ],
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.2.0 | Added |

