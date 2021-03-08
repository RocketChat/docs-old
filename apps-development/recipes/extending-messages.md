---
description: How to edit messages so as to add custom fields and attachments.
---

# Extending Messages

In this recipe, we will create an app that is called through a slash command, sends a message and extends it in order to attach one image to it and add a custom field.

## Attachments

Rocket.Chat supports numerous types of attachments \(and applicable **customisations** to these attachments\) which can be added to messages. For instance, you are able to attach images, documents, videos or audio files to messages, and creating your own **attachment class** is the first step in order to do so.

In this recipe, we will need to create an `ImageAttachment` class in the project's root, which can be implemented as follows:

```typescript
import { IMessageAttachment } from '@rocket.chat/apps-engine/definition/messages';

export class ImageAttachment implements IMessageAttachment{
    imageUrl?: string; // [1]

    constructor(imgUrl: string){
        this.imageUrl = imgUrl;
    }

}
```

Here we **\[1\]** use a class' attribute with the **same identifier and type as in the `IMessageAttachment` interface**, which is essential to make your linked media visible to the user \(since only the variables in your attachment class which are defined in the `IMessageAttachment` interface will be used to retrieve the attachment's media\).

It is also possible to create your own classes for video or audio attachments, or even keep them all together in one single attachment class that may cover all of these possibilities. It's all up to you! Just be sure to use the same attributes described in the `IMessageAttachment.d.ts` file.

{% hint style="info" %}
The **audio** and **video** supported in Rocket.Chat message's attachments are the same as in HTML audio and video tags.
{% endhint %}

## Custom Fields

Custom fields are sets of structures linked to messages where each field is arranged such as a dictionary entry. That is, each field must present a **key** and a corresponding **value**. These fields are stored in the server's database within its corresponding messages so that they can be retrieved later.

## Create new auxiliary methods

It is helpful to define some auxiliary methods inside our slash command class so as to keep our code clear and concise.

### Method: `sendMessage`

Firstly, we will need to modify the [previoulsy given `sendMessage` method](https://docs.rocket.chat/apps-development/recipes/sub-command-pattern#bonus-print-the-texts-in-the-chat) so that the message's ID is returned after the message has been sent. Thus, the method must now return a `Promise<string>` instead of a `Promise<void>`.

The resulting `sendMessage` method is given below:

```typescript
private async sendMessage(context: SlashCommandContext, modify: IModify, message: string): Promise<string> {
    const messageStructure = modify.getCreator().startMessage();
    const sender = context.getSender();
    const room = context.getRoom();

    messageStructure
    .setSender(sender)
    .setRoom(room)
    .setText(message);

    return (await modify.getCreator().finish(messageStructure)); // [1]
}
```

The only change that must be made \(in comparison to the `sendMessage` described in previous pages\) is **\[1\]** to return the result of the `finish` method, which is the ID of the message that has just been sent.

### Method: `getMessageExtender`

After applying the changes in the `sendMessage` method and having the sent message's ID handy, we are now able to obtain the `messageExtender` object, which allows us to add custom fields and attachments.

The following asynchronous method can be used in order to obtain the `messageExtender` object:

```typescript
private async getMessageExtender(context: SlashCommandContext, modify: IModify, messageId: string): Promise<IMessageExtender>{
    const sender = context.getSender();
    return modify.getExtender().extendMessage(messageId, sender); // [1]
}
```

Here we **\[1\]** use the message's ID returned by the `sendMessage` method in order to obtain the `messageExtender` object using the `modifyExtender` object.

## Create the slash command

After developing the methods in the previous steps, we just now need to trigger these methods using a slash command, which can be done with the following code:

```typescript
import { IHttp, IModify, IPersistence, IRead, IMessageExtender } from '@rocket.chat/apps-engine/definition/accessors';
import { ISlashCommand, SlashCommandContext } from '@rocket.chat/apps-engine/definition/slashcommands';
import { ImageAttachment } from '../ImageAttachment';

export class ExtendMessageCommand implements ISlashCommand{
    public command = 'extend-message';
    public i18nParamsExample = '';
    public i18nDescription = '';
    public providesPreview = false;

    public async executor(context: SlashCommandContext, read: IRead, modify: IModify, http: IHttp, persis: IPersistence): Promise<void> {
        const messageId = await this.sendMessage(context, modify, 'Sending a message!'); // [1]
        const messageExtender = await this.getMessageExtender(context, modify, messageId); // [2]
        const value = 1;
        const img = new ImageAttachment('https://open.rocket.chat/images/logo/logo.svg'); // [3]
        
        messageExtender.addCustomField('key', value); // [4]
        messageExtender.addAttachment(img); // [5]

        await modify.getExtender().finish(messageExtender); // [6]
    }

    private async sendMessage(context: SlashCommandContext, modify: IModify, message: string): Promise<string> {
        const messageStructure = modify.getCreator().startMessage();
        const sender = context.getSender();
        const room = context.getRoom();

        messageStructure
        .setSender(sender)
        .setRoom(room)
        .setText(message);

        return (await modify.getCreator().finish(messageStructure));
    }

    private async getMessageExtender(context: SlashCommandContext, modify: IModify, messageId: string): Promise<IMessageExtender>{
        const sender = context.getSender();
        return modify.getExtender().extendMessage(messageId, sender);
    }
}
```

The main actions performed by the code above are:

* **\[1\]** Sends a message and stores the sent message's ID in the `messageId` variable;
* **\[2\]** Uses the sent message's ID. The `messageExtender` object is returned by the `getMessageExtender` method and stored in the `messageExtender` variable;
* **\[3\]** Creates the attachment object as an instance of the `ImageAttachment` class. Here, the attachment is an image;
* **\[4\]** Adds a custom field with the key `'key'` linked to the value 1 using the **`addCustomField`** **method** from the messageExtender object. Many more custom fields can be added to the same message just by calling the same method with distinct keys \(and values of your choice\);
* **\[5\]** Adds the image attachment to the message using the **`addAttachment`method** from the `messageExtender` object. Many attachments can be added all at once using the **`addAttachments` method**;
* **\[6\]** Finishes the modifyExtender object, which is crucial so as to apply the extensions made to the message and make them visible to the user.

## Register the slash command

After having the slash command's code done, we have to register it in the app's main class, in the project's root.

```typescript
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';
import { ExtendMessageCommand } from './slashcommands/ExtendSlashcommand'; // [1]

export class RocketChatTester extends App {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    public async extendConfiguration(configuration: IConfigurationExtend) {
        configuration.slashCommands.provideSlashCommand(new ExtendMessageCommand()); // [2]
    }
}
```

Here we **\[1\]** import our new slash command class and then **\[2\]** register it in the app's configuration. Now it is available for us.

## Deploy to the server

To deploy the app, run: `rc-apps deploy --url <server_url><server_port> -u <user> -p <pwd>`

## Finally: running the slash command

After performing the app's deployment, it is possible to run the slash command `/extend-message` in any channel.

Running the registered slash command will send a message in the current channel, which will be edited in order to add an image attachment and a custom field. The attached image can be seen in the edited message. In addition, the custom fields created can be found in any database client of your choice.

