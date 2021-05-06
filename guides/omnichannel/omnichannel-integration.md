---
description: >-
  If your organization wishes to communicate with users of Facebook, you can
  enable an integration within Rocket.Chat to do so.
---

# Facebook Messenger

First, you will need to request an API key from Rocket.Chat Support then set it up within your Administration area.

## Requesting an API key

Send an email to [omni@rocket.chat](mailto:omni@rocket.chat) to request an API key. These are processed as time allows, and may take a few days, but you should have your key and secret soon enough.

## Setting up the integration

1. Go to **Administration.**

   ![](../../../.gitbook/assets/image%20%2830%29.png)

2. Search '**OmniChannel'** in **Settings** and on the **OmniChannel Administration Settings** page, find the **Facebook** section.
3. Enable Facebook integration.
4. Enter your _OmniChannel API Key_ and _OmniChannel API Secret_. **Save** the changes.

![](../../../.gitbook/assets/image%20%2853%29.png)

1. Return to the main Rocket.Chat interface. Go to Omnichannel panel settings, as shown below:

![](../../../.gitbook/assets/0%20%288%29%20%285%29%20%285%29%20%285%29%20%285%29%20%285%29%20%284%29%20%284%29%20%281%29.png)

1. Select Facebook Messenger and Enable. You'll be prompted to log in. Be sure to use the credentials that are tied to the page you wish to receive messages from. You'll have to do a standard Facebook OAuth login and grant your Rocket.Chat instance access to your pages.
2. Once you're returned from Facebook you'll see a list of the pages associated with that account. If you see none, make sure that the account has pages, then click RELOAD PAGES.
3. Enable the pages you'd like to get messages from, as shown below:

![](../../../.gitbook/assets/image%20%2850%29.png)

Return to the main interface. Now any livechat agents you have will see any incoming chats from that page. Responses go back to Facebook as if you were using Messenger itself.

