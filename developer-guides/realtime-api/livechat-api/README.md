# Livechat Realtime API

This API is intended to be used for having a Livechat conversation;

* First of all you need to generate a visitor token \(any random string\);
* Call [livechat:getInitialData](getinitialdata.md) passing `visitorToken` as first argument, the response will be an object containing a Livechat [configuration object](getinitialdata.md#response) with following properties:

| Field | Type | Description |
| :--- | :--- | :--- |
| `enabled` | `Boolean` | If whether Livechat is enabled for that server or not |
| `title` | `String` | The Livechat widget title |
| `color` | `Hexadecimal` | The hexadecimal color of the Livechat widget title bar when the Livechat is online |
| `registrationForm` | `Boolean` | If the registration form should be displayed or not. |
| `room` | `Object` | The current conversation room for the current guest user |
| `visitor` | `Object` | The current guest user |
| `triggers` | `Array` | Array of Livechat triggers. |
| `departments` | `Array` | Array of Livechat departments. |
| `allowSwitchingDepartments` | `Boolean` | If client-side department switching is allowed |
| `online` | `Boolean` | If there are Livechat agents online |
| `offlineColor` | `Hexadecimal` | The hexadecimal color of the Livechat widget title bar when the Livechat is offline |
| `offlineMessage` | `String` | The message that will be displayed on the Livechat offline form |
| `offlineSuccessMessage` | `String` | The message that will be displayed after send a message using the offline form |
| `offlineUnavailableMessage` | `String` | The message that will be displayed when the Livechat is offline |
| `displayOfflineForm` | `Boolean` | If the offline form will be displayed when the Livechat is offline |
| `videoCall` | `Boolean` | If the VideoCall feature is available |
| `conversationFinishedMessage` | `Boolean` | The system message that will be send to the current guest user when the conversation is closed |
| `nameFieldRegistrationForm` | `Boolean` | If the name field will be displayed on Livechat registration form |
| `emailFieldRegistrationForm` | `Boolean` | If the email field will be displayed on Livechat registration form |
| `offlineTitle` | `String` | The title of the widget when the Livechat is offline |
| `language` | `String` | The default user language to be set in the Livechat widget |
| `transcript` | `Boolean` | If the Livechat widget will ask the current guest user if they would like a transcript after the conversation is closed |
| `transcriptMessage` | `String` | The message to be displayed when asking about transcript |
| `agentData` | `Object` | The current agent attending the chart |

* Call [livechat:registerGuest](registerguest.md) to register guest and get the response containing the visitor's data.
* Before sending the first message you have to generate a random `room _id`;
* Now you can send messages to method [sendMessageLivechat](sendmessagelivechat.md)
* Subscribe to: [stream-room-messages](../subscriptions/stream-room-messages.md) and `stream-livechat-room`
* Get agent info by calling `livechat:getAgentData`

