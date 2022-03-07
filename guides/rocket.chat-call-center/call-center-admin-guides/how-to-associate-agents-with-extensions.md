# How to associate agents with extensions?

As a Rocket.Chat administrator, you can associate one agent with one extension. This extension can be part of multiple queues.

**An extension is simply a named set of actions in Asterisk. Asterisk will perform each action, in sequence, when that extension number is dialled**.&#x20;

Extensions in Asterisk are assigned to queues. The extensions and queues are both created and managed in Asterisk by the Asterisk manager. An agent needs to associate with one of these extensions to be able to take calls in a queue. You, as a Rocket.Chat admin can take one of these extensions and associate it with an agent.

{% hint style="info" %}
Both extensions and queues are managed in Asterisk by the _Asterisk manager_.
{% endhint %}

To associate and an agent to an extension:

* Go to **Avatar Menu > Administration > Settings**&#x20;
* Search **Call Center**
* Click open the **Extension** tab&#x20;
* Click **Associate Agent**
* Select the agent name and associate it with a free extension, as shown below:

![Agent to extension association](<../../../.gitbook/assets/image (654) (1).png>)

![Agent associated with the extension](<../../../.gitbook/assets/image (655) (1).png>)

Following are important points to know:

* An extension becomes unavailable after it has been associated with an agent.&#x20;
* An extension can be associated with multiple queues.&#x20;

{% hint style="info" %}
Extensions and agents have a one-to-one relationship.

Extension and queue have a one-to-many relationship.
{% endhint %}

Once this call center agent makes themselves available for VoIP, the incoming calls in that queue will be forwarded to them based on the routing system configured in Asterisk.

{% hint style="info" %}
Please note that to reduce the scope of this project, the only available administration feature is the ability to connect Rocket.Chat Agent with the existing Asterisk extensions. In future releases, you'll be able to create new extensions and queues from Rocket.Chat, and many other cool administration capabilities will roll out. 😀
{% endhint %}
