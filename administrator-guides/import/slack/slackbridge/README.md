# SlackBridge

SlackBridge allows you to mirror the messages received in a Slack channel or private group into Rocket.Chat in real-time.

To enable it, you have to create a Custom Bot in Slack and add it to the desired channels / private groups.
Once enabled and added to rooms, SlackBridge will clone the room in Rocket.Chat and also clone users that speak in that room.

## To create a Custom Bot in Slack:

1. Go to `https://my.slack.com/apps/manage/custom-integrations`
2. At the top-right of your screen, click on Build
3. Choose Legacy custom integrations
4. Scroll down and click on ["Set up a bot user"](https://my.slack.com/apps/A0F7YS25R-bots)
5. Click "Add Configuration"
6. Pick a username for your Bot and click Add Bot Integration
7. Copy the API Token, you'll need it when setting up SlackBridge in Rocket.Chat
8. Customize your bot the way you like it and click on Save Integration

## To enable SlackBridge in Rocket.Chat:

1. Go to `https://[your_host]/admin/SlackBridge`
2. Enable SlackBridge
3. Add your API Token, copied in step 6 above
4. Restart you Rocket.chat server

You can now add your newly created bot to any channel or private group you'd like to mirror.
