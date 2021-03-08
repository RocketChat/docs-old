---
description: Deploying Rocket.Chat on Galaxy
---

# Galaxy

Galaxy is a platform-as-a-service built specifically for Meteor apps. Built using the latest Docker and AWS cloud infrastructure.

You will need to sign up for [Galaxy](https://www.meteor.com/hosting/).

## Get Rocket.Chat code

Download the source code first to be able to deploy to Galaxy

```text
git clone https://github.com/RocketChat/Rocket.Chat.git
cd Rocket.Chat
```

### Set your MongoDB URL

You will need a Mongo database configured for your Rocket.Chat application, for better performance as meteor hosting uses AWS it is advice you setup your database in the same AWS region.

Create a settings.json file to set environmental variable as follows:

```text
{
  "galaxy.meteor.com": {
    "env": {
      "MONGO_URL": "mongodb://<user>:<password>@<host>:<port>/<database>?replicaSet=rs01",
      "MONGO_OPLOG_URL": "mongodb://<oplog_username>:<oplog_password>@<db_server_host>:<db_server_port>/<oplog_db_name>?authSource=admin&replicaSet=rs01",
      "ROOT_URL": "...",
      "MAIL_URL": "...",

    }
  }
}
```

### Deploy to Galaxy servers

Execute this from the root of the source code:

```text
DEPLOY_HOSTNAME=[region] meteor deploy [hostname] --settings [filepath.json]
```

* region is ‘galaxy.meteor.com’ for US East, ‘eu-west-1.galaxy.meteor.com’ for EU West, and ‘ap-southeast-2.galaxy.meteor.com’ for Asia-Pacific.
* hostname is the fully qualified domain name where you’re planning to host your application \(using  in the .meteorapp.com hostname format, in this example\).
* filepath.json is the path to your settings file \(for example, ‘./settings.json’\).

For more information on these steps check out [galaxy's doc](https://galaxy-guide.meteor.com/migrate-app.html)

