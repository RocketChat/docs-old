# Omnichannel Contact Manager

​![](https://files.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-M418Ul0aSTwf2PYsyPW%2Fsync%2F1654b99a4e9df54521f42da4d3c1a7fbdb9f2238.jpg?generation=1633366358329646\&alt=media)

​This feature lets you assign an Omnichannel contact/visitor to be managed by a dedicated Omnichannel agent.

If this contact initiates a conversation and the dedicated agent is **available**, the chat is routed directly to them. Otherwise to any other agent based on the routing algorithm selected.

## **To set a contact manager for a visitor/contact:**

{% hint style="info" %}
To get this functional, you need to enable **Assign new conversations to the contact manager** by changing the setting under **Administration** -> **Workspace** -> **Settings** -> **Omnichannel** -> **Routing**
{% endhint %}

### Using UI

You can set a contact manager for a visitor/contact using the contact center while creating or editing a contact.

![Set Omnichannel contact manager](<../../../../.gitbook/assets/Set Omnichannel contact manager>)

### Using API Endpoint

You can set a contact manager for a visitor/contact using

{% embed url="https://developer.rocket.chat/reference/api/rest-api/endpoints/omnichannel/livechat-endpoints/livechat-contact/register-omnichannel-contact" %}
