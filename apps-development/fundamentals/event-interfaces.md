# Event Interfaces

## Concepts

### Interfaces

[Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html#class-types) are a typescript feature that can enforce a class meets a particular contract. The Rocket.Chat Apps-Engine provides various kinds of event interfaces that you can implement one or more of them for your app.

Implementing an event interface if you want to listen to this event and handle its payload data. Typically, each interface contains one method that will be called before/after a Rocket.Chat event.

{% hint style="info" %}
Some old event interface, for instance, the IPreMessageSentPrevent interface contains two methods: one is `excutePreMessageSentPrevent`, which is the real event handler; and the other one is `checkPreMessageSentPrevent`, which is used to signal to Apps-Engine whether the real event handler should actually be executed. We are going to deprecate `check*` methods and won't add `check*` methods to event interfaces anymore. Please avoid using them as much as possible.
{% endhint %}

### Handlers

Handlers are essential "listeners" for different events, except there are various ways to handle an event. When something happens there are `pre` and `post` handlers. The set of `pre` handlers happens before the event is finalized. The set of `post` handlers happens after the event is finalized. With that said, the rule of thumb is that if you are going to modify, extend, or change the data backing the event then that should be done in the `pre` handlers. If you are simply wanting to listen for when something happens and not modify anything, then the `post` is the way to go.

The order in which they happen is:

* Pre**Event**Prevent
* Pre**Event**Extend
* Pre**Event**Modify
* Post**Event**

Here is an explanation of what each of them means:

* **Prevent**: This is ran to determine whether the event should be prevented or not.
* **Extend**: This is ran to allow extending the data without being destructive of the data \(adding an attachment to a message for example\).
* **Modify**: This is ran and allows for destructive changes to the data \(change any and everything\).
* Post**Event**: Is mostly for simple listening and no changes can be made to the data.

For simplicity consideration, we are gradually moving to the new pattern. There will be only two types of event interfaces added later:

* IPre**Event**
* IPost**Event**

IPre**Event** means handlers which are called before an event happens and IPost**Event** means handlers that are called after an event happens.

## Examples

Let's try to implement some event interfaces to see how the event handlers work:

### IPreMessageSentPrevent

#### Code

```typescript
import { IAppAccessors, IHttp, ILogger, IPersistence, IRead } from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IMessage, IPreMessageSentPrevent } from '@rocket.chat/apps-engine/definition/messages';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';

export class MessageEventsApp extends App implements IPreMessageSentPrevent {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    public async executePreMessageSentPrevent(message: IMessage, read: IRead, http: IHttp, persistence: IPersistence): Promise<boolean> {
        return true;
    }
}
```

#### Result

![Message prevented by app](../../.gitbook/assets/image%20%2818%29.png)

And you will see this in the server console

```javascript
A Rocket.Chat App prevented the message sending. {
    _id: 'sikKmLrZoQRaFzBwg',
   rid: 'MCpMFsFqPfWhKGxXQ',
   msg: "This message won't be sent",
   ts: 2020-06-24T14:07:02.690Z,
   u: {
       _id: '2oKGD8QfRhyue62nX',
       username: 'random.user',
       name: undefined
   }
}
```

This simple app tries to prevent any message sending on this server. In the real world, you might \(most likely\) want to prevent messages according to the payload data provided instead of preventing all messages on the server.

### IPostMessageSent

#### Code

```typescript
import { IAppAccessors, IHttp, ILogger, IMessageBuilder, IModify, IPersistence, IRead } from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IMessage, IPostMessageSent } from '@rocket.chat/apps-engine/definition/messages';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';
import { IRoom } from '@rocket.chat/apps-engine/definition/rooms';

export class MessageEventsApp extends App implements IPostMessageSent {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    public async executePostMessageSent(message: IMessage, read: IRead, http: IHttp, persistence: IPersistence, modify: IModify): Promise<void> {
        if (message.room.slugifiedName === 'general') {
            return;
        }

        const general = await read.getRoomReader().getByName('general');
        const messageBuilder = modify.getCreator().startMessage({
            text: `@${message.sender.username} said "${message.text}" in #${message.room.displayName}`,
        } as IMessage);

        if (!general) {
            return;
        }
        messageBuilder.setRoom(general);
        await modify.getCreator().finish(messageBuilder);
    }
}
```

#### Result

![Message redirected to \#general \(top\) from \#another-channel \(bottom\)](../../.gitbook/assets/image%20%2817%29.png)

This app is going to forward all messages sent to other channels, private groups or DMs to `#general`

## References

Besides the two event interfaces we introduced above, you can check the full event interfaces list [here](https://github.com/RocketChat/Rocket.Chat.Apps-engine/blob/alpha/src/definition/metadata/AppInterface.ts).

