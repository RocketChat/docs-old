# Send Message

There are a few ways to communicate when using Rocket.Chat, as described below.

## Sending a text message

The most basic (and more common) way to communicate is through plain text. You're going to use the `sendMessage` method and send a single parameter: the `message`.

The `sendMessage` is described as:

- `_id`: The message id
- `rid`: The room id for where to send this message
- `msg`: The message body (the text of the message itself)

```json
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

[See rooms.upload](../../../rest-api/rooms/upload/)


## See Also

- [The Message Object][1]
- [Delete Message Method][2]
- [Update Message Method][3]

[1]:../../the-message-object/
[2]:../delete-message/
[3]:../update-message/
