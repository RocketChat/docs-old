# Edit your Email Content

You can customize the predefined emails sent out to users on your workspace.

To customize email content, select the email type you want to change and modify. The email body can take in placeholder values used to set customized data e.g `[Site_Name]` is replaced with your Rocket.Chat server name.

{% hint style="info" %}
* Available placeholder fields can be seen at the bottom of the field being edited.
* You can use Rocket.Chat internationalization engine by wrapping sentence string with `{ }`, see all internationalization strings [here](https://github.com/RocketChat/Rocket.Chat/tree/develop/apps/meteor/packages/rocketchat-i18n/i18n).
{% endhint %}

### Device Management - Login Detected <a href="#5yq26mqgs4i" id="5yq26mqgs4i"></a>

The email users receive when a user login is detected from a new device.

* **Subject**: The email subject.
* **Body**: Email body.

### Direct Reply

{% content-ref url="direct-reply.md" %}
[direct-reply.md](direct-reply.md)
{% endcontent-ref %}

### Email Address Changed <a href="#9jedofp0o2d" id="9jedofp0o2d"></a>

Formats email to send when users change their email.

* **Subject**: The email subject.
* **Body**: Email body.

### Forgot Password

The email users receive when they trigger the forget password action.

* **Subject**: Subject of the email.
* **Body:** Email body.

### Header and Footer

Defines the header and footer style to use for all your emails.

* **Header**: Header to use for all emails sent.
* **Footer**: The email footer to use for all emails.
* **Footer When Direct Reply is Enabled**: Let you define the footer for when [direct reply](direct-reply.md) is enabled.

### Invitation

Email format for when a user is invited to join the workspace.

* **Subject**: The email subject.
* **Body**: Email content.

### Offline Message

* **Use Deep Link URL Format**: When enabled, deep linking is made possible in emails sent.

### Password Changed <a href="#vwi0kxddnhm" id="vwi0kxddnhm"></a>

Email format for when a user's password is changed.

* **Subject**: The email subject.
* **Body**: Email body.

### Privacy

Set a level of privacy to the emails sent.

* **Show Message in Email Notification**: Whether or not to show messages in email notifications.
* **Add Sender to Reply-To**: When enabled, message senders will be added to the `Reply-To` email header property.

### Registration

Email to send on new user registration.

* **Subject**: Email subject.
* **Body**: The body of the email.

### Registration via Admin <a href="#o89j79aht5" id="o89j79aht5"></a>

Format of the email to send to a user when registered by an admin.

* **Subject**: The email subject.
* **Body**: Email body.

### SMPT

{% content-ref url="setup.md" %}
[setup.md](setup.md)
{% endcontent-ref %}

### Style

Here you define the styling to be applied to all emails.

* **Send only plain text emails**: When enabled, emails are sent in plain text only.
* **Email Style**: Write CSS to style every email.

### Subject <a href="#e8fkl25m3nq" id="e8fkl25m3nq"></a>

Let you specify email subjects for various notification types.

* **Direct Message Email Subject**: Email subject to use for direct message notification.
* **Mention Email Subject**: Email subject for when a user is mentioned in a room.
* **Mention All Email Subject**: Email subject when a message is posted in a room.

### Verification

Format of email to use when sending user verification.

* **Subject**: Email Subject.
* **Body**: The email body.
