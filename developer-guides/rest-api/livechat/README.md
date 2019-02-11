# Livechat Methods

Manage Livechat related data:

| Url | HTTP Method | Short Description | Details Page |
| :--- | :--- | :--- | :--- |
| `/api/v1/livechat/users/:type` | `GET` | Get a list of agents or managers. | [info](users/index.html#list-agents-or-managers) |
| `/api/v1/livechat/users/:type` | `POST` | Create a new Livechat agent or manager. | [info](users/index.html#register-new-agent-or-manager) |
| `/api/v1/livechat/users/:type/:_id` | `GET` | Retrieve agent or manager data. | [info](users/index.html#get-info-about-an-agent-or-manager) |
| `/api/v1/livechat/users/:type/:_id` | `DELETE` | Removes a Livechat agent or manager. | [info](users/index.html#removes-an-agent-or-manager) |
| `/api/v1/livechat/department` | `GET` | Get a list of Livechat departments. | [info](department/index.html#list-departments) |
| `/api/v1/livechat/department` | `POST` | Creates a new Livechat department. | [info](department/index.html#register-a-new-department) |
| `/api/v1/livechat/department/:_id` | `GET` | Retrieve a Livechat department data. | [info](department/index.html#get-info-about-a-department) |
| `/api/v1/livechat/department/:_id` | `PUT` | Updates a Livechat department data. | [info](department/index.html#update-a-department) |
| `/api/v1/livechat/department/:_id` | `DELETE` | Delete a Livechat department. | [info](department/index.html#removes-a-department) |
| `/api/v1/livechat/sms-incoming/:service` | `POST` | Send SMS messages to Rocket.Chat. | [info](sms-incoming/) |
| `/api/v1/livechat/agent.info/:rid/:token` | `GET` | Retrieve the current Livechat agent data. | [info](agent/index.html) |
| `/api/v1/livechat/agent.next/:token` | `GET` | Request the next Livechat agent available. | [info](agent/index.html#request-the-next-livechat-agent-available) |
| `/api/v1/livechat/config/:token` | `GET` | Get basic Livechat widget configuration info and additional visitor data. | [info](config/index.html) |
| `/api/v1/livechat/custom.field` | `POST` | Send a Livechat custom field. | [info](custom-fields/index.html#send-a-livechat-custom-field) |
| `/api/v1/livechat/custom.fields` | `POST` | Send an array of Livechat custom fields. | [info](custom-fields/index.html#send-an-array-of-livechat-custom-fields) |
| `/api/v1/livechat/message` | `POST` | Send a new Livechat message. | [info](message/index.html) |
| `/api/v1/livechat/message/:_id` | `PUT` | Updates a Livechat message data. | [info](message/index.html#updates-a-livechat-message) |
| `/api/v1/livechat/message/:_id` | `DELETE` | Delete a Livechat message. | [info](message/index.html#removes-a-livechat-message) |
| `/api/v1/livechat/messages.history/:rid` | `GET` | Load Livechat messages history. | [info](message/index.html#load-livechat-messages-history) |
| `/api/v1/livechat/offline.message` | `POST` | Send a new Livechat offline message. | [info](message/index.html#send-a-new-livechat-offline-message) |
| `/api/v1/livechat/room` | `GET` | Get the Livechat room data or open a new room. | [info](room/index.html) |
| `/api/v1/livechat/room.close` | `POST` | Close a Livechat room. | [info](room/index.html#close-livechat-room) |
| `/api/v1/livechat/room.transfer` | `POST` | Transfer a Livechat room to another agent or department. | [info](room/index.html#transfer-livechat-room) |
| `/api/v1/livechat/room.forward` | `POST` | Allow Livechat Agents to forward a Livechat room to another agent, department or return it back to the Queue. | [info](room/index.html#forward-livechat-room) |
| `/api/v1/livechat/room.survey` | `POST` | Send a Livechat survey to Rocket.Chat. | [info](room/index.html#send-the-livechat-survey) |
| `/api/v1/livechat/transcript` | `POST` | Request a Livechat transcript. | [info](transcript/) |
| `/api/v1/livechat/video.call/:token` | `GET` | Request a new video call room. | [info](video-call/) |
| `/api/v1/livechat/visitor` | `POST` | Register a new Livechat visitor. | [info](visitor/index.html) |
| `/api/v1/livechat/visitor/:token` | `GET` | Retrieve a visitor data. | [info](visitor/index.html) |
| `/api/v1/livechat/page.visited` | `POST` | Send visitor navigation history to Rocket.Chat. | [info](visitor/index.html#send-visitor-navigation-history) |
