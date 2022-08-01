# Snap Backup and Restore

This guide shows how you can perform backup and restore of your data.

## Backup Rocket.Chat Snap Data

{% hint style="success" %}
You can enable automatic backup on each snap refresh by executing `sudo snap set rocketchat-server backup-on-refresh=enable`
{% endhint %}

To backup the data on your snap installation, follow these steps

* Stop your rocketchat-server by running

```
sudo service snap.rocketchat-server.rocketchat-server stop
```

{% hint style="info" %}
Note that while the `rocketchat-server service` should be stopped, the `rocketchat-mongo service` should be kept running!
{% endhint %}

```
sudo service snap.rocketchat-server.rocketchat-mongo status | grep Active
   Active: active (running) (...)
```

* Run the backup command

```
sudo snap run rocketchat-server.backupdb
```

* If all goes well, you get an output like below

```
[+] A backup of your data can be found at /var/snap/rocketchat-server/common/backup/rocketchat_backup_<timestamp>.tar.gz
```

* Start your rocketchat-server

```
sudo service snap.rocketchat-server.rocketchat-server start
```

Copy your backup to a different system for safekeeping.

## Restore Rocket.Chat Snap Data

Follow these steps to restore your previously backed up data.

* Stop your rocketchat-server by running

```
sudo service snap.rocketchat-server.rocketchat-server stop
```

{% hint style="info" %}
Note that while the `rocketchat-server service` should be stopped, the `rocketchat-mongo service` should be kept running!
{% endhint %}

```
sudo service snap.rocketchat-server.rocketchat-mongo status | grep Active
   Active: active (running) (...)
```

* Copy your backup file to the snap's common folder:

```
sudo cp rocketchat_backup.tgz /var/snap/rocketchat-server/common/
```

* Run the restore command

```
sudo snap run rocketchat-server.restoredb /var/snap/rocketchat-server/common/rocketchat_backup.tgz
```

If you are replacing an existing database, you get a warning message

{% hint style="danger" %}
**ATTENTION**

* Your current database WILL BE DROPPED prior to the restore!
* Would you like to make a backup of the current database before proceeding?
* (y/n/Q)>
{% endhint %}

* Choose the option you want
  * Press `y` and `Enter` to make a backup of the database in its current state.
  * Press `n` and `Enter` to continue _without a backup_ of the database in its current state.
  * Press any key and/or `Enter` to quit the restore process without making any changes.
* If you choose to proceed and all goes well, you will see an output similar to:

```
[*] Extracting backup file...
[*] Restoring data...
[*] Preparing database...
[+] Restore completed! Please restart the snap.rocketchat services to verify.
```

* Start your rocketchat-server

```
sudo service snap.rocketchat-server.rocketchat-server start
```
