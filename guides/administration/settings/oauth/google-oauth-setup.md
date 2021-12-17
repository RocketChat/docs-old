# Google OAuth Setup

Using Google OAuth requires you to fill in the `Google Id` and `Google Secret` of your Google OAuth app.

Follow these steps to enable Google OAuth on your server.&#x20;

* Go to the [Google Developer Console](https://console.developers.google.com), and create a new project if you don't have one yet

![](<../../../../.gitbook/assets/image (657) (1).png>)

* Next, navigate to **APIs and services** > **OAuth consent screen**

![](<../../../../.gitbook/assets/image (691) (1).png>)

* On the OAuth consent screen, set the required fields and specify the **App name** then hit **Save and Continue**

![](<../../../../.gitbook/assets/image (640) (1).png>)

* When you are done with creating the new app, head over to the dashboard where information of the app is displayed.

![](<../../../../.gitbook/assets/image (651).png>)

* To create the `OAuth client ID`, head over to the **credentials** tab and click the **CREATE CREDENTIALS**. A dropdown appears, select **OAuth Client ID**

![](<../../../../.gitbook/assets/image (652) (1).png>)

* Set the application type to **Web Application** then hit **CREATE**. This is so that they'll be possibility for a callback URL which is needed for the configuration.

![](<../../../../.gitbook/assets/image (650).png>)

* You are then provided with your client ID and secret.

![](<../../../../.gitbook/assets/image (642).png>)

* Copy these credentials from and fill them in the Google section of the OAuth configuration of your RocketChat server then hit **Save changes**

![](<../../../../.gitbook/assets/image (666) (1).png>)

When all is set, you will find on your login and register page a button for Google OAuth

![](<../../../../.gitbook/assets/image (680).png>)
