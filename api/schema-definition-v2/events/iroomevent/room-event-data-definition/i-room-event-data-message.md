---
description: This is the interface definition for message event's data
---

# IRoomEventDataMessage

This payload holds the necessary message properties, the definition is:

```typescript
export interface IEventDataMessage {
	t: EventMessageTypeDescriptor;
	u: IUser;
	msg: string;
	mentions?: Array<string>;
	channels?: Array<string>;
	reactions?: Array<object>;
	drid?: string;
	file?: {
		_id: string;
		name: string;
		type: string;
	};
	pinned?: Array<object>;
	starred?: Array<object>;
	deleted?: boolean;
}
```

| Property | What is it? |
| :--- | :--- |
| t | The type descriptor of the message, more in [EventMessageTypeDescriptor](../../event/eventmessagetypedescriptor.md) |
| u | This holds the user which emitted this message, you can see the definition in [IUser](../../../user.md) |
| msg | The actual message, the text |
| mentions | \[OPTIONAL\] Holds the user mentions related to this message |
| channels | \[OPTIONAL\] Holds the channel mentions related to this message |
| drid | \[OPTIONAL\] Holds the discussion room id, the discussion which this message is attached to |
| file | \[OPTIONAL\] If there is an attachment, the file information will be here |
| pinned | \[OPTIONAL\] &lt;add description&gt; |
| starred | \[OPTIONAL\] &lt;add description&gt; |
| deleted | \[OPTIONAL\] Was this message deleted? |

