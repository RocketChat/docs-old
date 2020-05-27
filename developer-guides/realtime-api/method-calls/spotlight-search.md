# Spotlight \(search\)

Search for rooms or users.

## Requirements

| Logged In | Permission | Setting |
| :--- | :--- | :--- |
| Yes | _none_ | _none_ |

## Payload

1. `searchString` - String - the name of the thing being searched for
2. `exclude` - Array of strings - any items to exclude from the results \(e.g. users you already know about\)
3. `options` - Object - what kinds of items to search for, containing `users` and `rooms` - both booleans.

## Example Call

```text
{
    "msg": "method",
    "method": "spotlight",
    "params": ["test", ["testuser1"], {
        "users": true,
        "rooms": false
    }],
    "id": "unique-id"
}
```

## Example Response

```text
{
    "msg": "result",
    "id": "unique-id",
    "result": {
        "users": [
            {
                "_id": "q779pX2DPQdHpJuid",
                "status": "online",
                "name": "Admin",
                "username": "admin"
            },
            {
                "_id": "T5xeLJEC2FSagZp5X",
                "username": "alice",
                "status": "offline",
                "name": "alice"
            },
            {
                "_id": "rocket.cat",
                "name": "Rocket.Cat",
                "username": "rocket.cat",
                "status": "online"
            }
        ],
        "rooms": [
            {
                "_id": "YGKfY5j7hAGKjhwPF",
                "name": "chatter",
                "t": "c",
                "lastMessage": {
                    "_id": "Oinnp7OtD4z2AdmNk",
                    "rid": "YGKfY5j7hAGKjhwPF",
                    "msg": "Hello",
                    "ts": {
                        "$date": 1588252316473
                    },
                    "u": {
                        "_id": "T5xeLJEC2FSagZp5X",
                        "username": "alice"
                    },
                    "mentions": [],
                    "channels": [],
                    "_updatedAt": {
                        "$date": 1588252316498
                    }
                }
            },
            {
                "_id": "GENERAL",
                "t": "c",
                "name": "general",
                "lastMessage": {
                    "_id": "KqcDbY6Ab3wmEY5N9",
                    "rid": "GENERAL",
                    "msg": "test1",
                    "ts": {
                        "$date": 1589383273561
                    },
                    "u": {
                        "_id": "q779pX2DPQdHpJuid",
                        "username": "admin"
                    },
                    "mentions": [],
                    "channels": [],
                    "_updatedAt": {
                        "$date": 1589383273645
                    }
                }
            },
            {
                "_id": "xbE8idJpsTuNzi8Ax",
                "name": "testing",
                "t": "c"
            }
        ]
    }
}
```

