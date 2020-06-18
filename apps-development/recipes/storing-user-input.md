# Storing User Input

## Introduction

The Rocket.Chat Apps-Engine provides `persistenceRead: IPersistenceRead`  and`persistence: IPersistence` to help you read/write data from or to the RocketChat database.

We can get `persistenceRead: IPersistenceRead` through the following way:

```typescript
// Get a persistence reader if you are using it in a method
// Here `this` means the main App class instance
const persistenceRead = this.getAccessors().reader.getPersistenceReader();

// Some methods provideds `read: IRead` parameter, so that you get a persistence
// reader through this parameter too.
const persistenceRead = read.getPersistenceRead();
```

For `persistence: IPersistence`, you can only fetch it through parameter way, which means you can not  persist data within a method \(typically is an event handler that you are going to implement\) if the method doesn't have a `persistence: IPersistence` parameter.

```typescript
someMethod(context, read: IRead, persistence: IPersistence) {
    console.log(persistence); // The only way to fetch a persistence writer object
}
```

## Examples

Let's understand its usages with some examples:

```typescript
import { IAppAccessors, IHttp, ILogger, IPersistence, IRead } from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IMessage, IPreMessageSentPrevent } from '@rocket.chat/apps-engine/definition/messages';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';

export class MessageEventsApp extends App implements IPreMessageSentPrevent {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    public async executePostMessageSent(message: IMessage, read: IRead, http: IHttp, persistence: IPersistence, modify: IModify): Promise<void> {

        // Create an association so that we can find these records next time
        const associations: Array<RocketChatAssociationRecord> = [
            new RocketChatAssociationRecord(RocketChatAssociationModel.MISC, 'post'),
        ];
        // Persist the text of the message with associations
        if (message && message.text) {
            await persis.createWithAssociations(message.text, associations);
        }
    }
}
```



