# WhatsApp Sandbox Configuration

## To get a Test API key from 360Dialog

To get a test API-KEY, \*\*\*\* you can do the following:

* Send a WhatsApp message from your phone to the phone number 4930609859535 with the content START
* Use this link: https://wa.me/4930609859535?text=START
* Use this QR Code:[https://docs.360dialog.com/whatsapp-api/whatsapp-api/sandbox#1.-get-a-test-api-key](https://docs.360dialog.com/whatsapp-api/whatsapp-api/sandbox#1.-get-a-test-api-key).
* As a response, you will receive your TestAPI-KEY. This API-KEY is associated with your phone WhatsApp number. Now you are able to use the 360dialog WhatsApp.

{% hint style="info" %}
**What you can do in the Sandbox**

* You can use the Test API-KEY to send `text` **messages** and `text` **templates** to your phone number.
* An **unlimited** amount of messages can be sent with the Sandbox.
* Your phone number acts like a **user** and can send and receive messages.
* The number can be a **landline**, as long as it can use WhatsApp.
* You can switch the **endpoint** at any time.
* Each **Sandbox API Key** is linked to one phone number, and you can only send test messages to that phone number. If you wish to test messages with more than 1 number, then you should set up a test WhatsApp Business Account (Staging WABA) instead of Sandbox.

**What you can't do with the Sandbox:**

* The Sandbox is a **test environment** only. You will not be able to use it to send messages to your clients. You can only send messages to your phone number.
* You cannot share media files within the environment.
* **Templates** messages can be sent a maximum of 10 times. You can choose between 2 predefined templates.
* Messages and Templates can be sent only to your **phone number**.
* We will only forward and trigger an **API** when your given number is involved.
* We do not yet provide response information when you use the WhatsApp API.
* You only have access to the WhatsApp API.
* Our Sandbox is available to test via the API, but any automated tests must be configured from your end.
{% endhint %}

## **Configure Whatsapp Sandbox App Settings**

Once you have a Sandbox API key, you can update the app settings as given below.

To access the settings, go to **Administration** > **Workspace** > **Administrator -> Apps -> Installed -> Whatsapp Sandbox -> Settings**

Following are the settings available:‌

* **WhatsApp Sandbox API KEY:** Provide the API KEY provided by 360Dialog for the Sandbox environment. Check here for more info about the Sandbox environment: [https://docs.360dialog.com/whatsapp-api/whatsapp-api/sandbox](https://docs.360dialog.com/whatsapp-api/whatsapp-api/sandbox).
* **WhatsApp Sandbox API KEY:** Input the API KEY provided by 360Dialog for the Sandbox environment.

{% hint style="info" %}
You can check here for more info about the Sandbox environment: [https://docs.360dialog.com/whatsapp-api/whatsapp-api/sandbox](https://docs.360dialog.com/whatsapp-api/whatsapp-api/sandbox).
{% endhint %}

* **Default department:** (Optional) Enter the name or department ID that will handle WhatsApp conversations.
* **Welcome Message:** (Optional) Enter the message to be sent to visitors when they send their first message
* **Conversation Finished Message:** (Optional) Enter the message to be sent to the visitor when an agent closes the conversation
* **Service Unavailable Message:** Enter the message to be sent to your customer when no agents are available online.
* **Notification of undeliverable message:** (Optional) Set this option to alert the agent that the message was not delivered to the WhatsApp platform.
* **Agents Display Info:** Enter the agent information (none, name, username) that would be appended in front of every message sent by an agent to a visitor
* **Allow Quote Messages:** If this option is enabled, agents can see the quoted message reference on Rocket.Chat when the Contact quotes/replies to a message on WhatsApp.
* **Message Status Endpoint URL:** Enter an endpoint URL here where you want to receive the status of each message exchanged.
* **Filter Message Status:** Filter the statuses (All, Regular Messages, or Template Messages )you wish to receive at the endpoint ("Message Status Endpoint URL") based on Message Type.
* **Allow List options for Quick Replies:** If this option is enabled, messages with more than three quick reply options would be rendered as List options. Note: Max limit for list options is 10.
* **Custom label for all List Option button:** Define a customized label message you want to display on all Quick reply options sent as List Message.

After the successful configuration, you can start sending messages from WhatsApp to [Rocket.Chat](http://rocket.chat/).

You can now start sending messages from WhatsApp Sandbox to [Rocket.Chat](http://rocket.chat/).

{% hint style="info" %}
You cannot share media files within the Sandbox environment.
{% endhint %}

![WhatsApp Sandbox Bot](<../../../../../../.gitbook/assets/WhatsApp Sandbox\_Chat.png>)
