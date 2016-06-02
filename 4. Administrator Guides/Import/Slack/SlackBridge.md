# SlackBridge

SlackBridge allows you to mirror the messages received in a Slack channel or private group into Rocket.Chat in real-time.

To enable it, you have to create a Custom Bot in Slack and add it to the desired channels / private groups. 
Once enabled and added to rooms, SlackBridge will clone the room in RocketChat and also clone users that speak in that room.

## To create a Custom Bot in Slack:
1. Go to https://[your_app].slack.com/apps/manage/custom-integrations
2. At the top-right of your screen, click on Build
3. Choose Make a Custom Integration
4. Choose Bots
5. Pick a username for your Bot and click Add Bot Integratoin
6. Copy the API Token, you'll need it when setting up SlackBridge in Rocket.Chat
7. Customize your bot the way you like it and click on Save Integration

## To enable SlackBridge in Rocket.Chat:
1. Go to https://[your_rocketchat]/admin/SlackBridge
2. Set enabled to True
3. Fill in your API Token, copied in step 6 above.

Don't forget to add your newly created bot to any channel or private group you'd like to mirror.
