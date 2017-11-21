# Rocket.Chat

Deploy [Rocket.Chat](https://github.com/RocketChat/Rocket.Chat) to Linux (RedHat, Centos, Debian, Ubuntu, and so on).

## Prerequisite

You need to have [docker](https://docs.docker.com/linux/started/) and [docker-compose](http://docs.docker.com/compose/) installed.

## How to run Rocket.Chat

Modify `docker-compose.yml` `ROOT_URL` and `MAIL_URL` value to match your environment.

And then:

```bash
./RUN
```

And all the data will be located under the `./data` folder.

## How to Backup this

Just run:

```bash
./BACKUP
```

This will create a dump of the mongo database. Then just copy the data folder to a safe location and you should be fine!

## Questions

If you have any questions, don't hesitate to open issues.
