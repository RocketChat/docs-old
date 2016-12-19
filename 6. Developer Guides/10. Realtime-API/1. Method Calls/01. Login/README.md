# Login

Used for user login. It supports a plenthora of authentication services, including a simple username and password combination. The list of supported auth services (and its configurations) lies in the `meteor_accounts_loginServiceConfiguration` collection.

The overall format of the login message is:

```json
{
    "msg": "method",
    "method": "login",
    "id":"42",
    "params":[ ... ] // changes according to the auth used
}
```

Independently of the auth provider, upon an sucessful login we'll receive back an `result` with the `user-id`, `auth-token` and the token expiration date. As the example bellow shows:

```json
{
    "msg": "result",
    "id": "42",
    "result": {
        "id": "user-id",
        "token": "auth-token",
        "tokenExpires": { "$date": 1480377601 }
    }
}
```

That information should be saved locally in order to automatically authenticate the user the next time he tries to use the client. Look at [[Using an authentication token](#resume)] for information about how to do it.

## Username and Password

The user have an account directly with the RC server. It's important to say that we must not pass the user password as plain-text, applying a hashing algorithm makes things better (`sha-256`).

Request

```json
{
    "msg": "method",
    "method": "login",
    "id":"42",
    "params":[
        {
            "user": { "username": "example-user" },
            "password": {
                "digest": "some-digest",
                "algorithm":"sha-256"
            }
        }
    ]
}
```

In the case there's an error on the request, a possible error response would be:

```json
{
    "msg": "result",
    "id": "42",
    "error": {
        "error": 403,
        "reason": "Incorrect password",
        "message": "Incorrect password [403]",
        "errorType": "Meteor.Error"
    }
}
```

## Using Authentication providers

We're using OAuth to support additional auth providers.

Here's a example request.

```json
{
    "msg": "method",
    "method": "login",
    "id":"42",
    "params": [
        {
            "oauth": {
                "credentialToken":"credential-token",
                "credentialSecret":"credential-secret"
            }
        }
    ]
}
```

## Using an authentication token

If you have a saved user authentication you may use the provided `auth-token` to automatically log the user in.

```json
{
    "msg": "method",
    "method": "login",
    "id": "42",
    "params":[
        { "resume": "auth-token" }
    ]
}
```

A sucessful call will return the same message as an sucessful login (which it is).

## See Also
* [Logout][1]

[1]:../1.%20Logout
