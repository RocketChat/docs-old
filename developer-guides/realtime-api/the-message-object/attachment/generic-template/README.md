# The Generic Template

The generic template is a simple structured message that includes a title, subtitle, image, and up to three buttons. You may also specify a default_action object that sets a URL that will be opened in a webview when the template is tapped.

```json
"payload": {
  "template_type":"generic",
  "elements":[
     {
      "title":"<TITLE_TEXT>",
      "image_url":"<IMAGE_URL_TO_DISPLAY>",
      "subtitle":"<SUBTITLE_TEXT>",
      "default_action": {
        "type": "web_url",
        "url": "<DEFAULT_URL_TO_OPEN>",
        "messenger_extensions": <TRUE | FALSE>,
        "webview_height_ratio": "<COMPACT | TALL | FULL>"
      },
      "buttons":[<BUTTON_OBJECT>, ...]      
    },
    ...
  ]
}
```