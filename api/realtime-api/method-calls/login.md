# Login

Used for user login. It supports a plethora of authentication services, including a simple username and password combination. The list of supported auth services \(and its configurations\) lies in the `meteor_accounts_loginServiceConfiguration` collection.

The overall format of the login message is:

```javascript
{
    "msg": "method",
    "method": "login",
    "id":"42",
    "params":[ ... ] // changes according to the auth used
}
```

Independently of the auth provider, upon a successful login we'll receive back an `result` with the `user-id`, `auth-token` and the token expiration date. As the example bellow shows:

```javascript
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

That information should be saved locally in order to automatically authenticate the user the next time he tries to use the client. Look at \[[Using an authentication token](login.md#using-an-authentication-token)\] for information about how to do it.

## Username and Password

The user has an account directly with the RC server. It's important to say that we must not pass the user password as plain-text, applying a hashing algorithm makes things better \(`sha-256`\). Make sure your digest is lower-case!

Request

```javascript
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

```javascript
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

```javascript
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

```javascript
{
    "msg": "method",
    "method": "login",
    "id": "42",
    "params":[
        { "resume": "auth-token" }
    ]
}
```

A successful call will return the same message as a successful login \(which it is\).

## About token expiration date

As the token expires, you have to call the login method again in order to obtain a new token with a new expiration date.

NB: You don't have to wait until the token is expired before asking for a new token.

## See Also

* [Logout](logout.md)

