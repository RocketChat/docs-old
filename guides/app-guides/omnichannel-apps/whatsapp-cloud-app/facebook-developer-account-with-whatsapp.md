# Facebook Developer Account with WhatsApp

Meta provides a set of developer tools through their [Facebook Developer's](http://developers.facebook.com/) portal to easily build around the Meta ecosystem.

In this guide, we are going to see how to create a Facebook Developer's Account and configure a new App for WhatsApp communication

* Login to your Facebook's [Developer account](http://developers.facebook.com) and navigate to **My Apps**

{% hint style="info" %}
You will be required to verify your account before proceeding if it is your first time accessing Facebook for developers.
{% endhint %}

* Click on **Create App** to create a new app

<figure><img src="../../../../.gitbook/assets/Facebook Developer Create App.png" alt=""><figcaption><p>Facebook Developer Create App</p></figcaption></figure>

* Select Business as the App type and fill in the details

&#x20;

<figure><img src="../../../../.gitbook/assets/Facebook Developers new app.png" alt=""><figcaption><p>Facebook Developers new app</p></figcaption></figure>

* Details
  * **App name**: The name you want to call your app
  * **Contact address**: Your email to use when contacting you
  * **Business Account**: Select a business account if you have one. A new account can be created automatically if none is selected
* On your dashboard, scroll down and click on **Setup** against WhatsApp in the list of products to add displayed

<figure><img src="../../../../.gitbook/assets/Facebook Developer WhatsApp setup.png" alt=""><figcaption><p>Facebook Developer WhatsApp setup</p></figcaption></figure>

* A WhatsApp section is added to the left panel of your Facebook Developer's dashboard
* Navigate to **WhatsApp** > **Getting Started** you see a set of credentials that we will use latter in [setting up the WhatsApp Cloud App in Rocket.Chat](whatsapp-cloud-app-configuration.md)
* Verify any existing WhatsApp number to receive messages while in Test Mode

<figure><img src="../../../../.gitbook/assets/Facebook Developer WhatsApp credentials.png" alt=""><figcaption><p>Facebook Developer WhatsApp credentials</p></figcaption></figure>

{% hint style="info" %}
The access token provided is temporary, see [this thread](https://stackoverflow.com/questions/72685327/how-to-get-permanent-token-for-using-whatsapp-cloud-api) on how to create a permanent token.
{% endhint %}

### Adding WhatsApp Business phone number to Facebook app

To link your Original WhatsApp Business number to the App,

* Navigate to **WhatsApp** > **Getting Started** and click on **Add phone number**

<figure><img src="../../../../.gitbook/assets/Adding WhatsApp phone number to Facebook App.png" alt=""><figcaption><p>Adding WhatsApp phone number to Facebook App</p></figcaption></figure>

See more details on how to add a WhatsApp production number here

{% embed url="https://developers.facebook.com/docs/whatsapp/cloud-api/get-started/add-a-phone-number/" %}

{% embed url="https://youtu.be/CEt_KMMv3V8?t=388" %}
