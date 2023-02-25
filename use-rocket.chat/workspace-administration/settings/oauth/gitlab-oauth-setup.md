# GitLab OAuth Setup

Google OAuth requires you to fill in the Application **ID** and **Secret of** your GitLab OAuth app.

To enable **GitLab OAuth** on your workspace,

* Go to [GitLab Applications](https://gitlab.com/-/profile/applications).
* Fill in the Application **Name**, **redirect URI,** and **Scope**. Click **Save application.**
* After the application is created successfully, the OAuth credentials are displayed.
* Copy the **Application ID** and **Secret.**
* Navigate to **OAuth** settings (**Administration > Workspace > Settings> OAuth)** in your workspace.
* In the GitLab tab, fill in the **OAuth credentials** you copied earlier and toggle on **OAuth Enabled**.
* Click **Save Changes**. A **Sign in with GitLab** button appears on your workspace's login page. Users can now **sign in with GitLab** by clicking that button.
