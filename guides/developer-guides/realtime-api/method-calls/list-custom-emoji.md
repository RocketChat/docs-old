# List Custom Emoji

Returns a list of custom emoji registered with the server. There's no need for parameters.

The `result` will be a collection of `emoji`. The `emoji` is defined as:

* `_id`: The emoji id
* `name`: The emoji friendly name
* `aliases`: A collection of alias for the emoji. The alias is used to identify the emoji on text and for fast reference from typing - the famous `:emoji-alias:`. \(Each emoji alias is unique per server\)
* `extension`: The emoji file extension
* `_updatedAt`: The date when the emoji was updated to the server

Example request:

```javascript
{
    "msg": "method",
    "method": "listEmojiCustom",
    "id": "42",
    "params": []
}
```

Response:

```javascript
{
    "msg": "result",
    "id": "42",
    "result": [
        {
            "_id": "emoji-id",
            "name": "emoji-name",
            "aliases": [ "emoji-alias" ],
            "extension": "emoji-file-extension",
            "_updatedAt": { "$date": 1480377601 }
        },
        ... // more emojis
    ]
}
```

## Showing the emoji image

To show the custom emoji images, you simply need to request this URL:

> ${ path }/emoji-custom/${ encoded\(name\) } }.${ extension }.

Example:

```javascript
{
    "_id": "emoji-id",
    "name": "Emoji Name",
    "aliases": [ "emoji-alias" ],
    "extension": "png",
    "_updatedAt": { "$date": 1480377601 }
}
```

The URL to access this emoji will be:

`http://yourhost.com/emoji-custom/Emoji%20Name.png`

