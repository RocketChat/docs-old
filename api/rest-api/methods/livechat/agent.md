# Agent Info

Retrieve the current Livechat agent data.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/agent.info/:rid/:token` | `no` | `GET` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `rid` | `zRAeTszXor8CCPceB` | Required | The room `_id`. |
| `token` | `iNKE8a6k6cjbqWhWd` | Required | The visitor `token`. |

## Example Call

```bash
curl http://localhost:3000/api/v1/livechat/agent.info/zRAeTszXor8CCPceB/iNKE8a6k6cjbqWhWd
```

## Example Result

```javascript
{
  "agent": {
    "_id": "7Gm3PoFCJWTCJ68XR",
    "emails": [
      {
        "address": "agent@rocket.chat",
        "verified": true
      }
    ],
    "name": "Livechat Agent",
    "username": "livechat.agent"
  },
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.70.0 | Added |

## Request the next Livechat agent available.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/agent.next/:token` | `no` | `GET` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `token` | `iNKE8a6k6cjbqWhWd` | Required | The visitor `token`. |

## Example Call

```bash
curl http://localhost:3000/api/v1/livechat/agent.next/iNKE8a6k6cjbqWhWd
```

## Example Result

```javascript
{
  "agent": {
    "_id": "7Gm3PoFCJWTCJ68XR",
    "emails": [
      {
        "address": "agent@rocket.chat",
        "verified": true
      }
    ],
    "name": "Livechat Agent",
    "username": "livechat.agent"
  },
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.70.0 | Added |

## Get agent departments.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/agents/:agentId/departments` | `yes` | `GET` |

## Url params

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `agentId` | `iNKE8a6k6cjbqWhWd` | Required | The agent Id. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/livechat/agents/iNKE8a6k6cjbqWhWd/departments
```

## Example Result

```javascript
{
    "departments": [
        {
            "_id": "7FKDYAFFQ42tBEizA",
            "agentId": "bp9s6p76ocZ9QCkbz",
            "departmentId": "KGvTnGdv7jZYWDK5D",
            "_updatedAt": "2019-10-01T18:15:38.319Z",
            "count": 0,
            "order": 0,
            "username": "marcos"
        },
        {
            "_id": "hTY4cR3RrkZgZBX4T",
            "agentId": "bp9s6p76ocZ9QCkbz",
            "departmentId": "E3vjWSY3wNkW3unBo",
            "_updatedAt": "2019-10-04T21:46:59.781Z",
            "count": 0,
            "order": 0,
            "username": "marcos"
        }
    ],
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.4.0 | Added |

