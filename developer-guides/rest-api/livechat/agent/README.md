# Dealing with Livechat agents

Retrieve the current Livechat agent data.

| URL                                       | Requires Auth | HTTP Method |
| :---------------------------------------- | :------------ | :---------- |
| `/api/v1/livechat/agent.info/:rid/:token` | `no`          | `GET`       |

## Payload

| Argument | Example             | Required | Description           |
| :------- | :------------------ | :------- | :-------------------- |
| `rid`    | `zRAeTszXor8CCPceB` | Required | The room `_id`.       |
| `token`  | `iNKE8a6k6cjbqWhWd` | Required | The visitor `token`.  |

## Example Call

```bash
curl http://localhost:3000/api/v1/livechat/agent.info/zRAeTszXor8CCPceB/iNKE8a6k6cjbqWhWd
```

## Example Result

```json
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
| :------ | :---------- |
| 0.70.0  | Added       |

## Request the next Livechat agent available.

| URL                                       | Requires Auth | HTTP Method |
| :---------------------------------------- | :------------ | :---------- |
| `/api/v1/livechat/agent.next/:token`      | `no`          | `GET`       |

## Payload

| Argument | Example             | Required | Description           |
| :------- | :------------------ | :------- | :-------------------- |
| `token`  | `iNKE8a6k6cjbqWhWd` | Required | The visitor `token`.  |

## Example Call

```bash
curl http://localhost:3000/api/v1/livechat/agent.next/iNKE8a6k6cjbqWhWd
```

## Example Result

```json
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
| :------ | :---------- |
| 0.70.0  | Added       |
