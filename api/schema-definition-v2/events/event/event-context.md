---
description: >-
  The event context determines the context that a give event belongs, currently
  we only have the "room" context type, but the system is already prepared for
  new contexts.
---

# EventContext

The context is important to be able to differently handle any number of types of events, even determine which ones need to be federated, for example.

The EventContext is an enum, ready to accept more context types, as seen here:

```typescript
export enum EventContext {
	ROOM = 'room',
}
```



