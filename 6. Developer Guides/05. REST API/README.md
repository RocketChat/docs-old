# Rocket.Chat REST API

The REST API allows you to control and extend Rocket.Chat with ease.

> **This API is in BETA, however feel free to test, ask us questions, and submit Pull Requests!**

If you are an end-user and not a dev or a tester, [create an issue](https://github.com/RocketChat/Rocket.Chat/issues/new) to request new APIs -- and consider [make a donation](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZL94ZE6LGVUSN) to the project.

> All API calls in the documentation are made using `curl`.  However, you are free to use Java / Python / PHP / Golang / Ruby / Swift / Objective-C / Rust / Scala / C# or any other programming languages.

## Production Security Concerns
When calling a production Rocket.Chat server, ensure it is running via HTTPS and has a valid SSL Certificate. The login method requires you to post your username and password in plaintext, which is why we highly suggest only calling the REST login api over HTTPS. Also, few things to note:

* Only call via HTTPS
* Implement a timed authorization token expiration strategy
* Ensure the calling user only has permissions for what they are calling an no more

## REST API v1 Methods
| Url | Details Page |
| --- | --- |
| `/api/v1/info` | [Information](01.%20Information/) |
| `/api/login` | [Authentication](02.%20Authentication/#rest-api-authentication) |
| `/api/logout` | [Authentication](02.%20Authentication/#logout-details) |
| `/api/v1/users.create` | [Users](03.%20Users/#users-create-details) |
| `/api/v1/user.update` | [Users](03.%20Users/#user-update-details) |
| `/api/v1/users.setAvatar` | [Users](03.%20Users/#user-set-photo-avatar)
| `/api/v1/channels.create` | [Channels](04.%20Channels/) |
| `/api/v1/groups.list` | [Groups](05.%20Groups/#groups-list-details) |

## Language specific wrappers
### Java
* [rocket-chat-rest-client](https://github.com/baloise/rocket-chat-rest-client)
