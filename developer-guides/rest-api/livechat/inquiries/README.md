# Inquiries List

Lists all of the open livechat inquiries. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info/).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/inquiries` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/livechat/inquiries
```

## Example Result

```json
{
    "inquiries": [
        {
            "_id": "fcEAn8kc9k3WuqW3N",
            "rid": "RyCbbTzb24r9xG63S",
            "message": "teste",
            "name": "teste",
            "ts": "2019-06-10T22:40:18.637Z",
            "agents": [
                "hjwGZafNqExtFNmN7"
            ],
            "status": "open",
            "v": {
                "_id": "2iZSexGXjW7EJnRwM",
                "username": "guest-3",
                "token": "RtQzkfQYKG4WpNMEW",
                "status": "offline"
            },
            "t": "l",
            "_updatedAt": "2019-06-10T22:44:05.021Z"
        },
        {
            "_id": "eA2yr4Bm9mMprEeKZ",
            "rid": "uvPNHzzsW3vHP6yez",
            "message": "test",
            "name": "Marcos Defendi",
            "ts": "2019-06-10T22:39:57.554Z",
            "agents": [
                "hjwGZafNqExtFNmN7"
            ],
            "status": "open",
            "v": {
                "_id": "R5Fn4vwcNRhTxrPbn",
                "username": "guest-2",
                "token": "3STyeEf2XMqXi42vC",
                "status": "offline"
            },
            "t": "l",
            "_updatedAt": "2019-06-10T22:44:04.659Z"
        }
    ],
    "offset": 0,
    "count": 2,
    "total": 2,
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 1.2.0 | Added |
