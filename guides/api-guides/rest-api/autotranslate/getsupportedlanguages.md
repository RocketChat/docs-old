---
description: Auto Translate Get Supported Languages
---

# Get Supported Languages

Get the supported languages by the autotranslate.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/autotranslate.getSupportedLanguages` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `targetLanguage` | `en` | No | Language in which language names will be returned. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/autotranslate.getSupportedLanguages?targetLanguage=pt
```

## Example Result

```javascript
{
    "languages": [
        {
            "language": "af",
            "name": "Africâner"
        },
        {
            "language": "sq",
            "name": "Albanês"
        },
        {
            "language": "de",
            "name": "Alemão"
        },
        {
            "language": "am",
            "name": "Amárico"
        }
    ],
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 1.3.0 | Added |

