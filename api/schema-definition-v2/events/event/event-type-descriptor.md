---
description: >-
  The event type descriptor is what determines the type of that event, which it
  will define how to handle each event correctly.
---

# EventTypeDescriptor

The EventTypeDescriptor is an enum:

```typescript
export enum EventTypeDescriptor {
	PING = 'ping'
}
```

| Descriptor | Why does it exist? |
| :--- | :--- |
| PING | The ping event is used to determine whether or not the server is alive. Still not being used, but it will be very important when federation is up using the new event system. |

