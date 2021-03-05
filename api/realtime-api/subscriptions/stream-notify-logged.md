# stream-notify-logged

Stream for logged users

Events available:

* Users:NameChanged
* Users:Deleted
* updateAvatar
* updateEmojiCustom
* deleteEmojiCustom
* roles-change
* [user-status](stream-notify-logged.md#user-status)

```javascript
{
    "msg": "sub",
    "id": "unique-id",
    "name": "stream-notify-logged",
    "params":[
        "event",
        false
    ]
}
```

## user-status

Event about user status changes. Example:

```javascript
{
    "msg": "changed",
    "collection": "stream-notify-logged",
    "id": "id",
    "fields": {
        "eventName": "user-status",
        "args": [["uNqJeFuag2344i62k", "rocket.cat", 1]]
    }
}
```

The `args` property will always be an array with the following values:

* User `_id`
* `username`
* Status indicator, where:

  | Value | Meaning |
  | ---: | :--- |
  | `0` | Offline |
  | `1` | Online |
  | `2` | Away |
  | `3` | Busy |

