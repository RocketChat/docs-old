---
description: Deploying Rocket.Chat on Heroku
---

# Heroku

Heroku is a container-based cloud Platform as a Service.  In minutes, you can deploy a Rocket.Chat server, running and responding to requests.

There are two ways to deploy Rocket.Chat to Heroku:

* easy one click
* customized command line

To add any service to an app, even if it is free, you will need to register a valid credit card with Heroku. Rocket.Chat needs both mLab and logenteries services.

> **NOTE:**   Make sure you select a mLab plan that supports oplog tailing.  Rocket.Chat requires oplog tailing.

## One Click automatic deploy

> **NOTE**:   You will need a plan that minimally supports 2 dynos and 4 GB of memory to comfortably build and deploy Rocket.Chat on Heroku.

Try clicking the button below, and either login or create a new account, then follow all prompts.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/RocketChat/Rocket.Chat/tree/master)

If everything goes well, you will have your own instance of Rocket.Chat running.

If not, please visit our [community forums](https://forums.rocket.chat).

### Update existing One-Click Heroku Deployment

Prepare for updates:

```text
# create local repo pointing to the Heroku remote
heroku git:clone --app YOUR_HEROKU_APPNAME && cd YOUR_HEROKU_APPNAME

# attach the GitHub repository of Rocket.Chat as a new remote
git remote add origin https://github.com/RocketChat/Rocket.Chat
```

From now on you can simply update your Heroku instance by running:

```text
cd YOUR_HEROKU_APPNAME
git pull origin master # pull down the latest version from GitHub
git push heroku master # push all updates back to your Heroku app instance
```

## Customized command line for developers

This is the option that gives you full control. It is the preferred option for developers.

First make sure you have the following installed:

* git
* Heroku CLI

Next, checkout the latest version of Rocket.Chat:

```text
git clone https://github.com/RocketChat/Rocket.Chat
```

Change into the `Rocket.Chat` directory, and create your Heroku app:

```text
heroku apps:create  --addons mongolab:sandbox,logentries:le_tryit -b https://github.com/RocketChat/heroku-buildpack-meteor <your app name>
```

Choose carefully, as your Rocket.Chat will then be accessible at:

```text
https://<your app name>.herokuapp.com/
```

Next, you _MUST_ set the ROOT\_URL environment variable:

```text
heroku config:add ROOT_URL=https://<your app name>.herokuapp.com/
```

If your app failed to start, check and make sure you have ROOT\_URL set.

Heroku app deployment is triggered by git commits - to Heroku's repos, and not GitHub.

You are almost ready to deploy and stage your own instance. But you must first wire up the git repos to Heroku.

```text
git remote add heroku https://git.heroku.com/<your app name>.git
```

Finally, deploy and stage your app by:

```text
git push heroku master
```

Rocket.Chat should now be running.

### Got Problems

* Set the repository as the buildpack URL:

```text
heroku buildpacks:set https://github.com/AdmitHub/meteor-buildpack-horse.git
```

* Then try again

```text
git push heroku master
```

* Still got problems, please raise an issue.

### Caveats

* Heroku \(actually CloudFoundry\) uses custom buildpacks to stage applications. The buildpack used by Rocket.Chat can take a very long time to build - since it needs to download Meteor and build the server image every time.
* You _must_  set the ROOT\_URL environment variable, as shown above, otherwise the server side will crash.
* If you are scaling to multi-dynos on Heroku, and you have clients/customers still using older browsers that do not support WebSocket, you need to be mindful of sticky session support \(BETA\) on Heroku - see [sticky sessions on Heroku](https://devcenter.heroku.com/articles/session-affinity).

