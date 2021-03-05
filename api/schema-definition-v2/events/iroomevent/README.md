---
description: >-
  The event is a specialization of the IEvent interface, specific for
  room-related events.
---

# IRoomEvent

### Interface Definition

```typescript
export interface IRoomEvent {
	ct: EventContext.ROOM;
	t: RoomEventTypeDescriptor;
	d: EventRoomDataDefinition;
}
```

| Property | Description |
| :--- | :--- |
| ct | This is the context type, hardcoded to `EventContext.ROOM` \([EventContext](../eventcontext.md)\), because this is the room specialized event. |
| t | The type of the event, in this case, one of the possibilities described on [RoomEventTypeDescriptor](roomeventtypedescriptor.md) |
| d | The payload of the event, one of the [RoomEventDataDefinition](room-event-data-definition/) |

