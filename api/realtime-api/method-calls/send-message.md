# Send Message

There are a few ways to communicate when using Rocket.Chat, as described below.

## Sending a text message

The most basic \(and more common\) way to communicate is through plain text. You're going to use the `sendMessage` method and send a single parameter: the `message`.

The `sendMessage` is described as:

* `_id`: The message id
* `rid`: The room id for where to send this message
* `msg`: The message body \(the text of the message itself\)

```javascript
{
    "msg": "method",
    "method": "sendMessage",
    "id": "42",
    "params": [
        {
            "_id": "message-id",
            "rid": "room-id",
            "msg": "Hello World!"
        }
    ]
}
```

## Sending a file

For sending a file we now recommend using the rest api:

[See rooms.upload](../../rest-api/methods/rooms/upload.md)

## See Also

* [The Message Object](../../schema-definition/the-message-object.md)
* [Delete Message Method](delete-message.md)
* [Update Message Method](update-message.md)

