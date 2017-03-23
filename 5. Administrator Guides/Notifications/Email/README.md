# Email Configuration

Rocket.Chat can send automated email notifications and other messages to your users.  To enable this, you will need to have access to an SMTP server and valid SMTP login credentials.

## Setup credentials

Go to Administration settings -> Email -> SMTP.  

Enter: 
 - your SMTP server's host name (e.g. `mail.example.com`)
 - the port (usually 587 for modern, secured SMTP servers)
 - your credentials
 - a name and email to appear in the "From" field of the emails
 
 Once filled, click "Save changes", and *restart Rocket.Chat*.

![SMTP server configuration.](email-1.png)

## Test changes
Go back into the SMTP settings and click "Test SMTP settings". You should receive an email within a few minutes. If you do not, check the logs ("Administration -> View Logs") to see what went wrong. NB You might need to make sure Debug logging is on (default is to log Information only).
