# Livechat

Rocket.Chat had minimal Livechat as a feature for a long time.

Recently the demand for production-grade Livechat has increased, so we started a complete rewrite of the package.

This document contains instructions on setting up the new Livechat _work-in-progress_ version.

## Introduction

Livechat package adds the ability to embed a pop-up support chat to your website.

## Activation and Configuration

### Enable Livechat feature

First, you have to enable the Livechat feature on your Rocket.Chat instance. Go to `Administration > Settings > Livechat` and enable it.

![image](https://cloud.githubusercontent.com/assets/8591547/14460567/97c6609c-0094-11e6-8f7e-da9a7c08ba51.png)

Now the admin will have access to _Livechat manager_ through a new menu called `Livechat` at the top left corner drop down menu.

![image](https://cloud.githubusercontent.com/assets/8591547/14460616/d8213bbc-0094-11e6-85cd-cc061ab1fb1d.png)

### Configure Livechat feature

At _Livechat manager_ you'll have the following configuration options:

#### User Management

You can add new Livechat manager users and agents.

To start receiving incoming live chats you need to add Livechat agents.

#### Departments

You can have the following behavior depending on how many departments you have created:

* No departments: all Livechat agents will receive incoming chats using a round robin rule;
* One department: all incoming chats will be offered to agents **only** on that department using a round robin rule;
* More than one department: the visitor will have to choose what department he wants to talk to at registration.

#### Triggers

You can configure how your Livechat widget will be triggered and what it will do on your website.

You can set a condition \(e.g. user access a URL\) and an action \(e.g. send a message with the text "hello"\).

![image](https://cloud.githubusercontent.com/assets/20868078/24811185/50fa9214-1b9b-11e7-86e4-27e2b90dcf99.png)

#### Custom Fields

You can configure custom fields to be sent by the client. You can see an example on the [Livechat API page](../../../api/livechat-api.md#set-custom-field).

#### Installation

Go to the Livechat Manager -&gt; Installation

![image](https://cloud.githubusercontent.com/assets/51996/20235285/80d6e250-a853-11e6-83b9-b73f0be0bd97.png)

Then copy the code displayed into the source code of your website. You may modify it to meet your specific requirements.

#### Appearance

To customize the appearance of your Livechat widget goto Livechat -&gt; Appearance

![image](https://cloud.githubusercontent.com/assets/51996/20235293/a9c34ca8-a853-11e6-8042-9f742b91938e.png)

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

#### Widget Embedding

**Magento 2**

Magento 2 depends on **RequireJS** to load JavaScript resources, so we need to change the widget code a little to look like:

```text
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

Replace the `https://rc.example.com/` with your Rocket.Chat \(sub-\)domain, and paste the code into your theme file `/app/design/frontend/Theme_provider/theme_name/Magento_Theme/templates/root.phtml` right before the closing `</html>` tag. Flush your PHP OpCode cache, and you are ready to go.

