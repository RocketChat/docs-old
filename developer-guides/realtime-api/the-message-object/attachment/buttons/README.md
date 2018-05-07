# Buttons

Buttons can be included within a '''buttons''' object inside the generic template or in a '''buttons template''' of it's own.

## The Buttons Template

The button template allows you to send a structured message that includes text and buttons.

'''json
"payload":{
        "template_type":"button",
        "text":"What do you want to do next?",
        "buttons":[
          {
            "type":<BUTTON_TYPE>,
            "title":"<BUTTON_TEXT>",
            ...
          },
          ...
          ]
      }
'''

# Button Objects

## Url Button

The URL Button opens a web page in the a webview. This allows you to enrich the conversation with a web-based experience, where you have the full development flexibility of the web.

```json
"buttons":[
    {
      "type": "web_url",
      "url": "<URL_TO_OPEN_IN_WEBVIEW>",
      "title": "<BUTTON_TEXT>",
    },
    ...
]
```

## Postback Button

The postback button sends a message event to your webhook with the string set in the payload property. This allows you to take an arbitrary actions when the button is tapped.

```json
"buttons":[
    {
      "type": "postback",
      "title": "<BUTTON_TEXT>",
      "payload": "<STRING_SENT_TO_WEBHOOK>"
    },
    ...
]
```