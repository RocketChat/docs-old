# Mailer

You can send email to users inside your Rocket.Chat server using the __Mailer__ tool.
The address from whom the email will be sent can be set by filling the __From__ field.
By checking the __Dry Run__ option a email will be only sent to the address in __From__.

You can also filter to who the email will be sent by using a valid user __Query__ <!-- TODO: Create a page for Queries? --> on the __Query__ field.

Then you can write a subject and a body for the email. When writing the body you can add __Brackets__ to add dynamic data to the body.

You can add the following brackets to the email body:

- `[unsubscribe]` This will create an unsubscribe link. The email body __must__ have a unsubscribe link.

- `[name]` : This will get the full name of the user that is receiving the email;

- `[fname]` : This will get the first name of the user that is receiving the email;

- `[lname]` : This will get the last name of the user that is receiving the email;

- `[email]` : This will get the email address of the user that is receiving the email;
