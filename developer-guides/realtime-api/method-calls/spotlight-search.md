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



