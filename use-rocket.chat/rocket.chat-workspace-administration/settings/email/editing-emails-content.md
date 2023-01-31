# Edit your Email Content

Almost all predefined emails are sent to users in your Rocket.Chat server can be customized.

To customize email content, simply select the email you want to change. From there you can change the subject and the body of an email. When you write the body of your email, you can add _placeholders_ that change to real data when you send it. E.g. `[Site_Name]` changes to your Rocket.Chat server name.

{% hint style="info" %}
Your access to more _placeholders_ depends on which section you are editing. For a detailed list of available _placeholders_, check the text under the `Body` field.
{% endhint %}

### Direct Reply

{% content-ref url="direct-reply.md" %}
[direct-reply.md](direct-reply.md)
{% endcontent-ref %}

### Email Address Changed <a href="#9jedofp0o2d" id="9jedofp0o2d"></a>

Formats email to send when users change their email.

* **Subject**: The email subject
* **Body**: Email body

### Forgot Password

Email to send when users initiate the forget password action.

* **Subject**: Subject of the email
* **Body:** Email body

### Header and Footer

Defines the header and footer style to use for all your emails.

* **Header**: Header for your email body
* **Footer**: Email footer, by default, the footer is:

![Default email footer](<../../../../../.gitbook/assets/default email footer.png>)

* **Footer When Direct Reply is Enabled**: Let you define the footer for when [direct reply](direct-reply.md) is enabled

### Invitation

Email format for when invitations are sent

* **Subject**: The email subject
* **Body**: Email content

### Offline Message

* **Use Deep Link URL Format**: When enabled, users get deep links directly

### Password Changed <a href="#vwi0kxddnhm" id="vwi0kxddnhm"></a>

Email format for when a user's password is changed

* **Subject**: The email subject
* **Body**: Email body

### Privacy

Set a level of privacy to the emails sent

* **Show Message in Email Notification**: Whether or not to show messages in email notifications
* **Add Sender to Reply-To**: When enabled, message senders will be added to the `Reply-To` email header property

### Registration

Email to send on new user registration

* **Subject**: Email subject
* **Body**: The body of the email

### Registration via Admin <a href="#o89j79aht5" id="o89j79aht5"></a>

Format of the email to send to a user when registered by an admin

* **Subject**: The email subject
* **Body**: Email body

### SMPT

{% content-ref url="setup.md" %}
[setup.md](setup.md)
{% endcontent-ref %}

### Style

Here you define the styling to be applied to all emails

* **Send only plain text emails**: When enabled, emails are sent in plain text only
* **Email Style**: Write CSS to style every email

### Subject <a href="#e8fkl25m3nq" id="e8fkl25m3nq"></a>

Let you specify email subjects for various notification types

* **Direct Message Email Subject**: Email subject to use for direct message notification
* **Mention Email Subject**: Email subject for when a user is mentioned in a room
* **Mention All Email Subject**: Email subject when a message is posted in a room

### Verification

Format of email to use when sending user verification

* **Subject**: Email Subject
* **Body**: The email body
