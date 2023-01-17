# Supported Mongo Versions

Required MongoDB versions can change across different major versions. It is very important that you choose the correct database version when deploying and also to make sure your existing installation is using a supported version.

### Using release notes

You can always check the supported version list on our GitHub releases page.

Use the following "template" link to inspect the release notes and supported MongoDB releases.

{% hint style="success" %}
https://github.com/RocketChat/Rocket.Chat/releases/\<VERSION>
{% endhint %}

For example, if you want to check what are the supported MongoDB versions for release 4.5.0, you can go to [https://github.com/RocketChat/Rocket.Chat/releases/4.5.0](https://github.com/RocketChat/Rocket.Chat/releases/4.5.0) and look for "Engine versions".

![Required MongoDB](<../../../.gitbook/assets/image (676).png>)

### Using releases API

The other option is to use our releases API.

{% hint style="info" %}
This is a fairly new addition, information on old versions can't be viewed by this API
{% endhint %}

This one is a very quick way of getting the list and is also ideal if you want to get this information dynamically for some kind of automation or script.

If you want to see the supported MongoDB versions for the latest release, you can perform a GET against the following endpoint

[https://releases.rocket.chat/latest/info](https://releases.rocket.chat/latest/info)

You can change `latest` with any version number and get more specific information. The key you're looking for is `compatibleMongoVersions`.

Using `curl` with `jq` would look something like:

```
{
    "tag": "4.8.1",
    "commit": "0b106e3645c313592a99610e60f7bcca5b99cf93",
    "key": "build/rocket.chat-4.8.1.tgz",
    "etag": "c4aa635572aa83ce4b45cbdb116ceba4-25",
    "count": 1215,
    "nodeVersion": "14.18.3",
    "compatibleMongoVersions": [
        "3.6",
        "4.0",
        "4.2",
        "4.4",
        "5.0"
    ]
}
```

### Recommended MongoDB version

If it is an existing deployment, being fairly in the middle of the supported list is a good idea. We know how hard it is to update our databases, especially if it's a large deployment.

If you're going to deploy fresh, we recommend choosing the latest version that is supported. For example, in case of Rocket.Chat version 4.5.0, for new deployments the recommended version would be 5.0. This will make sure you don't have to update the DB anytime soon.

One way you can get the latest MongoDB version that is supported by the current latest Rocket.Chat, is by using `curl` with `jq`:

```
~ via  v12.22.11
➜ curl https://releases.rocket.chat/latest/info -s | jq '.compatibleMongoVersion
s | sort_by(.) | reverse | .[0]' -r
5.0
```

{% hint style="info" %}
We don't remove MongoDB support overnight. A version marked to be removed from support is first deprecated and you should see a deprecation warning not only in your Rocket.Chat logs but also the server admins should see a deprecation notice banner on their instances.
{% endhint %}

## Deprecation archive

* [Support of MongoDB 3.2 will has been removed from Rocket.Chat 2.0.0 and MongoDB 3.4 has been removed from Rocket.Chat 4.x](https://github.com/RocketChat/Rocket.Chat/pull/15199).

**Note** Without the MongoDB version we can't ensure you are running a compatible version. If you are running your mongodb with auth enabled and a **user different from admin** you may need to grant permissions for this user to check cluster data. You can do it via mongo shell running the following command replacing the string _YOUR\_USER_ by the correct user\\'s name:

```
db.runCommand({ grantRolesToUser: "YOUR_USER" , roles: [{role: "clusterMonitor", db: "admin"}]})
```

## Supported Storage Engines

Mmapv1 is no longer supported in MongoDB since version 4.2. So to make sure you update your Rocket.Chat installations easily in the future, use the [WiredTiger](https://docs.mongodb.com/manual/core/wiredtiger/) storage engine. If you're already running mmapv1, please [migrate to wiredTiger](mongodb-mmap-to-wiredtiger-migration.md) as soon as possible.
