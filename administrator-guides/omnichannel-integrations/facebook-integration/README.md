# Facebook Messenger Integration with Rocket.Chat

This integration allows your organization to communicate with Facebook Messenger users within Rocket.Chat.

To set up the integration, request an API key from Rocket.Chat Support. Upon receipt of the key, configure the integration.

## Request an API Key

Send an email to [omni@rocket.chat][1] to request an API key. We process requests as fast as we can, and it may take a few days, but you should have your key and secret soon enough.

## Configure the Integration

1. In **Administration**, select **Omnichannel** and enable it (if it is not enabled yet).

2. Go to the **Facebook** section and enable the Facebook integration.Enter your _Key_ and _Secret_.

3. Click **Save**.

![Facebook section][image-1]

4. Return to the main Rocket.Chat interface. 

5. To see the **Livechat** settings, click **Administration**.

![Livechat settings][image-2]

6. Select **Facebook Messenger** and click **Enable**. The page prompts you to log in. Be sure to use the credentials for the page from which you want to receive messages. You must proceed with a standard Facebook OAuth login and grant your Rocket.Chat instance access to your pages.

7. Once you return to LiveChat from Facebook, you can see a list of the pages associated with the specified account. If you do not see any pages, ensure the Facebook account has pages, and then click **RELOAD PAGES**.

8. Enable the desired pages to receive messages.

![Enabled pages][image-3]

9. Return to the main interface. All your Livechat agents see any incoming chats from the Facebook page. Responses go back to Facebook as if you were using the Messenger itself.

[1]: mailto:omni@rocket.chat

[image-1]: image1.png
[image-2]: image2.png
[image-3]: image3.png
