# Livechat

Rocket.Chat had minimal Livechat as a feature for a long time.

Recently, the demand for production-grade Livechat has increased, and we started a completely rewrite of the package.

This document is instructions on setting up the new Livechat  _work-in-progress_ version.

# Introduction

Livechat package adds the ability to embed a pop-up support chat to your website.

# Activation and Configuration

## Enable Livechat feature

First, you have enable the Livechat feature on your Rocket.Chat instance. Go to `Administration > Settings > Livechat` and enable it.

![image](https://cloud.githubusercontent.com/assets/8591547/14460567/97c6609c-0094-11e6-8f7e-da9a7c08ba51.png)

Now the admin will have access to *Livechat manager* through a new menu called `Livechat` at the top left corner drop down menu.

![image](https://cloud.githubusercontent.com/assets/8591547/14460616/d8213bbc-0094-11e6-85cd-cc061ab1fb1d.png)

## Configure Livechat feature

At *Livechat manager* you'll have the following configuration options:

### User Management

You can add new livechat manager users and agents.

In order to start receiving incoming live chats you need to add livechat agents.

### Departments

You can have the following behavior according on how many department you have created:

* No departments: all Livechat agents will receive incoming chats using a round robin rule;
* One department: all incoming chats will be offered to agents **only** on that department using a round robin rule;
* More than one department: the visitor will have to choose with what department he wants to talk to at registration.

### Triggers

You can configure how your Livechat widget will be triggered on your website.

Fill in the condition field and the action field.

### Custom Fields

You can configure custom fields to be sent by the client. You can see an example on the [Livechat API page](/6. Developer Guides/4. Livechat API/#set-custom-field).

### Installation

Use this JavaScript code to add the Livechat widget to your website. You may modifying it to your specific requirements.

### Appearance

Customize the appearance of your Livechat widget

### Integrations

You can use webhooks to easily integrate livechat with your CRM.

The Rocket.Chat will send a POST to the webhook URL when the livechat ends or you receive a new offline message.

Here is an example of the JSON data sent on the end of a livechat session:

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

Here is an example of the JSON data sent on a livechat offline message:
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

The field **Secret Token** is sent to a header `X-RocketChat-Livechat-Token` so you can validate if the request became from the livechat.

If your endpoint returns a response status other than 200, Rocket.Chat will retry 10 times waiting 10 secondes between retries.
