# Deploying Rocket.Chat on Galaxy

Prerequisites:

- Git
- Meteor

## Get Rocket.Chat code

Download the source code first to be able to deploy to Galaxy

```
git clone https://github.com/RocketChat/Rocket.Chat.git
cd Rocket.Chat
```

### Set your MongoDB URL

Create a settings.json file to store the MONGO_URL variable as follows:

```
{
  "galaxy.meteor.com": {
    "env": {
      "MONGO_URL": "mongodb://<user>:<password>@<host>:<port>/<database>"
    }
  }
}
```

### Deploy to Galaxy servers

You will need a [Galaxy](http://galaxy.meteor.com/) account first. Then execute this from the root of the source code

```
DEPLOY_HOSTNAME=galaxy.meteor.com meteor deploy --settings settings.json <hostname>
```
