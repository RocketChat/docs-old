# WordPress OAuth Setup

The easiest way to configure Rocket.Chat using WordPress as your identity backend is to use the [MiniOrange OAuth Plugin](https://wordpress.org/plugins/miniorange-oauth-20-server/) (Version 2.5.6 or higher)

To enable **WordPress OAuth** on your workspace,

* Log into your WordPress site as an administrator and navigate to **Plugins**. Click **Add New**.
* Search for "**MiniOrange OAuth Server**."
* Install and activate the **WP OAuth Server ( OAuth Provider )** plugin.
* Navigate to the `MiniOrange oAuth Server` . Click **Add client** (Red).
* Fill in the required information, including the **Callback URL**, and click **Save client**.
* Copy your **Client ID** and **Secret**.
* From the **Endpoints** tab, copy the **Authorize Endpoint**, **Access Token Endpoint**, and **Get User Info Endpoint**.
* Navigate to **OAuth** settings (**Administration > Workspace > Settings> OAuth)** in your workspace.
* In the **WordPress** tab, configure the **OAuth credentials** you copied earlier in this manner:

<details>

<summary>WordPress OAuth Configuration</summary>

* WordPress Login => true
* **URL** = `https://your.domain.com` (omit any trailing “/”).
* **Id** = Client ID
* **Secret** = Client Secret
* **Identity Path** = Get User Info Endpoint
* **Identity Token Sent Via** = Payload
* **Token Path** = Access Token Endpoint
* **Authorize Path** = Authorize Endpoint
* **Scope** = Profile

</details>

* Click **Save Changes**. A **Sign in with WordPress** button appears on your workspace's login page. Users can now **sign in with WordPress** by clicking that button.

{% hint style="info" %}
For button customization, your inputted button text won't be displayed.  However, the app will display your custom OAuth name at the top.
{% endhint %}

### Troubleshooting WordPress OAuth

Whenever you have an issue with OAuth in WordPress, enable **Level 2 Logging** to view your logs.

* Go to **Administration > Logs > Log Level > View Logs.** &#x20;
* While monitoring the log, open the login screen in an incognito browser and attempt a login.
* The log displays the OAuth response in real time, which provides helpful troubleshooting information.

Visit this [forum ](https://wordpress.org/support/topic/rocketchat-wordpress-the-redirect-uri-provided-is-missing-or-does-not-match/)for more information on troubleshooting for "**The redirect URI provided is missing or does not match."**
