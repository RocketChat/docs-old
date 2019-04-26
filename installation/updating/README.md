# Update

Usually you can update Rocket.Chat server pretty easily

## Docker installation

Just pull the new image.

## Snap installation

Refresh the snap.

## Manual installation

Stop Rocket.Chat service:

```
sudo systemctl stop rocketchat
```

Remove the installation folder, usually in /opt:

```
sudo rm -rf /opt/Rocket.Chat
```

Download Rocket.Chat latest version:

```
curl -L https://releases.rocket.chat/latest/download -o /tmp/rocket.chat.tgz
```

```

tar -xzf /tmp/rocket.chat.tgz -C /tmp

```

Install it and set right permissions to Rocket.Chat folder:

```
cd /tmp/bundle/programs/server && npm install
```

```
sudo mv /tmp/bundle /opt/Rocket.Chat
```

```
sudo chown -R rocketchat:rocketchat /opt/Rocket.Chat
```

Start the service:

```
sudo systemctl start rocketchat
```

Please also have a look at the installation documentation for your method of deployment to check for paragraphs that refers to installation.

There might be some major changes when we introduce big new features or modifications,
you can always take a look on the [releases page](https://github.com/RocketChat/Rocket.Chat/releases)
to see what has been changed, broken or added to Rocket.Chat.

You can see older major changes here:

- [0.x.x to 0.40.0](from-0-x-x-to-0-40-0/)
