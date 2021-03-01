---
description: All the possible context types
---

# EventContext

The event context holds all the possible context types, currently we only have the `room` context, and it is defined as an ENUM, as seem below.

```typescript
export enum EventContext {
	ROOM = 'room',
}
```

