# Users

Get a list of agents or managers. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info.md).

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

```javascript
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
| 2.2.0 | Added support to pagination |
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

```javascript
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

```javascript
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

```javascript
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

```javascript
{
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.42.0 | Added |

