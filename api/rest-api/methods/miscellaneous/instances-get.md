# Instances - Get

Gets all running instances.

| URL | Requires Auth | Required Permission | HTTP Method |
| :--- | :--- |:--- | :--- |
| `/api/v1/instances.get` | `yes` | `view-statistics` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: xytlUWJtCuxuDiwBfnoJpPR3qI7FWIB6LZbOKFeiIEu" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:24707/api/v1/instances.get
```

## Example Result
Result while running only **one** instance. 
```javascript
{
    "instances": {
        "current": {
            "instanceRecord": [
                {
                    "_id": "RbiRuWXpph2DGWNR9",
                    "_createdAt": "2020-12-28T18:11:42.095Z",
                    "_updatedAt": "2020-12-28T18:13:32.101Z",
                    "extraInformation": {
                        "host": "undefined",
                        "port": "24707"
                    },
                    "name": "rocket.chat",
                    "pid": 67202
                }
            ]
        },
        "connections": []
    },
    "success": true
}
```

## Example Call

```bash
curl -H "X-Auth-Token: m_kJc3Y8yFlN8STWpHzWfbVYXl7lkJIlM9lMu1XfPV-" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:29227/api/v1/instances.get
```

## Example Result
Result while running **two** instances.
```javascript
{
    "instances": {
        "current": {
            "instanceRecord": [
                {
                    "_id": "HoRxanW9dpe5cJgEX",
                    "_createdAt": "2020-12-28T18:17:09.907Z",
                    "_updatedAt": "2020-12-28T18:22:49.922Z",
                    "extraInformation": {
                        "host": "localhost",
                        "port": "29227"
                    },
                    "name": "rocket.chat",
                    "pid": 68447
                }
            ]
        },
        "connections": [
            {
                "address": "localhost:27687",
                "currentStatus": {
                    "status": "connected",
                    "connected": true,
                    "retryCount": 0
                },
                "instanceRecord": {
                    "_id": "bftXy4ACdss6B3djL",
                    "_createdAt": "2020-12-28T18:16:58.835Z",
                    "_updatedAt": "2020-12-28T18:17:08.840Z",
                    "extraInformation": {
                        "host": "localhost",
                        "port": "27687"
                    },
                    "name": "rocket.chat",
                    "pid": 68366
                },
                "broadcastAuth": true
            },
            {
                "address": "localhost:23091",
                "currentStatus": {
                    "status": "connected",
                    "connected": true,
                    "retryCount": 0
                },
                "instanceRecord": {
                    "_id": "Appx6LFgcn6XtWNrv",
                    "_createdAt": "2020-12-28T18:19:08.762Z",
                    "_updatedAt": "2020-12-28T18:19:08.762Z",
                    "extraInformation": {
                        "host": "localhost",
                        "port": "23091"
                    },
                    "name": "rocket.chat",
                    "pid": 68866
                },
                "broadcastAuth": true
            }
        ]
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 3.10 | Added |

