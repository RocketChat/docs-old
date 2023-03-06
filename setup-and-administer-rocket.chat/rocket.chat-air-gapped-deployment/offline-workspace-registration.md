---
description: Register your air-gapped or  workspaces without internet access.
---

# Offline Workspace Registration

{% hint style="info" %}
If you use a workspace accessible through the internet, you can follow [this guide](https://docs.rocket.chat/guides/administration/admin-panel/connectivity-services#registration-steps) on how to set it up.
{% endhint %}

To register a workspace without internet access,

* Navigate to **Administration** > **Workspace** > **Settings** > **Setup Wizard** > **Cloud Info** and enable **Cloud Service Privacy Terms Agreement.**  Enabling it **** means you agree with the [Terms](https://rocket.chat/terms) & [Privacy Policy](https://rocket.chat/privacy).
* Navigate to **Administration** > **Workspace** > **Connectivity Services** and click **Register Offline**.
* Copy the code snippet that is displayed on the pop-up box.
* Create an account or login into your [Rocket.Chat cloud portal](https://cloud.rocket.chat).
* Then, click on **Register self-managed** to register a new workspace.
* Click  **Continue Offline** if you are running an air-gapped workspace or your server has no internet connection.
* Paste the code you copied earlier from **Connectivity Services** and click **Continue.**
* You are provided with another code from the cloud portal. Copy the code and go back to your local workspace.
* On your local workspace, paste the code you got from the cloud portal and click **Finish Registration.**

{% hint style="success" %}
With that done, you have successfully registered your workspace.
{% endhint %}
