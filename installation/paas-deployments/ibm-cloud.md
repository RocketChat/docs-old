---
description: Deploying Rocket.Chat on IBM Cloud
---

# IBM Cloud

IBM Cloud have various options for hosting Rocket.Chat, Docker container on a Kubernetes cluster, VMWare, Bare Metal Server, but the instructions below will focus in creating a Cloud Foundry Rocket.Chat app.

## Prerequisite

* An IBM Cloud account
* The IBM Cloud command line client \(ibmcloud\) installed
* git

## Deploying Rocket.Chat

First, logon to the [IBM Cloud dashboard](https://cloud.ibm.com/) and then select in the Apps box, `Create an app`.

Then give the Rocket.Chat server a unique app name, select as `Starting point` Create a new app, and as `Platform` select Node.js. Finish by clicking `Create`.

After creation is finished, select `Create service` from the App Details tab, select Databases from the list of services, and Databases for MongoDB.

Configure MongoDB to enable oplog tailing and intiate a replicaset.

All remaining steps will be preformed at the command line.

Git clone the latest Rocket.Chat:

```text
git clone https://github.com/RocketChat/Rocket.Chat.git
```

Log in to the IBM Cloud command-line interface:

```text
ibmcloud cf login
```

Push Rocket.Chat to the app you created early in the dashboard using meteor-buildpack-horse:

```text
cf push <your app name> -m 512M -b https://github.com/RocketChat/meteor-buildpack-horse.git
```

Go to `https://<your app name>.mybluemix.net/` in your browser to access your instance of Rocket.Chat

If you encounter any problem check the IBM Cloud Creating Apps instructions [here](https://cloud.ibm.com/docs/apps/tutorials?topic=creating-apps-tutorial-starterkit).

