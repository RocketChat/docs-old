# Installing Rocket.Chat Chart on Kubernetes using Helm
**Note: Has not yet been updated to work with 1.0**
Helm is a tool that streamlines installing and managing Kubernetes applications. Think of it like apt/yum/homebrew for Kubernetes, helm uses a packaging format called charts. A chart is a collection of files that describe a related set of Kubernetes resources. The Rocket.Chat helm chart packages Rocket.Chat server and mongodb.

## Default settings for Rocket.Chat helm chart

- Rocket.Chat chart installs rocketchat server (stable/rocketchat)
- Rocket.Chat chart installs mongodb chart (stable/mongodb)
- Authentication for mongodb is enabled by default (usePassword : true)
- Two persistent volumes will be created, one for mongodb that will store Rocket.Chat data and one for Rocket.Chat uploads
- If not set, a random password will be generated for the root user in mongodb, and no custom user, password and database will be creted for Rocket.Chat so we recommend installing this chart setting those parameters.

### Install Rocket.Chat chart and configure mongodbUsername, mongodbPassword, mongodbDatabase and mongodbRootPassword:

```bash
$ helm install --set mongodb.mongodbUsername=rocketchat,mongodb.mongodbPassword=changeme,mongodb.mongodbDatabase=rocketchat,mongodb.mongodbRootPassword=root-changeme --name my-rocketchat stable/rocketchat
```

- mongodbUsername: This user will have access to the rocketchat database (mongodbDatabase) and is authenticated using mongodbDatabase
- mongodbPassword: Password for accessing your Rocket.Chat data
- mongodbDatabase: Database used to store Rocket.Chat application and authenticate the mongodbUsername
- mongodbRootPassword: The password for the root user, administrator of the mongodb statefulset and authenticated using the admin database

Is possible to check both passwords, mongodbPassword and mongodbRootPassword, in mongodb secret, use `kubectl get secrets`.

#### If you would like to install other image than default for this chart, add to the command repository and the image you would like to install:

```bash
$ helm install --set mongodb.mongodbUsername=rocketchat,mongodb.mongodbPassword=changeme,mongodb.mongodbDatabase=rocketchat,mongodb.mongodbRootPassword=root-changeme,repository=<image-wanted> --name my-rocketchat stable/rocketchat
```

#### And if you only would like to install another version of rocket.chat image, add tag value to the command:

```bash
$ helm install --set mongodb.mongodbUsername=rocketchat,mongodb.mongodbPassword=changeme,mongodb.mongodbDatabase=rocketchat,mongodb.mongodbRootPassword=root-changeme,tag=0.74.2 --name my-rocketchat stable/rocketchat
```

#### Check rocketchat values.yaml file for more details and adjust to your needs, after you can install Rocket.Chat chart using this command, remember to set mongodbUsername, mongodbPassword, mongodbDatabase and mongodbRootPassword:

```bash
$ helm install --name my-rocketchat -f values.yaml stable/rocketchat
```
