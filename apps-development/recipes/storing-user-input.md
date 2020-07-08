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

For `persistence: IPersistence`, you can only obtain it through parameter approach, which means you can not  persist data within a method \(typically is an event handler that you are going to implement\) if the method doesn't have a `persistence: IPersistence` parameter.

```typescript
function someMethod(context, read: IRead, persistence: IPersistence) {
    console.log(persistence); // The only way to fetch a persistence writer object
}
```

## Examples

Below is a complete example to show how we can manage persistence methods with a class. Imagine that you are going to persist some messages. You can create a class called `MessagePersistence` or whatever name. Then you can add a series of static methods like below to `add/remove/query` data from the database.

```typescript
import { IPersistence, IPersistenceRead } from '@rocket.chat/apps-engine/definition/accessors';
import { RocketChatAssociationModel, RocketChatAssociationRecord } from '@rocket.chat/apps-engine/definition/metadata';
import { IRoom } from '@rocket.chat/apps-engine/definition/rooms';

export class MessagePersistence {
    // add a record
    public static async persist(persis: IPersistence, room: IRoom, id: string): Promise<boolean> {
        const associations: Array<RocketChatAssociationRecord> = [
            new RocketChatAssociationRecord(RocketChatAssociationModel.MISC, 'message'), 
            new RocketChatAssociationRecord(RocketChatAssociationModel.ROOM, room.id),
            new RocketChatAssociationRecord(RocketChatAssociationModel.MISC, id),
        ];

        try {
            await persis.updateByAssociations(associations, { id }, true);
        } catch (err) {
            console.warn(err);
            return false;
        }

        return true;
    }

    // query all records within the "scope" - message
    public static async findAll(persis: IPersistenceRead): Promise<Array<string>> {
        const associations: Array<RocketChatAssociationRecord> = [
            new RocketChatAssociationRecord(RocketChatAssociationModel.MISC, 'message'),
        ];

        let result: Array<string> = [];
        try {
            const records: Array<{ id: string }> = (await persis.readByAssociations(associations)) as Array<{ id: string }>;

            if (records.length) {
                result = records.map(({ id }) => id);
            }
        } catch (err) {
            console.warn(err);
        }

        return result;
    }

    // query all records by room within the "scope" - message
    public static async findByRoom(persis: IPersistenceRead, room: IRoom): Promise<Array<string>> {
        const associations: Array<RocketChatAssociationRecord> = [
            new RocketChatAssociationRecord(RocketChatAssociationModel.MISC, 'message'),
            new RocketChatAssociationRecord(RocketChatAssociationModel.ROOM, room.id),
        ];

        let result: Array<string> = [];
        try {
            const records: Array<{ id: string }> = (await persis.readByAssociations(associations)) as Array<{ id: string }>;

            if (records.length) {
                result = records.map(({ id }) => id);
            }
        } catch (err) {
            console.warn(err);
        }

        return result;
    }

    // query all records by room within the "scope" - message
    public static async removeByRoom(persis: IPersistence, room: IRoom): Promise<boolean> {
        const associations: Array<RocketChatAssociationRecord> = [
            new RocketChatAssociationRecord(RocketChatAssociationModel.MISC, 'message'),
            new RocketChatAssociationRecord(RocketChatAssociationModel.ROOM, room.id),
        ];

        try {
            await persis.removeByAssociations(associations);
        } catch (err) {
            console.warn(err);
            return false;
        }

        return true;
    }

    // remove all records by id within the "scope" - message
    public static async removeById(persis: IPersistence, id: string): Promise<boolean> {
        const associations: Array<RocketChatAssociationRecord> = [
            new RocketChatAssociationRecord(RocketChatAssociationModel.MISC, 'message'),
            new RocketChatAssociationRecord(RocketChatAssociationModel.MISC, id),
        ];

        try {
            await persis.removeByAssociations(associations);
        } catch (err) {
            console.warn(err);
            return false;
        }

        return true;
    }

    // remove all records within the "scope" - message
    public static async clear(persis): Promise<boolean> {
        const associations: Array<RocketChatAssociationRecord> = [
            new RocketChatAssociationRecord(RocketChatAssociationModel.MISC, 'message'),
        ];

        try {
            await persis.removeByAssociations(associations);
        } catch (err) {
            console.warn(err);
            return false;
        }

        return true;
    }
}
```



