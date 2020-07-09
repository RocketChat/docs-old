# Getting Started

## What is a Rocket.Chat App?

A Rocket.Chat App is an integration or a plugin which is created in an isolated environment. You can also create your own App and publish it on our official [Marketplace](https://rocket.chat/marketplace) to share with the world. Users can download your application from the marketplace and use it.

Below are a few guides which will help you get started with Rocket.Chat App CLI to create and publish your own applications.

Rocket.Chat provides an Apps Engine CLI which helps you easily create, deploy, and publish your own extensions for it. This guide will help you get started with the CLI to start creating your own apps.

## Rocket.Chat App Engine CLI

Our official Apps Engine [Command Line Interface \(CLI\)](https://github.com/RocketChat/Rocket.Chat.Apps-cli) is available on GitHub and published on [NPM](https://www.npmjs.com/package/@rocket.chat/apps-cli). It provides an easy interface for developing extensions. Follow the quick steps below to create your first application.

### Installation

Before installing the CLI make sure that you have [Node](https://nodejs.org/en/) already installed on your machine. To verify Node installation, use the following command in your terminal.

```bash
node -v
# v10.15.3
# It should return you a valid version.
```

Once you have installed Node, run the following command in your terminal to install the CLI globally.

```bash
npm install -g @rocket.chat/apps-cli
```

It will take a while to install the CLI depending upon your internet connection. After installation, run the following command to verify the installation.

```bash
rc-apps -v
# @rocket.chat/apps-cli/1.4.0 darwin-x64 node-v10.15.3
```

Note that the response may vary depending upon your machine and environment, but it should look similar. Now, you are all set to create your first app.

## Creating an Example App

The development tools provide a command to quickly scaffold a new Rocket.Chat App. Simply run `rc-apps create` and a small form will ask you to provide information about the app you are developing, like its name \(in this example we will call it `liftoff`\), app's description and developer info. This information will be placed in a file called `app.json` in the project's root folder.

You can check the [app-schema.json](https://github.com/RocketChat/Rocket.Chat.Apps-cli) file for all the detailed information and fields allowed in the app description file, the basic structure is similar to this:

```javascript
{
    "id": "88ce358a-5277-4356-a601-f519574303a4",
    "version": "0.0.1",
    "requiredApiVersion": "^1.4.0",
    "iconFile": "icon.png",
    "author": {
        "name": "rocket.chat",
        "homepage": "rocket.chat",
        "support": "rocket.chat"
    },
    "name": "liftoff",
    "nameSlug": "liftoff",
    "classFile": "LiftoffApp.ts",
    "description": "Tells if it is time to lift off"
}
```

### Start Developing

The basic creation of an App is based on extending the App class from the Rocket.Chat Apps definition library. Your class also has to implement the constructor and optionally the initialize function, for more details on those check the [App definition documentation](https://rocketchat.github.io/Rocket.Chat.Apps-engine/classes/app.html).

In this example, we already have our main file called `LiftoffApp.ts` that was generated when we first created our project:

```javascript
import {
    IAppAccessors,
    ILogger,
} from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';

export class LiftoffApp extends App {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }
}
```

Now let's add some functionality to it

#### Adding a Slashcommand

A Slashcommand is a way to call the app installed in Rocket.Chat. You app can have multiple slashcommands and subcommands. In our example we will add the `liftoff` slashcommand and it will be called like this by the user inside the chat:

```text
/liftoff
```

First we create a new directory called `commands` in our project's root and create a file called `liftoff.ts`. You can copy the file's content:

```javascript
import {ISlashCommand, SlashCommandContext} from '@rocket.chat/apps-engine/definition/slashcommands';
import {IModify, IRead} from '@rocket.chat/apps-engine/definition/accessors';
import {App} from '@rocket.chat/apps-engine/definition/App';

export class LiftoffCommand implements ISlashCommand {
    public command = 'liftoff';
    public i18nDescription = 'Tells the user if it is time to liftoff';
    public i18nParamsExample = '';
    public providesPreview = false;

    constructor(private readonly app: App) {}

    public async executor(context: SlashCommandContext, read: IRead, modify: IModify): Promise<void> {
        const message = 'Time to lift off!';

        const messageStructure = await modify.getCreator().startMessage();
        const sender = context.getSender(); // the user calling the slashcommand
        const room = context.getRoom(); // the current room

        messageStructure
        .setSender(sender)
        .setRoom(room)
        .setText(message);

        await modify.getCreator().finish(messageStructure);
    }
}
```

> You can learn more about organising complex slash commands in our [Sub-command pattern](recipes/sub-command-pattern.md) recipe

#### Registering the slashcommand

After adding our slashcomamnd logic, we have to register the slashcommand in out app by extending its configuration:

```javascript
import {
    IAppAccessors,
    ILogger,
    IConfigurationExtend,
} from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';

import { LiftoffCommand } from './commands/liftoff';

export class LiftoffApp extends App {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    protected async extendConfiguration(configuration: IConfigurationExtend): Promise<void> {
        await configuration.slashCommands.provideSlashCommand(new LiftoffCommand(this));
    }
}
```

We first had to import the `Liftoff` class and then register an instance of using the `provideSlashCommand` function. We pass the app's instance \(`this`\) so our slashcommand have access to all the functionalities of the app.

#### Updating the app

If you want to, for example, change the message sent to the room from `Time to lift off!` to `Lift off now!`, you have to simply save the modifications and run:

```text
rc-apps deploy --url http://localhost:3000 --username <your_username> --password <your_password> --update
```

The app will be updated and by sending `/liftoff`, the message will reflect the change you have made in the app.

### Testing the App

Now that you have your App ready, you can test it before submitting it.

To test your app, you need a Rocket.Chat server running locally on your machine and an admin user in it.

See [Installing Rocket.Chat for Developing](https://github.com/RocketChat/docs/tree/ec114736ec53cc927e2cbddeddbe07b652e2b70f/quick-start.md) to run Rocket.Chat in develop mode. Enable Apps development mode by navigating to `Administration > General` then scroll down to Apps and click on the `True` radio button over the Enable development mode.

or run it in preview mode with docker using the command:

```text
docker run -it --rm -p 3000:3000 -v `pwd`/rocketdb:/var/lib/mongodb rocketchat/rocket.chat.preview
```

Having the server running, simply run inside the app project's directory:

```text
rc-apps deploy --url http://localhost:3000 --username user_username --password user_password
```

Where:

`http://localhost:3000` is your local server URL \(if you are running in another port, change the `3000` to the appropriate port\)

`user_username` is the username of your admin user.

`user_password` is the password of your admin user.

If you want to update the app deployed in your Rocket.Chat instance after making changes to it, you can run:

```text
rc-apps deploy --url http://localhost:3000 --username user_username --password user_password --update
```

## Submitting Your App to the Marketplace

So, you just finished writing your first Rocket.Chat App, and you have successfully tested it locally which means you are ready to submit it to the Marketplace for others to use. You can now submit your App to the Marketplace.

### Packaging the app

Currently the Rocket.Chat servers and Marketplace allow submission of zip files, these files can be created by running `rc-apps package` which packages your app and creates the zip file under `dist` folder.

To submit your App simply run:

`rc-apps submit`

### Review process

When you submit an App, there is a three-step process that takes places. The first step, you submit the App to the Marketplace \(explained below\). Secondly, you will receive an email that asks for you to approve or reject the App submission \(more on this later as well\). Finally, after you approve the entry, then our staff will review it and determine whether it is approved or not.

## Webinar on Getting Started with Rocket.Chat Apps Development

We recently had an [incredible webinar](https://www.youtube.com/watch?v=PaFPeD6QG9k) on getting started with Rocket.Chat apps development. In this webinar, our amazing developers will help you understand the Apps CLI basics and how you can jump right into apps development.

[You can watch it here](https://www.youtube.com/watch?v=PaFPeD6QG9k).

