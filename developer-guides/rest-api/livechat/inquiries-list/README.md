# Inquiries List

Lists all of the open livechat inquiries. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info/).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/inquiries.list` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `department` | `ByehQjC44FwMeiLbX` | Optional | The department's id or name |

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
            "_id": "GpxfRo8TaPHfsnnC5",
            "rid": "EbQjtCosHJWLQmQYT",
            "name": "Marcos Defendi",
            "ts": "2019-06-11T19:01:57.424Z",
            "department": "jHFgdJyJWstB9M2ik",
            "status": "open"
        },
        {
            "_id": "9dCi64GkwWE389xCm",
            "rid": "ZpjCcbRwPPdnhKWW5",
            "name": "Marcos Defendi",
            "ts": "2019-06-11T19:00:43.124Z",
            "department": "gDDAjeJb7BhHzzEQ8",
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
