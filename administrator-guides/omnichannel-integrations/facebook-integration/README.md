# Facebook Messenger Integration with Rocket.Chat

This integration allows your organization to communicate with Facebook Messenger users within Rocket.Chat. All you need to do is request an API key from Rocket.Chat Support and then set it up.

## Request an API Key

Send an email to [omni@rocket.chat][1] to request an API key. We process requests as fast as we can, and it may take a few days, but you should have your key and secret soon enough.

## Configure the Integration

- In **Administration**, select **Omnichannel** and enable it (if it is not enabled yet).

- On that same page, find the **Facebook** section. Enable the Facebook integration and enter your _Key_ and _Secret_.

- **Save** the changes.

![Facebook section][image-1]

- Return to the main Rocket.Chat interface. Click the  **Administration UI** (kebab menu) to see the **Livechat** settings.

![Livechat settings][image-2]

- Select **Facebook Messenger** and click **Enable**. The page prompts you to log in. Be sure to use the credentials tied to the page you wish to receive messages from. You must proceed with a standard Facebook OAuth login and grant your Rocket.Chat instance access to your pages.

- Once returned from Facebook, you can see a list of pages associated with the specified account. If you see none, make sure that account has pages, and then click **RELOAD PAGES**.

- Enable the desired pages to receive messages.

![Enabled pages][image-3]

- Return to the main interface. Now all Livechat agents you have can see any incoming chats from that page. Responses go back to Facebook as if you were using the Messenger itself.

[1]: mailto:omni@rocket.chat

[image-1]: image1.png
[image-2]: image2.png
[image-3]: image3.png
