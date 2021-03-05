# Group List All

Lists all of the private groups of any users. The calling user requires to have 'view-room-administration' right. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info.md) along with just the [Fields Query Parameters](../../query-and-fields-info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/groups.listAll` | `yes` | `GET` |

## Example Call

This example shows a list of private groups filtered by "customFields.companyId" started with "org1" using a regular expression.

```bash
curl -H "X-Auth-Token: 8-gard51USVYskZ7AAqFF3SZuwg24VIdn9-HchYersg" \
     -H "X-User-Id: 3WpJQkDHhrWPBvXuW" \
     http://localhost:3000/api/v1/groups.listAll?query=%7B%20%22customFields.companyId%22%3A%20%7B%20%22%24regex%22%3A%20%22%5Eorg1%22%7D%20%7D
```

## Example Result

```javascript
{
    "groups": [
        {
            "_id": "xA52DRDM7dqx2PfTp",
            "name": "private1",
            "fname": "private1",
            "t": "p",
            "msgs": 0,
            "u": {
                "_id": "3WpJQkDHhrWPBvXuW",
                "username": "admin"
            },
            "customFields": {
                "companyId": "org1"
            },
            "ts": "2018-01-21T21:05:06.729Z",
            "ro": false,
            "sysMes": true,
            "_updatedAt": "2018-01-21T21:05:06.729Z"
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
| 0.62.0 | Add 'query' parameter support. |
| 0.59.0 | Added |

