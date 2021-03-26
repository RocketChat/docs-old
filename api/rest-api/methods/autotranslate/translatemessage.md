---
description: Auto Translate Translate Message
---

# Translate Message

Translate the provided message.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/autotranslate.translateMessage` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `messageId` | `Fq7sQNSnDEfzj8qoS` | Required | The message's id to be translated. |
| `targetLanguage` | `en` | Optional | The target language that the message will be translated. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: Z3cpiYN6CNK2oXWKv" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/autotranslate.translateMessage \
     -d '{
        "messageId": "Fq7sQNSnDEfzj8qoS",
        "targetLanguage": "en"
    }'
```

## Example Result

```javascript
{
    "message": {
        "_id": "Fq7sQNSnDEfzj8qoS",
        "rid": "GENERAL",
        "msg": "Isso é um teste",
        "ts": "2019-06-27T15:35:20.753Z",
        "u": {
            "_id": "pC6Z2N2ijivxdsYSu",
            "username": "marcos",
            "name": "marcos"
        },
        "_updatedAt": "2019-06-27T15:47:01.486Z",
        "mentions": [],
        "channels": [],
        "translations": {
            "en": "This is a test"
        }
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 1.3.0 | Added |

