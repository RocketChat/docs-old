[bbot]: http://bbot.chat
[bbot-gh]: https://github.com/Amazebot/bbot
[brocket]: https://github.com/Amazebot/bbot-rocketchat-boilerplate
[heroku-cli]: https://devcenter.heroku.com/articles/heroku-cli
[brocket-glitch]: https://glitch.com/edit/#!/remix/bbot-rocketchat-boilerplate

# Running a bBot Bot

[bBot][bbot] is a Rocket.Chat sponsored open source project created by our
frequent contributor, Tim Kinnane. Tim also created the Rocket.Chat JS SDK used
by all bot frameworks, so it's a fairly frictionless experience connecting
Rocket.Chat and bBot.

Developers should start with (or at least reference) our
[bBot Boilerplate][brocket] (aka **bRocket**), demonstrating general usage of
bBot with some features unique to Rocket.Chat such as rich message payloads.

As with all bot frameworks, you need to
[configure the environment](../configure-bot-environment)
for the Rocket.Chat SDK settings (implemented by bBot's bundled Rocket.Chat
adapter).

## Building Bot Behaviour

See bBot's own guides on [running the bot](http://bbot.chat/docs/core) and
[creating branches](http://bbot.chat/docs/path). Or watch this
[video guide](https://www.youtube.com/watch?v=vhRVFBiwJEA).

The [boilerplate instructions][brocket] also detail how to start the bot in
the terminal (`-m shell`), to test interactions before deployment.

## Deploying Your Bot

Bots run as their own external service, connecting to your Rocket.Chat instance.

There's a few options for bot deployment. Probably the most common is Docker,
as a container it can be deployed to most cloud hosting but we've included
instructions for Heroku below.

Glitch and Now are also detailed below, which are good options for rapid
prototyping with a free cloud hosting environment but aren't suitable for a bot
that will serve heavy traffic on an ongoing basis.

## Deploy Docker Container

The included `Dockerfile` is all that's required for configuring the build.

If your environment requires first building the Docker image (e.g. local test),
you can do that as follows, though many cloud environments will detect the
Docker setup and do this automatically. Many services will allow for defining
environment variables in their own dash UI too, so the `-e` lines below might
not be required either.

> NOTE: The Docker build copies `./index.js` and `./src` to the built image. No
> other scripts are included, so keep all your bot customisation within `src`.

Build a docker image:

```
docker build -t bbot:rocketchat .
```

Run the docker image, passing environment configs:

```
docker run -it --rm --name brocket \
  -e ROCKETCHAT_URL=<YOUR_URL> \
  -e ROCKETCHAT_USER=<BOT_USER> \
  -e ROCKETCHAT_PASSWORD=<BOT_PASS> \
  -e ROCKETCHAT_ROOM='' \
  -e LISTEN_ON_ALL_PUBLIC=true \
  -e RESPOND_TO_EDITED=true \
  -e RESPOND_TO_DM=true \
  -e RESPOND_TO_LIVECHAT=true \
  bbot:rocketchat
```

## Deploy to Heroku

Heroku can detect the Node app type and automatically run the main script.

You should install the [Heroku CLI][heroku-cli] and login. Either create your
Heroku app following the linked instructions or add an existing app to your
bot's git as a remote host, per instructions below.

It just needs the environment configuration:

```
heroku config:set ROCKETCHAT_URL=<YOUR_URL>
heroku config:set ROCKETCHAT_USER=<BOT_USER>
heroku config:set ROCKETCHAT_PASSWORD=<BOT_PASS>
heroku config:set ROCKETCHAT_ROOM=''
heroku config:set LISTEN_ON_ALL_PUBLIC=true
heroku config:set RESPOND_TO_DM=true
heroku config:set RESPOND_TO_EDITED=true
heroku config:set RESPOND_TO_LIVECHAT=true
```

Then add your Heroku app as a git remote and push to release:

```
heroku git:remote -a <YOUR_APP>
git push heroku master
```

## Deploy Docker to Heroku

Log in to Container Registry

```
heroku container:login
```

Build the image and push to Container Registry:

```
heroku container:push web
```

Then release the image to your app:

```
heroku container:release web
```

Now open the app in your browser:

```
heroku open
```

## Deploy to Glitch

Remix the [Glitch boilerplate][brocket-glitch].

Edit **.env** as per example:

```
ROCKETCHAT_URL=<YOUR_URL>
ROCKETCHAT_USER=<BOT_USER>
ROCKETCHAT_PASSWORD=<BOT_PASS>
RESPOND_TO_DM=true
RESPOND_TO_EDITED=true
LISTEN_ON_ALL_PUBLIC=false
```

That's it, the app will restart and attempt connection when you change the
settings, just view the logs to resolve any connection issues.

Glitch apps will usually sleep after 5 minutes, but
[there are ways](https://support.glitch.com/t/not-letting-the-app-go-down/2000/13)
to get round that for periods of time.

## Deploy to Now

[Now from Zeit.co](https://zeit.co/now) provide free global serverless
deployments, with up to 1GB of bandwidth and storage.

First create an account, then install the Now CLI.

Deploy your app, passing environment configs:

```
now -e ROCKETCHAT_URL=<YOUR_URL> \
  -e ROCKETCHAT_USER=<BOT_USER> \
  -e ROCKETCHAT_PASSWORD=<BOT_PASS> \
  -e ROCKETCHAT_ROOM='' \
  -e LISTEN_ON_ALL_PUBLIC=true \
  -e RESPOND_TO_EDITED=true \
  -e RESPOND_TO_DM=true \
  -e RESPOND_TO_LIVECHAT=true
```

Choose `package.json` or `Dockerfile` as the build source.

Follow the link (in clipboard) to your newly created app to view logs.

## Contribute to the Docs

If you've developed deployment methods other common cloud platforms, please
submit a PR with the instructions using the link below.

It would be especially helpful to know of community solutions for deploying
parallel services within the bot container, like a Mongo DB or Rasa NLU.
