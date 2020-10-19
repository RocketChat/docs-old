# Omnichannel

Manage Livechat related data:

| Url | HTTP Method | Short Description | Details Page |
| :--- | :--- | :--- | :--- |
| `/api/v1/livechat/users/:type` | `GET` | Get a list of agents or managers. | [info](users.md#list-agents-or-managers) |
| `/api/v1/livechat/users/:type` | `POST` | Create a new omnichannel agent or manager. | [info](users.md#register-new-agent-or-manager) |
| `/api/v1/livechat/users/:type/:_id` | `GET` | Retrieve agent or manager data. | [info](users.md#get-info-about-an-agent-or-manager) |
| `/api/v1/livechat/users/:type/:_id` | `DELETE` | Removes an Omnichannel agent or manager. | [info](users.md#removes-an-agent-or-manager) |
| `/api/v1/livechat/department` | `GET` | Get a list of Omnichannel departments. | [info](department.md#list-departments) |
| `/api/v1/livechat/department` | `POST` | Creates a new Omnichannel department. | [info](department.md#register-a-new-department) |
| `/api/v1/livechat/department/:_id` | `GET` | Retrieve an Omnichannel department data. | [info](department.md#get-info-about-a-department) |
| `/api/v1/livechat/department/:_id` | `PUT` | Updates an Omnichannel department data. | [info](department.md#update-a-department) |
| `/api/v1/livechat/department/:_id` | `DELETE` | Delete an Omnichannel department. | [info](department.md#removes-a-department) |
| `/api/v1/livechat/inquiries.list` | `GET` | Retrieves a list of open inquiries. | [info](inquiries.md) |
| `/api/v1/livechat/inquiries.take` | `POST` | Take an open inquiry. | [info](inquiries.md#livechat-take-inquiry) |
| `/api/v1/livechat/inquiries.getOne` | `GET` | Get one inquiry by room id. | [info](inquiries.md#livechat-get-one-inquiry-by-room-id) |
| `/api/v1/livechat/integrations.settings` | `GET` | Retrieves a list of integration settings. | [info](integrations-settings.md) |
| `/api/v1/livechat/sms-incoming/:service` | `POST` | Send SMS messages to Rocket.Chat. | [info](sms-incoming.md) |
| `/api/v1/livechat/agent.info/:rid/:token` | `GET` | Retrieve the current Omnichannel agent data. | [info](agent.md) |
| `/api/v1/livechat/agent.next/:token` | `GET` | Request the next Omnichannel agent available. | [info](agent.md#request-the-next-livechat-agent-available) |
| `/api/v1/livechat/agents/:agentId/departments` | `GET` | Get the agent departments. | [info](agent.md#get-agent-departments) |
| `/api/v1/livechat/config/:token` | `GET` | Get basic Livechat widget configuration info and additional visitor data. | [info](config.md) |
| `/api/v1/livechat/custom.field` | `POST` | Send an Omnichannel custom field. | [info](custom-fields.md#send-a-livechat-custom-field) |
| `/api/v1/livechat/custom.fields` | `POST` | Send an array of Omnichannel custom fields. | [info](custom-fields.md#send-an-array-of-livechat-custom-fields) |
| `/api/v1/livechat/custom-fields` | `GET` | Get a list of Omnichannel custom fields. | [info](custom-fields.md#list-livechat-custom-fields) |
| `/api/v1/livechat/custom-fields/:_id` | `GET` | Get an Omnichannel custom field. | [info](custom-fields.md#get-info-about-a-custom-field) |
| `/api/v1/livechat/message` | `POST` | Send a new Omnichannel message. | [info](message.md) |
| `/api/v1/livechat/message/:_id` | `PUT` | Updates an Omnichannel message data. | [info](message.md#updates-a-livechat-message) |
| `/api/v1/livechat/message/:_id` | `DELETE` | Delete an Omnichannel message. | [info](message.md#removes-a-livechat-message) |
| `/api/v1/livechat/messages.history/:rid` | `GET` | Load Omnichannel messages history. | [info](message.md#load-livechat-messages-history) |
| `/api/v1/livechat/office-hours` | `GET` | Get a list of office hours. | [info](office-hours.md) |
| `/api/v1/livechat/offline.message` | `POST` | Send a new Omnichannel offline message. | [info](message.md#send-a-new-livechat-offline-message) |
| `/api/v1/livechat/rooms` | `GET` | Retrieves a list of Omnichannel rooms. | [info](rooms.md) |
| `/api/v1/livechat/queue` | `GET` | Retrieves a list of queued chats. | [info](queue.md) |
| `/api/v1/livechat/room` | `GET` | Get the Omnichannel room data or open a new room. | [info](room.md) |
| `/api/v1/livechat/room.close` | `POST` | Close an Omnichannel room. | [info](room.md#close-livechat-room) |
| `/api/v1/livechat/room.transfer` | `POST` | Transfer an Omnichannel room to another agent or department. | [info](room.md#transfer-livechat-room) |
| `/api/v1/livechat/room.forward` | `POST` | Allow Omnichannel Agents to forward an Omnichannel room to another agent, department, or return it back to the Queue. | [info](room.md#forward-livechat-room) |
| `/api/v1/livechat/room.survey` | `POST` | Send an Omnichannel survey to Rocket.Chat. | [info](room.md#send-the-livechat-survey) |
| `/api/v1/livechat/transcript` | `POST` | Request an Omnichannel transcript. | [info](transcript.md) |
| `/api/v1/livechat/triggers` | `GET` | Get the Omnichannel triggers. | [info](triggers.md) |
| `/api/v1/livechat/triggers/:_id` | `GET` | Get an Omnichannel trigger. | [info](triggers.md) |
| `/api/v1/livechat/video.call/:token` | `GET` | Request a new video call room. | [info](video-call.md) |
| `/api/v1/livechat/visitor` | `POST` | Register a new Omnichannel visitor. | [info](visitor.md) |
| `/api/v1/livechat/visitor/:token` | `GET` | Retrieve a visitor's data. | [info](visitor.md) |
| `/api/v1/livechat/visitors.info` | `GET` | Retrieve a visitor's info. | [info](visitor.md) |
| `/api/v1/livechat/visitors.search` | `GET` | Search for Visitors. | [info](visitor.md#search-for-visitors) |
| `/api/v1/livechat/page.visited` | `POST` | Send visitor navigation history to Rocket.Chat. | [info](visitor.md#send-visitor-navigation-history) |
| `/api/v1/livechat/appearance` | `GET` | Get the settings about Livechat Widget Appearance. | [info](appearance.md) |
| `/api/v1/livechat/visitors.pagesVisited` | `GET` | Gets the visitor navigation history. | [info](visitor.md#get-the-visitor-navigation-history) |
| `/api/v1/livechat/visitors.chatHistory/room/room-id/visitor/visitor-id` | `GET` | Gets the visitor chat history. | [info](visitor.md#get-the-visitor-chat-history) |
|  |  |  |  |



#### Dashboard

Agents

| Url | Short Description | Details Page |
| :--- | :--- | :--- |
| `/livechat/analytics/agents/average-service-time` | agent average service time | [Info ](https://docs.rocket.chat/api/rest-api/methods/livechat/agents-available-for-service-time) |
| `/livechat/analytics/agents/total-service-time` | agent total service time | [Info](https://docs.rocket.chat/api/rest-api/methods/livechat/agents-total-service-time) |
| `/livechat/analytics/agents/available-for-service-history` | \#\# | Link |

Departments

| Url | Short Description | Details Page |
| :--- | :--- | :--- |
| `/livechat/analytics/departments/ammount-of-chats` | amount of chats | Info |
| `/livechat/analytics/departments/average-service-time` | average service time | \[Link\] \(\#\) |
| `/livechat/analytics/departments/average-chat-duration-time` | average chats duration | [Info](https://docs.rocket.chat/api/rest-api/methods/livechat/average-chat-duration-by-department) |
| `/livechat/analytics/departments/total-service-time` | total service time | [Info](https://docs.rocket.chat/api/rest-api/methods/livechat/total-service-time-by-department) |
| `/livechat/analytics/departments/average-waiting-time` | avg waiting time | [Info](https://docs.rocket.chat/api/rest-api/methods/livechat/average-waiting-time-by-department) |
| `/livechat/analytics/departments/total-transferred-chats` | total transferred chats | [Info](https://docs.rocket.chat/api/rest-api/methods/livechat/total-of-transferred-chats-by-department) |
| `/livechat/analytics/departments/total-abandoned-chats` | total abandoned chats | [Info](https://docs.rocket.chat/api/rest-api/methods/livechat/total-abandoned-chats-by-department) |
| `/livechat/analytics/departments/percentage-abandoned-chats` | percentage of abandoned chats | [Info](https://docs.rocket.chat/api/rest-api/methods/livechat/percentage-of-abandoned-chats-by-department) |

#### Livechat

| Url | Short Description | Details Page |
| :--- | :--- | :--- |
| `/api/v1/livechat/inquiries.list` | Retrieves a list of open inquiries. | [Link](methods/livechat/inquiries.md#inquiries-list) |
| `/api/v1/livechat/inquiries.take` | Take an open inquiry. | [Link](methods/livechat/inquiries.md#livechat-take-inquiry) |
| `/api/v1/livechat/rooms` | Retrieves a list of livechat rooms. | [Link](methods/livechat/rooms.md) |



