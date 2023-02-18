# Email Configuration

The Rocket.Chat Emails, [Notifications](../../../../setup-and-administer-rocket.chat/advanced-workspace-management/notifications.md), [Email verification](../../../../setup-and-administer-rocket.chat/advanced-workspace-management/notifications.md#emails), and [Mailer ](../../mailer.md)features depend on this Email configuration.

This page guides you through configuring SMTP settings for your Rocket.Chat workspace.

{% hint style="info" %}
This configuration is only available for Self-managed workspaces. SaaS workspaces already have this pre-configured.
{% endhint %}

## Set up your Credentials

* Go to **Administration > Workspace > Settings > Email > SMTP.**
* **Protocol**: Select the mailing protocol to use. **SMTP**(Simple Mail Transfer Protocol) or **SMTPS** (Simple Mail Transfer Protocol Secure) protocol.
* **Host**: Your SMTP server hostname (e.g. `mail.example.com`)
* **Port**: The SMTP port (usually 587 for modern secured SMTP servers).
* **IgnoreTLS**: Enable to ignore TLS(Transport Layer Security).
* **Pool**: Enable this option to use pooled connections, otherwise a new connection is created for every mail.
* **Username**: Your SMPT username.
* **Password**: Your SMPT password.
* **From Email**: The email to be shown as the sender.
* **Save changes**
* **Send a test mail to my user** - Use this option to send a test mail to yourself.
