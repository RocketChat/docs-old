# App Storage Location

{% hint style="info" %}
the new storage solution does not apply to Rocket.Chat servers older than version 4.
{% endhint %}

Rocket.Chat's version 4 introduced npm packages as dependencies of apps. Considering that npm dependencies could account for a hefty portion of an app package's final size, we are providing a more flexible storage solution for your apps' packages. The configuration can be accessed at 'Admin &gt; General &gt; Apps'.

Currently, we have two storage methods:

* [GridFS](https://docs.mongodb.com/manual/core/gridfs/) at MongoDB \(the default option\)
* Filesystem at the host's box

## GridFS \(the default option\)

When using GridFS your app package is stored in the database as a file and you don't have to manage configuration to make it work. It is set and forget.

## Filesystem

When setting the storage to the filesystem, you have full control of the package's storage location and access control. There are a few requirements to make it work:

* You have to provide the absolute path of the directory that will be used to store the packages in the configuration,
* The Rocket.Chat server has to have read and write permissions to the path so it can manage the packages

### Important: changing configuration when there are apps installed

It is not recommended to change storage configuration when there are apps installed. As of right now, there is no migration mechanism to handle moving the packages between different storage methods. Doing so will result in apps not working properly.

