---
description: >-
  Omnichannel adds the ability to receive conversations from a pop-up livechat
  support on your website and your business facebook chat directly in
  Rocket.chat.
---

# Omnichannel

Rocket.Chat had minimal Livechat as a feature for a long time.

Recently the demand for production-grade Livechat has increased, so we did a complete rewrite of the package.

## Activation 

### Enable Livechat feature

To enable the Livechat feature on your Rocket.Chat instance:

1. Go to **Administration.**

![](../../../.gitbook/assets/image%20%2830%29.png)

2. Search '**Omnichannel'** in **Settings** and enable it.

![](../../../.gitbook/assets/image%20%2829%29.png)

Now the admin will have access to _**Omnichannel Panel Settings**_ **** through a new menu called `Omnichannel` at the top left corner dropdown menu, as shown below:

![](../../../.gitbook/assets/image%20%2832%29.png)



## Configuration

### **Omnichannel Administrative Settings** 

### Business Hour

### CRM Integration

### External Frame

### Facebook

### GDPR

### Livechat

### RD Station

### Routing

### Sessions





#### 



#### Integrations

You can use webhooks to easily integrate Livechat with your CRM.

The Rocket.Chat will send a POST to the WebHook URL when the Livechat ends or you receive a new offline message.

Here is an example of the JSON data sent at the end of a Livechat session:

```text
{
    "type": "LivechatSession",
    "_id": "fasd6f5a4sd6f8a4sdf",
    "label": "title",
    "topic": "topic of the session",
    "code": 123123,
    "createdAt": "2016-06-01T18:41:16.856Z",
    "lastMessageAt": "2016-06-01T18:41:16.856Z",
    "tags": [
        "tag1",
        "tag2",
        "tag3"
    ],
    "customFields": {
        "productId": "123456"
    },
    "visitor": {
        "_id": "",
        "name": "viistor name",
        "username": "visitor-username",
        "department": "department",
        "email": "email@address.com",
        "phone": "192873192873",
        "ip": "123.456.7.89",
        "browser": "Chrome",
        "os": "Linux",
        "customFields": {
            "customerId": "123456"
        }
    },
    "agent": {
        "_id": "asdf89as6df8",
        "username": "agent.username",
        "name": "Agent Name",
        "email": "agent@email.com"
    },
    "messages": [
        {
            "username": "visitor-username",
            "msg": "message content",
            "ts": "2016-06-01T18:41:16.856Z"
        },
        {
            "username": "agent.username",
            "agentId": "asdf89as6df8",
            "msg": "message content from agent",
            "ts": "2016-06-01T18:41:16.856Z"
        }
    ]
}
```

Here is an example of the JSON data sent on a Livechat offline message:

```text
{
    "type": "LivechatOfflineMessage",
    "sentAt": "2016-06-01T19:55:53.867Z",
    "visitor": {
        "name": "name from the form",
        "email": "email@fromtheform.com"
    },
    "message": "message from the form"
}
```

The field **Secret Token** is sent to a header `X-RocketChat-Livechat-Token` so you can validate if the request became from the Livechat.

If your endpoint returns a response status other than 200, Rocket.Chat will retry 10 times waiting 10 seconds between retries.

#### 

