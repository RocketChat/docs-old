# Installing Rocket.Chat on AWS from AWS Marketplace

Here we will guide you through installing in AWS in an EKS cluster using our AWS Marketplace container.

### Recent webinar demoing this process
<iframe width="560" height="315" src="https://www.youtube.com/embed/U3ePJR0V0L0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Prerequisites : 
* Have AWS Account
* Download [aws cli](https://aws.amazon.com/cli/) 
* Run aws configure 
* Install [eksctl](https://eksctl.io/) recommended by [eksworkshop](https://eksworkshop.com/eksctl/)
* Install [helm](https://docs.helm.sh/using_helm/#installing-helm)


### Steps:
1. `eksctl create cluster --name=your-eks-cluster --region=us-west-2` (takes about 15-20 minutes)
2. `kubectl apply -f tiller-rbac.yaml` - [Create helm serviceaccount](https://docs.helm.sh/using_helm/#example-service-account-with-cluster-admin-role)
```
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
3. `helm init --service-account tiller` - installs the helm tiller the server side component that helm talks to inside the cluster
4. `helm install stable/traefik --name traefik --namespace kube-system --set rbac.enabled=true` -- install traefik to act as ingress controller
    * Can use --acme.enabled=true to generate tls
    * --acme.email=youremail
5. Grab the ip for your traefik service: `kubectl -n kube-system get svc` you might have to run it a few times for your external-ip to show up
6. Create CNAME for the domain you plan to use pointing to ELB ip created for traefik
7. https://aws.amazon.com/marketplace/search/results?searchTerms=Rocket.Chat access the marketplace
8. Click subscribe
9. Continue to configuration - can set version and stuff here
10. Continue to launch
11. Click "View Container Image Details"
![image](https://user-images.githubusercontent.com/51996/52382003-3f98ed00-2a39-11e9-9a28-a4a179abd18f.png)
12. Copy the container image path
13. Prepare helm command:
```
helm install --name=rc \
--set mongodb.mongodbUsername=rocketchat \
--set mongodb.mongodbPassword=superSecure \
--set mongodb.mongodbDatabase=rocketchat \
--set repo=217273820646.dkr.ecr.us-east-1.amazonaws.com/046e16ad-a193-4c5b-9f1f-d2619d9c5cd6/cg-1684305143/rocket.chat.enterprise \
--set tag=0.71.1-latest \
--set ingress.enabled=true \
--set host=your-hostname.your-domain.com \
--set ingress.annotations."kubernetes\.io/ingress\.class"=traefik \
stable/rocketchat
```

From this command you will want to check a few things:
* mongodb.mongodbPassword - make sure to set to your own password
* repo - use the repo part of the container image path you copied earlier. 
    - Ex: `217273820646.dkr.ecr.us-east-1.amazonaws.com/c87d63fd-e44d-4368-82e0-24bd42b21a84/cg-2246218297/rocket.chat:0.71.1-latest`
    - The repo is: `217273820646.dkr.ecr.us-east-1.amazonaws.com/c87d63fd-e44d-4368-82e0-24bd42b21a84/cg-2246218297/rocket.chat`
* tag - use the `0.71.1-latest` part of the command.
* host - set to the hostname you plan to use
14. Finally run the command

### Check it out

