# Deploying Rocket.Chat on WeDeploy

## What you'll need

- [WeDeploy Account](https://console.wedeploy.com/signup)
- [WeDeploy CLI](https://wedeploy.com/docs/intro/using-the-command-line/#1)

### 1. Create Node app

First, let's create a folder and give it any name, for example `app`. Inside that folder, create a file called `wedeploy.json` with the following code:

```
{
    "id": "app",
    "image": "rocket.chat"
}
```

### 2. Create Mongo database

Now, let's create another folder, for example `db`. Inside that folder, create a file called `wedeploy.json` with the following code:

```
{
    "id": "db",
    "image": "mongo",
    "volume": "/data/db"
}
```

In the end, you should have the a file structure that [looks like this](https://github.com/wedeploy/demo-rocketchat).

### 3. Deploy

Finally, we can run the deploy command and choose a project name:

```
we deploy -p myproject
```

After few seconds your Rocket.Chat will be online!