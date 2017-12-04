# Iframe Auth

## What is IFrame auth?

With IFrame auth you can use your own auth page and do the communication with Rocket.Chat to manage users.

## How to login in Rocket.Chat with default account system while in development

When you active the IFrame option you will not be able to access the default login page. Instead, you will need to login with your normal account to manage the settings.
You can do that opening the Browser's Developer Console and executing this code:

```javascript
Meteor.loginWithPassword('username-or-email', 'your-password');
```

## Configuring

### IFrame URL

The URL of the page you want to show as the login page of your Rocket.Chat instance  (this page can be created in any programming language and/or web framework).

### API URL

The URL that Rocket.Chat will call to verify if user is logged-in

- If user is logged-in, should respond with the session token, example:

```json
{
  "token":"your-generated-token"
}
```

To do that, you should directly access the Rocket.Chat MongoDB database (using a MongoDB library or driver with the programming language that you have created your login page with) and find/create the user record under the collection `users` set the `services.iframe.token` and return via your API.

- Or you can respond with native account token using **loginToken**:

```json
{
  "loginToken":"your-auth-token"
}
```

To do that you can use the [Rocket.Chat auth API](https://rocket.chat/docs/developer-guides/rest-api/#logon) and use the returned **authToken** as your loginToken.

Example of a user record:

```javascript
{
  "_id": "MZiFvWAf96876875u",
  "createdAt": new Date(1432252673528),
  "services": {
    "iframe": {
      "token": "your-generated-token"
    }
  },
  "emails": [
    {
      "address": "useremail@gmail.com",
      "verified": true
    }
  ],
  "name": "Rodrigo Nascimento",
  "username": "rodrigo.nascimento",
  "active": true,
  "statusDefault": "online",
  "roles": [
    "user"
  ],
  "type": "user"
}
```

- If user is not logged-in, should respond with status code 401

### API Method

How Rocket.Chat will call your API, `GET` or `POST`

## Integrating your login page

Rocket.Chat and your login page will communicate via `postMessage`.

After user login, you should tell to Rocket.Chat to try the auth again calling your API to get the token:

```javascript
window.parent.postMessage({
  event: 'try-iframe-login'
});
```

Or you can call the login directly if you already have the token:

```javascript
window.parent.postMessage({
  event: 'login-with-token',
  token: 'your-token'
});
```

or passing the **loginToken** (the native login token from meteor, you can generate one using any login method, including via [REST API](https://rocket.chat/docs/developer-guides/rest-api/#logon))

```javascript
window.parent.postMessage({
  event: 'login-with-token',
  loginToken: 'your-token'
});
```

You can call our OAuth services too, to do that you need to enable and configure each OAuth service on Rocket.Chat admin page and then you can call the services:
You will receive the OAuth information, you should manage the user creation/authentication and set the iframe token.

### Facebook

```javascript
window.parent.postMessage({
  event: 'call-facebook-login',
  permissions: ['email']
});
```

The reply will be a postMessage back to your page with:

```javascript
{
  event: 'facebook-login-success',
  response: {
    // authResponse: Object
    // accessToken: "a7s6d8a76s8d7..."
    // expiresIn: "5172793"
    // secret: "..."
    // session_key: true
    // sig: "..."
    // userID: "675676576"
    // status: "connected"
  }
}
```

Or an error

```javascript
{
  event: 'facebook-login-error',
  error: error,
  response: response
}
```

#### Google

```javascript
window.parent.postMessage({
  event: 'call-google-login',
  //  scopes:
  //  webClientId:
});
```

The reply will be a postMessage back to your page with:

```javascript
{
  event: 'google-login-success',
  response: {
    // "email": "rodrigoknascimento@gmail.com",
    // "userId": "1082039180239",
    // "displayName": "Rodrigo Nascimento",
    // "gender": "male",
    // "imageUrl": "https://lh5.googleusercontent.com/-shUpniJA480/AAAAAAAAAAI/AAAAAAAAAqY/_B8oyS8yBw0/photo.jpg?sz=50",
    // "givenName": "Rodrigo",
    // "familyName": "Nascimento",
    // "ageRangeMin": 21,
    // "oauthToken": "123198273kajhsdh1892h"
  }
}
```

Or an error

```javascript
{
  event: 'google-login-error',
  error: error
}
```

#### Twitter

```javascript
window.parent.postMessage({
  event: 'call-twitter-login'
});
```

The reply will be a postMessage back to your page with:

```javascript
{
  event: 'twitter-login-success',
  response: {
    // "userName": "orodrigok",
    // "userId": 293123,
    // "secret": "asdua09sud",
    // "token": "2jh3k1j2h3"
  }
}
```

Or an error

```javascript
{
  event: 'twitter-login-error',
  error: error
}
```
