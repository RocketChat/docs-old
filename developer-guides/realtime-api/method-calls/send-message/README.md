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

In order to find out which storage system is used for the uploaded files, we need to check the setting `FileUpload_Storage_Type`. Valid values are:

- `GridFS`
- `AmazonS3`
- `FileSystem`

Sending a file is a bit more complex. It involves two method calls and some HTTP requests. The flow is:

- Send a `slingshot/uploadRequest` method call with some initial information about the upload (see example bellow)
- Use the returned information about the storage service to upload the file content (see example below)
- Send a `sendFileMessage` method call with the extra information about the upload (see example bellow)

First request (`slingshot/uploadRequest`):

```json
{
    "msg": "method",
    "method": "slingshot/uploadRequest",
    "id": "42",
    "params": [
        "rocketchat-uploads", // no idea
        {
            "name": "filename.extension",
            "size": 15664,
            "type": "mime-type"
        },
        { "rid": "room-id" }
    ]
}
```

First response (`slingshot/uploadRequest` response):

```json
{
    "msg": "result",
    "id": "42",
    "result": {
        "upload": "upload-uri",
        "download": "file-uri",
        "postData": [
            ... // key-value pairs of information for using the storage services
        ]
    }
}
```

With the information available, do the file upload to the service.

Second request (`sendFileMessage`):

```json
{
    "msg": "method",
    "method": "sendFileMessage",
    "id": "42",
    "params": [
        "room-id",
        "storage-service-type", // example: s3
        {
            "type": "mime-type",
            "size": 15664,
            "name": "filename.extension",
            "_id": "file-id", // file id depends on the storage service (may be the last element on the file uri)
            "url": "file-uri"
        }
    ]
}
```

## See Also

- [The Message Object][1]
- [Delete Message Method][2]
- [Update Message Method][3]

[1]:../../the-message-object/
[2]:../delete-message/
[3]:../update-message/
