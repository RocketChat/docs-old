---
order: 50
---

# Post a chat message
| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- | :--- |
| `/api/v1/chat.postMessage` | `yes` | `POST` |

## Payload
| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId` <br><br> `channel` | `ByehQjC44FwMeiLbX` <br><br> `#general` | <br> Required | The room id of where the message is to be posted. <br><br> The channel name with the prefix in front of it. |
| `text` | `Sample message` | Optional | The text of the message to send, is optional because of attachments. |
| `alias` | `Some Name` | Optional | This will cause the message's name to appear as the given alias, but your username will still display. |
| `emoji` | `:smirk:` | Optional | If provided, this will make the avatar on this message be an emoji. [Emoji Cheetsheet](http://emoji.codes/) |
| `avatar` | `http://site.com/logo.png` | Optional | If provided, this will make the avatar use the provided image url. |
| `attachments` | `[{}]` | Optional | See the below section, [Attachments Detail](#attachments-detail), for details. |


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
| `collapsed` | `false` | General | Causes the image, audio, and video sections to be hidding when collapsed is true. |
| `author_name` | `Bradley Hilton` | Author | Name of the author. |
| `author_link` | `https://bit.ly/` | Author | Providing this makes the author name clickable and points to this link. |
| `author_icon` | `https://site.com/img.png` | Author | Displays a tiny icon to the left of the Author's name. |
| `title` | `Attachment Title` | Title | Title to display for this attachment, displays under the author. |
| `title_link` | `https://youtube.com` | Title | Providing this makes the title clickable, pointing to this link. |
| `title_link_download` | `https://site.com/img.png` | Title | When this is provided, a download icon appears and clicking this saves the link to file. |
| `image_url` | `https://site.com/img.png` | Image | The image to display, will be "big" and easy to see.
| `audio_url` | `https://site.com/aud.mp3` | Audio | Audio file to play, only supports what [html audio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) does. |
| `video_url` | `https://site.com/vid.mp4` | Video | Video file to play, only supports what [html video](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) does. |
| `fields` | `[{}]` | Fields | An array of [Attachment Field Objects](#attachment-field-objects). |

#### Attachment Field Objects
The field property of the attachments allows for "tables" or "columns" to be displayed on messages.

| Property | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `short` | true | Optional <br> Default: `false` | Whether this field should be a short field. |
| `title` | `Status` | Required | The title of this field. |
| `value` | `online` | Required | The value of this field, displayed underneath the title value. |

## Message Object Example
```json
{
	"roomId": "Xnb2kLD2Pnhdwe3RH",
    "channel": "#general",
	"text": "Sample message",
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
		"title_link_download": "https://rocket.chat/download",
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
```

## Example Call
```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/chat.postMessage \
     -d '{ "channel": "#general", "text": "This is a test!" }'
```

## Example Result
```json
{
  "ts": 1481748965123,
  "channel": "general",
  "message": {
    "alias": "",
    "msg": "This is a test!",
    "parseUrls": true,
    "groupable": false,
    "ts": "2016-12-14T20:56:05.117Z",
    "u": {
      "_id": "y65tAmHs93aDChMWu",
      "username": "graywolf336"
    },
    "rid": "GENERAL",
    "_updatedAt": "2016-12-14T20:56:05.119Z",
    "_id": "jC9chsFddTvsbFQG7"
  },
  "success": true
}
```
