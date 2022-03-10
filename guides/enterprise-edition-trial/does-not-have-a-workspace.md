# Does not have a Workspace

If you do not have your workspace registered on the cloud already, you can get it set up and make use of the Enterprise Edition Trial.

* Go to [https://cloud.rocket.chat/trial/ee ](https://cloud.rocket.chat/trial/ee)and create a [Rocket.Chat cloud](../../rocket.chat-saas/cloud-account/) account or sign in if you already have one.

This guide proceeds with creating a new account

![](<../../.gitbook/assets/image (644) (1) (1).png>)

* Check your inbox for a link to create a workspace and apply the trial. Click or copy-paste the link in your browser to continue.

![](<../../.gitbook/assets/image (671) (1).png>)

* You are then redirected to the Rocket.Chat cloud portal. Since you don't have any workspce registered yes, the workspaces section will be empty and you will have the following options:

![](<../../.gitbook/assets/image (639) (1).png>)

1. **Install Rocket.Chat**: You can follow our guides on [installing your own Rocket.Chat instance](../../quick-start/installing-and-updating/).
2. **Launch a Cloud Workspace**: Get your workspace automatically launched on Rocket.Chat cloud.
3. **Register self-manage**: This lets you register your workspace if you have an instance setup already.

{% hint style="info" %}
The guide as follow will show the next steps to apply your EE trial license after having a workspace deployed.
{% endhint %}

* Click on **Register self-managed**

## Internet Access/Online

* A pop up is shown, **Copy the Token and Continue**

![](<../../.gitbook/assets/image (673) (1) (1).png>)

* After copying the token and head back to your server's **Administration** > **Admin Panel** > **Connectivity Services**  Click on the **Register Workspace**&#x20;

![](<../../.gitbook/assets/image (653).png>)

* You are prompted to enter your Cloud Console Token. Remember the token we copied above? Paste it in the Token field and then click **Connect**.

![](<../../.gitbook/assets/image (674) (1) (1).png>)

{% hint style="info" %}
We recommend you sync your server immediately after linking it to the cloud. To do that, head on to the **Connectivity Services** on your **Administration** panel and click on **Sync**.
{% endhint %}

![](<../../.gitbook/assets/image (658) (1).png>)

## No Internet Access/Offline

To connect with an air-gapped computer or a server without internet access, select the option and **Continue Offline**.

![](<../../.gitbook/assets/image (683) (1).png>)

* You see an interface prompting you to paste the code you copied from your Rocket.Chat self-managed workspace. Let's get the code now

![](<../../.gitbook/assets/image (670) (1) (1).png>)

* Back on your server, select the Register Offline option.&#x20;

![](<../../.gitbook/assets/image (660) (1) (1).png>)

* A popup appears with the code needed. Copy it and go back to the cloud portal.

![](<../../.gitbook/assets/image (615).png>)

* Paste the code there and click continue.

![](<../../.gitbook/assets/image (671) (1) (1) (1) (1) (1).png>)

You are then given another code to apply on your server. Copy that code, and go to your **Administration** panel, paste it there, and hit **Finish Registration.**

![](<../../.gitbook/assets/image (672) (1) (1) (1) (1) (1) (1) (1).png>)

Proceed to activate the license on the workspace

1. Sort out the instance you wish to apply the trial on and click on the Apply button at the extreme right.
2. Then click on **Apply Trial** to confirm the action.

![](<../../.gitbook/assets/image (663) (1).png>)

![](<../../.gitbook/assets/image (642) (1).png>)

Next, copy the code provided and head over to your workspace **Administration panel** > **Info** and click **Apply Offline License**.

![](<../../.gitbook/assets/image (656) (1) (1) (1).png>)

Paste the code in the License field provided then **Apply License**

![](<../../.gitbook/assets/image (655) (2).png>)

## Verify Active Workspace

* When all this is done, refresh the page, and you're able to see your workspace listed with the trial as **Active**.

![](<../../.gitbook/assets/image (652) (1).png>)

* Back on the info section of your **Administration** panel, you should see you're running an **Enterprise License**.

![](<../../.gitbook/assets/image (635).png>)
