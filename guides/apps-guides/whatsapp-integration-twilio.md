# WhatsApp Integration / Twilio

Rocket.Chat does not have native integration with WhatsApp. However, it is possible to achieve a basic level of integration by using a third-party tool. In this guide, we'll quickly lay out how to integrate Rocket.Chat with WhatsApp using Twilio's programmable SMS.

## Step 1

Create an account at [Twilio](https://twilio.com/whatsapp/request-access).

## Step 2

Log into your Twilio account. The default landing page is the **Dashboard** for your account. On the left side panel, click on the **All Products and Services** icon to expand it.

Click on **Programmable SMS** and then on **WhatsApp**.

## Step 3

For production purposes, you will need to have your account approved by WhatsApp \(see the **Senders** link on the same section\). In the meantime, you can do the same configuration in the **Sandbox** environment provided by Twilio. Click on **Sandbox.**

On the first section, **Sandbox Configuration**, you'll need to enter your Rocket.Chat server details on the **When a message comes in** field. The format is as follows:

`https://<SERVER_URL>/api/v1/livechat/sms-incoming/twilio`

## Step 4

On the Twilio console, “Programmable SMS Dashboard” -&gt; “Whatsapp” -&gt; “Senders” -&gt; Select the Whatsapp number. This will open the “Configuration” screen, where the webhook configuration must be done in order to connect Twilio to Rocket.Chat Livechat

![](../../.gitbook/assets/image%20%28198%29.png)

The webhook must be configured following the steps mentioned at [https://rocket.chat/docs/developer-guides/rest-api/livechat/sms-incoming/\#payload](https://rocket.chat/docs/developer-guides/rest-api/livechat/sms-incoming/#payload). Important: the webhook POST URL should be set only on “WHEN A MESSAGE COMES IN” field  
****

## Step 5

On the Twilio console, go to “Programmable SMS Dashboard” and copy the “ACCOUNT SID” and “AUTH TOKEN” 

![](../../.gitbook/assets/image%20%28197%29.png)

## Step 6

Go to Rocket.Chat Server -&gt; Administration -&gt; Settings-&gt; SMS -&gt; Set to “Enabled” and select “Twilio” as service  


![](../../.gitbook/assets/image%20%28210%29.png)

## Step 7

Go to Rocket.Chat Server -&gt; Administration -&gt; Settings -&gt; SMS -&gt; Section “Twilio” and add the “Account SID” and Auth Token you had copied on Step 5. After that, the Livechat+Whatsapp integration will be working properly in both directions.  
  
****

## Step 8 \(For SaaS customers only\)

For Cloud customers, the file-sharing \(images, audio, videos, etc\) between LiveChat and Whatsapp might not work properly. 

To fix this issue go to Settings -&gt; File Upload -&gt; Amazon S3 -&gt; Enable the “Proxy Uploads” setting.  


**That's it!**

Important Links:

* [https://twilio.com](https://twilio.com)
* [https://twilio.com/whatsapp/request-access](https://twilio.com/whatsapp/request-access)
* [https://www.twilio.com/docs/sms/whatsapp/api\#facebook-business-manager-account](https://www.twilio.com/docs/sms/whatsapp/api#facebook-business-manager-account)
* [https://www.twilio.com/docs/sms/whatsapp/api\#using-phone-numbers-with-whatsapp](https://www.twilio.com/docs/sms/whatsapp/api#using-phone-numbers-with-whatsapp)

