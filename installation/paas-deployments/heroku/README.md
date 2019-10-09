# Deploying Rocket.Chat on Heroku

Heroku is a container-based cloud Platform as a Service, provides for free 1 dyno, an instance of the application, in this case Rocket.Chat server, running and responding to requests.

There are two ways to deploy Rocket.Chat to Heroku:

- easy one click
- customized command line

Note mongolab's free sandbox plan does not support oplog tailing and from Rocket.Chat version 1 oplog tailing is required.

To add any service to an app, even if it is free, you will need to register a valid credit card with Heroku.  Rocket.Chat needs both mongolab and logenteries services.

## One Click automatic deploy

Try clicking the button below, and either login or create a new account, then follow all prompts.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/RocketChat/Rocket.Chat/tree/master)

If everything goes well, you will have your own instance of Rocket.Chat running.

If not, please raise an issue.

### Update existing One-Click Heroku Deployment

Prepare for updates:

```bash
# create local repo pointing to the Heroku remote
heroku git:clone --app YOUR_HEROKU_APPNAME && cd YOUR_HEROKU_APPNAME

# attach the GitHub repository of Rocket.Chat as a new remote
git remote add origin https://github.com/RocketChat/Rocket.Chat
```

From now on you can simply update your Heroku instance by running:

```bash
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

```bash
APP=<your app name> # Rocket.Chat will become accessible at https://<your app name>.herokuapp.com/
heroku apps:create --addons mongolab:shared-cluster-1,logentries:le_tryit --region eu -b https://github.com/RocketChat/heroku-buildpack-meteor $APP
```

Omit the region switch if you want to create the Heroku app in the US region instead of the EU region.
Note that this adds a paid mongolab addon (the cheapeast available) as RocketChat requires oplog tailing which isn't supported by the free mongolab addon.

Next, you *MUST* set the ROOT_URL environment variable:

```bash
heroku config:add ROOT_URL=https://$APP.herokuapp.com/ -a $APP
```

Then you have to create a database user for accessing the oplog. Sign into your Heroku account, click on "Resources" and then on "mLab MongoDB" and follow these instructions: https://docs.mlab.com/oplog/#creating-a-database-user-to-access-the-oplog. Leave the default username `oplog-reader` and choose a database password without special characters (but make it long).

Next provide the oplog URL to Rocket.Chat e.g.:

```bash
heroku config:add MONGO_OPLOG_URL=mongodb://oplog-reader:<dbpassword>@ds12345678-a0.mlab.com:12345,ds12345678-a1.mlab.com:12345/local?replicaSet=rs-ds12345678&authSource=admin -a $APP
```

Take care to provide the password you've chosen for the `oplog-reader` user instead of `<dbpassword>` and instead of `ds12345678` provide the cluster number which is listed in your mLab MongoDB dashboard.

Heroku app deployment is triggered by git commits - to Heroku's repos, and not GitHub.

You are almost ready to deploy and stage your own instance. But you must first wire up the git repos to Heroku.

```
git remote add heroku https://git.heroku.com/$APP.git
```

Finally, deploy and stage your app by:

```
git push heroku master
```

Rocket.Chat should now be running.

### Got Problems
* If you don't finish the oplog setup you will get an error message in the log: `Unable to find Mongodb Oplog. You must run the server with oplog enabled.`
* If your app failed to start, also check and make sure you have `ROOT_URL` set.
* Still got problems? Please raise an issue.

### Caveats

- Heroku (actually CloudFoundry) uses custom buildpacks to stage applications. The buildpack used by Rocket.Chat can take a very long time to build - since it needs to download Meteor and build the server image every time.
- If you are scaling to multi-dynos on Heroku, and you have clients/customers still using older browsers that do not support WebSocket, you need to be mindful of sticky session support (BETA) on Heroku - see [sticky sessions on Heroku](https://devcenter.heroku.com/articles/session-affinity).
