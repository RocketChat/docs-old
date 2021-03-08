# Instances - Get

Gets all running instances.

| URL | Requires Auth | Required Permission | HTTP Method |
| :--- | :--- |:--- | :--- |
| `/api/v1/instances.get` | `yes` | `view-statistics` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: xytlUWJtCuxuDiwBfnoJpPR3qI7FWIB6LZbOKFeiIEu" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/instances.get
```

## Example Result
Result while running only **one** instance. 
```javascript
{
    "instances": [
        {
            "_id": "nujL3Zb6wxYfKcRq9",
            "_createdAt": "2020-12-29T17:03:19.425Z",
            "_updatedAt": "2020-12-29T17:04:59.434Z",
            "extraInformation": {
                "host": "undefined",
                "port": "29703",
                "os": {
                    "type": "Linux",
                    "platform": "linux",
                    "arch": "x64",
                    "release": "4.19.128-microsoft-standard",
                    "uptime": 11250,
                    "loadavg": [
                        1.4970703125,
                        1.5146484375,
                        1.48486328125
                    ],
                    "totalmem": 6594183168,
                    "freemem": 263098368,
                    "cpus": 12
                },
                "nodeVersion": "v12.18.4"
            },
            "name": "rocket.chat",
            "pid": 25877
        }
    ],
        "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 3.10 | Added |

