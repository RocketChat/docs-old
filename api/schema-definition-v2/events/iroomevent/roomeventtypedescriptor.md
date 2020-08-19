---
description: >-
  The room event type descriptor is what determines the type of a room context
  event.
---

# RoomEventTypeDescriptor

The RoomEventTypeDescriptor is an enum:

```typescript
export enum RoomEventTypeDescriptor {
	ROOM = 'room',
	DELETE_ROOM = 'droom',
	PRUNE_ROOM_MESSAGES = 'prune',
	MESSAGE = 'msg',
	EDIT_MESSAGE = 'emsg',
	DELETE_MESSAGE = 'dmsg',
}
```

| Descriptor | Why does it exist? |
| :--- | :--- |
| ROOM | This is the beginning of the history of a room, the genesis of that context \(and context id\). The payload can be seen [IEventDataRoom](room-event-data-definition/i-room-event-data-room.md) |
| DELETE\_ROOM | When a room is deleted, an event of this type is generated. This event has no payload, so it uses [IEventDataEmpty](../event/event-data-definition/i-event-data-empty.md) |
| MESSAGE | Every sent message generates an event of type MESSAGE, check more of the payload in [IEventDataMessage](room-event-data-definition/i-room-event-data-message.md) |
| EDIT\_MESSAGE | When the message's text is edited, or a reaction is added, or any other kind of update happens, this event is generated. It uses the same payload as the MESSAGE event, but wrapped like [IEventDataUpdate](../event/event-data-definition/i-event-data-update.md)&lt;[IEventDataMessage](room-event-data-definition/i-room-event-data-message.md)&gt; |
| DELETE\_MESSAGE | When a message is deleted, an event of this type is generated. This event has no payload, so it uses [IEventDataEmpty](../event/event-data-definition/i-event-data-empty.md) |

