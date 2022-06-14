# Google Calendar

This integration uses Rocket.Chat incoming webhook. With this integration, you'll get your event notifications right into Rocket.Chat.

### Prerequisites

1. A Google Cloud Platform project with the Google Calendar API enabled. To create a project and enable an API, refer to [Create a project and enable the API](https://developers.google.com/workspace/guides/create-project).
2. Prepare authorization credentials for a desktop application. To learn how to create credentials for a desktop application, refer to [Create credentials](https://developers.google.com/workspace/guides/create-credentials#desktop) (make sure you download the JSON file).
3. Create a dedicated channel for the event messages to be posted. You can use an existing channel as well.

### Prepare Incoming Webhook

1. Go to `Administration` then `Integration`.
2. Click the "New" button on the top right corner, then select "incoming" for the webhook type.
3. Check "Enabled". Give it an optional name. Enter the channel name where the messages are going to be posted. For the "post as" box, enter a bot username like `rocket.cat`. You can use other usernames as well, you're free to experiment.
4. Enable the incoming webhook script. For the script, copy the contents of this file - [https://github.com/debdutdeb/rocketchat-google-calendar/blob/main/script.js](https://github.com/debdutdeb/rocketchat-google-calendar/blob/main/script.js)
5. Go to the bottom of the page and click "save".

![Initial Configuration](<../../../../.gitbook/assets/screenshot0 (4) (4) (4) (4) (4) (4) (4) (4) (4) (4).png>)

![Enable Script](<../../../../.gitbook/assets/image (554).png>)

![Save Webhook](<../../../../.gitbook/assets/image (553).png>)

As soon as the webhook is saved, you'll notice a webhook URL -

![Webhook URL](<../../../../.gitbook/assets/image (555).png>)

We'll need this in the next step.

### Run Integration Program

The integration program runs on a server, periodically grabs the event data from your calendar and sends that data to your Rocket.Chat server to be processed and sent to the channel you set up in the previous section.

To install the integration program, the easiest way is to first install the [go binary](https://golang.org/doc/install) and the run the following command -

```bash
go get github.com/debdutdeb/rocketchat-google-calendar
```

Edit your `bashrc`, `zshrc` or `fish` config and add `$(go env GOPATH)/bin` to your `PATH`. This way you won't have to specify the whole path to the command every time.

Use the help option to learn all the command line options and modify its execution process - `rocketchat-google-calendar -h`

```
Usage of ./rocketchat-google-calendar:
  -calendars string
        List of calendar IDs, separated by commas. (default "primary")
  -credentials string
        Enter path to the credentials file. (default "credentials.json")
  -eventin string
        The upper limit of upcoming event start time. Lower bound is the moment of API access. (default "30m")
  -waitfor string
        Time to wait before attempting a POST to Rocket.Chat webhook. (default "5m")
  -webhook string
        Enter the webhook url you got from Rocket.Chat.
```

Enter the appropriate values for the respective options.

You'll then be asked to open a link. Click on it and use your Google account to authorize the app.

![rocketchat-google-calendar](<../../../../.gitbook/assets/image (558).png>)

Once you get the token, copy and paste it on the terminal and hit enter.

Your integration should now be running.

### Notifying Once Every Day

In the example command above, the event data is fetched from the Google servers every 5 minutes. You can change that behaviour however you like.

One very common usecase is to be notified about all the meetings/events for each day, in the morning. You can acheive this by combining the two flags `-eventin` and `-waitfor`.

Use `24h` for both of those options. This way the integration program will fetch data every 24 hours, list the events that's going to occur in those 24 hours and send them to your Rocket.Chat server.
