# Group List

Lists all of the private groups the calling user has joined. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info/) along with just the [Fields Query Parameters](../../query-and-fields-info/).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/groups.list` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/groups.list
```

## Example Result

```json
{
    "groups": [
        {
            "_id": "ByehQjC44FwMeiLbX",
            "name": "test-test",
            "t": "p",
            "usernames": [
                "testing1"
            ],
            "msgs": 0,
            "u": {
                "_id": "aobEdbYhXfu5hkeqG",
                "username": "testing1"
            },
            "ts": "2016-12-09T15:08:58.042Z",
            "ro": false,
            "sysMes": true,
            "_updatedAt": "2016-12-09T15:22:40.656Z"
        },
        {
            "_id": "t7qapfhZjANMRAi5w",
            "name": "testing",
            "t": "p",
            "usernames": [
                "testing2"
            ],
            "msgs": 0,
            "u": {
                "_id": "y65tAmHs93aDChMWu",
                "username": "testing2"
            },
            "ts": "2016-12-01T15:08:58.042Z",
            "ro": false,
            "sysMes": true,
            "_updatedAt": "2016-12-09T15:22:40.656Z"
        }
    ],
    "success": true
}

```

## Query Example Call 

This example shows a list of private groups with the following conditions:
 * "customFields.companyId" = "org1"
 * hide "fname" field in the output

```bash
curl -H "X-Auth-Token: 8-gard51USVYskZ7AAqFF3SZuwg24VIdn9-HchYersg" \
     -H "X-User-Id: 3WpJQkDHhrWPBvXuW" \
     http://localhost:3000/api/v1/groups.list?query=%7B%20%22customFields.companyId%22%3A%20%22org1%22%20%7D&fields=%7B%20%22fname%22%3A0%20%7D
```

## Query Example Result

```json
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
| 0.49.0 | Count and offset query parameters supported. |
| 0.33.0 | Added |
