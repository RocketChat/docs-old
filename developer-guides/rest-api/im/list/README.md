# IM List

Lists all of the direct messages the calling user has joined. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info/) along with just the [Fields Query Parameters](../../query-and-fields-info/).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/im.list` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: 8h2mKAwxB3AQrFSjLVKMooJyjdCFaA7W45sWlHP8IzO" \
     -H "X-User-Id: ew28FnZqipDpvKw3R" \
     http://localhost:3000/api/v1/im.list
```

## Example Result

```json
{
    "ims": [
        {
            "_id":"ew28FnZqipDpvKw3Rrocket.cat",
            "_updatedAt":"2018-02-23T17:58:56.147Z",
            "t":"d",
            "msgs":22,
            "ts":"2018-02-18T19:51:52.557Z",
            "lm":"2018-02-23T17:58:56.136Z",
            "topic":"a direct message with rocket.cat"
        },
        {
            "_id":"RtycPC29hqLJfT9xjew28FnZqipDpvKw3R",
            "_updatedAt":"2018-02-23T18:14:03.510Z",
            "t":"d",
            "msgs":2,
            "ts":"2018-02-21T21:08:51.026Z",
            "lm":"2018-02-23T18:14:03.490Z",
            "username":"rocketchat.internal.admin.test"
        },
        {
            "_id":"ew28FnZqipDpvKw3Rf2CAhYGtjS9iNZ7nd",
            "_updatedAt":"2018-02-23T17:45:56.496Z",
            "t":"d",
            "msgs":1,
            "ts":"2018-02-23T17:32:28.016Z",
            "lm":"2018-02-23T17:45:56.475Z"
        }
    ],
    "offset":0,
    "count":3,
    "total":3,
    "success":true
}
```

## Query Example Call

This example shows a list of Direct Messages' Rooms filtered by "customFields.field1" ended with "5" using a regular expression.

```bash
curl -H "X-Auth-Token: OKoJelLu8rYtbyc3c5YtTwxIE-UvT1FzWv9cdq1XPI1" \
     -H "X-User-Id: hw5DThnhQmxDWnavu" \
     http://localhost:3000/api/v1/im.list?query=%7B%20%22customFields.field1%22%3A%20%7B%20%22%24regex%22%3A%20%22%28.*%295%24%22%20%7D%20%7D
```

## Query Example Result

```json
{
    "ims": [
        {
            "_id": "hw5DThnhQmxDWnavuhw5DThnhQmxDWnavu",
            "_updatedAt": "2018-01-21T21:07:20.324Z",
            "t": "d",
            "msgs": 0,
            "ts": "2018-01-21T21:07:20.324Z",
            "username": "user2"
        },
        {
            "_id": "hw5DThnhQmxDWnavurocket.cat",
            "_updatedAt": "2018-01-21T21:07:18.510Z",
            "t": "d",
            "msgs": 0,
            "ts": "2018-01-21T21:07:18.510Z",
            "username": "user2"
        },
        {
            "_id": "3WpJQkDHhrWPBvXuWhw5DThnhQmxDWnavu",
            "_updatedAt": "2018-01-21T21:07:16.123Z",
            "t": "d",
            "msgs": 0,
            "ts": "2018-01-21T21:07:16.123Z",
            "username": "user2"
        }
    ],
    "offset": 0,
    "count": 3,
    "total": 3,
    "success":true
}

```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.62.0 | Add 'query' parameter support. |
| 0.49.0 | Count and offset query parameters supported. |
| 0.48.0 | Added |
