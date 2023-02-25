# Offline Workspace Registration

You can follow this guide to register your air-gapped or workspaces without internet access.

{% hint style="info" %}
If you use a workspace accessible through the internet, you can follow [this guide](https://docs.rocket.chat/guides/administration/admin-panel/connectivity-services#registration-steps) on how to set it up.
{% endhint %}

* Accept the cloud privacy terms at **Administration** > **Workspace** > **Settings** > **Setup Wizard** > **Cloud Info** > **Cloud Service Privacy Terms Agreement** on your Rocket.Chat server
* Navigate to **Administration** > **Workspace** > **Connectivity Services** and click **Register Offline** as shown below

<figure><img src="../../.gitbook/assets/Connectivity Services Offline.png" alt=""><figcaption><p>Connectivity Services Offline</p></figcaption></figure>

* A pop-up appears. Copy the code provided and move on to the next step

<figure><img src="../../.gitbook/assets/Offline code.png" alt=""><figcaption><p>Offline code</p></figcaption></figure>

* Head over and create an account or login into your [Rocket.Chat cloud portal](https://cloud.rocket.chat)
* When logged in, click on **Register self-managed** to register a new workspace
* Select the option to **Continue Offline** if you are running an air-gapped workspace or your server doesn't have an internet connection

![](<../../.gitbook/assets/image (693) (1) (1).png>)

* Paste the code you copied earlier from Connectivity Services in your Rocket.Chat workspace and hit **Continue** to proceed

![](<../../.gitbook/assets/image (662) (1).png>)

* You are provided with another code from the cloud portal. Copy the code and go back to your local workspace

![](<../../.gitbook/assets/image (668) (2).png>)

* On your local workspace, paste the code you got from the cloud portal and **Finish Registration**

![](<../../.gitbook/assets/image (686) (1).png>)

{% hint style="success" %}
With that done, you have successfully registered your workspace.
{% endhint %}
