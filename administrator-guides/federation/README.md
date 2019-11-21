# Federation

## Introduction

Rocket.Chat Federation allows servers to communicate with each other, with no limits to the number of servers connected.

We use industry standards, like DNS records, to keep the process as seamless as possible, and seek the most hassle-free communication between servers.

When enabling federation on your server, your server becomes part of the Rocket.Chat Federated Network, which allows it to find and exchange messages and files with other Federation-enabled Rocket.Chat servers.

## Features

- **Current**
    - Invite users from remote servers
    - Direct chats between servers
    - Public, private and broadcast rooms with remote users from any number of servers
    - Read receipts, notifications and alerts distributed to remote servers
    - Mute/Unmute remote users
    - Share files among servers
- **Confirmed Next Features**
    - Encrypted rooms
    - Whitelist servers to communicate with
    - Better federation set-up process, with helpers to validate the configuration

## Configuration

When you open the Federation config screen, this is what you see:

![Initial Federation Screen](./initial.png)

The following is a brief explanation of each configuration option:

### Enabled

It determines whether or not Federation is enabled on this server.

### Status

It is the current Federation status, which can be one of the following:

- **Could not enable, settings are not fully set :** make sure all the options are correctly filled and saved
- **Booting... :** the federation is initializing
- _[HUB Only]_ **Registering with Hub... :** the federation is trying to register with the Hub
- _[HUB Only]_ **Disabled, could not register with Hub :** the federation could not register with the Hub
- **Disabled :** the federation is disabled
- **Running :** the federation is running and ready to communicate with other servers

### Domain

Fill this option with your domain name, usually the one that hosts the Rocket.Chat.

### Public Key

All Federation communications are double-encrypted, which means messages cannot be delivered by mistake to a wrong peer. This is your public key, which is specially generated for Rocket.Chat and by Rocket.Chat, and is shared with peers you communicate with.

The encryption process encrypts the message using the Server A private key, and the Server B public key.

When a server receives the message, it uses the Server B private key and the Server A public key to decrypt it.

So, let's say the message ended up on Server C: this server won't have Server B private key to decrypt it, so the message can't be read at all.

### Hub URL

This usually remains as is. This is the Hub URL, where your server will register and confirm domain ownership if you are not using DNS discovery method.

### Discovery Method

How are you going to be found in the Rocket.Chat Federated Network? You can choose through DNS or, as a fallback, the Rocket.Chat Hub.

**Important:** We recommend using the DNS method. The Hub is a tool to allow users to easily adopt, try and validate the feature or as a different way to be part of the Rocket.Chat Federated Network until DNS record changes are made. Also, the Hub requires external communication and access to a specific e-mail address owned by your domain, as explained below, which introduces extra configuration steps in some protected internal networks.

## Adding Federation to your Server

You have two ways to add your server to the Rocket.Chat Federated Network:

### Recommended: Configure your DNS

To add your server to the Federated Network using the DNS, fill all the configuration fields required. Make sure to pick `true` on the `Enabled`, and select **DNS** as your `Discovery Method` option, save and follow the guide below.

Let's suppose we have a domain named `mydomain.com`, and my Rocket.Chat server is hosted at `chat.mydomain.com`, port `80`.

You must add two DNS records:

#### SRV Record

- Service: `_rocketchat`
- Protocol: `_tcp`
- Name: `mydomain.com`
- Weight: `1`
- Priority: `1`
- TTL: `1 hour`
- Target: `chat.mydomain.com`
- Port: `80`

In Amazon Route 53, it would look something like this:
![image](https://user-images.githubusercontent.com/51996/53998274-c1496c80-4104-11e9-8571-3288fc7b2cc8.png)

#### Public Key TXT Record

- Host: `rocketchat-public-key.mydomain.com`
- Value: `<my public key, as shown on the configuration screen>`

**Note**: Some DNS providers do not allow to enter the full public key string. So, after saving, make sure the string is complete: it  starts as `-----BEGIN PUBLIC KEY-----` and ends as `-----END PUBLIC KEY-----`. If that is not the case, follow your provider's instructions. For example, AWS Route 53 needs to split the string in two pieces, as follows:

```
"-----BEGIN PUBLIC KEY-----...."
"...-----END PUBLIC KEY-----"
```

#### Optional: Protocol TXT Record

We recommend to use `HTTPS` for all kinds of communications, but sometimes that is not possible. If you need, add a `rocketchat-protocol` entry with the desired protocol, `http` or `https`.

- Host: `rocketchat-protocol.mydomain.com`
- Value: `http`

#### Conclusion

When at least the SRV and the Public Key TXT records are added to the DNS records, other peers should be able to find you after the propagation.

### Alternative: Register on Hub

To add your server to the Federated Network using the Hub, fill all the configuration fields needed. Make sure to pick **true** on the `Enabled` field), pick the **Hub** as your `Discovery Method` option, save and follow the guide below.

#### Confirm Domain Ownership

When you click **Save** on the Federation config screen, you begin your registration process. This process takes a few seconds and if you are not yet registered to the Hub, you should receive an email at `webmaster@mydomain.com`, where `mydomain.com` is the domain address you configured on the `Domain` field.

Make sure the data is correct and confirm the changes.

After that step, other peers should be able to find you in the Rocket.Chat Federated Network.

## Using Rocket.Chat Federation

Click [here](../../user-guides/talking-to-users-from-another-server/) to learn how to use Rocket.Chat Federation.
