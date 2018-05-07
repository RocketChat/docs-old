# The attachment object

This is where you can define an attachment object, including templates that contain Rich Messages.

The attachment object contains these fields:

- `type`: value must be one of ["audio", "video", "image", "file", "template"]
- `payload`: payload of the template (object)

```json
{
  "messages":[
    {
      "attachment":{
        "type":"template",
        "payload":{
          "template_type":"<TEMPLATE_TYPE>",
          "template_type":"<TEMPLATE_TYPE>",
        }
      }
    },
  ]
}
```

```json
{
  "message":{
      "attachment":{
        "type":"image", 
        "payload":{
          "url":"<IMAGE_URL>", 
        }
      }
    }
}
```

## Templates

Message templates offer a way for you to offer a richer in-conversation experience than standard text messages by integrating buttons, images, lists, and more alongside text in a single message. Templates can be used for many purposes, such as displaying product information, asking the message recipient to choose from a pre-determined set of options, and showing search results.

- [The Generic Template](generic-template/)
- [The Button Template](buttons/)


## Buttons

Most message templates, as well as the persistent menu support buttons that invoke different types of actions.These buttons allow you to easily offer the message recipient actions they can take in response to the template, such as opening a webview, starting a payment flow, sending a postback message to your webhook, and more.

For message templates, buttons are included and defined by objects in the buttons array.

- [Buttons](buttons/)

## Resources

- [A Survey of Rich Messaging in Chatbots](https://github.com/WideChat/Rocket.Chat.Android/wiki/A-Survey-of-Rich-Messaging-in-Chatbots)



