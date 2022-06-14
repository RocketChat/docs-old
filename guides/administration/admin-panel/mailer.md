---
description: Use the Mailer tool to send emails to users inside your Rocket.Chat server.
---

# Mailer

To access this menu, go to **Administration** > **Mailer**.

as shown below:

![](<../../../.gitbook/assets/2021-11-20\_23-29-48 copy (1) (1) (1).png>)

![](../../../.gitbook/assets/2021-11-24\_14-19-37.png)

Use the **`From`** field to set the address to send the email.

Check the **Dry Run** option to send the email only to the address defined in **`From`**.

You can also filter who receives the email by using a valid user query in the **`Query`** field.

Then, you can write a subject and a body for the email. When you write the body, add brackets to add dynamic data to the body.

Add the following brackets to the email body:

* `[unsubscribe]`: creates an unsubscribe link. The email body **must** have an unsubscribe link.
* `[name]`: uses the full name of the user that receives the email
* `[fname]`: uses the first name of the user that receives the email
* `[lname]`: uses the last name of the user that receives the email
* `[email]`: uses the email address of the user that receives the email
