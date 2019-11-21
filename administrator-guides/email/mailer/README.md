# Mailer

Use the Mailer tool to send email to users inside your Rocket.Chat server.

Use the `From` field to set the address to send the email. Check the `Dry Run`option to send the email only to the address defined in `From`.

You can also filter who receives the email by using a valid user query <!-- TODO: Create a page for Queries? --> in the `Query` field.

Then, you can write a subject and a body for the email. When you write the body, add brackets to add dynamic data to the body.

Add the following brackets to the email body:

- `[unsubscribe]`: creates an unsubscribe link. The email body __must__ have an unsubscribe link.

- `[name]`: uses the full name of the user that receives the email

- `[fname]`: uses the first name of the user that receives the email

- `[lname]`: uses the last name of the user that receives the email

- `[email]`: uses the email address of the user that receives the email
