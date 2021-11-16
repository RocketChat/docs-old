---
description: >-
  Webhooks allow you to integrate the Rocket.Chat Omnichannel to any third-party
  system, e.g., CRM, Zoho, etc
---

# Webhooks Manager's Guide

To access **Webhooks** settings:

Go to **Webhooks** in the omnichannel panel settings, as shown below:

![](<../../.gitbook/assets/0 (7).png>)

1. Get the Webhook URL from the system you want to connect
2. Enter the secret token
3. Select the actions you want this integration to have

![](<../../.gitbook/assets/1 (14).png>)

If you select Chat Start:

![](<../../.gitbook/assets/2 (12).png>)

Rocket.chat will send a webhook to the external system telling it that a new conversation has started, as shown below:

![](<../../.gitbook/assets/3 (12).png>)

Here is an example of the JSON data sent at the end of a Livechat session:

```
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

```
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

The field **Secret Token** is sent to a header `X-RocketChat-Livechat-Token` so you can validate if the request became from Livechat.

If your endpoint returns a response status other than 200, Rocket.Chat will retry 10 times waiting 10 seconds between retries.
