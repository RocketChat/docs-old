# SMS

External users can communicate with Rocket.Chat through SMS.

This integration extends [Rocket.Chat's Omnichannel](../../../../use-rocket.chat/omnichannel/) capabilities.

{% hint style="info" %}
* The [Rocket.Chat SMS Settings](../../../../use-rocket.chat/workspace-administration/settings/sms.md) offers the ability to configure SMS integration with several providers, but we are demonstrating with [Twilio ](https://www.twilio.com/)using [Twilio Programmable Messaging API](https://www.twilio.com/messaging).
* You are required to have your workspace available on a public URL.
{% endhint %}

## Twilio Programmable Messaging Configuration

* Log in to your [Twilio](https://www.twilio.com/) account or create a new account if you don't have one

{% hint style="info" %}
To be able to relay SMS, you need to get a Twilio number and create a messaging service.
{% endhint %}

* From your Twilio console, navigate to **Messaging** > **Try it out** > **Get Set Up,** click **Start setup**, and follow the process to configure a Twilio messaging service

![Twilio Programming Message Setup](<../../../../.gitbook/assets/Twilio Programming Message Setup (1).png>)

* Fill in the service name and **Create Messaging Service**

![Twilio Messaging Service name](<../../../../.gitbook/assets/Twilio Messaging Service name>)

* Twilio will automatically provision a number for you so **Provision and add this number**

![Twilio provisioned number](<../../../../.gitbook/assets/Twilio provisioned number>)

{% hint style="success" %}
With the configuration complete, you can go ahead and **Try sending an SMS** to make sure the number works.
{% endhint %}

## Twilio SMS and Rocket.Chat Webhook

After configuring your Twilio number for messaging, the next step is to link it to Rocket.Chat through an Omnichannel webhook [endpoint](https://developer.rocket.chat/reference/api/rest-api/endpoints/omnichannel/omnichannel-endpoints/sms-incoming-twilio).

* From your [Twilio console](https://console.twilio.com/), navigate to **Phone Numbers** > **Manage** > **Active numbers.** You will see your Twilio provisioned number and the messaging service it is linked to
* Click on the number to open its configuration page

![Twilio Active numbers page](<../../../../.gitbook/assets/Twilio Active numbers page>)

* Scroll down to the Messaging section and fill in the value of the **A MESSAGE COMES IN** with the URL of your publicly available Rocket.Chat workspace in this format `https://<SERVER_URL>/api/v1/livechat/sms-incoming/twilio` then hit **Save**

![Twilio Phone Number webhook configuration](<../../../../.gitbook/assets/Twilio Phone Number webhook configuration>)

{% hint style="info" %}
Make sure the action type selected above is _`Webhook`_ and the method is _`HTTP POST`_
{% endhint %}

## Rocket.Chat Twilio SMS Setting

After getting all the settings on your Twilio Programmable Messaging number ready, it's time to connect it with your Rocket.Chat workspace.

* Open up Rocket.Chat and go to **Administration** > **Workspace** > **Settings** > **SMS**
* Select Twilio and the **service** type, then move down to the Twilio section and fill in your Twilio credentials. This can be gotten from the [Twilio console](https://console.twilio.com/)
* With that done, **enable** the service and hit **Save changes**

![Rocket.Chat SMS Setting](<../../../../.gitbook/assets/Rocket.Chat SMS Setting>)

## Rocket.Chat SMS Messaging

We have gone through configuring a Twilio Programmable Messaging number and linking it with Rocket.Chat through webhook. Now to test the two-way communication:

* Open up any SMS messaging app on your phone and send a message to your [Twilio active number](https://console.twilio.com/us1/develop/phone-numbers)
* The message is seen in your Rocket.Chat server, available for any [Omnichannel Agent](../../../../use-rocket.chat/omnichannel/agents.md) to continue the conversation
* Similarly, when a reply is sent from Rocket.Chat, it is received on the SMS senders end

![Rocket.Chat SMS communication successful](<../../../../.gitbook/assets/Rocket.Chat SMS communication successful>)

{% hint style="info" %}
External SMS messages sent to an Omnichannel department are identified by the green message icon on the side.
{% endhint %}
