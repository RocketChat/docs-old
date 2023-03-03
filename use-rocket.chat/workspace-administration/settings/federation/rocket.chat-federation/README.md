# Rocket.Chat Federation

{% hint style="warning" %}
![](<../../../../../.gitbook/assets/Deprecated (1).png>) Rocket.Chat Federation is deprecated as from Rocket.Chat `6.0`. We recommend federating using [Matrix Bridge](../../../../rocket.chat-workspace-administration/settings/federation/matrix-bridge/).
{% endhint %}

Rocket.Chat Federation lets your server becomes part of the Rocket.Chat Federated Network. This makes your server visible and can be found over the network, and messages, files can be exchanged with other Federation-enabled Rocket.Chat servers.

Rocket.Chat uses industry standards, like DNS records, to keep the process seamless and seek the most hassle-free communication between servers.

## Configuration

The following configurations can be done

* **Enabled**: It determines whether or not Federation is enabled on this server.
* **Status**: It is the current Federation status, which can be one of the following:
  * **Could not enable, settings are not fully set:** make sure all the options are correctly filled and saved
  * **Booting:** the federation is initializing
  * _\[HUB Only]_ **Registering with Hub:** the federation is trying to register with the Hub
  * _\[HUB Only]_ **Disabled, could not register with Hub:** the federation could not register with the Hub
  * **Disabled:** the federation is disabled
  * **Running:** the federation is running and ready to communicate with other servers
* **Domain**: Fill this option with your domain name, usually the one that hosts the Rocket.Chat.
* **Public Key**: All Federation communications are double-encrypted, which means messages cannot be delivered by mistake to the wrong peer. This is your public key, which is specially generated for Rocket.Chat and by Rocket.Chat, and is shared with peers you communicate with.\
  The encryption process encrypts the message using the Server A private key, and the Server B public key.\
  When a server receives the message, it uses the Server B private key and the Server A public key to decrypt it.\
  So, let's say the message ended up on Server C: this server won't have Server B private key to decrypt it, so the message can't be read at all.
* **Discovery Method**: How are you going to be found in the Rocket.Chat Federated Network? You can choose through DNS or, as a fallback, the Rocket.Chat Hub.\
  **Important:** We recommend using the DNS method. The Hub is a tool to allow users to easily adapt, try, and validate the feature or as a different way to be part of the Rocket.Chat Federated Network until DNS record changes are made. Also, the Hub requires external communication and access to a specific e-mail address owned by your domain, as explained below, which introduces extra configuration steps in some protected internal networks.

## Adding Federation to your Server

You have two ways to add your server to the Rocket.Chat Federated Network:

### Recommended: Configure your DNS

To add your server to the Federated Network using the DNS, fill in all the configuration fields required. Make sure to pick `true` on the `Enabled`, and select **DNS** as your `Discovery Method` option, save, and follow the guide below.

Let's suppose we have a domain named `mydomain.com`, and my Rocket.Chat server is hosted at `mydomain.com`, port `443`.

You must add two DNS records:

#### SRV Record (2.0.0 or newer)

* Service: `_rocketchat`
* Protocol: `_https`
* Name: `mydomain.com`
* Weight: `1`
* Priority: `1`
* TTL: `1 hour`
* Target: `mydomain.com`
* Port: `443`

#### Public Key TXT Record

* Host: `rocketchat-public-key.mydomain.com`
* Value: `<my public key, as shown on the configuration screen>`

**Note**: Some DNS providers do not allow entering the full public key string. So, after saving, make sure the string is complete: it starts as `-----BEGIN PUBLIC KEY-----` and ends as `-----END PUBLIC KEY-----`. If that is not the case, follow your provider's instructions. For example, AWS Route 53 needs to split the string in two pieces, as follows:

```
"-----BEGIN PUBLIC KEY-----...."
"...-----END PUBLIC KEY-----"
```

#### If you use http instead of https

We recommend using `HTTPS` for all kinds of communications, but sometimes that is not possible. If you need, in the SRV DNS entry replace:

* the protocol: change `_https` to `_http`
* the port: change `443` to `80`

#### Legacy Support: If your DNS provider does not support SRV records with `_http` or `_https`

Some DNS providers will not allow setting `_https` or `_http` on SRV records, so we have support for those cases, using our old DNS record resolution method.

#### Legacy Support: SRV Record

* Service: `_rocketchat`
* Protocol: `_tcp`
* Name: `mydomain.com`
* Weight: `1`
* Priority: `1`
* TTL: `1 hour`
* Target: `mydomain.com`
* Port: `443`

#### Legacy Support: protocol TXT Record (if not provided, HTTPS will be used)

* Host: `rocketchat-tcp-protocol.mydomain.com`
* Value: `https` or `http`

#### Test your configuration from CLI

From your CLI, issue the following commands and make sure the answers look like the following:

```
dig srv _rocketchat._https.mydomain.com
...
;; ANSWER SECTION:
_rocketchat._https.mydomain.com. 1800 IN SRV    1 1 443 mydomain.com.
...

dig -t txt rocketchat-public-key.mydomain.com
...
;; ANSWER SECTION:
rocketchat-public-key.mydomain.com. 1799 IN TXT "-----BEGIN PUBLIC KEY----- THEPUBLICKEY :) -----END PUBLIC KEY-----"
...
```

#### Conclusion

When the SRV and the Public Key TXT records are added to the DNS records, other peers should be able to find you after the propagation.

### Alternative: Register on Hub

To add your server to the Federated Network using the Hub, fill in all the configuration fields needed. Make sure to pick **true** on the `Enabled` field), pick the **Hub** as your `Discovery Method` option, save, and follow the guide below.

#### Confirm Domain Ownership

When you click **Save** on the Federation config screen, you begin your registration process. This process takes a few seconds, and if you are not yet registered to the Hub, you should receive an email at `webmaster@mydomain.com`, where `mydomain.com` is the domain address you configured on the `Domain` field.

Make sure the data is correct and confirm the changes.

After that step, other peers should be able to find you in the Rocket.Chat Federated Network.

## Using Rocket.Chat Federation

Click [here](../../../../rocket.chat-federation/talking-to-users-from-another-server.md) to learn how to use Rocket.Chat Federation.
