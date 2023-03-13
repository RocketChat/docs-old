# Webhooks

Omnichannel webhooks allow you to integrate the Rocket.Chat Omnichannel to any third-party system, e.g., CRM, Zoho, etc.

To access **Webhooks** settings,

* Navigate to **Administration** > **Workspace** > **Omnichannel** > **CRM Integration**.

## Create Omnichannel Webhook

To create a new **Omnichannel** webhook, you need to update the following details:

* **Webhook URL**: The Webhook URL from the system you want to connect(destination).
* **Secret Token**: Enter the secret token that can be used to verify the webhook.

{% hint style="info" %}
The field **Secret Token** is sent to a header `X-RocketChat-Livechat-Token` so you can validate if the request became from Livechat.

If your endpoint returns a response status other than `200`, Rocket.Chat will retry ten times, waiting ten seconds between retries.
{% endhint %}

* **Send Request on**: Select the action(s) you want this integration to have.
* **Send Request on Chat Start**: Sends a post request to the webhook endpoint when an Omnichannel chat starts.
* **Send Request on Chat Close**: Sends a request when a chat gets closed.
* **Send Request on Chat Taken**: Sends a request when an Omnichannel agent **Takes** a chat.
* **Send request on Chat Queued**: A request gets sent when a chat gets queued.
* **Send Request on Forwarding**: Triggers request to be sent when a chat gets forwarded to another Omnichannel department or Agent.
* **Send Request on Offline Messages**: Sends a request when a visitor leaves an offline message.
* **Send Request on Visitor Messages**: A request is sent when an Omnichannel visitor sends a message.
* **Send Request on Agent Messages**: Sends a request when an Omnichannel Agent sends a message or reply.
* **Send Visitor Navigation History on Request**: Sends a request about visitor's navigation history. _This feature depends on "Send Visitor Navigation History as a Message" to be enabled._
* **Send request on lead capture**: Sends a request when a lead is captured.
* **Lead capture email regex**: Specify the regex for lead captured email.
* **Lead capture phone regex**: Set the regex for lead-captured phone numbers.

{% hint style="info" %}
If you enable Send Request on Chat Start, Rocket.Chat sends a webhook to the external system telling it that a new conversation has started.
{% endhint %}

### Sample JSON Data

Here is an example of JSON data sent in the  request.

{% tabs %}
{% tab title="Livechat session" %}
```json
{
  "_id": "Tc5SyBZHovD4k8BXv",
  "label": "James",
  "createdAt": "2023-02-02T10:16:07.230Z",
  "lastMessageAt": "2023-02-02T10:22:14.087Z",
  "tags": [
    "self"
  ],
  "visitor": {
    "_id": "63db8d4990fe6eda42ad429a",
    "token": "e36e352c742eee48860d576fcefb372afc44ebc95750fa1e3b646195f702341a",
    "name": "James",
    "username": "guest-3",
    "email": [
      {
        "address": "fongang.rodrique+local-on@rocket.chat"
      }
    ],
    "phone": null
  },
  "agent": {
    "_id": "aXjjcPwq4Pcp7xftH",
    "username": "user1",
    "name": "User One",
    "email": "uaser1@mail.com"
  },
  "type": "LivechatSession",
  "messages": [
    {
      "u": {
        "_id": "63db8d4990fe6eda42ad429a",
        "username": "guest-3",
        "name": "James"
      },
      "_id": "2untSdndqBP7opGWw",
      "username": "guest-3",
      "msg": "Hi",
      "ts": "2023-02-02T10:16:09.615Z"
    },
    {
      "u": {
        "_id": "aXjjcPwq4Pcp7xftH",
        "username": "user1",
        "name": "User One"
      },
      "_id": "7xjkw8ZFitMSNGmeJ",
      "username": "user1",
      "msg": "How can I help you today?",
      "ts": "2023-02-02T10:21:05.391Z",
      "agentId": "aXjjcPwq4Pcp7xftH"
    },
    {
      "u": {
        "_id": "63db8d4990fe6eda42ad429a",
        "username": "guest-3",
        "name": "James"
      },
      "_id": "y7p77YFfkHJeg5gD9",
      "username": "guest-3",
      "msg": "don't worry,thank you",
      "ts": "2023-02-02T10:22:14.087Z"
    },
    {
      "u": {
        "_id": "aXjjcPwq4Pcp7xftH",
        "username": "user1",
        "name": "User One"
      },
      "_id": "ciAggDuN8ioqDrTby",
      "username": "user1",
      "msg": "Thank you for visiting",
      "ts": "2023-02-02T10:23:11.437Z",
      "agentId": "aXjjcPwq4Pcp7xftH",
      "closingMessage": true
    }
  ],
  "servedBy": {
    "_id": "aXjjcPwq4Pcp7xftH",
    "username": "user1",
    "ts": "2023-02-02T10:16:07.375Z"
  },
  "closedAt": "2023-02-02T10:23:11.344Z",
  "closedBy": {
    "_id": "aXjjcPwq4Pcp7xftH",
    "username": "user1"
  },
  "closer": "user"
}
```
{% endtab %}

{% tab title="Message sent" %}
```json
{
  "_id": "Tc5SyBZHovD4k8BXv",
  "label": "James",
  "createdAt": "2023-02-02T10:16:07.230Z",
  "lastMessageAt": "2023-02-02T10:16:09.615Z",
  "visitor": {
    "_id": "63db8d4990fe6eda42ad429a",
    "token": "e36e352c742eee48860d576fcefb372afc44ebc95750fa1e3b646195f702341a",
    "name": "James",
    "username": "guest-3",
    "email": [
      {
        "address": "fongang.rodrique+local-on@rocket.chat"
      }
    ],
    "phone": null
  },
  "agent": {
    "_id": "aXjjcPwq4Pcp7xftH",
    "username": "user1",
    "name": "User One",
    "email": "uaser1@mail.com"
  },
  "type": "Message",
  "messages": [
    {
      "u": {
        "_id": "aXjjcPwq4Pcp7xftH",
        "username": "user1",
        "name": "User One"
      },
      "_id": "7xjkw8ZFitMSNGmeJ",
      "username": "user1",
      "msg": "How can I help you today?",
      "ts": "2023-02-02T10:21:05.391Z",
      "agentId": "aXjjcPwq4Pcp7xftH"
    }
  ]
}
```
{% endtab %}
{% endtabs %}
