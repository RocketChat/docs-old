# GraphQL API Setup

## General information

In order to be able to use the GraphQL API, this feature has to be enabled by the administrator. In the admin panel,
check `General` -> `GraphQL API`.

After that, you are able to use the GraphQL API, under `/api/graphql` endpoint.

## First steps

For convenience, Rocket.Chat is shipped with a tool called [GraphiQL](https://github.com/graphql/graphiql). That's
an interactive in-browser GUI for communicating with the GraphQL instance.

GraphiQL is available under `/graphiql` in your browser.

## Secured connection (WebSocket)

A WebSocket connection can be used for communicating with GraphQL.
One example would be the `chatMessageAdded` event (subscriptions).

By default, this WebSocket connection can be established in unsecured mode, only (`ws://`). If you want to use the
secured version (`wss://`), there's a slight modification to be made:

Currently, there's no way of connecting **directly** to the secured WebSocket. So you'll need to set up a kind of
reverse proxy, that takes a standard HTTP connection and upgrades it to a WebSocket.

For example, for the nginx webserver, it could look like this:

```
server {
    listen 443 ssl;
    # That's the HTTPS config (...)
    server_name my.example.com

    location /websocket-example {
        proxy_pass http://127.0.0.1:3100;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
    }
}
```

In your application, you can use the following URI pattern:

```
wss://my.example.com/websocket-example/
```
