# Livechat Realtime API

This API is intended to be used for having a livechat conversation;

- First of all you need to generate a visitor token (any random string);
- Call [livechat:getInitialData](getinitialdata/) passing `visitorToken` as first argument, the response will be an object containing a livechat [configuration object](getinitialdata/#response) with following properties:

| Field | Type | Description |
| :--- | :--- | :--- |
| `enabled` | `Boolean` | If wheter livechat is enabled for that server or not |
| `online` | `Boolean` | If there are livechat agents online |
| `room` | `String` | The current conversation room for the current guest user |
| `registrationForm` | `Boolean` | If the registration form should be displayed or not. |
| `displayOfflineForm` | `Boolean` | If should show a contact form if no agents online. |
| `triggers` | `Array` | Array of livechat triggers. |
| `departments` | `Array` | Array of livechat departments. |

- Call [livechat:registerGuest](registerguest/) to register user;
- With the response of [livechat:registerGuest](registerguest/) you should call [login method](../method-calls/login/) passing the response token;
- Before sending the first message you have to generate a random `room _id`;
- Now you can send messages to method [sendMessageLivechat](sendmessagelivechat/)
- Subscribe to: [stream-room-messages](../subscriptions/stream-room-messages/) and `stream-livechat-room`
- Get agent info by calling `livechat:getAgentData`
