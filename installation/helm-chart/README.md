# Installing Rocket.Chat Chart on Kubernetes using Helm

> **WARNING**: Upgrading to chart version 1.1.0 (Rocket.Chat 1.0.3) might require extra steps to retain the MongoDB data. See [Upgrading](##Upgrading) for more details.

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

## Upgrading

Rocket.Chat version 1.x requires a MongoDB ReplicaSet to be configured. When using the dependent `stable/mongodb` chart (`mongodb.enabled=true`), enabling ReplicaSet will drop the PVC and create new ones. After upgrade there will be a backup of your current MongoDB in a volume called rocketchat-mongodump, you can restore it after the upgrade and optionally restore it during upgrade.

Backwards compatibility is not guaranteed unless you modify the labels used on the chart's deployments.
Use the workaround below to upgrade from versions previous to 1.0.0. The following example assumes that the release name is rocketchat:

```console
$ kubectl delete deployment rocketchat-rocketchat --cascade=false
```

```console
$ helm upgrade \
--set mongodb.mongodbRootPassword=<password previously configured> \
--set mongodb.mongodbPassword=<password previously configured> \
--set backupDatabase=true \
--set restoreDatabase=true \
--set <other values previously configured on installation> \ 
stable/rocketchat
```

After upgrade, if you find any error, you can restore the rocketchat db using this pod with the backup volume mounted and run the following command from inside the pod:

```
apiVersion: v1
kind: Pod
metadata:
  name: test-restore
spec:
  containers:
  - name: for-restore
    image: bitnami/mongodb
    volumeMounts:
    - name: mongodump
      mountPath: "/dump"
  volumes:
  - name: mongodump
    persistentVolumeClaim:
      claimName: rocketchat-mongodump
```

```console
$ mongorestore --drop --host rocketchat-mongodb --username <mongodb.mongodbUsername> --password <mongodb.mongodbPassword> --db <mongodb.mongodbDatabase> --archive=/dump/rocketchat-db-bkup.gz --gzip
```

In the last command `host` is the name of the rocketchat mongodb service. You may want to delete the extra replicaset for rocketchat from before the upgrade.

