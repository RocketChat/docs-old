---
description: >-
  The event type descriptor is what determines the type of that event, which it
  will define how to handle each event correctly.
---

# EventTypeDescriptor

The EventTypeDescriptor is an enum:

```typescript
export enum EventTypeDescriptor {
	// Rooms
	ROOM = 'room',
	DELETE_ROOM = 'droom',
	MESSAGE = 'msg',
	EDIT_MESSAGE = 'emsg',
	DELETE_MESSAGE = 'dmsg',
}
```

| Descriptor | Why does it exist? |
| :--- | :--- |
| ROOM | This is the beginning of the history of a room, the genesis of that context \(and context id\). The payload can be seen in [IEDataRoom](e-data-definition/iedataroom.md) |
| DELETE\_ROOM | When a room is deleted, an event of this type is generated |
| MESSAGE | Every sent message generates an event of type MESSAGE, check more of the payload in [IEDataMessage](e-data-definition/i-e-data-message.md) |
| EDIT\_MESSAGE |  |
| DELETE\_MESSAGE |  |

