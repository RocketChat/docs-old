---
description: >-
  The event message type descriptor is what determines the type of a given
  message.
---

# EventMessageTypeDescriptor

The EventMessageTypeDescriptor is an enum:

```typescript
export enum EventMessageTypeDescriptor {
	MESSAGE = 'msg',
	MESSAGE_PINNED = 'message_pinned',
	DISCUSSION_CREATED = 'discussion-created',
}
```

| Descriptor | Why does it exist? |
| :--- | :--- |
| MESSAGE | A regular message, nothing special |
| MESSAGE\_PINNED | A message that was pinned to a channel |
| DISCUSSION\_CREATED | When a discussion is created, this message type is assigned |



