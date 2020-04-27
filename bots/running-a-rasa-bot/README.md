# Running a Rasa Bot

Rasa is the leading open-source machine learning toolkit that lets developers expand bots beyond answering simple questions
with minimal training data. The bots are based on a machine learning model trained on example conversations.

## Quickstart

Rasa is developed with Python. For the most part you dont need to know python to design the basic conversational flows in Rasa.
You will need python knowledge when creating custom actions in Rasa which calls external actions. The fastest way to start with
Rasa is by using [Rasa starter kit](https://github.com/RocketChat/rasa-kick-starter). The starter kit uses webhooks to
communicate between Rasa and Rocket.Chat.

### 1. Install Rocket.Chat

If you already have a Rocket.Chat instance you can skip this step

```sh
docker-compose up -d mongo
docker-compose up -d mongo-init-replica
docker-compose up -d rocketchat
```

Access <http://localhost:3000/>

Create an `admin` user with the password `admin`.

### 2. Rocket.Chat Bot User Configurations

Clone the quick start guide with the following command: `git clone https://github.com/RocketChat/rasa-kick-starter`
Create a Rasa bot user in Rocket.Chat. You can either manually login to Rocket.Chat and create a bot user via the
user management page or can use the following script to create the bot user.

Run the following command to create the RASA bot.

**Note:** Please replace the user name and password of the RocketChat admin and bot user accordingly.

```sh
python3 scripts/bot_config.py -an admin_username -ap admin_password -bn bot_username -bp bot_pass -r http://rocketchaturl
```

If you are using docker-compose following is a sample usage

```sh
python3 scripts/bot_config.py -an admin -ap admin -bn bot_rasa -bp bot_rasa -r http://localhost:3000
```

### 3. Configure Rasa Bot

* Configure the Credentials file

    Update your `credentials.yml` file inside the `bot_rasa` folder with Rasa bot's username and password.

```sh
rocketchat:
  user: "bot_rasa"
  password: "bot_rasa"
  server_url: "http://localhost:3000"
```

* Train the Machine Learning Model

    The Rasa bots machine learning model can built by using either Rasa CLI or Docker. After the training a machine
    learning model will be created inside the `bot_rasa/models` folder.

* **If using Docker**

```sh
docker run -it -v $(pwd)/bot_rasa:/app rasa/rasa train
```

* **If using Rasa CLI**

```bash
pip3 install rasa
cd bot_rasa
rasa train
```

### 4. Start Rasa server

Rasa bot can be started via the Docker or Rasa CLI.

* **If using Docker-compose**

```sh
docker-compose up -d bot_rasa
```

* **If using Rasa CLI**

```python
cd bot_rasa
rasa run
```

The Rasa bot should be reachable via Rocket.Chat.

* If you are following the tutorial with docker-compose file then following is the URL to access the Rasa bot.

```bash
http://bot_rasa:5005
```

* If you are trying to connect to a standalone Rocker.Chat instance or using Rasa CLI, lets user ngrok to get a public url for the Rasa Bot.

Install ngrok via: <https://ngrok.com/download>

After downloading the ngrok navigate to the ngrok file in the downloded content and execute the following command.
This will provide a public URL to the Rasa bot

```bash
./ngork http 5005
```

Following will be the output of ngrok

```sh
Session Status                online
Session Expires               7 hours, 59 minutes
Version                       2.3.30
Region                        United States (us)
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://e3d5a17b.ngrok.io -> http://localhost:5005
Forwarding                    https://e3d5a17b.ngrok.io -> http://localhost:5005
```

Copy the http URL provided by ngrok: `http://e3d5a17b.ngrok.io`

### 6. Configure Rocket.Chat webhook

Go to **Administration > New Integration > Outgoing webhook**.
Inside the configuration insert this:

```
Event Trigger: Message Sent
Enabled: True
Channel: #general
URLs: http://bot_rasa:5005/webhooks/rocketchat/webhook
Post as: bot_rasa
```

If you are using ngrok then replace the URL `http://bot:5005`, with the url obtained by ngrok.

```bash
URLs: http://ngrok_public_url/webhooks/rocketchat/webhook
```

**Save** all the changes.

### Example

Type `@bot_rasa hello` to start a conversation with the Rasa bot
![example](rasa_bot_example.png)

### Additional Information

If you want the Rasa bot to direct message with the users create another webhook with the following configurations.

```
Event Trigger: Message Sent
Enabled: True
Channel: all_direct_messages
URLs: http://bot_rasa:5005/webhooks/rocketchat/webhook
Post as: bot_rasa
```
