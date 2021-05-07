---
description: Deploying Rocket.Chat on OpenShift
---

# OpenShift

This guide covers how to host Rocket.Chat on OpenShift Online Next Gen.

OpenShift Online Next Gen is a completely rewritten PaaS solution based on Docker and Kubernetes that allows developers to quickly develop, host and scale application in a cloud environment. OpenShift provides a CLI based tool that allows manage your projects and applications. Please refer to [Getting Started with the CLI](https://docs.openshift.com/online/cli_reference/get_started_cli.html#cli-reference-get-started-cli) documentation in OpenShift website.

## Table of Contents

1. [Login](openshift.md#1-login)
2. [Create a project](openshift.md#2-create-a-project)
3. [Import the ImageStream and templates](openshift.md#3-import-the-imagestream-and-templates)
4. [Create the app](openshift.md#4-create-the-app)

## 1. Login

First of all we need to login to OpenShift API URL to create our project. The command to login to OpenShift Online Next Gen is shown below:

```bash
# oc login https://api.preview.openshift.com --token=<api_token>
```

You can find the API Token to login to OpenShift Online Next Gen in the about page of the Web console.

## 2. Create a project

After login to OpenShift Online Next Gen, we need to create a project to host our Rocket.Chat application:

```bash
$ oc new-project rocket-chat
```

## 3. Import the ImageStream and templates

Clone the Rocket.Chat GitHub repository and import the templates to your OpenShift project:

```bash
# git clone https://github.com/RocketChat/Rocket.Chat
# cd Rocket.Chat
# oc create -f .openshift/rocket-chat-ephemeral.json
# oc create -f .openshift/rocket-chat-persistent.json
```

## 4. Create the app

Create the application using the newly created templated and passing the `MONGODB_DATABASE`,`MONGODB_USER` and `MONGODB_PASSWORD` parameters:

```bash
# oc new-app rocket-chat -p MONGODB_DATABASE=rocketchat -p MONGODB_USER=rocketchat-admin -p MONGODB_PASSWORD=rocketchat
```

* Rocket.Chat uses a domain check code to verify the validity of the e-mail address. To disable it, run the following commands:

```bash
# oc port-forward <mongodb_pod> 27017
# mongo localhost:27017

> use rocketchat
> db.auth('rocketchat-admin','rocketchat')
> db.rocketchat_settings.update({_id:'Accounts_UseDNSDomainCheck'},{$set:{value:false}})
```

