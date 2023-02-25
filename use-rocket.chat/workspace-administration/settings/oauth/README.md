# OAuth

Beyond the basic username/password authentication, Rocket.Chat supports several other authentication methods.  These OAuth methods mostly require a **client ID** and a **secret**.

**To set up your desired OAuth method**,&#x20;

* Navigate to **Administration > Workspace > Settings> OAuth.**

You can view a list of some OAuth methods that are supported by Rocket.Chat, including Google, Github, LinkedIn, etc.

## Add Custom OAuth

To add a **custom OAuth**,

* Click **Add custom OAuth.**
* Give a unique name for your custom OAuth.
* Click **Add.**
*   When configuring your OAuth Provider, you must include a Callback URL. Use&#x20;

    ```
    https://yourcompany.rocket.chat/_oauth/customoauth
    ```

## Refresh OAuth Services

To update the options shown on your workspace login page based on your saved settings, click **Refresh OAuth Services.**
