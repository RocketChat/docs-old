# Upload File To Ongoing Dialogflow Chats

If you have a use-case where you want to upload a file to the ongoing Bot conversation, like a product handbook or purchase invoice, etc, you can use the following guide to achieve this

#### Pre-requisites:

* Have a Dialogflow intent with Fulfillment webhook enabled
* A bot user with a Live Chat agent role. More info about this [here](bot-user-configuration.md).

#### Steps to upload a file

1. The first step is to get the Dialogflow session Id of the ongoing bot conversation where you want to upload this file. You can get this info from the fulfillment webhook request which Dialogflow will send upon detecting your target intent. [Here's](https://cloud.google.com/dialogflow/es/docs/fulfillment-webhook#webhook\_request) the request payload you'll receive from Dialogflow. Notice the session Id is present within the "session" property of the request. (Note: we only need the "session-id" part of the "session" property & not the entire "session" property)
2. The next step is to use [this](https://developer.rocket.chat/reference/api/rest-api/endpoints/team-collaboration-endpoints/rooms-endpoints/upload-file-to-a-room) endpoint to upload the file to the room. Here you'd need the session Id you get in first step since the session Id is the same as the Room Id on Rocket.Chat. Note, the above endpoint required authentication, so you can use the Login endpoint defined [here](https://developer.rocket.chat/reference/api/rest-api/endpoints/other-important-endpoints/authentication-endpoints/login) to get the authentication tokens for the bot user.
