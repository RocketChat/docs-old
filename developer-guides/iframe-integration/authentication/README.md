# What is `iframe` auth?

With `iframe` auth you can use your own authentication page/API to log in users on Rocket.Chat.

When enabled Rocket.Chat first do an `XMLHttpRequest` to the `iFrame API` URL trying to see if the user is already logged in at the third party website. If that doesn't succeed then Rocket.Chat will present the `Iframe URL` within an `iframe`, so the user logs in on the third party website which means he is authenticated on Rocket.Chat as well.

We have developed an example app written in NodeJS in order to help you understanding this authentication flow. Please take a look at https://github.com/RocketChat/iframe-auth-example

## Configuring

### API URL and API Method

Set them both to configure how Rocket.Chat will call the third party system to verify if the user is already logged in.

This should be a new endpoint on the third party system that will check if the user is already logged in, if so, communicate with Rocket.Chat in order to log in him there and then respond with a JSON containing either a `token` or `loginToken` properties. You can accomplish this in two ways:

#### Using Rocket.Chat API

If you have the user's password stored (or it is the same between your third party system and Rocket.Chat), you can use [Rocket.Chat's REST APIs](https://rocket.chat/docs/developer-guides/rest-api/authentication/login/) to log in the user, this way you will get an `authToken` back from Rocket.Chat that should be returned as `loginToken` by your endpoint.

At this point, if the user does not have a Rocket.Chat account yet, you can either use Rocket.Chat API to [create an user](https://rocket.chat/docs/developer-guides/rest-api/users/create/) using a admin account or [register him](https://rocket.chat/docs/developer-guides/rest-api/users/register/).

After you log the user in, you should return a payload like the following:

```json
{
  "loginToken": "already-saved-or-returned-login-token"
}
```

#### Managing MongoDB directly

In the case you have access to Rocket.Chat's database, you can connect there directly and manage the user record by yourself. This might be useful if you have MongoDB on your stack already and don't want to learn Rocket.Chat's API.

To do so the endpoint should connect on Rocket.Chat's MongoDB database and make sure the `generated-token` is saved on `users` collection on the corresponding user record. The `generated-token` should be saved on the field path `services.iframe.token`. This is how the user record should look like:

```javascript
{
  "_id": "MZiFvWAf96876875u",
  "createdAt": new Date(1432252673528),
  "services": {
    "iframe": {
      "token": "generated-token"
    }
  },
  "emails": [
    {
      "address": "useremail@gmail.com",
      "verified": true
    }
  ],
  "name": "John Doe",
  "username": "john.doe",
  "active": true,
  "statusDefault": "online",
  "roles": [
    "user"
  ],
  "type": "user"
}
```

On this case, the response should be:

```json
{
  "token": "generated-token"
}
```


### IFrame URL

The URL of the page you want to show as the login page of your Rocket.Chat instance (this page can be created in any programming language and/or web framework).

The login page will then communicate back to Rocket.Chat using `postMessage` API.

After user logs in, you have to make sure you have set the user's token on Rocket.Chat's database (as described earlier) and then you should tell Rocket.Chat to validate user's session calling one of the following APIs, depending where you saved user's token:

* If you have saved user's token on `services.iframe.token`, call:

```javascript
window.parent.postMessage({
  event: 'try-iframe-login'
}, 'http://your.rocket.chat.url');
```

* If have used Rocket.Chat's APIs to log in the user or already have user's token saved in your end:

```javascript
window.parent.postMessage({
  event: 'login-with-token',
  loginToken: 'your-token'
}, 'http://your.rocket.chat.url');
```

### Using OAuth configured on Rocket.Chat's end

If you have OAuth services configured on Rocket.Chat, you can trigger them from within your login page as well.

To implement this authentications, after triggering the OAuth authentication you will receive a `postMessage` back from Rocket.Chat with user's credentials response from OAuth service. You need to manage the user creation/authentication on Rocket.Chat's database by yourself, the same as described earlier.

#### Facebook

```javascript
window.parent.postMessage({
  event: 'call-facebook-login',
  permissions: ['email']
}, 'http://your.rocket.chat.url');
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
}, 'http://your.rocket.chat.url');
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
}, 'http://your.rocket.chat.url');
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


## How to login in Rocket.Chat with default account system while in development

When you activate the IFrame auth you will not be able to access Rocket.Chat's default login page, however if still need/want to use your Rocket.Chat's credentials to log in, you can do that by opening the browser's Developer Console and executing the following code:

```javascript
Meteor.loginWithPassword('username-or-email', 'your-password');
```
