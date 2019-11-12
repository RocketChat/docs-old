# WhatsApp Integration / Twilio

Rocket.Chat does not have native integration with WhatsApp. However, it is possible to achieve a basic level of integration by using a third-party tool. In this guide, we'll quickly lay out how to integrate Rocket.Chat with WhatsApp using Twilio's programmable SMS.

## Step 1

Create an account at [Twilio](https://twilio.com/whatsapp/request-access).

## Step 2

Log into your Twilio account. The default landing page is the **Dashboard** for your account. On the left side panel, click on the **All Products and Services** icon to expand it.

Click on **Programmable SMS** and then on **WhatsApp**.

## Step 3

For production purposes, you will need to have your account approved by WhatsApp (see the **Senders** link on the same section). In the meantime, you can do the same configuration in the **Sandbox** environment provided by Twilio. Click on **Sandbox.**

On the first section, **Sandbox Configuration**, you'll need to enter your Rocket.Chat server details on the **When a message comes in** field. The format is as follows:

`https://<SERVER_URL>/api/v1/livechat/sms-incoming/twilio`

That's it!

Important Links:

- <https://twilio.com>
- <https://twilio.com/whatsapp/request-access>
- <https://www.twilio.com/docs/sms/whatsapp/api#facebook-business-manager-account>
- <https://www.twilio.com/docs/sms/whatsapp/api#using-phone-numbers-with-whatsapp>
