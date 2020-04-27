# Email Configuration

Rocket.Chat features include using emails, notifications, email verification, mailer, and much more.

Before using those features, you must connect a SMTP server to Rocket.Chat. To do that, you must have access to a SMTP server and a valid SMTP log in credentials.

## Set up your Credentials

Go to ``Administration settings > Email > SMTP``.

Enter:

- Your SMTP server host name (e.g. `mail.example.com`)
- The port (usually 587 for modern secured SMTP servers)
- Your credentials
- A name and email to appear in the `From` field of the emails

Once completed, click **Save changes**.

![SMTP server configuration.](https://user-images.githubusercontent.com/20342522/53436704-a4989080-39b0-11e9-8ea6-f320affc798f.png)

## Test Changes

Go back into the `SMTP settings` and click **Test SMTP settings**. You should receive an email within a few minutes. If you do not, check the logs (`Administration > View Logs`) to see what happened.

**Note**: Make sure `Debug logging` is on; the default is to log information only.
