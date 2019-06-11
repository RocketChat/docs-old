# Inquiries List

Lists all of the open livechat inquiries. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info/).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/inquiries.list` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/livechat/inquiries.list
```

## Example Result

```json
{
    "inquiries": [
         {
            "_id": "HRp7pesRnHFAejg5o",
            "rid": "v4nfSYsfCokwbRi6R",
            "name": "Marcos Defendi",
            "ts": "2019-06-11T12:33:45.511Z",
            "status": "open"
        }
    ],
    "offset": 0,
    "count": 1,
    "total": 1,
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 1.2.0 | Added |
