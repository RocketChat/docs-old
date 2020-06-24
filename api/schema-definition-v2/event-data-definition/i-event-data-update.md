---
description: This is an interface that holds event updates
---

# IEventDataUpdate

The interface definition is:

```typescript
export interface IEventDataUpdate<T extends EventDataDefinition> {
	[key: string]: T;
}
```

