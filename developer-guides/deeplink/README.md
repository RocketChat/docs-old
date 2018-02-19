# Deeplink

**This feature is only supported in our iOS native app right now.**

## General information

> rocketchat://

## Authentication

### Without token

**Params:**

- host: The host of the server;

**Example:**

> rocketchat://auth?host=foo.bar.com

### With token

**Params:**

- host: The host of the server;
- token: The token of the user to be authenticated;
- userId: The id of the user to be authenticated;

**Example:**

> rocketchat://auth?host=foo.bar.com&token=123abc&userId=1234abcd

## Channel / Group / DM

**Params:**

- host: The host of the server;
- rid: The rid of the room to be opened;
- path (optional): The path URL to be opened on the web;

**Example:**

> rocketchat://room?host=foo.bar.com&rid=1234&path=group/important
