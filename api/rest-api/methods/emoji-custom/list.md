---
permalink: /developer-guides/rest-api/emoji-custom/list/
redirect_from:
  - /developer-guides/rest-api/emoji-custom/get/
---

# List

List all custom emojis available. It supports the [Query Parameters only](../../query-and-fields-info.md#query-example).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/emoji-custom.list` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `updatedSince` | `2017-11-25T15:08:17.248Z` | Optional | Date as ISO string |

When you provide the `updatedSince` query parameter in the URL then the `update` and `remove` in the response will contain only those updated and removed since this date and time.

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/emoji-custom.list
```

## Example Result

```javascript
{
    "emojis": {
        "update": [
            {
                "_id": "S5XvYppoLrLd9JvQm",
                "name": "teste",
                "aliases": [],
                "extension": "jpg",
                "_updatedAt": "2019-02-18T16:48:35.119Z"
            },
            {
                "_id": "Ro5HD4wKQiYnrbpbg",
                "name": "aaaaaaaa",
                "aliases": [
                    "aaaaaa"
                ],
                "extension": "png",
                "_updatedAt": "2019-02-18T16:49:47.310Z"
            }
        ],
        "remove": []
    },
    "success": true
}
```

## Example Call with Query parameter

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/emoji-custom.list?query={"name": "teste"}
```

## Example Result

```javascript
{
    "emojis": {
        "update": [
            {
                "_id": "S5XvYppoLrLd9JvQm",
                "name": "teste",
                "aliases": [],
                "extension": "jpg",
                "_updatedAt": "2019-02-18T16:48:35.119Z"
            }
        ],
        "remove": []
    },
    "success": true
}
```

## Example Call with `updatedSince`

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/emoji-custom.list?updatedSince=2019-02-25T15:08:17.248Z
```

## Example Result

```javascript
{
    "emojis": {
        "update": [
            {
                "_id": "S5XvYppoLrLd9JvQm",
                "name": "teste",
                "aliases": [],
                "extension": "jpg",
                "_updatedAt": "2019-02-18T16:48:35.119Z"
            }
        ],
        "remove": [
             {
                "_id": "2dbVBG434dnsdh23",
                "name": "teste3",
                "aliases": [],
                "extension": "jpg",
                "_updatedAt": "2019-02-18T16:48:35.119Z"
            }
        ]
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.75.0 | Added |

