# Advanced White-Labeling

In these guides we will cover how to customize styling in more depth and how to add custom Javascript scripts to your server.

Please use caution when using these settings, as the misuse of them can cause problems on your server.

## Custom CSS

Can be found in Administration =&gt; Layout. This allows you to overwrite styling on UI. For the full maestry of this setting we recommend studying the source code, as seen that overwriting classes directly can lead to side effects on styling.

### CSS Variables

Rocket.Chat uses CSS variables to store key values when styling. Rocket.Chat recommends only overwriting the CSS variables, as you will have more control on what will be changed.

You can find the full list of variables [here](https://github.com/RocketChat/Rocket.Chat/blob/84d547055ea1ce08e55d7a95ed99dd9c0be852b9/app/theme/client/imports/general/variables.css).

## Custom Scripts

You can add custom scripts for when a user takes specific actions. Scripts must be written in Javascript.

### Logout Flow

This script runs after the user has logged out.

### Custom Script for Logged Out Users

Custom Script that will run whenever a user that is not logged in accesses your server url. E.g. \(whenever you enter the login page\)

### Custom Script for Logged In Users

Custom Script that will run whenever a user that is logged in accesses your server url \(eg. opens a browser page or the desktop app\).

## Email Templates

Here you can configure various email settings, in this guide we will be going over only email templating sections. Found in the administration menu. Here you can use HTML for formatting. You can also use placeholders that will be changed to actual data when sending \(for example \[email\] will turn into the user's email\). You can also use Rocket.Chat internationalization engine by wrapping the sentence string with `{}`, see all our internationalization strings [here](https://github.com/RocketChat/Rocket.Chat/blob/develop/packages/rocketchat-i18n/i18n/en.i18n.json#L1198).

### Email Address Changed

Informs that the user has changed the email Is triggered when the user changes the email.

You may use the following placeholders:

* \[email\] for the user's email.
* \[Site\_Name\] and \[Site\_URL\] for the Application Name and URL respectively.

### Forgot Password

Resets the password Is triggered when the user clicks on 'Forgot Password'.

You may use the following placeholders:

* \[Forgot\_Password\_Url\] for the password recovery URL.
* \[name\], \[fname\], \[lname\] for the user's full name, first name or last name, respectively.
* \[email\] for the user's email.
* \[Site\_Name\] and \[Site\_URL\] for the Application Name and URL respectively.

### Header and Footer

Any changes made here will be reflected in the every header and footer. Changes the header, footer and direct reply warning HTML. 

You may use the following placeholders:

* \[Site\_Name\] and \[Site\_URL\] for the Application Name and URL respectively.

### Invitation

Invitation to use the site. Is triggered when the admin invites the person by email.

You may use the following placeholders:

* \[email\] for the recipient email.
* \[Site\_Name\] and \[Site\_URL\] for the Application Name and URL respectively.

### Password Changed

Informs that the password has been changed by the admin. Is triggered when the admin change user's password. 

You may use the following placeholders:

* \[password\] for the temporary password.
* \[name\], \[fname\], \[lname\] for the user's full name, first name or last name, respectively.
* \[email\] for the user's email.
* \[Site\_Name\] and \[Site\_URL\] for the Application Name and URL respectively.

### Registration

Is triggered when the user registers. 

You may use the following placeholders:

* \[name\], \[fname\], \[lname\] for the user's full name, first name or last name, respectively.
* \[email\] for the user's email.
* \[Site\_Name\] and \[Site\_URL\] for the Application Name and URL respectively.

### Registration via Admin

Is triggered when the admin creates an account for the user.

You may use the following placeholders:

* \[name\], \[fname\], \[lname\] for the user's full name, first name or last name, respectively.
* \[email\] for the user's email.
* \[password\] for the user's password.
* \[Site\_Name\] and \[Site\_URL\] for the Application Name and URL respectively.

### Style

Here you can edit the emails styling using CSS.

### Subject

Here you can define what email users will receive when they recieve certain message notifications.

### Direct Message:

Is triggered when a user receives a direct message. 

You may use the following placeholders:

* \[Site\_Name\], \[Site\_URL\], \[User\] & \[Room\] for the Application Name, URL, Username and Roomname respectively.

### Mention:

Is triggered when a user is mentioned using `@username`. 

You may use the following placeholders:

* \[Site\_Name\], \[Site\_URL\], \[User\] & \[Room\] for the Application Name, URL, Username and Roomname respectively.

### Mention All:

Is triggered when a user is mentioned using `@all`. 

You may use the following placeholders:

* \[Site\_Name\], \[Site\_URL\], \[User\] & \[Room\] for the Application Name, URL, Username and Roomname respectively.

### Verification

Email that the user receives to verify his account. 

You may use the following placeholders:

* \[Verification\_Url\] for the verification URL.
* \[name\], \[fname\], \[lname\] for the user's full name, first name or last name, respectively.
* \[email\] for the user's email.
* \[Site\_Name\] and \[Site\_URL\] for the Application Name and URL respectively.

