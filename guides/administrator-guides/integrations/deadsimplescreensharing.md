# Dead Simple Screen Sharing

Create a Dead Simple Screen Sharing Meeting to do Screen Sharing and audio/video-conferencing session right from Rocket.Chat by sending a message `screenshare`

1. In Rocket.Chat go to "Administration"-&gt;"Integrations" and create "New Integration"
2. Choose "Outgoing WebHook"
3. Configure the "Outgoing Webhook":

   1. Select the “Event Trigger” as “Message Sent”
   2. Set Enabled to “True”
   3. In the Name enter “Dead Simple Screen Sharing”
   4. Under the channel type in `all_public_channels,all_private_groups,all_direct_messages`
   5. Trigger words type in `screenshare`
   6. Under URLs type: `https://app.deadsimplescreensharing.com/webhook/rocketchat`
   7. Under Post as: `rocket.cat`
   8. Click “Save Changes”
   9. Done!

   ![Dead Simple Screen Sharing rocket chat config](https://www.deadsimplescreensharing.com/wp-content/uploads/2018/01/Screen-Shot-2018-01-12-at-7.37.15-PM-1024x839.png)

That's it! we have integrated "Dead Simple Screen Sharing", now when chatting we just have to send the message `screenshare` and a Dead Simple Screen Sharing meeting will be created, and you and your team members can visit the meeting link and perform screen sharing and audio-conferencing.

![Dead Simple Screen Sharing Rocket.Chat integartion](https://www.deadsimplescreensharing.com/wp-content/uploads/2018/01/Screen-Shot-2018-01-12-at-7.40.07-PM-1024x453.png)

