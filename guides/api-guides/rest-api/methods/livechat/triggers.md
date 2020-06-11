# Triggers

## Get the Livechat Triggers

Lists all Livechat triggers. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/triggers` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/livechat/triggers
```

## Example Result

```javascript
{
    "triggers": [
        {
            "_id": "Lk52shJFYyb55trw8",
            "name": "test",
            "description": "test",
            "enabled": true,
            "runOnce": true,
            "conditions": [
                {
                    "name": "page-url",
                    "value": ""
                }
            ],
            "actions": [
                {
                    "name": "send-message",
                    "params": {
                        "sender": "",
                        "msg": ""
                    }
                }
            ],
            "_updatedAt": "2019-10-04T15:36:29.695Z"
        }
    ],
    "count": 1,
    "offset": 0,
    "total": 1,
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.2.0 | Added |

## Get a Livechat Trigger

Get a Livechat Trigger by id.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/triggers/:_id` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/livechat/triggers/Lk52shJFYyb55trw8
```

## Example Result

```javascript
{
    "trigger": {
        "_id": "Lk52shJFYyb55trw8",
        "name": "test",
        "description": "test",
        "enabled": true,
        "runOnce": true,
        "conditions": [
            {
                "name": "page-url",
                "value": ""
            }
        ],
        "actions": [
            {
                "name": "send-message",
                "params": {
                    "sender": "",
                    "msg": ""
                }
            }
        ],
        "_updatedAt": "2019-10-04T15:36:29.695Z"
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.2.0 | Added |

