# The attachment object

This is where you can define a template object that contains Rich Messages.  

```json
{
  "messages":[
    {
        ...
        "attachment":{
          "type":"template",
          "payload":{
            "template_type":"<TEMPLATE_TYPE>",
            ...
           }
        }
    },
      ...
  ]
}
```

## Templates

Message templates offer a way for you to offer a richer in-conversation experience than standard text messages by integrating buttons, images, lists, and more alongside text a single message. Templates can be use for many purposes, such as displaying product information, asking the message recipient to choose from a pre-determined set of options, and showing search results.

[The Generic Template](generic-template/)
[Other Templates?](generic-template/)


## Buttons

Most message templates, as well as the persistent menu support buttons that invoke different types of actions.These buttons allow you to easily offer the message recipient actions they can take in response to the template, such as opening a webview, starting a payment flow, sending a postback message to your webhook, and more.

For message templates, buttons are included defined by objects in the buttons array.

[Buttons](buttons/)



