# Omnichannel \(Livechat\)

Manage Livechat related data:

| Url | HTTP Method | Short Description | Details Page |
| :--- | :--- | :--- | :--- |
| `/api/v1/livechat/users/:type` | `GET` | Get a list of agents or managers. | [info](/api/rest-api/methods/livechat/users.md#list-agents-or-managers) |
| `/api/v1/livechat/users/:type` | `POST` | Create a new Livechat agent or manager. | [info](/api/rest-api/methods/livechat/users.md#register-new-agent-or-manager) |
| `/api/v1/livechat/users/:type/:_id` | `GET` | Retrieve agent or manager data. | [info](/api/rest-api/methods/livechat/users.md#get-info-about-an-agent-or-manager) |
| `/api/v1/livechat/users/:type/:_id` | `DELETE` | Removes a Livechat agent or manager. | [info](/api/rest-api/methods/livechat/users.md#removes-an-agent-or-manager) |
| `/api/v1/livechat/department` | `GET` | Get a list of Livechat departments. | [info](/api/rest-api/methods/livechat/department.md#list-departments) |
| `/api/v1/livechat/department` | `POST` | Creates a new Livechat department. | [info](/api/rest-api/methods/livechat/department.md#register-a-new-department) |
| `/api/v1/livechat/department/:_id` | `GET` | Retrieve a Livechat department data. | [info](/api/rest-api/methods/livechat/department.md#get-info-about-a-department) |
| `/api/v1/livechat/department/:_id` | `PUT` | Updates a Livechat department data. | [info](/api/rest-api/methods/livechat/department.md#update-a-department) |
| `/api/v1/livechat/department/:_id` | `DELETE` | Delete a Livechat department. | [info](/api/rest-api/methods/livechat/department.md#removes-a-department) |
| `/api/v1/livechat/inquiries.list` | `GET` | Retrieves a list of open inquiries. | [info](/api/rest-api/methods/livechat/inquiries.md) |
| `/api/v1/livechat/inquiries.take` | `POST` | Take an open inquiry. | [info](/api/rest-api/methods/livechat/inquiries.md#livechat-take-inquiry) |
| `/api/v1/livechat/inquiries.getOne` | `GET` | Get one inquiry by room id. | [info](/api/rest-api/methods/livechat/inquiries.md#livechat-get-one-inquiry-by-room-id) |
| `/api/v1/livechat/integrations.settings` | `GET` | Retrieves a list of integration settings. | [info](integrations-settings.md) |
| `/api/v1/livechat/sms-incoming/:service` | `POST` | Send SMS messages to Rocket.Chat. | [info](/api/rest-api/methods/livechat/sms-incoming.md) |
| `/api/v1/livechat/agent.info/:rid/:token` | `GET` | Retrieve the current Livechat agent data. | [info](/api/rest-api/methods/livechat/agent.md) |
| `/api/v1/livechat/agent.next/:token` | `GET` | Request the next Livechat agent available. | [info](/api/rest-api/methods/livechat/agent.md#request-the-next-livechat-agent-available) |
| `/api/v1/livechat/agents/:agentId/departments` | `GET` | Get the agent departments. | [info](/api/rest-api/methods/livechat/agent.md#get-agent-departments) |
| `/api/v1/livechat/config/:token` | `GET` | Get basic Livechat widget configuration info and additional visitor data. | [info](/api/rest-api/methods/livechat/config.md) |
| `/api/v1/livechat/custom.field` | `POST` | Send a Livechat custom field. | [info](/api/rest-api/methods/livechat/custom-fields.md#send-a-livechat-custom-field) |
| `/api/v1/livechat/custom.fields` | `POST` | Send an array of Livechat custom fields. | [info](/api/rest-api/methods/livechat/custom-fields.md#send-an-array-of-livechat-custom-fields) |
| `/api/v1/livechat/custom-fields` | `GET` | Get a list of Livechat custom fields. | [info](/api/rest-api/methods/livechat/custom-fields.md#list-livechat-custom-fields) |
| `/api/v1/livechat/custom-fields/:_id` | `GET` | Get a Livechat custom field. | [info](/api/rest-api/methods/livechat/custom-fields.md#get-info-about-a-custom-field) |
| `/api/v1/livechat/message` | `POST` | Send a new Livechat message. | [info](/api/rest-api/methods/livechat/message.md) |
| `/api/v1/livechat/message/:_id` | `PUT` | Updates a Livechat message data. | [info](/api/rest-api/methods/livechat/message.md#updates-a-livechat-message) |
| `/api/v1/livechat/message/:_id` | `DELETE` | Delete a Livechat message. | [info](/api/rest-api/methods/livechat/message.md#removes-a-livechat-message) |
| `/api/v1/livechat/messages.history/:rid` | `GET` | Load Livechat messages history. | [info](/api/rest-api/methods/livechat/message.md#load-livechat-messages-history) |
| `/api/v1/livechat/office-hours` | `GET` | Get a list of office hours. | [info](/api/rest-api/methods/livechat/office-hours.md) |
| `/api/v1/livechat/offline.message` | `POST` | Send a new Livechat offline message. | [info](/api/rest-api/methods/livechat/message.md#send-a-new-livechat-offline-message) |
| `/api/v1/livechat/rooms` | `GET` | Retrieves a list of livechat rooms. | [info](/api/rest-api/methods/livechat/rooms.md) |
| `/api/v1/livechat/queue` | `GET` | Retrieves a list of queued chats. | [info](/api/rest-api/methods/livechat/queue.md) |
| `/api/v1/livechat/room` | `GET` | Get the Livechat room data or open a new room. | [info](/api/rest-api/methods/livechat/room.md) |
| `/api/v1/livechat/room.close` | `POST` | Close a Livechat room. | [info](/api/rest-api/methods/livechat/room.md#close-livechat-room) |
| `/api/v1/livechat/room.transfer` | `POST` | Transfer a Livechat room to another agent or department. | [info](/api/rest-api/methods/livechat/room.md#transfer-livechat-room) |
| `/api/v1/livechat/room.forward` | `POST` | Allow Livechat Agents to forward a Livechat room to another agent, department or return it back to the Queue. | [info](/api/rest-api/methods/livechat/room.md#forward-livechat-room) |
| `/api/v1/livechat/room.survey` | `POST` | Send a Livechat survey to Rocket.Chat. | [info](/api/rest-api/methods/livechat/room.md#send-the-livechat-survey) |
| `/api/v1/livechat/transcript` | `POST` | Request a Livechat transcript. | [info](/api/rest-api/methods/livechat/transcript.md) |
| `/api/v1/livechat/triggers` | `GET` | Get the Livechat triggers. | [info](/api/rest-api/methods/livechat/triggers.md) |
| `/api/v1/livechat/triggers/:_id` | `GET` | Get a Livechat trigger. | [info](/api/rest-api/methods/livechat/triggers.md) |
| `/api/v1/livechat/video.call/:token` | `GET` | Request a new video call room. | [info](/api/rest-api/methods/livechat/video-call.md) |
| `/api/v1/livechat/visitor` | `POST` | Register a new Livechat visitor. | [info](/api/rest-api/methods/livechat/visitor.md) |
| `/api/v1/livechat/visitor/:token` | `GET` | Retrieve a visitor data. | [info](/api/rest-api/methods/livechat/visitor.md) |
| `/api/v1/livechat/visitors.info` | `GET` | Retrieve a visitor info. | [info](/api/rest-api/methods/livechat/visitor.md) |
| `/api/v1/livechat/page.visited` | `POST` | Send visitor navigation history to Rocket.Chat. | [info](/api/rest-api/methods/livechat/visitor.md#send-visitor-navigation-history) |
| `/api/v1/livechat/appearance` | `GET` | Get the settings about Livechat Widget Appearance. | [info](/api/rest-api/methods/livechat/appearance.md) |
| `/api/v1/livechat/visitors.pagesVisited` | `GET` | Gets the visitor navigation history. | [info](/api/rest-api/methods/livechat/visitor.md#get-the-visitor-navigation-history) |
| `/api/v1/livechat/visitors.chatHistory/room/room-id/visitor/visitor-id` | `GET` | Gets the visitor chat history. | [info](/api/rest-api/methods/livechat/visitor.md#get-the-visitor-chat-history) |

