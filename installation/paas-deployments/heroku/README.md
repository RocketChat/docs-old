# Deploying Rocket.Chat on Heroku

Two ways to deploy Rocket.Chat to Heroku:

- easy one click
- customized command line

## One Click automatic deploy

Try clicking the button below, and either login or create a new account, then follow all prompts.

[One-Click Deploy](https://heroku.com/deploy?template=https://github.com/RocketChat/Rocket.Chat/tree/master)

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/RocketChat/Rocket.Chat/tree/master)

If everything goes well, you will have your own instance of Rocket.Chat running.

If not, please raise an issue.

### Update existing One-Click Heroku Deployment

Prepare for updates:

```
# create local repo pointing to the Heroku remote
heroku git:clone --app YOUR_HEROKU_APPNAME && cd YOUR_HEROKU_APPNAME

# attach the GitHub repository of Rocket.Chat as a new remote
git remote add origin https://github.com/RocketChat/Rocket.Chat
```

From now on you can simply update your Heroku instance by running:

```
cd YOUR_HEROKU_APPNAME
git pull origin master # pull down the latest version from GitHub
git push heroku master # push all updates back to your Heroku app instance
```

## Customized command line for developers

This is the option that gives you full control. It is the preferred option for developers.

First make sure you have the following installed:

- git
- Heroku CLI

Next, checkout the latest version of Rocket.Chat:

```
git clone https://github.com/RocketChat/Rocket.Chat
```

Change into the `Rocket.Chat` directory, and create your Heroku app:

```
heroku apps:create  --addons mongolab:sandbox,logentries:le_tryit -b https://github.com/RocketChat/heroku-buildpack-meteor <your app name>
```

Choose \<your app name> carefully, as your Rocket.Chat will then be accessible at:

```
https://<your app name>.herokuapp.com/
```

Next, you *MUST* set the ROOT_URL environment variable:

```
heroku config:add ROOT_URL=https://<your app name>.herokuapp.com/
```

If your app failed to start, check and make sure you have ROOT_URL set.

Heroku app deployment is triggered by git commits - to Heroku's repos, and not GitHub.

You are almost ready to deploy and stage your own instance. But you must first wire up the git repos to Heroku.

```
git remote add heroku https://git.heroku.com/<your app name>.git
```

Finally, deploy and stage your app by:

```
git push heroku master
```

Rocket.Chat should now be running.

### Got Problems

- Set the repository as the buildpack URL:

```
heroku buildpacks:set https://github.com/AdmitHub/meteor-buildpack-horse.git
```

- Then try again

```
git push heroku master
```

- Still got problems, please raise an issue.

### Caveats

- To add any service to an app, even if it is free, you will need to register a valid credit card with Heroku.  Rocket.Chat needs both mongolab and logenteries services.
- Heroku (actually CloudFoundry) uses custom buildpacks to stage applications. The buildpack used by Rocket.Chat can take a very long time to build - since it needs to download Meteor and build the server image every time.
- You *must*  set the ROOT_URL environment variable, as shown above, otherwise the server side will crash.
- Note mongolab's free sandbox plan does not support oplog tailing - check other plans if you need oplog.
- If you are scaling to multi-dynos on Heroku, and you have clients/customers still using older browsers that do not support WebSocket, you need to be mindful of sticky session support (BETA) on Heroku - see [sticky sessions on Heroku](https://devcenter.heroku.com/articles/session-affinity).
