# Testing

## Requeriments

- Google Chrome Browser

## Getting Started

### Start Meteor

Run meteor with the command below:

```
TEST_MODE=true meteor
```

To run the tests, the server **must** be started with the environment variable `TEST_MODE=true`. This will set all animations' duration to 0 and create an extra admin user with the login values:

```
username = admin.test
email = admin.test@asdf.com
password = admin.test
```

### Run Tests

```
meteor npm run chimp-test
```