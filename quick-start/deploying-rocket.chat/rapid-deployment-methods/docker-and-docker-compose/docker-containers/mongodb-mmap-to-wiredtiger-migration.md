---
description: >-
  Migrate your existing mmap based MongoDB instance into a wiredTiger one
  without with as little downtime as possible.
---

# MongoDB mmap to wiredTiger migration

Starting with the major release 4.X.Y of Rocket.Chat, MongoDB has to be setup with a _WiredTiger_ storage engine rather than the deprecated _mmap_ one. This is mandatory, if you plan to upgrade to one of the future Rocket.Chat versions and has to be prepared before initiating the application upgrade.

[This project/repository](https://github.com/RocketChat/docker-mmap-to-wiredtiger-migration) aims to help out people migrating their existing dockerized, _mmap_ based MongoDB installation into a _WiredTiger_ one.

### Requirements

* Docker-based Rocket.Chat deployment
* MongoDB instance with _mmap_ storage engine

### Quick usage

1. Make sure you have met all requirements listed above.
2. Create a database dump to ensure a backup is in place in case anything goes south!
3. Stop running Rocket.Chat system.
4. Update `docker-compose.yml` to include the migration container/logic.
5. Start up containers, wait for the migration to be completed.
6. Once finished, Rocket.Chat should be up again - just running with a WiredTiger MongoDB storage engine now.

### Detailed usage

#### Assumptions

* Your existing `docker-compose.yml` file is located within `/opt/rocketchat`
* Your "mongo" container has a `/data/db` volume mapped, that holds the existing (mmap) data files of MongoDB
* Your "mongo" container has a `/dump` volume mapped, that is accessible from the host and can be used to store the backup/dump

#### Step-by-step guide

1.  Create a database dump of your existing MongoDB, save it on the host to have a backup just in case:

    ```bash
     cd /opt/rocketchat
     docker-compose exec mongo mongodump --archive=/dump/mmap --gzip
     cp /data/dump/mmap ~/mongo-mmap-dump.gzip
    ```
2.  Stop your existing Rocket.Chat system including all its services (especially MongoDB).

    ```bash
     docker-compose stop
    ```
3.  [Download the repository](https://github.com/RocketChat/docker-mmap-to-wiredtiger-migration/archive/main.zip) or clone it using `git` and extract it to `/opt/rocketchat-migration`:

    ```bash
     git clone https://github.com/RocketChat/docker-mmap-to-wiredtiger-migration /opt/rocketchat-migration
    ```
4.  Copy the `docker/` folder that holds the Dockerfile of the custom migrator image into your existing compose folder:

    ```bash
     cp -r /opt/rocketchat-migration/docker /opt/rocketchat/docker
    ```
5.  Backup and rename your current `docker-compose.yml` file to `docker-compose.mmap.yml`:

    ```bash
     mv /opt/rocketchat/docker-compose.yml /opt/rocketchat/docker-compose.mmap.yml
    ```
6.  Copy the new `docker-compose.yml` file into your compose folder:

    ```bash
     cp /opt/rocketchat-migration/docker-compose.yml /opt/rocketchat/docker-compose.yml
    ```
7. Apply any possible customizations that you had in your old `docker-compose.mmap.yml` file to the new one (volume, port mappings, service names, etc.)
8.  Run `diff` and make sure it looks (more or less) like the output below when you compare your old and new `docker-compose.yml` files:

    ```bash
     diff /opt/rocketchat/docker-compose.mmap.yml /opt/rocketchat/docker-compose.yml
    ```

    ```diff
     8c8
     <         "for i in `seq 1 30`; do
     ---
     >         "for (( ; ; )); do
     11c11
     <           echo \"Tried $$i times. Waiting 5 secs...\";
     ---
     >           echo \"Could not start Rocket.Chat. Waiting 5 secs...\";
     37c37,45
     <     command: mongod --smallfiles --oplogSize 128 --replSet rs0 --storageEngine=mmapv1
     ---
     >     command: >
     >       bash -c
     >         "while [ ! -f /data/db/WiredTiger ]; do
     >           echo \"wiredTiger migration hasn't started yet. Waiting 30 secs...\";
     >           sleep 30;
     >         done;
     >         docker-entrypoint.sh mongod --oplogSize 128 --replSet rs0 --storageEngine=wiredTiger;"
     >     depends_on:
     >       - migrator
     40a49,53
     >   migrator:
     >     build: ./docker/
     >     volumes:
     >       - ./data/db:/data/db
     >
     45c58
     <         "for i in `seq 1 30`; do
     ---
     >         "for (( ; ; )); do
     51c64
     <           echo \"Tried $$i times. Waiting 5 secs...\";
     ---
     >           echo \"Could not reach MongoDB. Waiting 5 secs ...\";
    ```

    All changes above, summarized:

    * `for` loops slightly adjusted for both "rocketchat" and "mongo-init-replica" to run them endlessly
    * Adjusted `command` property for "mongo" service:
      * `while` loop to check for initiated WiredTiger migration (in `$MONGO_DATA_DIR/WiredTiger`)
      * Use [custom entrypoint](https://github.com/RocketChat/docker-mmap-to-wiredtiger-migration/blob/main/docker/entrypoint.sh) that applies the migration
      * Use `--storageEngine=wiredTiger` switch instead of `--storageEngine=mmapv1`
    * Added "migrator" service
9.  Build the "migrator" image and start up the containers again:

    ```bash
     docker-compose up --build -d
    ```
10. Wait for the migration to be completed - optionally check logs of "migrator" and "mongo" containers:

    ```bash
    docker-compose logs -f migrator # once that one has completed the migration ...
    docker-compose logs -f mongo # ... check if the mongo one already took over
    ```

### Help and support

If you encounter any problems during the migration or in case you have general feedback or improvement ideas, feel free to create an issue in [the GitHub repository](https://github.com/RocketChat/docker-mmap-to-wiredtiger-migration).
