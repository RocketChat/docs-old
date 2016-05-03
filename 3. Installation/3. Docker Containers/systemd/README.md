# Rocket.Chat

Deploy [Rocket.Chat](https://github.com/RocketChat/Rocket.Chat) to Linux that run on systemd (RedHat, Centos, Ubuntu, CoreOS and so on).

## Prerequisite

You need to have [docker](https://docs.docker.com/linux/started/) and [docker-compose](http://docs.docker.com/compose/) installed.

## How to run Rocket.Chat on systemd.

```
git clone https://github.com/RocketChat/DockerFiles.git
cd systemd
cp ./*@* /etc/systemd/system && systemctl daemon-reload
mkdir -p /data/domains/
cd ..
cp GenericLinux /data/domains/example.org
vi /data/domains/example.org/docker-compose.yml # modify `ROOT_URL` and `MAIL_URL`
systemctl enable universal@example.org
systemctl start universal@example.org
```

## Backup

All data will be hourly backuped to `/data/domains/example.org/data` folder. We advise to copy this folder to a remote location in case of hardware failure.

## Question?

If you have any questions, don't hesitate to open issues.

