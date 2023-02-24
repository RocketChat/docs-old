# WhatsApp Cloud App Configuration

With the WhatsApp Cloud App installed on your public Rocket.Chat workspace and the Facebook Developer App Created for WhatsApp, you can now:

* [Connect WhatsApp number](whatsapp-cloud-app-configuration.md#connect-whatsapp-number)
* [Edit WhatsApp numbers](whatsapp-cloud-app-configuration.md#whatsapp-cloud-app-shortcuts-1)
* [Disconnect WhatsApp number](whatsapp-cloud-app-configuration.md#undefined)

## WhatsApp Cloud App Shortcuts

The WhatsApp Cloud app has a list of shortcuts to ease usage. Use the slash command `/whatsapp help` to see the list of shortcuts and their functions

* &#x20;**/whatsapp connect:** to connect a new WhatsApp number
* **/whatsapp numbers:** to view and edit all connected WhatsApp number
* **/whatsapp support:** Get support information
* **/whatsapp help:** to see this shortcut menu

## Connect WhatsApp Number

{% hint style="success" %}
You can add as many WhatsApp number connected to a Facebook app as you wish.
{% endhint %}

* Click on **Connect WhatsApp Number** on the first message sent by the `whatsapp-cloud.bot` or use the slash command `/whatsapp connect`

<figure><img src="../../../../../.gitbook/assets/Connect WhatsApp Number.png" alt=""><figcaption><p>Connect WhatsApp Number</p></figcaption></figure>

* A modal opens up with details to be filled

<figure><img src="../../../../../.gitbook/assets/Connect new WhatsApp number.png" alt=""><figcaption><p>Connect new WhatsApp number </p></figcaption></figure>

* Head over to your [Facebook Developer Account](https://developers.facebook.com/) and get the details from the app we created above then **Conect**
  * **PhoneNo Id**: The WhatsApp phone number ID you want to connect
  * **WhatsApp Business Id**: The WhatsApp Business Account ID of the WhatsApp number to connect
  * **Access Token**: The App's access token, it can be either temporary or permanent
  * **Facebook App Secret**: The Facebook App's secrete. This secret is used to verify if the messages are sent from authorized WhatsApp servers
  * **Welcome Message**: First message your customer will receive upon messaging you
  * **Conversation Finished Message**: Message sent to your customer when an agent closes the conversation
  * **Default message for offline service**: Message sent to your customer when no agents are available online

<figure><img src="../../../../../.gitbook/assets/Facebook app credentials.png" alt=""><figcaption><p>Facebook app credentials</p></figcaption></figure>

### Setup Facebook app webhook url

* After saving, you receive a message to configure the callback url in you app.

{% hint style="info" %}
This is a one-time process.
{% endhint %}

<figure><img src="../../../../../.gitbook/assets/Configure Facebook App webhook.png" alt=""><figcaption><p>Configure Facebook App webhook</p></figcaption></figure>

* Go to your the App created on your [Facebook Developer Console ](https://developers.facebook.com/apps)
* Navigate to **WhatsApp** > **Configuration** and paste the callback URL and Verify Token provided by Rocket.Chat then **Verify and save**

<figure><img src="../../../../../.gitbook/assets/Set Facebook app callback URL.png" alt=""><figcaption><p>Set Facebook app callback URL</p></figcaption></figure>

* Still on the configuration page, click on **Manage** across the Webhook fields

<figure><img src="../../../../../.gitbook/assets/Manage Facebook app webhook fields.png" alt=""><figcaption><p>Manage Facebook app webhook fields</p></figcaption></figure>

* **Subscribe** to `messages` and **Done**

<figure><img src="../../../../../.gitbook/assets/Subscribe to Messages webhook Facebook app.png" alt=""><figcaption><p>Subscribe to Messages webhook Facebook app</p></figcaption></figure>

{% hint style="success" %}
After subscribing to the messages, the Rocket.Chat WhatsApp Cloud app is ready to use.
{% endhint %}

## Edit WhatsApp Cloud Number

To edit an already set WhatsApp number,

* Type the slash command `/whatsapp numbers`&#x20;
* A list of connected numbers are shown. Click on **Edit** across the number you wish to edit

<figure><img src="../../../../../.gitbook/assets/Edit WhatsApp number.png" alt=""><figcaption><p>Edit WhatsApp Cloud number</p></figcaption></figure>

* Make the necessary changes and **Update**

## Disconnect WhatsApp Number

To disconnect a WhatsApp number,

* Type the slash command `/whatsapp numbers`&#x20;
* A list of connected numbers are shown. Click on **Disconnect** across the number you wish to disconnect
* Confirm the prompt to **Disconnect**

<figure><img src="../../../../../.gitbook/assets/Disconnect WhatsApp number.png" alt=""><figcaption><p>Disconnect WhatsApp number</p></figcaption></figure>

* You get a message notifying about the disconnection