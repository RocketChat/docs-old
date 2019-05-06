# Deploying Rocket.Chat on IBM Bluemix

IBM Bluemix includes three separate cloud platforms

- CloudFoundry Runtimes
- IBM Containers - based on Docker (in beta)
- Virtual Machines (in beta)

Rocket.Chat can be easily deployed onto any of these cloud platforms.

The deployment literally takes 5 minutes. And Bluemix is well integrated with most legacy services and backend technologies that you may find in an enterprise environment. Bluemix is robust and can scale globally over IBM/Softlayer's huge network of resources.

CloudFoundry is a very mature platform, it is the only Bluemix platform for production right now (Container and VM are in beta). The instructions below deploy Rocket.Chat to this platform.

## Prerequisite

- a Bluemix account - free trial account will do
- the CloudFoundry command line client (cf) installed (version 6.10 or higher)
- git

## Deploying Rocket.Chat

First, logon to the [Bluemix dashboard](http://www.bluemix.net/) and then:

**CREATE AN APP -> WEB  -> .js (SDK for Node.js)*

Then give your name a unique app name. After deployment, Rocket.Chat will be available over the Internet as:

```
https://<your app name>.mybluemix.net/
```

Leave the skeleton app to stage and start, logout of the dashboard. All remaining steps will be preformed at the command line.

Git clone the latest Rocket.Chat:

```
git clone https://github.com/RocketChat/Rocket.Chat.git
```

Change directory into Rocket.Chat, create a new .cfignore file with only one line in it:

```
local
```

This will minimize size of the push (by excluding local Rocket.Chat build artifacts).

Login to Bluemix via the CLI:

```
cf login
```

Create a mongolab 'free' sandbox instance - to be used by Rocket.Chat:

```
cf create-service mongolab sandbox <your db name>
```

Bind that service to your app:

```
cf bind-service <your app name> <your db name>
```

All that is left to do now is to push Rocket.Chat to the app you created early in the dashboard using meteor-buildpack-horse:

```
cf push <your app name> -m 512M -b https://github.com/RocketChat/meteor-buildpack-horse.git
```

That's it. Everybody on the Internet can now access your instance of Rocket.Chat at `https://<your app name>.mybluemix.net/`.
