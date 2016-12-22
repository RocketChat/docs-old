# Testing

### Getting Started
To run the tests the server must be started with the environment variable `DISABLE_ANIMATION=true`, that will set the duration of all the animations in Rocket.Chat to 0. The start command will look like this `DISABLE_ANIMATION=true meteor`.

Also don't forget to have Google Chrome installed.

### Starting the tests
To start testing, with the server running, run the command `meteor npm run chimp-test`.
If you have a clean database with no users just run the command normally, it will create a admin with the default values.

But if you already have a admin user you must add the following environment variables:

`ADMIN_USERNAME="your admin username"` (default value: "admin-test")

`ADMIN_EMAIL="your admin email"` (default value: "admin-test@rocket.chat")

`ADMIN_PASS="your admin password"` (default value: "admin-test")