# SlackBridge

SlackBridge allows you to mirror the messages received in a Slack channel or private group into Rocket.Chat in real-time.

To enable it, you have to create a Custom Bot in Slack and add it to the desired channels / private groups. Once enabled and added to rooms, SlackBridge will clone the room in Rocket.Chat and also clone users that speak in that room.

## To create a Custom Bot in Slack:

1. Got to ["Set up a bot user"](https://my.slack.com/apps/A0F7YS25R-bots)
2. Click "Add Configuration"
3. Pick a username for your Bot and click Add Bot Integration
4. Copy the API Token, you'll need it when setting up SlackBridge in Rocket.Chat
5. Customize your bot the way you like it and click on Save Integration

## To enable SlackBridge in Rocket.Chat:

1. Go to `https://[your_host]/admin/SlackBridge`
2. Enable SlackBridge
3. Add your API Token, copied in step 4 above
4. Restart you Rocket.Chat server

When done, you can now invite/add the bot to the channel or private group you want to mirror from

