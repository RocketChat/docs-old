# Livechat Realtime API

This API is intended to be used for having a livechat conversation;


- First of all you need to generate a visitor token (any random string);
- Call [livechat:getInitialData](getInitialData.md) passing `visitorToken` as first argument, the response will be an object containing a livechat [configuration object](getInitialData.md#response) with following properties:

| Field | Type | Description |
| :--- | :--- | :--- |
| `enabled` | `Boolean` | If wheter livechat is enabled for that server or not |
| `online` | `Boolean` | If there are livechat agents online |
| `room` | `String` | The current conversation room for the current guest user |
| `registrationForm` | `Boolean` | If the registration form should be displayed or not. See [Registration Form](registration.md) |
| `displayOfflineForm` | `Boolean` | If should show a contact form if no agents online. See [Offline Form](offline-form.md) |
| `triggers` | `Array` | Array of livechat triggers. See [Triggers](triggers.md) |
| `departments` | `Array` | Array of livechat departments. See [Registration Form](registration.md#Deparments) |

- Call [livechat:registerGuest](registerguest.md) to register user;
- With the response of [livechat:registerGuest](registerguest.md) you should call [login method](../method-calls/login/) passing the response token;
- Before sending the first message you have to generate a random `room _id`;
- Now you can send messages to method [sendMessageLivechat](sendMessageLivechat.md)
- Subscribe to: [stream-room-messages](../subscriptions/stream-room-messages/) and `stream-livechat-room`
- Get agent info by calling [livechat:getAgentData](getAgentData.md)
