# Update

Update an existent custom emoji.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/emoji-custom.update` | `yes` | `POST` |

## Uploading a File

### Arguments

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `emoji` | Any image file | Optional | The image file to use as custom emoji, as form data. |
| `_id` | `AG7DSB2H32YHS` | Required | The id of the custom emoji. |
| `name` | `my-custom-emoji` | Required | The name of the custom emoji. |
| `aliases` | `emoji-alias` | Optional | The alias of the custom emoji. |

### Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -F "emoji=@my-custom-emoji.png" \
     -F "_id=AG7DSB2H32YHS" \
     -F "name=my-custom-emoji" \
     -F "aliases=emoji-alias" \
     http://localhost:3000/api/v1/emoji-custom.update
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

