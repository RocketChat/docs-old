# SMS

Intercommunication between Rocket.Chat and WhatsApp can be achieved using [Twilio Programmable Messaging API](https://www.twilio.com/messaging).&#x20;

In this guide, we'll quickly lay out how the procedures to follow.

## Configuration

* Log in to your [Twilio](https://www.twilio.com/) account or create a new account if you don't have one
* From your Twilio **Console,** navigate to **Send a WhatsApp Message** on the left panel

![Twilio Send WhatsApp message interface](<../../../.gitbook/assets/Twilio Send WhatsApp message interface.png>)

You can go ahead to test sending and receiving WhatsApp messages

{% hint style="info" %}
In production, you will need to have your account [approved for WhatsApp](https://www.twilio.com/whatsapp/request-access).

For demonstration purposes, we are going to use the Twilio WhatsApp sandbox.
{% endhint %}

* Head over to **Messaging** > **Settings** > **WhatsApp sandbox setting** to configure your sandbox

![Twilio WhatsApp sandbox setting](<../../../.gitbook/assets/Twilio WhatsApp sandbox setting.png>)

* Fill in the **When a message comes in** field with your Rocket.Chat server details in this format `https://<SERVER_URL>/api/v1/livechat/sms-incoming/twilio`
* On the Twilio console, “Programmable SMS Dashboard” -> “Whatsapp” -> “Senders” -> Select the Whatsapp number. This will open the “Configuration” screen, where the webhook configuration must be done in order to connect Twilio to Rocket.Chat Livechat

![](<../../../.gitbook/assets/image (191).png>)

The webhook must be configured following the steps mentioned at [https://rocket.chat/docs/developer-guides/rest-api/livechat/sms-incoming/#payload](https://rocket.chat/docs/developer-guides/rest-api/livechat/sms-incoming/#payload). Important: the webhook POST URL should be set only on “WHEN A MESSAGE COMES IN” field\\

* On the Twilio console, go to “Programmable SMS Dashboard” and copy the “ACCOUNT SID” and “AUTH TOKEN”

![](<../../../.gitbook/assets/image (192).png>)

* Go to Rocket.Chat Server -> Administration -> Settings-> SMS -> Set to “Enabled” and select “Twilio” as service\\

![](<../../../.gitbook/assets/image (201).png>)

* Go to Rocket.Chat Server -> Administration -> Settings -> SMS -> Section “Twilio” and add the “Account SID” and Auth Token you had copied on Step 5. After that, the Livechat+Whatsapp integration will be working properly in both directions.\
  \\

#### For SaSS customers only

For Cloud customers, the file-sharing (images, audio, videos, etc) between LiveChat and Whatsapp might not work properly.

To fix this issue go to Settings -> File Upload -> Amazon S3 -> Enable the “Proxy Uploads” setting.\\

**That's it!**

Important Links:

* [https://twilio.com](https://twilio.com)
* [https://twilio.com/whatsapp/request-access](https://twilio.com/whatsapp/request-access)
* [https://www.twilio.com/docs/sms/whatsapp/api#facebook-business-manager-account](https://www.twilio.com/docs/sms/whatsapp/api#facebook-business-manager-account)
* [https://www.twilio.com/docs/sms/whatsapp/api#using-phone-numbers-with-whatsapp](https://www.twilio.com/docs/sms/whatsapp/api#using-phone-numbers-with-whatsapp)
