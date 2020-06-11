# Custom Sounds List

Retrieves all custom sounds. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info.md) along with [Query Parameters](../../query-and-fields-info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/custom-sounds.list` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/custom-sounds.list
```

## Example Result

```javascript
{
  "sounds": [
    {
      "_id": "qmdQjHZYzf4Hr7LwM",
      "name": "sound 1",
      "extension": "mp3",
      "_updatedAt": "2019-12-03T14:30:02.315Z"
    },
  ],
  "count": 1,
  "offset": 0,
  "total": 29,
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.4.0 | Added |

