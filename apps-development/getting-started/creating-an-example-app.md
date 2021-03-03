# Creating an App

The development tools provide a command to quickly scaffold a new Rocket.Chat App. Simply run `rc-apps create` and a small form will ask you to provide information about the app you are developing, like its name \(in this example we will call it `liftoff`\), app's description, and developer info. This information will be placed in a file called `app.json` in the project's root folder.

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

A Slashcommand is a way to call the app installed in Rocket.Chat. Your app can have multiple slashcommands and subcommands. In our example, we will add the `liftoff` slashcommand and it will be called like this by the user inside the chat:

```text
/liftoff
```

First, we create a new directory called `commands` in our project's root and create a file called `liftoff.ts`. You can copy the file's content:

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

> You can learn more about organising complex slash commands in our [Sub-command pattern](../recipes/sub-command-pattern.md) recipe

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

See [Installing Rocket.Chat for Developing](../../guides/developer/quick-start.md) to run Rocket.Chat in develop mode. Enable Apps development mode by navigating to `Administration > General` then scroll down to Apps and click on the `True` radio button over the Enable development mode.

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

