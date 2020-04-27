# Settings Methods

You can get and update the settings via the REST API, only if you have permission to.

| Url | Method | Short Description | Details Page |
| :--- | :--- | :--- | :--- |
| `/api/v1/settings`                | `GET`  | Lists all private settings.                  | [Link](get/)                           |
| `/api/v1/settings.public`         | `GET`  | Lists all public settings.                   | [Link](public/)                    |
| `/api/v1/settings.oauth`          | `GET`  | Return list of all available oauth services. | [Link](oauth/) |
| `/api/v1/service.configurations`  | `GET`  | Lists all service configurations.            | [Link](service-configuration/)     |
| `/api/v1/settings/:_id`           | `GET`  | Gets a setting.                              | [Link](get-by-id/)                     |
| `/api/v1/settings/:_id`           | `POST` | Updates a setting.                           | [Link](update/)                        |
