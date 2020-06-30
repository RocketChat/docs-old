---
description: Updating Manual Installation
---

# Updating

Usually you can update Rocket.Chat server pretty easily.

Stop Rocket.Chat service:

```text
sudo systemctl stop rocketchat
```

Remove the installation folder, usually in /opt:

```text
sudo rm -rf /opt/Rocket.Chat
```

Download Rocket.Chat latest version:

```text
curl -L https://releases.rocket.chat/latest/download -o /tmp/rocket.chat.tgz
```

```text
tar -xzf /tmp/rocket.chat.tgz -C /tmp
```

Install it and set right permissions to Rocket.Chat folder:

```text
cd /tmp/bundle/programs/server && npm install
```

```text
sudo mv /tmp/bundle /opt/Rocket.Chat
```

```text
sudo chown -R rocketchat:rocketchat /opt/Rocket.Chat
```

Start the service:

```text
sudo systemctl start rocketchat
```

Please also have a look at the installation documentation for your method of deployment to check for paragraphs that refer to the process of updating.

There might be some major changes when we introduce big new features or modifications, you can always take a look on the [releases page](https://github.com/RocketChat/Rocket.Chat/releases) to see what has been changed, broken or added to Rocket.Chat.

You can see older major changes here:

* [0.x.x to 0.40.0](from-0-x-x-to-0-40-0.md)

