# WhatsApp Integration / Twilio

Rocket.Chat does not have a native integration with WhatsApp. However, it is possible to achieve a basic level of integration by using a third-party tool. This integration allows you to use Rocket.Chat with WhatsApp through Twilio's programmable SMS.

- Create an account at [Twilio](https://twilio.com/whatsapp/request-access).

- Log into your Twilio account. The default landing page is the **Dashboard** for your account. On the left side panel, click on the **All Products and Services** icon to expand it.

- Click **Programmable SMS** and then **WhatsApp**.

- For production purposes, you must have your account approved by WhatsApp (see the **Senders** link on the same section). In the meantime, you can do the same configuration in the _Sandbox_ environment provided by Twilio. Click **Sandbox**.

- In **Sandbox Configuration**, enter your Rocket.Chat server details in the **When a message comes in** field. The format should be:

`https://<SERVER_URL>/api/v1/livechat/sms-incoming/twilio`

That's it!

Useful links:

- <https://twilio.com>
- <https://twilio.com/whatsapp/request-access>
- <https://www.twilio.com/docs/sms/whatsapp/api#facebook-business-manager-account>
- <https://www.twilio.com/docs/sms/whatsapp/api#using-phone-numbers-with-whatsapp>
