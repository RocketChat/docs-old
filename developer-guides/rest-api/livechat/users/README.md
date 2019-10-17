# List agents or managers

Get a list of agents or managers.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/users/:type` | `yes` | `GET` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `type` | `agent` | Required | Can be either `agent` or `manager`. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/livechat/users/agent
```

## Example Result

```json
{
  "users": [
    {
      "_id": "aobEdbYhXfu5hkeqG",
      "username": "john.doe"
    },
    {
      "_id": "SQafHvoFPuB57NmBD",
      "username": "doe.john"
    }
  ],
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.42.0 | Added |

## Register new agent or manager

Register a new agent or manager.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/users/:type` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `type` | `agent` | Required | Can be either `agent` or `manager`. |

## Example payload

```json
{
  "username":"john.doe"
}
```

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -X POST \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/livechat/users/agent \
    -d '{"username":"john.doe"}'
```

## Example Result

```json
{
  "user": {
    "_id": "SQafHvoFPuB57NmBD",
    "username": "john.doe"
  },
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.42.0 | Added |

## Get info about an agent or manager

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/users/:type/:_id` | `yes` | `GET` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `type` | `agent` | Required | Can be either `agent` or `manager`. |
| `_id` | `SQafHvoFPuB57NmBD` | Required | The user `_id`. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/livechat/users/agent/SQafHvoFPuB57NmBD
```

## Example Result

```json
{
  "user": {
    "_id": "SQafHvoFPuB57NmBD",
    "username": "john.doe"
  },
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.42.0 | Added |

## Removes an agent or manager

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/users/:type/:_id` | `yes` | `DELETE` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `type` | `agent` | Required | Can be either `agent` or `manager`. |
| `_id` | `SQafHvoFPuB57NmBD` | Required | The user `_id`. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -X DELETE \
     http://localhost:3000/api/v1/livechat/users/agent/SQafHvoFPuB57NmBD
```

## Example Result

```json
{
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.42.0 | Added |

## List users queue

Get users queue. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info/).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/users.queue` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/livechat/users.queue
```

## Example Result

```json
{
    "users": [
        {
            "_id": "ShPTGdZwDfpDRT43J",
            "agentId": "CaevAPDbXN252kyXa",
            "departmentId": "kricEeAQr4LTy6jqv",
            "_updatedAt": "2019-10-17T23:22:48.798Z",
            "count": 0,
            "order": 0,
            "username": "marcos.defendi"
        },
        {
            "_id": "wDzQ75LiZrjKBGBZG",
            "agentId": "CaevAPDbXN252kyXa",
            "departmentId": "whTo4nsjkW6Zuss7k",
            "_updatedAt": "2019-10-17T23:22:41.289Z",
            "count": 1,
            "order": 0,
            "username": "marcos.defendi"
        }
    ],
    "count": 2,
    "offset": 0,
    "total": 2,
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.2.0 | Added |
