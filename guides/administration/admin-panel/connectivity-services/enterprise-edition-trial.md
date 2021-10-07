# Enterprise Edition Trial

## Introduction

This procedure explains how to connect your Rocket.Chat instance for the 30 days Enterprise Trial.

Assuming you have your Rocket.Chat server running following any of our guides on [Installing and Updating](../../../../quick-start/installing-and-updating/), the following steps will get you up with linking your workspace to the Cloud Enterprise Edition Trial\(CEET\).

{% hint style="success" %}
This tutorial is done with a local instance of the server running on [http://localhost:3000](http://localhost:3000/).
{% endhint %}

## Steps

### Server Setup

Do the following on your Rocket.Chat server to be able to connect to the CEET.

1. From the Administration panel, navigate or search for **Setup Wizard** and accept the **Cloud Service Privacy Terms Agreement** and hit **Save changes**.

![](../../../../.gitbook/assets/image%20%28601%29.png)

2. Head to **Connectivity Services** next and select whether to register Offline or with the Cloud console.

![](../../../../.gitbook/assets/image%20%28600%29.png)

Before we continue, let's move on to create a Rocket.Chat cloud account. This will provide us with some vital information we need to proceed.

### Cloud Setup

3. Goto [https://cloud.rocket.chat/trial/ee ](https://cloud.rocket.chat/trial/ee)and create an account or sign in if you already have one.  
This guide proceeds with creating a new account.

![](../../../../.gitbook/assets/image%20%28591%29.png)

4. You receive an email with a link to create your new workspace with the trial. Click or copy-paste the link in your browser to continue.

![](../../../../.gitbook/assets/image%20%28615%29.png)

5. On the page, you are presented with an interface listing all your workspaces\(if you have any\).  
To add a new workspace, click the **Register self-managed** button.

![](../../../../.gitbook/assets/image%20%28595%29.png)

6. Next, select whether or not your workspace is connected to the internet or not and hit **Continue**.

### Internet Access

1. If your server has internet access,

![](../../../../.gitbook/assets/image%20%28603%29.png)

You're provided with a token. Copy the token and head back to your server's **Administration** panel where we left off.

![](../../../../.gitbook/assets/image%20%28559%29.png)

  2. Select the **Cloud Console** option and proceed with registering a new workspace.

![](../../../../.gitbook/assets/image%20%28609%29.png)

3. You are prompted to enter your Cloud Console Token. Remember the token we copied above? Paste it in the Token field and then click **Connect**.

![](../../../../.gitbook/assets/image%20%28571%29.png)

### No Internet Access/ Offline

1. To connect to a server without internet access, select the option and **Continue**.

![](../../../../.gitbook/assets/image%20%28608%29.png)

   2. You see an interface prompting you to paste the code you copied from your Rocket.Chat self-managed workspace. Hang in there. Let's get the code.

![](../../../../.gitbook/assets/image%20%28614%29.png)

   3. Back on your server, select the Register Offline option. 

![](../../../../.gitbook/assets/image%20%28607%29.png)

   4. A popup appears with the code needed. Copy it and go back to the cloud portal.

![](../../../../.gitbook/assets/image%20%28598%29.png)

   5. Paste the code there and click continue.

![](../../../../.gitbook/assets/image%20%28596%29.png)

You are then given another code to apply on your server. Copy that code, and go to your **Administration** panel, paste it there, and hit **Finish Registration.**

![](../../../../.gitbook/assets/image%20%28605%29.png)

7. When all that is done, refresh the page, and you're able to see your workspace listed with the trial as **Active**.

![](../../../../.gitbook/assets/image%20%28561%29.png)

Back on the info section of your **Administration** panel, you should see you're running an **Enterprise License**.

![](../../../../.gitbook/assets/image%20%28585%29.png)

{% hint style="info" %}
It is recommended to sync your server immediately after linking it to the cloud. To do that, head on to the **Connectivity Services** on your **Administration** panel and click on **Sync**.
{% endhint %}

![](../../../../.gitbook/assets/image%20%28546%29.png)

