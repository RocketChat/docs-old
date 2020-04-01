# Dead Simple Screen Sharing

Configure a Dead Simple Screen Sharing Meeting to allow Screen Sharing and audio/video-conferencing session right from Rocket.chat by sending a `screenshare` message.

1. In Rocket.Chat, go to **Administration > Integrations** and create **New Integration**.

2. Choose **Outgoing Webhook**.

3. Configure the outgoing webhook:

   1. Select the **Event Trigger** as `Message Sent`
   2. Set **Enabled** to `True`
   3. In **Name**, enter “Dead Simple Screen Sharing”
   4. In **Channel**, enter `all_public_channels,all_private_groups,all_direct_messages`
   5. In **Trigger Words**, enter `screenshare`
   6. In **URLs**, enter `https://app.deadsimplescreensharing.com/webhook/rocketchat`
   7. In **Post**, enter `rocket.chat`
   8. Click **Save Changes**
   9. Done!

![Dead Simple Screen Sharing rocket chat config](https://www.deadsimplescreensharing.com/wp-content/uploads/2018/01/Screen-Shot-2018-01-12-at-7.37.15-PM-1024x839.png)

That's it! We have integrated Dead Simple Screen Sharing, when chatting you can just send the `screenshare` message to create a Dead Simple Screen Sharing, and you and your team members can visit the meeting link to use screen sharing and audio-conferencing.

![Dead Simple Screen Sharing Rocket.chat integartion](https://www.deadsimplescreensharing.com/wp-content/uploads/2018/01/Screen-Shot-2018-01-12-at-7.40.07-PM-1024x453.png)