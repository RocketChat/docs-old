# WhatsApp Integration / Twilio

Rocket.Chat does not have a native integration with WhatsApp. However, you can use a third-party tool, Twilio's programmable SMS, to achieve a basic level of integration. To use Rocket.Chat with WhatsApp, complete the following steps.

1. Create an account at [Twilio](https://twilio.com/whatsapp/request-access).

2. Log in to your Twilio account. The default landing page is the **Dashboard** for your account.

3. On the left side panel, click the **All Products and Services** icon to expand it.

4. Click **Programmable SMS** and then **WhatsApp**.

5. For production purposes, you must have your account approved by WhatsApp. See the **Senders** link on the same section.

6. While you wait for approval, you can complete the same configuration in the _Sandbox_ environment provided by Twilio. Click **Sandbox**.

7. In **Sandbox Configuration**, enter your Rocket.Chat server details in the **When a message comes in** field. The format should be:

    `https://<SERVER_URL>/api/v1/livechat/sms-incoming/twilio`

    You are now ready to use RocketChat with WhatsApp.

For more information about Twilio, see these links:

- <https://twilio.com>
- <https://twilio.com/whatsapp/request-access>
- <https://www.twilio.com/docs/sms/whatsapp/api#facebook-business-manager-account>
- <https://www.twilio.com/docs/sms/whatsapp/api#using-phone-numbers-with-whatsapp>
