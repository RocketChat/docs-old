# Facebook OAuth Setup

Facebook OAuth requires you to fill in a Facebook `App Id` and `Secret.`

To enable **Facebook OAuth** on your workspace,

* Login to your Facebook [Developer account](http://developers.facebook.com) and navigate to **My Apps.**
* Click on **Create App.** Select the app type from the list of options and **Next.**
* Fill in the required details, then click **Create App.**
* A dashboard with various app products is displayed. Click **Set Up** under **Facebook Login.**
* Select **Web** as the platform for the app.
* Go to **Facebook Login** > **Settings** page. Fill in the **Valid OAuth Redirect URIs** field with your workspace **callback URL**. Click **Save Changes**.
* To view the OAuth credentials in your app, select **Settings** > **Basic**. Copy your **App ID** and **App Secret**.
* Switch the **App mode** from **Development** to **Live.**
* Navigate to OAuth settings (**Administration > Workspace > Settings> OAuth)** in your workspace.
* In the **Facebook** tab, fill in the OAuth credentials you copied earlier and toggle on **Facebook Login**.
* Click **Save Changes**. A **Sign in with Facebook** button appears on your workspace's login page. Users can now **sign in with Facebook** by clicking that button.
