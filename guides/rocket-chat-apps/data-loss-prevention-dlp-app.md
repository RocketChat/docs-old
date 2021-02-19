---
description: >-
  Data loss prevention (DLP), in its simplest terms, is a set of tools and
  processes used to ensure that sensitive data is not unduly shared, misused,
  lost, or accessed by unauthorized users.
---

# Data Loss Prevention \(DLP\) App Admin Guide

## **To Enable DLP App:**

1. Go to **Administration** 

![](../../.gitbook/assets/image%20%28215%29.png)

2. Marketplace

![](../../.gitbook/assets/image%20%28257%29.png)

3. Search the DLP app and enable it. 

![](../../.gitbook/assets/image%20%28263%29.png)

5. Click and open to view DLP app details.

![](../../.gitbook/assets/image%20%28264%29.png)

6. Define the rules as Regular expressions. Add each Regular Expression on a new line.

![](../../.gitbook/assets/image%20%28260%29.png)

{% hint style="info" %}
Through DLP features, admins can create a list of regular expressions to be monitored in Rocket.Chat and it can be applied to any conversation.  
Once a regular expression is detected, it appears blurred in the room where it was originally written. The original message then is forwarded to a predefined channel for auditing flow, where a moderator can approve or reject its content to be exhibited in the room. You can add as many moderators as you want.  
It’s also possible to select the rooms to apply the DLP app. If you have channels in your Rocket.Chat where it’s more likely to happen a leak of sensitive information, such as the finance team channel, for example, you can set the tool to run just in this specific channel.
{% endhint %}

7. Mention the channel name in **Moderator Channel** to which you want the blacklisted messages to be forwarded to, as shown below:

![](../../.gitbook/assets/image%20%28254%29.png)

8. Mention any channels that you dont want to be monitored under Content Control type **Ignore Channels** if any, as shown below:

![](../../.gitbook/assets/image%20%28262%29.png)

Or mention the channels only which you want to be monitored under Content Control type **Target Channels,** as shown below:

![](../../.gitbook/assets/image%20%28261%29.png)

9.



