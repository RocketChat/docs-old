---
description: Omnichannel Integration between Rocket.Chat and email.
---

# Email Inboxes

As an administrator, you can configure and manage Omnichannel email inboxes or email accounts for the email channels.

{% hint style="warning" %}
**You must have the** [**Omnichannel**](https://docs.rocket.chat/guides/administration/settings/omnichannel-admins-guide#enable-omnichannel) **enabled as well as have** [**agents**](https://docs.rocket.chat/guides/omnichannel/agents) **and** [**managers**](https://docs.rocket.chat/guides/omnichannel/managers) **assigned in order to use this feature.**
{% endhint %}

To set up a new email inbox:

* Navigate to **Administration > Workspace > Email Inboxes**
* Click **+ New Email Inbox**:

Enter the following details:

1. Add the **Name** of the email inbox
2. Specify the **Email** address
3. Assign it to a **Department;** it is optional
4. Configure SMTP server
5. Toggle switch **Connect with SSL/TLS;** it is optional\
   **`Note`**`: For outlook accounts, disable the SSL option under SMTP.`
6. Configure IMAP server and
7. Toggle switch **Connect with SSL/TLS** for IMAP\*\*;\*\* it is optional
8. Hit **Save**

Your email inbox is set up, and your agents can receive emails within Rocket.Chat now.

## Configure Email Inbox with 2FA

If you have two-factor authentication enabled on your email account, using your regular email password to connect will result in an error.

For this, you need to generate an app password that is to be used instead of the normal password.

Follow these guides to generate your app passwords.

{% embed url="https://support.google.com/accounts/answer/185833?hl=en" %}
GMail
{% endembed %}

{% embed url="https://support.microsoft.com/en-gb/account-billing/manage-app-passwords-for-two-step-verification-d6dc8c6d-4bf7-4851-ad95-6d07799387e9" %}
Outlook
{% endembed %}

{% embed url="https://help.aol.com/articles/Create-and-manage-app-password" %}
AOL Mail
{% endembed %}

[**Yahoo Mail**](https://help.yahoo.com/kb/generate-manage-third-party-passwords-sln15241.html)



{% content-ref url="broken-reference" %}
[Broken link](broken-reference)
{% endcontent-ref %}
