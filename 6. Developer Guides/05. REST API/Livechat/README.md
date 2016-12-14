---
order: 80
---

# Livechat Methods
Manage livechat related data:

| Url | HTTP Method | Short Description | Details Page |
| :--- | :--- | :--- | :--- |
| `/api/v1/livechat/users/:type` | `GET` | Get a list of agents or managers. | [info](users.md#list-agents-or-managers) |
| `/api/v1/livechat/users/:type` | `POST` | Create a new livechat agent or manager. | [info](users.md#register-new-agent-or-manager) |
| `/api/v1/livechat/users/:type/:_id` | `GET` | Retrieve agent or manager data. | [info](users.md#get-info-about-an-agent-or-manager) |
| `/api/v1/livechat/users/:type/:_id` | `DELETE` | Removes a livechat agent or manager. | [info](users.md#removes-an-agent-or-manager) |
| `/api/v1/livechat/department` | `GET` | Get a list of livechat departments. | [info](department.md#list-departments) |
| `/api/v1/livechat/department` | `POST` | Creates a new livechat department. | [info](department.md#register-a-new-department) |
| `/api/v1/livechat/department/:_id` | `GET` | Retrieve a livechat department data. | [info](department.md#get-info-about-a-deparment) |
| `/api/v1/livechat/department/:_id` | `PUT` | Updates a livechat department data. | [info](department.md#update-a-department) |
| `/api/v1/livechat/department/:_id` | `DELETE` | Delete a livechat department. | [info](department.md#removes-a-deparment) |
| `/api/v1/livechat/sms-incoming/:service` | `POST` | Send SMS messages to Rocket.Chat. | [info](sms-incoming.md) |
