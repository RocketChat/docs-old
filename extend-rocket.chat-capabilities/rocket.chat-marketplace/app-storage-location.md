# App Storage Location

Rocket.Chat's version 4 introduced npm packages as dependencies of apps. Since npm dependencies could account for a hefty portion of an app package's final size, we have a more flexible storage solution for your apps' packages.&#x20;

To access the configuration, navigate to **Administration > Workspace > Settings> Apps**

Currently, we have two storage methods:

* [GridFS](https://docs.mongodb.com/manual/core/gridfs/) at MongoDB (the default option)
* Filesystem at the host's box

## GridFS&#x20;

When using GridFS (default), your app package is stored in the database as a file, and you don't have to manage configuration to make it work.&#x20;

## Filesystem

When setting the storage to the filesystem, you have full control of the package's storage location and access control. There are a few requirements to make it work:

* You have to provide the absolute path of the directory that will be used to store the packages in the configuration,
* The Rocket.Chat server has to have read and write permissions to the path so it can manage the packages

## Changing configuration when there are apps installed

It is not recommended to change storage configuration when there are apps installed. Currently, there is no migration mechanism to move packages between different storage methods. Doing so will result in apps not working properly.
