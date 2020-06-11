# Send Message

The difference between `chat.postMessage` and `chat.sendMessage` is that `chat.sendMessage` allows for passing a value for `_id` and the other one doesn't. Also, `chat.sendMessage` only sends it to one channel whereas the other one allows for sending to more than one channel at a time.

## IMPORTANT

You only can send `alias` and `avatar` properties if your user has the `bot` role. We implemented this rule to avoid users to impersonate other users.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/chat.sendMessage` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `message._id` | `ByehQjC44FwMeiLbX` | Required | The \_id of message. |
| `message.rid` | `ByehQjC44FwMeiLbX` | Required | The room id of where the message is to be sent. |
| `message.tmid` | `ByehQCh2435MeiLbX` | Optional | The message's id to create a thread. |
| `message.msg` | `Sample message` | Optional | The text of the message to send, is optional because of attachments. |
| `message.alias` | `Some Name` | Optional | This will cause the message's name to appear as the given alias, but your username will still display. |
| `message.emoji` | `:smirk:` | Optional | If provided, this will make the avatar on this message be an emoji. [Emoji Cheetsheet](http://emoji.codes/) |
| `message.avatar` | `http://site.com/logo.png` | Optional | If provided, this will make the avatar use the provided image url. |
| `message.attachments` | `[{}]` | Optional | See the below section, [Attachments Detail](sendmessage.md#attachments-detail), for details. |

### Attachments Detail

The attachments is an array of objects with any of the following properties. One attachment can have many sections, including:

* General
* Author Information
* Title Information
* Image
* Audio
* Video
* Table/Fields

| Property | Example | Section | Description |
| :--- | :--- | :--- | :--- |
| `color` | `#ff0000` | General | The color you want the order on the left side to be, any value [background-css](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color) supports. |
| `text` | `Sample attachment text` | General | The text to display for this attachment, it is different than the message's text. |
| `ts` | `2016-12-09T16:53:06.761Z` | General | Displays the time next to the `text` portion. |
| `thumb_url` | `https://site.com/img.png` | General | An image that displays to the left of the `text`, looks better when this is relatively small. |
| `message_link` | `https://rocket.chat` | General | Only applicable if the `ts` is provided, as it makes the time clickable to this link. |
| `collapsed` | `false` | General | Causes the image, audio, and video sections to be hiding when collapsed is true. |
| `author_name` | `Bradley Hilton` | Author | Name of the author. |
| `author_link` | `https://bit.ly/` | Author | Providing this makes the author name clickable and points to this link. |
| `author_icon` | `https://site.com/img.png` | Author | Displays a tiny icon to the left of the Author's name. |
| `title` | `Attachment Title` | Title | Title to display for this attachment, displays under the author. |
| `title_link` | `https://youtube.com` | Title | Providing this makes the title clickable, pointing to this link. |
| `title_link_download` | `true` | Title | When this is true, a download icon appears and clicking this saves the link to file. |
| `image_url` | `https://site.com/img.png` | Image | The image to display, will be "big" and easy to see. |
| `audio_url` | `https://site.com/aud.mp3` | Audio | Audio file to play, only supports what [html audio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) does. |
| `video_url` | `https://site.com/vid.mp4` | Video | Video file to play, only supports what [html video](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) does. |
| `fields` | `[{}]` | Fields | An array of [Attachment Field Objects](sendmessage.md#attachment-field-objects). |

#### Attachment Field Objects

The field property of the attachments allows for "tables" or "columns" to be displayed on messages.

| Property | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `short` | true | Optional   Default: `false` | Whether this field should be a short field. |
| `title` | `Status` | Required | The title of this field. |
| `value` | `online` | Required | The value of this field, displayed underneath the title value. |

## Message Object Example

```javascript
{
   "message": {
      "rid": "Xnb2kLD2Pnhdwe3RH",
      "msg": "Sample message",
      "alias": "Gruggy",
      "emoji": ":smirk:",
      "avatar": "http://res.guggy.com/logo_128.png",
      "attachments": [{
            "color": "#ff0000",
            "text": "Yay for gruggy!",
            "ts": "2016-12-09T16:53:06.761Z",
            "thumb_url": "http://res.guggy.com/logo_128.png",
            "message_link": "https://google.com",
            "collapsed": false,
            "author_name": "Bradley Hilton",
            "author_link": "https://rocket.chat/",
            "author_icon": "https://avatars.githubusercontent.com/u/850391?v=3",
            "title": "Attachment Example",
            "title_link": "https://youtube.com",
            "title_link_download": true,
            "image_url": "http://res.guggy.com/logo_128.png",
            "audio_url": "http://www.w3schools.com/tags/horse.mp3",
            "video_url": "http://www.w3schools.com/tags/movie.mp4",
            "fields": [{
              "short": true,
              "title": "Test",
              "value": "Testing out something or other"
            },{
              "short": true,
              "title": "Another Test",
              "value": "[Link](https://google.com/) something and this and that."
            }]
      }]
  }
}
```

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/chat.sendMessage \
     -d '{"message": { "rid": "Xnb2kLD2Pnhdwe3RH", "msg": "This is a test!" }}'
```

## Example Result

```javascript
{
    "message": {
        "rid": "GENERAL",
        "msg": "123456789",
        "ts": "2018-03-01T18:02:26.825Z",
        "u": {
            "_id": "i5FdM4ssFgAcQP62k",
            "username": "rocket.cat",
            "name": "test"
        },
        "unread": true,
        "mentions": [],
        "channels": [],
        "_updatedAt": "2018-03-01T18:02:26.828Z",
        "_id": "LnCSJxxNkCy6K9X8X"
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.4.0 | Added validation on user's identity |
| 0.60.0 | Added |

