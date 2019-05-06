# Hyper.sh

Rocket.Chat is a web chat application for communities and companies wanting to privately host their own chat service or for developers looking to build and evolve their own chat platforms. In this guide, we will demonstrate how to deploy a Rocket.Chat container connected with a MongoDB container in seconds.

## 1. Register for your free Hyper credits

First take 2 minutes to sign up for Hyper, receive your free credits and install the CLI: <https://docs.hyper.sh/GettingStarted/index.html>

## 2. Create a floating IP address

``` bash
$ hyper allocate 1
xxx.xxx.xxx.xxx <-- Your floating IP
```

## 3. Clone the compose file

```
$ git clone https://github.com/hyperhq/Hyper_Rocket.Chat.git
Cloning into 'Hyper_Rocket.Chat'...
remote: Counting objects: 11, done.
remote: Compressing objects: 100% (6/6), done.
remote: Total 11 (delta 2), reused 10 (delta 1), pack-reused 0
Unpacking objects: 100% (11/11), done.
Marks-MacBook:workspace markcoleman$ cd Hyper_Rocket.Chat/
```

## 4. Add your FIP to the compose file

```
$ cat rocketchat_mongodb
version: '2'
services:
  db:
    image: mongo
    restart: always

  rocket.chat:
    depends_on:
      - db
    image: rocket.chat
    fip: <YOUR FLOATING IP GOES HERE>
    links:
      - db
    ports:
      - "3000:3000"
    restart: always
```

## 5. Start Rocket.Chat

```
$ hyper compose up -f rocketchat_mongodb
Project [hyperrocketchat]: Starting project
[0/2] [db]: Starting
[1/2] [db]: Started
[1/2] [rocket.chat]: Starting
...
```

## Done

Try ```http://<YOUR FIP GOES HERE>:3000``` in your browser!
