# Set Reaction

Reacting to messages is a convenient way to "react" to messages with emojis, allowing for a wide variety of options for integrations, questions, and whatever else people can come up with.

## Requirements

| Logged In | Permission | Setting |
| :--- | :--- | :--- |
| Yes | _none_ | _none_ |

## Example Call

Setting and removing a reaction requires a call to the same method with the same parameters. The first parameter is the reaction which is also the `emoji`, the second parameter is the message id of which the reaction is happening against and the third parameter is optional and work like a setter.

```javascript
{
    "msg": "method",
    "method": "setReaction",
    "id": "22",
    "params": [
        ":nerd:",
        "messageId"
        true/false
    ]
}
```

## Example Response

```javascript
{
    "msg": "result",
    "id": "22"
}
```

## See Also

* [Reacting to Messages User Guide](../../../guides/user-guides/messaging.md)

