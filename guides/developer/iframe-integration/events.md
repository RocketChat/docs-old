# Iframe Events

## Events sent

Here is a list of events triggered from Rocket.Chat when the iframe integration is enabled:

| Event name | Description |
| :--- | :--- |
| `notification` | Fired when a user receives a notification |
| `unread-changed-by-subscription` | Fired each time a user's subscription record changes \(i.e.: unread counts, etc\) |
| `unread-changed` | Fired when the pages title changes |
| `room-opened` | Fired when a room is opened |
| `new-message` | Fired every time the opened room receives a new message |
| `click-user-card-message` | Fired when the user clicks on a username link |
| `click-mention-link` | Fired when the user clicks on a mention link |
| `click-message-link` | Fired when the user clicks on a posted link |
| `click-action-link` | Fired when the user clicks on an action link button \(i.e.: "click to join" to video conferences\) |

Below there is a sample code that listens to events fired from Rocket.Chat opened on an `iframe`:

```javascript
window.addEventListener('message', function(e) {
    console.log(e.data.eventName); // event name
    console.log(e.data.data); // event data
});
```

