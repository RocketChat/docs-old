# Get channel threads

Get channel threads. It supports ONLY the [Offset and Count](../../offset-and-count-and-sort-info/).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/chat.getThreadsList` | `yes` | `GET` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `rid`     | `7aDSXtjMA3KPLxLjt` | Required | The id of the channel.                  |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/chat.getThreadsList?rid=GENERAL
```

## Example Result

```json
{
    "threads": [
        {
            "_id": "gcGai9bRREqokjyPc",
            "rid": "GENERAL",
            "msg": "test",
            "ts": "2019-04-08T13:15:52.017Z",
            "u": {
                "_id": "p4a8YxvLQEHmiBKTS",
                "username": "marcos.defendi",
                "name": "Marcos Defendi"
            },
            "_updatedAt": "2019-04-08T14:40:27.789Z",
            "mentions": [],
            "channels": [],
            "replies": [
                "p4a8YxvLQEHmiBKTS"
            ],
            "tcount": 5,
            "tlm": "2019-04-08T14:40:27.724Z"
        },
        {
            "_id": "5iJjPNPhxMeLtEJQt",
            "rid": "GENERAL",
            "msg": "Sample message",
            "ts": "2019-04-07T20:41:15.965Z",
            "u": {
                "_id": "rocketchat.internal.admin.test",
                "username": "rocketchat.internal.admin.test",
                "name": "RocketChat Internal Admin Test"
            },
            "_updatedAt": "2019-04-08T13:41:55.205Z",
            "mentions": [],
            "channels": [],
            "replies": [
                "rocketchat.internal.admin.test",
                "p4a8YxvLQEHmiBKTS"
            ],
            "tcount": 1,
            "tlm": "2019-04-08T13:41:55.102Z"
        }
    ],
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 1.0.0 | Added |
