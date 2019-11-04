# Run a Rasa Bot

Rasa is the leading open-source machine learning toolkit that lets developers expand bots beyond answering simple questions
with minimal training data. At the core, Rasa bot has a machine learning model which trained on example conversations.

Rasa is developed with Python but for the most part, you don't need to know Python to design the basic conversational flows.
You will need Python knowledge only when creating custom actions in Rasa which call external actions.

## Quick start guide

The fastest way to start with Rasa is using [Rasa starter kit](https://github.com/RocketChat/rasa-kick-starter).
The starter kit uses webhooks to communicate between Rasa and Rocket.Chat.

**1. clone the starter repo**

```
git clone https://github.com/RocketChat/rasa-kick-starter
cd rasa-kick-starter/
```

**2. configure the bot**

* open the `rasa-kick-starter/bot_rasa` folder and update the `credentials.yml` file with Rasa bot's username, password, and Rocket.Chat URL:

```yaml
rocketchat:
user: "<RASA USER NAME>"
password: "<RASA USER PASS>"
server_url: "<ROCKETCHAT HOST>"
```

* train the bot's Machine Learning Model:

```
docker run -it -v $(pwd)/bot_rasa:/app rasa/rasa train
```

After the training, the machine learning model will be created inside the `bot_rasa/models` folder.

**3. run the bot**

```
docker-compose up bot_rasa
```

You should see the following output:

```
$ docker-compose up bot_rasa
Starting rasa-kick-starter_bot_rasa_1 ... done
Attaching to rasa-kick-starter_bot_rasa_1
bot_rasa_1            | 2019-10-31 21:23:24 INFO     root  - Starting Rasa server on http://localhost:5005
```

Open your browser and navigate to `http://localhost:5005`. You should see the response from the running Rasa bot:

```
Hello from Rasa: 1.5.0a1
```

If you have Rocket.Chat running on the same machine, the bot's URL is `http://bot_rasa:5005`.
This guide uses a remote Rocket.Chat instance, so it is necessary to get a public URL for the Rasa bot
to be able to link it properly. It is recommended to use [ngrok](https://ngrok.com/download) for this purpose.

[Download ngrok](https://ngrok.com/download), open terminal in the folder you downloaded ngrok to and execute the following command:

```
./ngrok http 5005
```

You should see the following output:

```
Session Status                online
Session Expires               7 hours, 59 minutes
Version                       2.3.35
Region                        United States (us)
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://dde093e1.ngrok.io -> http://localhost:5005
Forwarding                    https://dde093e1.ngrok.io -> http://localhost:5005
```

Public URL will be provided next to `Forwarding` column. In this case, `http://dde093e1.ngrok.io`.

**4. configure Rocket.Chat webhook**

Go to `Administration > Integrations`. Click `New Integration` button in the top right corner and then select `Outgoing WebHook`.

Select `Message Sent` Event Trigger from the dropdown list. Complete the configuration with the following settings:

* Enabled: `True`
* Channel: `#general`
* URLs: `http://<ngrok_public_url>/webhooks/rocketchat/webhook`
* Post as: `<RASA USER NAME>`

**NOTE**: Make sure you replace the URL with a valid public URL obtained on the previous step using ngrok.

Click `Save changes` in the top right corner.

**5. talk to your bot**

On the server, login as a regular user (not the BOT user), go to `general` room, and try to talk to your bot by typing `@bot_rasa hello`:

![Rasa bot is talking](rasa-bot-example.png)