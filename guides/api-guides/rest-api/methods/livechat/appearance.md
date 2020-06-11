# Appearance

Get Livechat widget settings about appearance

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/appearance` | `yes` | `GET` |

## Example Call

```bash
curl http://localhost:3000/api/v1/livechat/appearance
```

## Example Result

```javascript
{
    "appearance": [
        {
            "_id": "Livechat_conversation_finished_message",
            "_updatedAt": "2019-10-04T17:39:10.786Z",
            "autocomplete": true,
            "blocked": false,
            "createdAt": "2019-10-01T16:52:37.687Z",
            "group": "Livechat",
            "hidden": false,
            "i18nDescription": "Livechat_conversation_finished_message_Description",
            "i18nLabel": "Conversation_finished_message",
            "packageValue": "",
            "public": true,
            "secret": false,
            "sorter": 15,
            "ts": "2019-10-01T17:09:23.894Z",
            "type": "string",
            "value": "",
            "valueSource": "meteorSettingsValue",
            "meteorSettingsValue": ""
        }
        // ...
    ],
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.2.0 | Added |

