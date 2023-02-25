# NextCloud OAuth Setup

NextCloud OAuth requires you to fill in the NextCloud **Client ID** and **Secret**`.`

To enable **NextCloud OAuth** on your workspace,

* Login to your Nextcloud server as admin
* Go to **Settings** > **Administration** > **Workspace** > **Security.**
* Locate the OAuth 2.0 clients section.
* Fill in the **client name** and the **redirect URL**. Click **Add.**
* Copy the **Client ID** and **Secret** from the new OAuth App.
* Navigate to **OAuth** settings (**Administration > Workspace > Settings> OAuth)** in your workspace.
* In the **NextCloud** tab, fill in the **OAuth credentials** you copied earlier and toggle on **OAuth Enabled.**
* Click **Save Changes**. A **Sign in with NextCloud** button appears on your workspace's login page. Users can now **sign in with NextCloud** by clicking that button.
