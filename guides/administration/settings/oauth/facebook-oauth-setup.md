# Facebook OAuth Setup

To use Facebook OAuth on your server, you need a Facebook `App ID` and `Secret`.&#x20;

Follow these steps to enable Facebook OAuth on your server.&#x20;

* Login to your Facebook's [Developer account](http://developers.facebook.com) and navigate to **My Apps**

{% hint style="info" %}
You will be required to verify your account before proceeding if it is your first time accessing Facebook for developers.
{% endhint %}

* Click on **Create App** to create a new app

![](<../../../../.gitbook/assets/image (687) (1) (1).png>)

* Select the app type from the list of options and **Next**

![](<../../../../.gitbook/assets/image (691).png>)

* Fill in the details and **Create App**

![](<../../../../.gitbook/assets/image (684).png>)

* You are then shown a dashboard with various apps to be used. Locate and click **Set Up** against Facebook Login

![](<../../../../.gitbook/assets/image (640).png>)

* Select **Web** as the platform for the app and continue

![](<../../../../.gitbook/assets/image (644) (1) (1).png>)

* Set the redirect URI go to the **Facebook Login** > **Settings** section and paste the redirect URI in the **Valid OAuth Redirect URIs** field

![](<../../../../.gitbook/assets/image (660).png>)

* With your newly created app selected, navigate to the **Settings** > **Basic** section to see your OAuth credentials

![](<../../../../.gitbook/assets/image (662) (1) (1).png>)

* To be able to use OAuth login, you need to turn off app in development mode&#x20;

![](<../../../../.gitbook/assets/image (664) (1).png>)

* Copy the credentials and fill them in the Google section of the OAuth configuration on your RocketChat server then hit **Save changes**

![](<../../../../.gitbook/assets/image (686) (1) (1).png>)

* The Facebook OAuth button can now be seen on the login and register page

![](<../../../../.gitbook/assets/image (666) (1).png>)
