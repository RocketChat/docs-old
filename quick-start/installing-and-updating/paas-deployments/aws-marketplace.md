---
description: Installing Rocket.Chat from AWS Marketplace
---

# AWS Marketplace

Here we will guide you through installing in AWS in an EKS cluster using our AWS Marketplace container.

## Recent webinar demoing this process

## Prerequisites

* Have AWS Account
* Download [aws cli](https://aws.amazon.com/cli/)
* Run aws configure
* Install [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl)
* Install [eksctl](https://eksctl.io/)
* Install [helm](https://docs.helm.sh/using_helm/#installing-helm)

## Instructions:

First we need to bring up a kubernetes cluster. So we will bring it up in AWS kubernetes offering called eks. To do this we will use a tool called eksctl which is recommended by [eksworkshop](https://eksworkshop.com/eksctl/)

```text
eksctl create cluster --name=your-eks-cluster --region=us-west-2
```

This takes from 15-20 minutes. So go grab a cup of coffee or something.

Once that's finished we need to get things setup for helm. Starting somewhere around Kubernetes 1.9 RBAC is enabled by default with most kubernetes providers. Its enabled by default in EKS.

So we need to install service account to allow helm to operate correctly. [More info about that here](https://docs.helm.sh/using_helm/#example-service-account-with-cluster-admin-role)

Create a file called tiller-rbac.yaml with contents of:

```text
apiVersion: v1
kind: ServiceAccount
metadata:
  name: tiller
  namespace: kube-system
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: tiller
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
  - kind: ServiceAccount
    name: tiller
    namespace: kube-system
```

Next we we need to insert this into kubernetes with:

```text
kubectl apply -f tiller-rbac.yaml
```

Now that the service role is in place we need to initialize tiller with this service account.

```text
helm init --service-account tiller
```

Now that helm has finished successfully we can install traefik. Traefik is a reverse proxy / load balancer with support for kubernetes ingress. It will automatically discover ingress rules defined inside your cluster and handle routing of traffic in your cluster to those services. Pretty neat!

```text
helm install stable/traefik --name traefik --namespace kube-system --set rbac.enabled=true
```

Like mentioned above RBAC is enabled so in this command we set a flag that caused the helm chart to create rbac rules for traefik automatically.

Some optional flags you can add to the above command:

* --set acme.enabled=true - this will enable letsencrypt
* --set acme.email=youremail - this sets the email to use with it

Give it a few seconds and then run:

```text
kubectl -n kube-system get svc
```

You might have to run it a few times, but after a while you will you will get output that looks something like:

![image](https://user-images.githubusercontent.com/51996/52383655-f304e000-2a3f-11e9-86bb-392c7074010c.png)

Take that and create a CNAME for with your desired domain pointing to that address.

Now finally lets go subscribe to our image from AWS Marketplace.

* [Rocket.Chat Community](https://aws.amazon.com/marketplace/pp/B07K9BKJHP?qid=1549500780099&sr=0-1&ref_=srh_res_product_title)
* [Rocket.Chat Enterprise](https://aws.amazon.com/marketplace/pp/B07K98179S?qid=1549500780099&sr=0-3&ref_=srh_res_product_title)

After you pick which one you need to click "Continue to Subscribe"

It will take a little bit to process. Might have to refresh the page a few times. Alternatively you can wait on an email they send when its finished.

Once that is finished you can click "Continue to Configuration"

You can choose the version of Rocket.Chat you wish to use.

Then click "Continue to Launch"

Towards the bottom of this page you will see: "View Container Image Details" Click that.

![image](https://user-images.githubusercontent.com/51996/52382003-3f98ed00-2a39-11e9-9a28-a4a179abd18f.png)

Copy the image path given at the bottom.

Now we are ready to plug in a few things and run our helm install:

* mongodb.mongodbPassword - make sure to set to your own password
* repo - use the repo part of the container image path you copied earlier.

Example of image path, the path changes based on the AWS region and version installed, so be sure you check the image details of your subscription

```text
217273820646.dkr.ecr.us-east-1.amazonaws.com/c87d63fd-e44d-4368-82e0-24bd42b21a84/cg-2246218297/rocket.chat:0.71.1-latest
```

The repo part of it is everything before `:`

```text
217273820646.dkr.ecr.us-east-1.amazonaws.com/c87d63fd-e44d-4368-82e0-24bd42b21a84/cg-2246218297/rocket.chat
```

* tag - use the part of the image path after the `:` In our case `0.71.1-latest`
* host - set to the hostname you plan to use

```text
helm install --name=rc \
--set mongodb.mongodbUsername=rocketchat \
--set mongodb.mongodbPassword=superSecure \
--set mongodb.mongodbDatabase=rocketchat \
--set mongodb.mongodbRootPassword=superSecureToo \
--set image.repository=217273820646.dkr.ecr.us-east-1.amazonaws.com/046e16ad-a193-4c5b-9f1f-d2619d9c5cd6/cg-1684305143/rocket.chat.enterprise \
--set image.tag=0.71.1-latest \
--set ingress.enabled=true \
--set host=your-hostname.your-domain.com \
--set ingress.annotations."kubernetes\.io/ingress\.class"=traefik \
stable/rocketchat
```

Now after this runs you can run:

```text
kubectl get pods -w
```

And watch until both rc-mongodb and rc-rocketchat are both running.

Rocket.Chat should now be externally available!

## FAQ

### Rocket.Chat isn't responding

Try running:

```text
kubectl logs -f deployment/rc-rocketchat
```

You should be able to see the logs and see if something happened to keep it from starting.

