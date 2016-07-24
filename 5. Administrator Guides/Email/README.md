# Email Configuration

Rocket Chat can send automated email notifications and other messages to your users.  To enable this, you will need to have access to an SMTP server and valid SMTP login credentials.

In Administration settings, go to Email, and scroll down to "SMTP".  Enter your SMTP server's host name (e.g. `mail.example.com`), the port (usually 587 for modern, secured SMTP servers), and your credentials.  Enter a name and email to appear in the "From" field of the emails.  Many SMTP servers require that the "From" address matches the user name you use to authenticate.

![SMTP server configuration.](email-1.png)

Click "save changes".  At this point, you will need to reboot your Rocket Chat server.  This is because Rocket Chat stores your SMTP settings in the `MAIL_URL` environment variable, and Meteor (which Rocket Chat runs on top of) loads the SMTP server information from this variable on startup.

After restarting your chat server, go back into SMTP settings and click "Test SMTP settings".  You should receive an email within a few minutes.  If you do not receive the test email, go into "Administration -> View Logs" to see what went wrong.

## Configuring with Docker

If you're using Docker, you can directly set your SMTP server settings in your Docker file instead:
```
rocketchat:
  image: rocketchat/rocket.chat:develop
  environment:
    - PORT=3000
    - ROOT_URL=https://chat.yourdomain.com
    - MONGO_URL=mongodb://mongo:27017/rocketchat
    - MAIL_URL=smtp://yourmailbox@yourdomain.com:yourpassword@smtp.yourmailserver.com:465/
  links:
    - mongo:mongo
  ports:
    - 3000:3000
```

