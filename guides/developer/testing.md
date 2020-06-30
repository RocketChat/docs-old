# Testing

## Requirements

* Google Chrome Browser

## Getting Started

### Start Meteor

Run meteor with the command below:

```text
TEST_MODE=true meteor
```

To run the tests, the server **must** be started with the environment variable `TEST_MODE=true`. This will set all animations' duration to 0 and create an extra admin user with the login values:

```text
_id: "rocketchat.internal.admin.test"
name: "RocketChat Internal Admin Test"
username: "rocketchat.internal.admin.test"
emails: "rocketchat.internal.admin.test@rocket.chat"
password: "rocketchat.internal.admin.test"
```

### Run Tests

On another terminal window, run the test with the command bellow:

```text
meteor npm run chimp-test
```

