# Create

Create new custom emoji.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/emoji-custom.create` | `yes` | `POST` |

## Uploading a File

### Arguments

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `emoji` | Any image file | Required | The image file to use as the new custom emoji, as form data. |
| `name` | `my-custom-emoji` | Required | The name of the new custom emoji. |
| `aliases` | `emoji-alias` | Required | The alias of the new custom emoji. |

### Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -F "emoji=@my-custom-emoji.png" \
     -F "name=my-custom-emoji" \
     -F "aliases=emoji-alias" \
     http://localhost:3000/api/v1/emoji-custom.create
```

### Example Result

```javascript
{
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.74.0 | Added |

