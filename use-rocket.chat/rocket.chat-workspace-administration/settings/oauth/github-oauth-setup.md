# GitHub OAuth Setup

GitHub OAuth requires you to fill in the GitHub **Client ID** and **Secret**`.`

To enable **GitHub OAuth** on your workspace,

* Go to your [GitHub Developers Settings](https://github.com/settings/developers).
* Navigate to **OAuth Apps** and click  **New OAuth App**.
* Fill in the required information, including the **callback URL**, and click **Register application.**

{% hint style="warning" %}
If your callback URL is wrong, GitHub does not display any error. Instead of logging in, you receive an error message saying, "No matching login attempt found."
{% endhint %}

* Your **Client Id** and a button to **Generate a new client secret** are now displayed. Click the button to generate a new client secret for your OAuth credentials.&#x20;
* Copy the **Application ID** and **Secret.**
* Navigate to **OAuth** settings (**Administration > Workspace > Settings> OAuth)** in your workspace.
* In the **GitHub Enterprise** tab, fill in the **OAuth credentials** you copied earlier and toggle on **OAuth Enabled**.
* Click **Save Changes**. A **Sign in with GitHub** button appears on your workspace's login page. Users can now **sign in with GitHub** by clicking that button.
