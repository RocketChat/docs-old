# The Message object

The message object is the very soul of a conversation. It encapsulates all the information need in order to represent a single entry on a message list.

The message object contains these fields:

- `_id`: The message id
- `rid`: The room id - Identify the room the message belongs
- `msg`: The textual message
- `payload`: _(New proposal)_ Object which describes the message content, i.e. text, images, files, [buttons](buttons/), or [templates](templates/) that contain rich message objects including all or some of the above.
- `ts`: The message time stamp (date of creation on client)
- `u`: The user that sent the message
- `_updatedAt`: The time stamp when the message got saved on the server
- `editedAt`: _(Optional)_ The time stamp of when the message was edited
- `editedBy`: _(Optional)_ The user that editted the message
- `urls`: _(Optional)_ A collection of URLs metadata. Available when the message contains at least one URL
- `attachments`: _(Optional - New proposal is to deprecate this in favor of type/payload)_ A collection of attachment objects, available only when the message has at least one attachment
- `alias`: _(Optional)_ A way to display the message is "sent" from someone else other than the user who sent the message
- `avatar`: _(Optional)_ A url to an image, that is accessible to anyone, to display as the avatar instead of the message user's account avatar
- `groupable`: _(Optional)_ Boolean that states whether or not this message should be grouped together with other messages from the same user
- `parseUrls`: _(Optional)_ Whether Rocket.Chat should try and parse the urls or not

The user presented on `u` and `editedBy` fields are a simplified version of the user information:

- `_id`: The user id
- `username`: The username

The URL metadata contains several informational fields:

- `url`: The URL itself (just as it appears on the message)
- `meta`: URL metadata (varies accord to the URL)
- `headers`: Some HTTP headers (varies accord to the URL)
- `parsedUrl`: The parsed URL broken into its parts

The attachment object inside the attachments array can contain several fields:

- `image_url`: The image url of the attachment
- `color`: _(Optional)_ The color of the border which displays on the left side of the attachment.

```json
{
    "messages": [
        {
            "_id": "<message-id>",
            "rid": "<room-id>",
            "msg": "Hello World!",
            "ts": { "$date": 1480377601 },
            "u": {
                "_id": "<user-id>",
                "username": "<username>"
            },
            "_updatedAt": { "$date": 1480377601 }
        },
        {
            "_id": "<message-id>",
            "rid": "<room-id>",
            "msg": "Hello!",
            "ts": { "$date": 1480377601 },
            "u": {
                "_id": "<user-id>",
                "username": "<username>"
            },
            "_updatedAt": { "$date":1480377601 },
            "editedAt": { "$date": 1480377601 },
            "editedBy": {
                "_id": "<user-id>",
                "username": "<username>"
            }
        }
    ]
}
```

## Example messages using proposed payload field

The payload includes a `type` field:
- `type`: _(Required)_ The type of content encapsulated in the payload. It is used to describe the content and indicate to the client how to layout and display the rich message.
- `template_type`: _(Required when `type = template`)_ Indicates which known template to use when constructing the layout. Currently only supports `generic`.

The `type` field options include:
- `image`: An image only.
- `horizontal_buttons`: An array of button objects to be displayed horizontally on the screen.
- `vertical_buttons`: An array of button objects to be displayed vertically on the screen.
- `template`: _(Requires the use of a `template_type` field)_ Indicates that the layout and contents will be described in the context of a known template.


### Image message

```json
{
    "messages": [
        {
            "_id": "<message-id>",
            "rid": "<room-id>",
            "msg": "Hello World",
            "payload": {
                    "type": "image",
                    "image_url": "<imgage-url>",
                    "image_description": "This is my image!"
            },
            "ts": { "$date": 1480377601 },
            "u": {
                "_id": "<user-id>",
                "username": "<username>"
            },
            "_updatedAt": { "$date":1480377601 },
            "editedAt": { "$date": 1480377601 },
            "editedBy": {
                "_id": "<user-id>",
                "username": "<username>"
            }
        },
    ]
}
```


### Image message with [keyboard](keyboard/)

```json
{
    "messages": [
        {
            "_id": "<message-id>",
            "rid": "<room-id>",
            "msg": "Hello World.",
            "payload": { 
                "type": "image",
                "image_url": "<imgage-url>",
                "image_description": "This is my image!",

                "keyboard": {
                    "default_height": true,
                    "buttons": [
                         "<button-object>"
                         "<button-object>"
                         "<button-object>"
                         "..."
                    ]
                }

            },
            "ts": { "$date": 1480377601 },
            "u": {
                "_id": "<user-id>",
                "username": "<username>"
            },
            "_updatedAt": { "$date": 1480377601 }
        },
    ]
}
```


### Generic Template message

```json
{
    "messages": [
        {
            "_id": "<message-id>",
            "rid": "<room-id>",
            "payload": {
                "type": "template",
                "template_type": "generic",
                "elements":[
                    {
                      "title":"<title-text>",
                      "image_url":"<image-url-to-display>",
                      "subtitle":"<subtitle-text>",
                      "default_action": {
                            "type": "web_url",
                            "url": "<default-url-to-open>",
                            "webview_height_ratio": "<compact | tall | full>"
                      },
                      "buttons":["<button-object>", "<button-object>", "<button-object>" ]      
                    },
                ]
            },
            "ts": { "$date": 1480377601 },
            "u": {
                "_id": "<user-id>",
                "username": "<username>"
            },
            "_updatedAt": { "$date":1480377601 },
            "editedAt": { "$date": 1480377601 },
            "editedBy": {
                "_id": "<user-id>",
                "username": "<username>"
            }
        },
    ]
}
```

##  Button message including three button types

```json
{
    "messages": [
        {
            "_id": "<message-id>",
            "rid": "<room-id>",
            "payload":{
                "type":"horizontal_buttons",
                "text":"What do you want to do next?",
                "buttons":[
                    {
                        "type":"web_url",
                        "title":"<button-text>",
                        "web_url": "<url-to-open-in-integrated-webview>",
                        "webview_height_ratio": "<compact | tall | full>",
                    },
                    {
                        "type":"postback",
                        "title":"<button-text>",
                        "payload": "<developer-defined-payload>",
                    },
                    {
                        "type":"url",
                        "title":"<button-text>",
                        "url": "<url-to-open-in-mobile-browser>",
                        "image": "<url-to-image-displayed-in-button>"
                    },       
                ]
            },
            "ts": { "$date": 1480377601 },
            "u": {
                "_id": "<user-id>",
                "username": "<username>"
            },
            "_updatedAt": { "$date":1480377601 },
            "editedAt": { "$date": 1480377601 },
            "editedBy": {
                "_id": "<user-id>",
                "username": "<username>"
            }
        },
    ]
}
```

## Resources

- [A Survey of Rich Messaging in Chatbots](https://github.com/WideChat/Rocket.Chat.Android/wiki/A-Survey-of-Rich-Messaging-in-Chatbots)

