# GitHub OAuth Setup

Using GitHub OAuth requires you to fill in the GitHub `Client Id` and GitHub `Secret`

Follow these steps to enable GitHub OAuth on your server.&#x20;

* Go to your [GitHub Developers Settings](https://github.com/settings/developers)
* Navigate to **OAuth Apps** and click on **Register a new application**

![](<../../../../.gitbook/assets/image (690).png>)

* Fill in the required information and hit **Register application**

{% hint style="warning" %}
If your callback URL is wrong, GitHub does not display any error. Instead of logging in, you receive an error message saying, "No matching login attempt found."
{% endhint %}

![](<../../../../.gitbook/assets/image (692).png>)

* After creating your app, a screen is shown with your `client id` and a button you can use to generate you apps `secret`

![](<../../../../.gitbook/assets/image (688).png>)

* Click and confirm access to generate a new secret which you will use in setting up the OAuth

![](<../../../../.gitbook/assets/image (634).png>)

* After creating your new GiHub OAuth app, copy the `Client Id` and `Secrete` provided
* Head over to the GitHub OAuth section on your Rocket.Chat server by navigating to **Administration** > **Settings** > **OAuth**&#x20;

![](<../../../../.gitbook/assets/image (671).png>)

* Enable GitHub OAuth, fill in the credentials and hit **Save Changes** to commit
*

![](<../../../../.gitbook/assets/image (687) (1) (1).png>)

After saving, you will find the GitHub OAuth button on the login and register page

![](<../../../../.gitbook/assets/image (649) (1).png>)

To register with GitHub, just click the button and accept access.

![](<../../../../.gitbook/assets/image (643) (1).png>)
