# Apply Offline License

You can follow this guide to apply for the offline license on your air-gapped or workspaces without internet access.

{% hint style="info" %}
If you use a workspace accessible through the internet, you can follow [this guide](https://docs.rocket.chat/guides/administration/admin-panel/connectivity-services#registration-steps) on how to set it up.
{% endhint %}

* After accepting the cloud privacy terms at (**Setup Wizard** > **Cloud Info** > **Cloud Service Privacy Terms Agreement**) on your Rocket.Chat server.
* Navigate to **Administration** > **Connectivity Services** and click **Register Offline** as shown below.
* A pop-up appears. Copy the code provided and move on to the next step.
* Head over and create an account or login into your [Rocket.Chat cloud portal](https://cloud.rocket.chat)
* When logged in, click on **Register self-managed** to register a new workspace.
* Select the option to **Continue Offline** if you are running an air-gapped workspace or your server doesn't have an internet connection.

![](<../../../../.gitbook/assets/image (693) (1) (1).png>)

* Paste the code you copied earlier from Connectivity Services in your Rocket.Chat workspace and hit **Continue** to proceed.

![](<../../../../.gitbook/assets/image (662) (1).png>)

* You receive another code from the cloud portal. Copy the code and go back to your local workspace

![](<../../../../.gitbook/assets/image (668) (2).png>)

* On your local workspace, paste the code you got from the cloud portal and **Finish Registration.**

![](<../../../../.gitbook/assets/image (686) (1).png>)

{% hint style="info" %}
We recommend you sync your server immediately after linking it to the cloud. To do that,   go to the **Connectivity Services** on your **Administration** panel and click on **Sync**.
{% endhint %}

![](<../../../../.gitbook/assets/image (649) (1).png>)

With that done, you have successfully applied for an Offline license on your server.
