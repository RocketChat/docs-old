# Single Sign On \(Iframe\)

## Introduction

It's possible to authenticate users inside Rocket.Chat automatically from a third-party application, useful when embedding the chat inside another application or to make the users' life easier.

### Iframe

There are two ways to use the Iframe integration for this purpose and we will describe them below. It's important to note that both options require you to handle the user creation from your own application server using our APIs and make the login to retrieve the user's session token in order to pass it to the Rocket.Chat client via one of those ways:

#### Embedding Rocket.Chat inside an Iframe

If you already have the Rocket.Chat inside an iframe you can use call commands inside the Rocket.Chat's an iframe, [there is a command to login the user passing a token](../../developer/iframe-integration/commands.md#available-commands), for that you need to make your own way to retrieve the token from your own APIs and then pass it to the iframe. 

We suggest one common way, once your application loads:

1. Call your own API to retrieve the token, let's say `/api/rocketchat/token` 
2. Your API will validate your own session, probably via cookies
3. Your API will then call the [Rocket.Chat APIs](../../../api/rest-api/) to check if the user exists
   1. If it doesn't exists call the Rocket.Chat APIs to create the user
4. If the user exists, call the Rocket.Chat APIs to make the login and receive the token
5. Return the token in your API response
6. In your client, with the token in hands, call the [iframe methods to execute the login](../../developer/iframe-integration/commands.md#available-commands)

#### Embedding your own "Loading page" inside the Rocket.Chat

Even using Rocket.Chat inside an iframe you can still use this method to make the login flow rather than use the iframe commands above.

This flow requires a page to be rendered in place of the normal Rocket.Chat's login page, it can be a basic loading screen since it's used just for information purposes.

The other setting you configure here is the [API URL and Method ](../../developer/iframe-integration/authentication.md#api-url-and-api-method)to be called once a not authenticated user opens the Rocket.Chat. Then Rocket.Chat will make an HTTP call to you endpoint expecting a [JSON response containing the authToken](../../developer/iframe-integration/authentication.md#using-rocket-chat-api), so you should use cookies to identify if the user calling your own API is authenticated and make the process to generate the Rocket.Chat's token and return it:

1. Rocket.Chat will call the configured API and Method to retrieve the token
2. The API should validate your own session via cookies
3. The API will then call the Rocket.Chat APIs to check if the user exists
   1. If it doesn't exists call the Rocket.Chat APIs to create the user
4. If the user exists, call the Rocket.Chat APIs to make the login and receive the token
5. Return the token in your API response in JSON format as [described here](../../developer/iframe-integration/authentication.md#using-rocket-chat-api)
6. Rocket.Chat will use the token automatically to make the authentication

{% hint style="warning" %}
For this implementation you will need to configure [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) and [X-FRAME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options):

1. Your server should **not** block the page you want to load inside the iframe, check the [X-FRAME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) for more information on how to prevent this.
2. Your server should **not** block the calls **from** the Rocket.Chat's domain to your configured API endpoint, calls between domains are often blocked by default, please check the [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) for more information on how to prevent this.
{% endhint %}

