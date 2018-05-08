# Buttons

Buttons can be included within a '''buttons''' object inside the generic template or in a '''buttons template''' of it's own.

## The Buttons Template

The button template allows you to send a structured message that includes text and buttons.

```json
"payload":{
        "template_type":"button",
        "text":"What do you want to do next?",
        "buttons":[
          {
            "type":"<BUTTON_TYPE>",
            "title":"<BUTTON_TEXT>",
            "url_or_payload": "<URL_OR_PAYLOAD>",
          },          
        ]
      }
```

The Button Template includes these fields:

- `template_type`: must be "button"
- `text`: title that appears at the top of the Rich Message (String)

# Button Objects

## Url Button

The URL Button opens a web page in a webview. This allows you to enrich the conversation with a web-based experience, where you have the full development flexibility of the web.

```json
"buttons":[
    {
      "type": "web_url",
      "url": "<URL_TO_OPEN_IN_WEBVIEW>",
      "title": "<BUTTON_TEXT>",
    },
]
```

The Url Button contains these fields:

- `type`: Must be "web_url"
- `url`: This URL is opened in a mobile browser when the button is tapped.  (String)
- `title`: Button title. (String)
- `webview_height_ratio`: _(Optional)_ Height of the Webview. Valid values: "compact", "tall", "full". Defaults to full.

## Postback Button

The postback button sends a message event to your webhook with the string set in the payload property. This allows you to take an arbitrary actions when the button is tapped.

```json
"buttons":[
    {
      "type": "postback",
      "title": "<BUTTON_TEXT>",
      "payload": "<STRING_SENT_TO_WEBHOOK>"
    },
]
```

The Postback Button contains these fields:

- `type`: Must be "postback"
- `title`: Button title (String)
- `payload`: This data will be sent back to your webhook. (String)
