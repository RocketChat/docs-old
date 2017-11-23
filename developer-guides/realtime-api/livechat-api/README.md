# Livechat Realtime API

This API is intended to be used for having a livechat conversation;


- First of all you need to generate a visitor token (any random string);
- Call [livechat:getInitialData](getInitialData.md) passing `visitorToken` as first argument, the response will be an object containing a livechat [configuration object](getInitialData.md#response) with following properties:

| Field | Type | Description |
| :--- | :--- | :--- |
| `enabled` | `Boolean` | If wheter livechat is enabled for that server or not |
| `online` | `Boolean` | If there are livechat agents online |
| `room` | `String` | The current conversation room for the current guest user |
| `registrationForm` | `Boolean` | If the registration form should be displayed or not. See [Registration Form](Registration%20.md) |
| `displayOfflineForm` | `Boolean` | If should show a contact form if no agents online. See [Offline Form](Offline%20Form.md) |
| `triggers` | `Array` | Array of livechat triggers. See [Triggers](Triggers.md) |
| `departments` | `Array` | Array of livechat departments. See [Registration Form](Registration%20.md#Deparments) |

- Call [livechat:registerGuest](registerGuest.md) to register user;
- With the response of [livechat:registerGuest](registerGuest.md) you should call [login method](../1.%20Method%20Calls/01.%20Login/) passing the response token;
- Before sending the first message you have to generate a random `room _id`;
- Now you can send messages to method [sendMessageLivechat](sendMessageLivechat.md)
- Subscribe to: [stream-room-messages](../2.%20Subscriptions/4.%20Stream%20Room%20Messages/) and `stream-livechat-room`
- Get agent info by calling [livechat:getAgentData](getAgentData.md)
