# Emoji custom list

List all custom emojis available.

| URL                    | Requires Auth | HTTP Method |
| :--------------------- | :------------ | :---------- |
| `/api/v1/emoji-custom` | `yes`         | `GET`       |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/emoji-custom
```

## Example Result

```json
{
    "emojis": [{
            "_id": "yh3dxDWrJy3J6oMMN",
            "name": "test",
            "aliases": [],
            "extension": "jpg",
            "_updatedAt": "2018-02-07T14:58:17.319Z"
       }],
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.61.0 | Added |
