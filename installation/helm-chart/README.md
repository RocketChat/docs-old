# Installing Rocket.Chat Chart on Kubernetes using Helm

Helm is a tool that streamlines installing and managing Kubernetes applications. Think of it like apt/yum/homebrew for Kubernetes, helm uses a packaging format called charts. A chart is a collection of files that describe a related set of Kubernetes resources. The Rocket.Chat helm chart packages Rocket.Chat server and mongodb.

## Default settings for Rocket.Chat helm chart

- Rocket.Chat chart installs rocketchat server (stable/rocketchat)
- Rocket.Chat chart installs mongodb chart (stable/mongodb)
- Authentication for mongodb is enabled by default (usePassword : true)
- Replication (oplog) for mongodb is enabled by default (and mandatory for Rocket.Chat versions > 1)
- Only one mongodb member (primary pod) is deployed, but is possible to deploy secondary and arbiter members
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

After both charts are installed execute this to finish configuring access for the Rocket.Chat app to mongodb:

- Exec to you mongodb primary pod, for example:

```bash
$ kubectl exec -ti my-rocketchat-mongodb-primary-0 -- /bin/bash
```

- Give read access to db local to mongodbUsername:

```bash
I have no name!@my-rocket-mongodb-primary-0:/$ mongo <mongodbDatabase> --uroot -p<mongodbRootPassword> --authenticationDatabase admin

rs01:PRIMARY> db.grantRolesToUser("<mongodbUsername>",[{ role: "read", db: "local" }])
rs01:PRIMARY> quit()
```

- You may need to delete rocket.chat pod to restart Rocket.Chat:

```bash
$ kubectl get pods
$ kubectl delete pod my-rocket-rocketchat-66785bc56-fmpkp
```

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

### Important! : Upgrades

Versions from Rocket.Chat helm chart prior to Rocket.Chat version 1.0 **can not be upgraded** using `helm upgrade`.

#### Follow these steps to manually upgrade:

We recommend setting up another set of k8s resources, test that the upgrade is correct and then remove resources from previous version.

- Create a backup of the Rocket.Chat database:

```bash
$ kubectl exec <my-rocketchat-mongodb-pod> -- sh -c 'mongodump -u<mongodbUsername> -p<mongodbPassword> --archive=/tmp/rocketchat-db-bkup.gz --gzip --db <mongodbDatabase>'
```

- Copy the backup file to working directory:

```bash
$ kubectl cp <my-rocketchat-mongodb-pod>:/tmp/rocketchat-db-bkup.gz .
```

- Install the new helm chart with Rocket.Chat version > 1.0 following instructions above, use a different name but keep your previously configured mongodbUsername, mongodbPassword and mongodbDatabase:

```bash
$ helm install --set mongodb.mongodbUsername=rocketchat,mongodb.mongodbPassword=changeme,mongodb.mongodbDatabase=rocketchat,mongodb.mongodbRootPassword=root-changeme --name my-rocketchat-1 stable/rocketchat
```

- Copy the database backup file from working directory to the new mongodb pod:

```bash
$ kubectl cp rocketchat-db-bkup.gz  my-rocketchat-1-mongodb-primary-0:/tmp
```

- Restore the database:

```bash
$ kubectl exec my-rocketchat-1-mongodb-primary-0 -- sh -c 'mongorestore -u<mongodbUsername> -p<mongodbPassword> --archive=/tmp/rocketchat-db-bkup.gz --gzip --db <mongodbDatabase>'
```

- Check that the database was restored succesfully and remember to give access to db local to mongodbUsername:

```bash
kubectl exec my-rocketchat-1-mongodb-primary-0 -- sh -c 'mongo <mongodbDatabase> -u<mongodbUsername> -p<mongodbPassword>  --eval="printjson(db.runCommand( { listCollections: 1.0, nameOnly: true } ))"'
```