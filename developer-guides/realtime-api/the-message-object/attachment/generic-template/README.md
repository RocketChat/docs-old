# The Generic Template

The generic template is a simple structured message that includes a title, subtitle, image, and up to three buttons. You may also specify a default_action object that sets a URL that will be opened in a webview when the template is tapped.  [Example]()

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
        "webview_height_ratio": "<COMPACT | TALL | FULL>"
      },
      "buttons":["<BUTTON_OBJECT>", "<BUTTON_OBJECT>", "<BUTTON_OBJECT>" ]      
    },
  ]
}
```

The Generic Template contains these fields:

- `template_type`: must be "generic" (String)
- `elements`: An array of element objects that describe instances of the generic template to be sent.

The Elements array contains these fields:
- `title`: The title to display in the template. (String)
- `subtitle`: _(Optional)_  The subtitle to display in the template. (String)
- `image_url`: _(Optional)_ The URL of the image to display in the template. (String)
- `default_actions`: _(Optional)_ The default action executed when the template is tapped. ccepts the same properties as URL button, except title. (Object)
- `buttons`: _(Optional)_ An array of buttons to append to the template. A maximum of 3 buttons per element is supported.

see [Buttons](../buttons/) for more info on the ```buttons``` array