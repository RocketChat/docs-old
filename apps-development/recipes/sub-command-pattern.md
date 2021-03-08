---
description: Creating sub-commands in your slashcommand
---

# Sub-command pattern

In this recipe we will create a slashcommand that has two sub-commands. We will use the [App.RocketChat.Tester](https://github.com/RocketChat/Apps.RocketChat.Tester) as the base project for it. All the code for this recipe is in the branch recipes/sub-command-pattern.

You can see the complete documentation on Slashcommands in Rocket.Chat Apps at [`ISlashCommand`'s docs page](https://rocketchat.github.io/Rocket.Chat.Apps-engine/interfaces/islashcommand.html).

## Moving parts

You'll need to have handy:

* A Rocket.Chat server to deploy the app to
* Our [Tester App](https://github.com/RocketChat/Apps.RocketChat.Tester) or a newly created app \(your choice\)

## Create the slashcommand

Our "main command" \(the slashcommand\) will be called `phone`, and we will give it two sub commands, `text` and `call`, so when we use them, they will be as follows:

* `/phone text`
* `/phone call`

First, create a `slashcommands` directory at the root of the project and add a file named `PhoneCommand.ts`. Then add the following code:

```typescript
import {
    IHttp,
    IModify,
    IRead,
} from '@rocket.chat/apps-engine/definition/accessors';
import {
    ISlashCommand,
    SlashCommandContext,
} from '@rocket.chat/apps-engine/definition/slashcommands';

export class PhoneCommand implements ISlashCommand {
    public command = 'phone'; // [1]
    public i18nParamsExample = '';
    public i18nDescription = '';
    public providesPreview = false;

    public async executor(context: SlashCommandContext, read: IRead, modify: IModify, http: IHttp): Promise<void> {
        const [subcommand] = context.getArguments(); // [2]

        if (!subcommand) { // [3]
            throw new Error('Error!');
        }

        switch (subcommand) { // [4]
            case 'text': // [5]
                console.log('Texting!');
                break;

            case 'call': // [6]
                console.log('Calling!');
                break;

            default: // [7]
                throw new Error('Error!');
        }
    }
}
```

What this code tells us:

* \[1\] I want my command to be called `phone`.
* When it gets executed, \[2\] I want to get the argument the user passed after the command and to use it as the subcommand.
* \[3\] The argument is mandatory
* \[4\] Try to match the argument in the list of allowed subcommands 
* \[5\] If `text` is match, log "Texting!"
* \[6\] If `call` is match, log "Calling!"
* \[7\] If anything else will throw an error

> Learn more about Slashcommands in Rocket.Chat Apps at [`ISlashCommand`'s docs page](https://rocketchat.github.io/Rocket.Chat.Apps-engine/interfaces/islashcommand.html).

## Register the slashcommand

After getting the slashcommand's code done, we have to register it at the app's main class, at the project's root.

```typescript
import { IAppAccessors, IConfigurationExtend, ILogger } from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';
import { PhoneCommand } from './slashcommands/PhoneCommand'; // [1]

export class RocketChatTester extends App {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    public async extendConfiguration(configuration: IConfigurationExtend) {
        configuration.slashCommands.provideSlashCommand(new PhoneCommand()); // [2]
    }
}
```

Here we \[1\] import our new slashcommand class and then \[2\] register it in the app's configuration. Now it is available for us.

## Deploy to the server

To deploy the app, run: `rc-apps deploy --url <server_url>><server_port> -u <user> -p <pwd>`

## Finally: calling the slashcommand

After deploying the app, you can type in any channel `/phone text` and the app will print _"Texting!"_ to the console, or you can type `/phone call` and the app will print _"Calling!"_ to the console.

> If you don't see the result, enable info logs in your instance at _Administration &gt; Logs &gt; Log Level_ by selecting "1 - Errors and Information".

## Bonus: print the texts in the chat

Now, instead of console logging data to the instance's log, let's display the output in the chat.

In the `PhoneCommand.ts`, add the following private method:

```typescript
    private async sendMessage(context: SlashCommandContext, modify: IModify, message: string): Promise<void> {
        const messageStructure = modify.getCreator().startMessage();
        const sender = context.getSender(); // [1]
        const room = context.getRoom(); // [2]

        messageStructure
        .setSender(sender)
        .setRoom(room)
        .setText(message); // [3]

        await modify.getCreator().finish(messageStructure); // [4]
    }
```

This function \[1\] gets the user who called the command \(in this case, yours\), \[2\] selects the room in which the command was run, sets the received string as the message and then \[4\] sends the message in the room.

> To know more about messaging, you can go to the [IMessageBuilder docs](https://rocketchat.github.io/Rocket.Chat.Apps-engine/interfaces/imessagebuilder.html).

After that, change the `console.log`s from the switch block of the `executor` method and call the `sendMessage` method instead:

```typescript
    case 'text':
        await this.sendMessage(context, modify, 'Texting!');
        break;

    case 'call':
        await this.sendMessage(context, modify, 'Calling!');
        break;
```

Important to note: `context` and `modify` are the arguments passed to the `executor` method and they will be passed over to the `sendMessage` method.

Now, instead of just printing text to the console, we print it in the channel we called the command from.

Save the file and redeploy the app by running:

`rc-apps deploy --url <server_url>><server_port> -u <user> -p <pwd> --update`

Now, when you run the slashcommand `/phone text` or `/phone call`, you'll receive the response in the chat, as your user.

