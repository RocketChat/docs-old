# OpenShift

Several templates for providing Rocket.Chat are hosted in this [repository](http://developers.redhat.com/).

## Installation on Container Development Kit (CDK)

* Download and install CDK.
* Download and install the OpenShift Client tool.
* Run OpenShift vagrant machine.
* Pull the Rocket.Chat Docker image from Docker Hub and tag/push to the internal OpenShift registry using these commands:

```bash
docker pull registry.rocket.chat/rocketchat/rocket.chat
docker tag rocketchat/rocket.chat hub.openshift.rhel-cdk.10.1.2.2.xip.io/openshift/rocket-chat
docker push hub.openshift.rhel-cdk.10.1.2.2.xip.io/openshift/rocket-chat
```

* Login in OpenShift and create a new project in OpenShift

```bash
oc login -u openshift-devel https://10.1.2.2:8443
oc new-project rocket-chat
```

* Clone this repo and add the templates and ImageStream to the Openshift namespace:

```bash
git clone https://github.com/rimolive/rocketchat-openshift
oc create -n openshift -f rocket-chat-is.json
oc create -n openshift -f rocket-chat-ephemeral.json
```

* Create the rocket-chat app

```bash
oc new-app rocket-chat -p MONGODB_DATABASE=rocketchat,MONGODB_USER=rocketchat-admin,MONGODB_PASS=rocketchat
```

* Rocket.Chat uses a domain check code to verify the validity of the e-mail address. To disable it, run these commands:

```bash
oc port-forward <mongodb_pod> 27017
mongo localhost:27017
```

Inside the mongo client, run these commands:

```javascript
use rocketchat
db.auth('rocketchat-admin','rocketchat')
db.rocketchat_settings.update({_id:'Accounts_UseDNSDomainCheck'},{$set:{value:false}})
```
