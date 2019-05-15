# Email Configuration

Rocket.Chat have multiple features using email, like notifications, email verification, mailer, and much more.

Before using those features, you will have to connect a SMTP server to Rocket.Chat. To do that you will need to have access to an SMTP server and valid SMTP login credentials.

## Setup credentials

Go to Administration settings -> Email -> SMTP.

Enter:

- Your SMTP server's host name (e.g. `mail.example.com`)
- The port (usually 587 for modern, secured SMTP servers)
- Your credentials
- A name and email to appear in the "From" field of the emails

Once filled, click "Save changes".

![SMTP server configuration.](https://user-images.githubusercontent.com/20342522/53436704-a4989080-39b0-11e9-8ea6-f320affc798f.png)

## Test changes

Go back into the SMTP settings and click "Test SMTP settings". You should receive an email within a few minutes. If you do not, check the logs ("Administration -> View Logs") to see what went wrong. NB You might need to make sure Debug logging is on (default is to log Information only).
