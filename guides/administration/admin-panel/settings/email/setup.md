# Email Configuration

Rocket.Chat features include using emails, notifications, email verification, mailer, and much more.

Before using those features, you must connect an SMTP server to Rocket.Chat. To do that, you must have access to an SMTP server and valid SMTP login credentials.

{% hint style="info" %}
This configuration is only done manually for Self-managed workspaces. It is pre-configured for cloud workspaces.
{% endhint %}

## Set up your Credentials

* Go to **Administration > Workspace > Settings > Email > SMTP.**
* **Protocol** - Choose **SMTP**(Simple Mail Transfer Protocol) or **SMTPS** (Simple Mail Transfer Protocol Secure) protocol.
* **Host -** Your SMTP server hostname (e.g. `mail.example.com`)
* **Port -**The port (usually 587 for modern secured SMTP servers).&#x20;
* **IgnoreTLS** - If this option is enabled, TLS(Transport Layer Security) will not be used.&#x20;
* **Pool** - Enable this option to use pooled connections, otherwise a new connection is created for every mail.
* Your credentials:
  * **Username** that you are using to log in to your email account.&#x20;
  * **Password** that you are using to log in to your email account.&#x20;
  * **From Email** address that you are using to log in to your email account.
* Send a test mail to my user - Use this option to send a test mail.
* Once completed, click **Save changes**.

## Test Changes

Go back into the `SMTP settings` and click **Test SMTP settings**. You should receive an email within a few minutes. If you do not, check the logs (`Administration > View Logs`) to see what happened.

**Note**: Make sure `Debug logging` is on; the default is to log information only.
