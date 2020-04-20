# CRM Integrations

You can use webhooks to easily integrate LiveChat with your CRM.

**Note**:  For Magento 2 CRM solutions, also see the Magento 2 section below.

When a LiveChat session ends or if you receive a new offline message, Rocket.Chat sends a `POST` to the webhook URL.

See the following JSON examples:

* Example of JSON data sent at the end of a LiveChat session:

```json
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

* Example of the JSON data sent on a LiveChat offline message:

```json
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

The **Secret Token** field sends a request to a `X-RocketChat-Livechat-Token` header, so you can validate if the request actually came from the LiveChat.

If your endpoint returns a response status other than 200, Rocket.Chat retries 10 times with 10-second interval between each attempt.

## Magento 2

If your CRM solution is Magento 2, it requires **RequireJS** to load JavaScript resources.

You need to change the widget code slightly to look like this:

```js
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

Then replace the `https://rc.example.com/` with your Rocket.Chat (sub-)domain, and paste the code into your `/app/design/frontend/Theme_provider/theme_name/Magento_Theme/templates/root.phtml` theme file before the closing `</html>` tag.

Finally, flush your PHP OpCode cache, and you are ready to go.
