# GraphQL API Authentication

**Note**

> To be able to use the GraphQL API, a login by GraphQL is needed (Tokens provided by REST API are different from the tokens of the GraphQL API).

You can login with GraphQL through `loginWithPassword` mutation, and then with the `accessToken` in hand, you should
put it in the headers of your requests against Rocket.Chat GraphQL API (`Authorization: MyAccessToken`).

Below are some examples of how the login structure works with username and password:

You can send the requests with GraphQL Queries with `POST` http method. You can send the query over http request, or you can use any GraphQL lib for client side.

## Username and Password

```
mutation login {
    loginWithPassword(user: "myrocketchatuser", password: "mypassword") {
        user {
            username,
            email,
            id
        },
        tokens {
            accessToken
        }
    }
}
```

## Email and Password

```
mutation login {
    loginWithPassword(user: "", userFields: {email: "myemail@email.com"}, password: "mypassword") {
        user {
            username,
            email,
            id
        },
        tokens {
            accessToken
        }
    }
}
```

## Grant

The main idea behind this package was to allow the external, stand-alone applications (i.e. PWA) to be able to easily use OAuth authentication that is integrated with
accounts system used in Rocket.Chat. <br/>

The flow:

1. User requests an authentication via some OAuth Provider. Let's use Google and PWA as an example.
2. An app redirects him to a URL handled by Grant. `e.g. http://localhost:3000/_oauth_apps/connect/google/pwa`.
3. The URL is being interpreted so Grant knows which provider should be used to authenticate a user and what is the app we want to redirect him after auth completes.
4. Authentication happens
5. OAuth Provider sends client back to Grant, according to predefined callback url.
6. Grant handles the response and redirects a user to the starting point with some data that allows the application to log user in.

What's the most important, every external application that has been registered in Grant ecosystem shares the same OAuth credentials for each provider.
For example, imagine we have two PWA applications, React and Angular versions. We don't need to provide two sets of credentials for Google OAuth, we only use one and flow stays the same.

Beside registering providers, Grant allows to enable and disable them whenever you want to.
Imagine a situation where Rocket.Chat, the main Meteor application exposes only Google OAuth but we already defined Facebook and GitHub in Grant. You can just turn them off.

Grant also exposes an endpoint that shows which providers are enabled and used so you can make only those visible in your application.

We also created a few packages to have something to start with: <br/>
[`rocketchat:grant-facebook`](https://github.com/RocketChat/Rocket.Chat/tree/develop/packages/rocketchat-grant-facebook) <br/>
[`rocketchat:grant-google`](https://github.com/RocketChat/Rocket.Chat/tree/develop/packages/rocketchat-grant-google) <br/>
[`rocketchat:grant-github`](https://github.com/RocketChat/Rocket.Chat/tree/develop/packages/rocketchat-grant-github) <br/>

If anyone wants to contribute by adding more grants, here is a [npm package with several integrations](https://github.com/simov/grant#150-supported-providers--oauth-playground)



