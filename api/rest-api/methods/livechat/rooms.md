# Rooms

Retrieves a list of livechat rooms. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info.md) along with [Fields Query Parameters](../../query-and-fields-info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/rooms` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `agents` | `['b32h3b2hhwb25d']` | Optional | A list of agents, can be a list of ids or usernames |
| `departmentId` | `AkzpHAvZpdnuchw2a` | Optional | The department's id |
| `open` | `true` | Optional | If it should filter by open/closed rooms |
| `createdAt` | `{"start": "2018-01-26T00:11:22.345Z", "end": "2018-01-26T00:11:22.345Z"}` | Optional | An object representing when the room was created\(Can also be filtered only with `start` or `end`\) |
| `closedAt` | `{"start": "2018-01-26T00:11:22.345Z", "end": "2018-01-26T00:11:22.345Z"}` | Optional | An object representing when the room was closed\(Can also be filtered only with `start` or `end`\) |
| `tags` | `['rocket', 'chat']` | Optional | A list of tags |
| `customFields` | `{"docId": "aobEdbYhXfu5hkeqG"}` | Optional | An object with custom fields to be filtered\(previously created and populated at custom fields endpoints\) |
| `roomName` | `room name` | Optional | The room's name |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/livechat/rooms?agents[]=teste&departamentId=123&open=true&createdAt={"start": "2018-01-26T00:11:22.345Z", "end": "2018-01-26T00:11:22.345Z"}&closedAt={"start": "2018-01-26T00:11:22.345Z", "end": "2018-01-26T00:11:22.345Z"}&tags[]=rocket&customFields={"docId": "031041"}&count=3&offset=1&sort={"_updatedAt": 1}&fields={"msgs": 1}&roomName=test
```

## Example Result

```javascript
{
    "rooms": [
        {
            "_id": "9dQMveZhqxiDgCM3B",
            "msgs": 1,
            "usersCount": 1,
            "lm": "2019-08-09T20:18:02.350Z",
            "fname": "Marcos Defendi",
            "t": "l",
            "ts": "2019-08-09T20:18:02.108Z",
            "v": {
                "_id": "xh45w4y7oPW5SiMJu",
                "username": "guest-4",
                "token": "xn5hdkyptei11m07f3me",
                "status": "online"
            },
            "servedBy": {
                "_id": "3kyWm8PsmwhC7xgwg",
                "username": "marcos",
                "ts": "2019-08-09T20:18:02.109Z"
            },
            "cl": false,
            "open": true,
            "waitingResponse": true,
            "departmentId": "xnmXQmytuvxp2TuSC",
            "_updatedAt": "2019-08-09T20:19:34.856Z",
            "lastMessage": {
                "_id": "TBEz7zSCBaKsfyrzc",
                "rid": "9dQMveZhqxiDgCM3B",
                "msg": "Hello",
                "token": "xn5hdkyptei11m07f3me",
                "alias": "Marcos Defendi",
                "ts": "2019-08-09T20:18:02.350Z",
                "u": {
                    "_id": "xh45w4y7oPW5SiMJu",
                    "username": "guest-4",
                    "name": "Marcos Defendi"
                },
                "_updatedAt": "2019-08-09T20:18:02.383Z",
                "mentions": [],
                "channels": [],
                "newRoom": false,
                "showConnecting": false
            },
            "metrics": {
                "v": {
                    "lq": "2019-08-09T20:18:02.350Z"
                }
            },
            "livechatData": {
                "docId": "0310584343112"
            },
            "tags": [
                "rocket",
                "chat"
            ],
            "name": "Marcos Defendi"
        }
    ],
    "count": 1,
    "offset": 1,
    "total": 7,
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.4.0 | Added support to the parameter `roomName` |
| 2.0.0 | Added |

