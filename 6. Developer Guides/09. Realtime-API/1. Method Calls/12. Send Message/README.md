# Send Message

There are a few ways to comunicate when using Rocket.Chat, as desbribed bellow.

## Sending a text message

The most basic (and more common) way to comunicate is throught plain text. You're going to use the `sendMessage` method and send a single parameter: a `message`.

The `message` is described as:

- `_id`: The message id
- `rid`: The room id for which this message is been send
- `msg`: The message body (the text message itself)

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

(How I known I have to use S3? From the settings?)

Sending a file is a bit more complex. It envolves two method calls and some HTTP requests. The flow is:

- Send a `slingshot/uploadRequest` method call with some inital information about the upload (see example bellow)
- Use the returned information about the storage service to upload the file content (see example below)
- Send a `sendFileMessage` method call with the extra information about the upload (see example bellow)

First request (`slingshot/uploadRequest`):

```json
{
    "msg": "method",
    "method": "slingshot/uploadRequest",
    "id": "42",
    "params": [
        "rocketchat-uploads", // no ideia
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