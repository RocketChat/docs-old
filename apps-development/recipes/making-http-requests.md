---
description: How to make your Rocket.Chat app connect with the outside world
---

# Making HTTP Requests

In this recipe we will create a slashcommand that runs a GET HTTP based on arguments you provide. We will use the [App.RocketChat.Tester](https://github.com/RocketChat/Apps.RocketChat.Tester) as the base project for it. All the code for this recipe is in the branch [recipes/http-requests](https://github.com/RocketChat/Apps.RocketChat.Tester/tree/recipes/http-requests).

You can see the complete documentation on HTTP requests in Rocket.Chat Apps at [`IHttp`'s docs page](https://rocketchat.github.io/Rocket.Chat.Apps-engine/interfaces/ihttp.html).

## Moving parts

You'll need to have handy:

* A Rocket.Chat server to deploy the app to
* Our [Tester App](https://github.com/RocketChat/Apps.RocketChat.Tester) or a newly created app \(your choice\)

## Create the slashcommand

Our command will be called `get`, so when we call it from the chat, we just have to type `/get <url>`.

First, let's create a `slashcommand` directory at the root of the project and add a file named `HTTPRequestCommand.ts`. Then add the following code:

{% code title="HTTPRequestCommand.ts" %}
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

export class HTTPRequestCommand implements ISlashCommand {
    public command = 'get'; // [1]
    public i18nParamsExample = '';
    public i18nDescription = '';
    public providesPreview = false;

    public async executor(context: SlashCommandContext, read: IRead, modify: IModify, http: IHttp): Promise<void> {
        const [url] = context.getArguments(); // [2]

        if (!url) { // [3]
            throw new Error('Error!');
        }

        await http.get(url); // [4]
    }
}
```
{% endcode %}

What this code tells us:

* **\[1\]** The command will be called `get`.
* When it gets executed, **\[2\]** it gets the argument the user passed after the command and use it as the url
* **\[3\]** The argument is mandatory
* **\[4\]** Make the get request with the provided argument

> Learn more about HTTP requests in Rocket.Chat Apps at [`IHttp`'s docs page](https://rocketchat.github.io/Rocket.Chat.Apps-engine/interfaces/ihttp.html).

Optionally, you can store the GET request in a constant to `console.log` it when the command gets executed.

```typescript
const response = await http.get(url);
console.log("result: " + response.data);
```

## Register the slashcommand

After getting the slashcommand's code done, we have to register it at the app's main class, at the project's root.

```typescript
import { IAppAccessors, IConfigurationExtend, ILogger } from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';
import { HTTPRequestCommand } from './slashcommands/HTTPRequestCommand'; // [1]

export class RocketChatTester extends App {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    public async extendConfiguration(configuration: IConfigurationExtend) {
        configuration.slashCommands.provideSlashCommand(new HTTPRequestCommand()); // [2]
    }
}
```

Here we **\[1\]** import our new slashcommand class and then **\[2\]** register it in the app's configuration. Now it is available for us.

## Deploy to the server

To deploy the app, run: `rc-apps deploy --url <server_url><server_port> -u <user> -p <pwd>`

## Finally: calling the slashcommand

After deploying the app, you can type in any channel `/get <some_url>` and the app will make a GET request to the provided url.

In this example we will use [JSONPlaceholder](https://jsonplaceholder.typicode.com) to get some fake data to test our app:

* Enter `/get https://jsonplaceholder.typicode.com/todos/1` in a chat
* Your Rocket.Chat instance will print out to the console the following:

  `result: {"userId":1,"id":1,"title":"delectus aut autem","completed":false}`

> If you don't see the result, enable info logs in your instance at _Administration &gt; Logs &gt; Log Level_ by selecting "1 - Errors and Information".

## Bonus: print the request in the chat

Now, instead of console logging data to the instance's log, let's display the output in the chat.

In the `HTTPRequestCommand.ts`, add the following private method:

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

This function **\[1\]** gets the user who called the command \(in this case, yours\), **\[2\]** selects the room in which the command was run, **\[3\]** sets the received string as the message and then **\[4\]** sends the message in the room.

> To know more about messaging, you can go to the [IMessageBuilder docs](https://rocketchat.github.io/Rocket.Chat.Apps-engine/interfaces/imessagebuilder.html).

After that, append this code at the end of the `executor` method:

```typescript
    const response = await http.get(url); // [1]
    const message = JSON.stringify(response.data, null, 2); // [2]
    await this.sendMessage(context, modify, message); // [3]
```

Instead of just making the request and not catching the response data, **\[1\]** we store the response in a constant, then **\[2\]** format its content as a string to **\[3\]** send it using our new `sendMessage` method.

Save the file and redeploy the app by running:

`rc-apps deploy --url <server_url><server_port> -u <user> -p <pwd> --update`

Now, when you run the slashcommand `/get https://jsonplaceholder.typicode.com/todos/1`, you'll receive the response in the chat, as your user, like the following:

```javascript
{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}
```

