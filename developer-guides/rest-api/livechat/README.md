# Livechat Methods

Manage livechat related data:

| Url | HTTP Method | Short Description | Details Page |
| :--- | :--- | :--- | :--- |
| `/api/v1/livechat/users/:type` | `GET` | Get a list of agents or managers. | [info](users/index.html#list-agents-or-managers) |
| `/api/v1/livechat/users/:type` | `POST` | Create a new livechat agent or manager. | [info](users/index.html#register-new-agent-or-manager) |
| `/api/v1/livechat/users/:type/:_id` | `GET` | Retrieve agent or manager data. | [info](users/index.html#get-info-about-an-agent-or-manager) |
| `/api/v1/livechat/users/:type/:_id` | `DELETE` | Removes a livechat agent or manager. | [info](users/index.html#removes-an-agent-or-manager) |
| `/api/v1/livechat/department` | `GET` | Get a list of livechat departments. | [info](department/index.html#list-departments) |
| `/api/v1/livechat/department` | `POST` | Creates a new livechat department. | [info](department/index.html#register-a-new-department) |
| `/api/v1/livechat/department/:_id` | `GET` | Retrieve a livechat department data. | [info](department/index.html#get-info-about-a-department) |
| `/api/v1/livechat/department/:_id` | `PUT` | Updates a livechat department data. | [info](department/index.html#update-a-department) |
| `/api/v1/livechat/department/:_id` | `DELETE` | Delete a livechat department. | [info](department/index.html#removes-a-department) |
| `/api/v1/livechat/sms-incoming/:service` | `POST` | Send SMS messages to Rocket.Chat. | [info](sms-incoming/) |
