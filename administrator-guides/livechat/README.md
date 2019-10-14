# Livechat

Rocket.Chat used to have a minimal Livechat as a feature for a long time.

Recently, the demand for production-grade Livechat has increased, so we started to rewrite the package from scratch.

This document contains instructions for you to set up your new Livechat _work-in-progress_ version.

## Introduction

Livechat package adds the ability to embed a pop-up support chat to your website.

## Activation and Configuration

### Enable Livechat Feature

First, you have to enable the Livechat feature on your Rocket.Chat instance. Go to `Administration > Settings > Livechat` and enable it.

![image](https://cloud.githubusercontent.com/assets/8591547/14460567/97c6609c-0094-11e6-8f7e-da9a7c08ba51.png)

Now the admin has access to the Livechat Manager through a new menu called `Livechat`, located at the top left corner drop-down menu.

![image](https://cloud.githubusercontent.com/assets/8591547/14460616/d8213bbc-0094-11e6-85cd-cc061ab1fb1d.png)

### Configure Livechat Feature

The following configuration options are available for the Livechat Manager:

#### User Management

You can add new users and agents to your Livechat Manager.

To start receiving incoming live chats, you need to add Livechat agents.

#### Departments

You can have the following behavior, depending on how many departments you created:

- No departments: all Livechat agents receive incoming chats; the round robin rule applies
- One department: all incoming chats are offered to agents **only** in that department, the round robin rule applies
- More than one department: the visitor must choose which department they want to talk to upon registration.

#### Triggers

You can configure how your Livechat is triggered, and what it does on your website.

It is possible to set a condition, e.g. user access a URL; and an action, e.g. send a message with the text "hello".

![image](https://cloud.githubusercontent.com/assets/20868078/24811185/50fa9214-1b9b-11e7-86e4-27e2b90dcf99.png)

#### Custom Fields

The following is an example on how to configure custom fields sent by the client [Livechat API page](../../developer-guides/livechat-api/#set-custom-field).

#### Installation

Go to `Livechat > Installation`

![image](https://cloud.githubusercontent.com/assets/51996/20235285/80d6e250-a853-11e6-83b9-b73f0be0bd97.png)

After that, copy the code displayed into the source code of your website - modify it to meet your specific requirements.

#### Appearance

To customize the appearance of your Livechat widget go to `Livechat > Appearance`

![image](https://cloud.githubusercontent.com/assets/51996/20235293/a9c34ca8-a853-11e6-8042-9f742b91938e.png)

#### Integrations

You can use Webhooks to easily integrate Livechat with your CRM.

The Rocket.Chat sends a post to the WebHook URL when the Livechat ends or you receive a new off-line message.

Here is an example of JSON data sent at the end of a Livechat session:

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

Here is an example of the JSON data sent on a Livechat off-line message:

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

The `Secret Token` field is sent to a `X-RocketChat-Livechat-Token` header, so you can validate if the request became from the Livechat.

If your endpoint returns a response status other than 200, Rocket.Chat retries 10 times, waiting 10 seconds between retries.

#### Embedded Widget

##### Magento 2

Magento 2 depends on **RequireJS** to load JavaScript resources, so we need to change the widget code a little to look like this:

```
   <script defer="defer" async="async" type="text/javascript">
        require([ 'jquery' ], function ($) {
            (function(w, d, s, u) {
                w.RocketChat = function(c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;
                var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
                j.async = true; j.src = 'https://rc.example.com/packages/rocketchat_livechat/assets/rocket-livechat.js';
                h.parentNode.insertBefore(j, h);
            })(window, document, 'script', 'https://rc.example.com/livechat');
        });
    </script>
```

Replace the `https://rc.example.com/` with your Rocket.Chat (sub-)domain, and paste the code into your theme file `/app/design/frontend/Theme_provider/theme_name/Magento_Theme/templates/root.phtml` right before the closing `</html>` tag.
Flush your PHP OpCode cache, and you are ready to go.
