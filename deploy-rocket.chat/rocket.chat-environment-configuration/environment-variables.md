---
description: Configuring Rocket.Chat via environment variables
---

# Environment Variables

Rocket.Chat can be configured on deployment with a set of environment variables. Setting those environment variables (the how to's) depends on the deployment method of choice.

Some of these environment variables are mandatory, those are kept separate to the optional ones.

### Mandatory Environment Variables

| Name              | Description                                                                                                                             | Comment                                                                                                                                                                                              |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ROOT\_URL         | The URL where your Rocket.Chat instance will be hosted on. In other words the URL you will enter on your browser to access Rocket.Chat. | Format is `[protocol]://[domain or ip][: optional port]/[optional path]`                                                                                                                             |
| PORT              | Port your Rocket.Chat instance will bind to.                                                                                            | If served under a FQDN (which is recommended) this doesn't matter much, as long as the configured one is not in reserved range and doesn't collide with any other services.                          |
| MONGO\_URL        | MongoDB connection string.                                                                                                              | Read the [official documentation](https://www.mongodb.com/docs/manual/reference/connection-string/) of MongoDB to understand better. This also somewhat depends on your deployment method of choice. |
| MONGO\_OPLOG\_URL | MongoDB connection string to the `local` database.                                                                                      | Similar to the above, except this one points directly to the `local` database. E.g. `mongodb://localhost:27017/local`                                                                                |

### Optional Environment Variables

| Name            | Description                                                   | Comment                                                                                                                                                                                                                                                                                                    |
| --------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BIND\_IP        | Which IP the node (or main Rocket.Chat) process will bind to. | If intended to be accessed under a domain, which is recommended, users should set this to the loopback address (i.e. `127.0.0.1`) or any **private** IP in the host that's accessible via a reverse proxy or load balancer. This will ensure the instance isn't accessible via any IP that isn't intended. |
| ADMIN\_USERNAME | Admin user's username.                                        | <p>Admin user can be created automatically on deployment. Set this to your admin user's desired username.<br><br><em>Mandatory if any of the other ADMIN_* variables are passed for a successful account creation.</em></p>                                                                                |
| ADMIN\_NAME     | Admin user's name.                                            | <p>Self explanatory.<br><br><em>Mandatory if any of the other ADMIN_* variables are passed for a successful account creation.</em></p>                                                                                                                                                                     |
| ADMIN\_PASS     | Admin user's password (in plaintext).                         | <p>Self explanatory.<br><br><em>Mandatory if any of the other ADMIN_* variables are passed for a successful account creation.</em></p>                                                                                                                                                                     |
| ADMIN\_EMAIL    | Admin user's email address.                                   | <p>Self explanatory.<br><br><em>Mandatory if any of the other ADMIN_* variables are passed for a successful account creation.</em></p>                                                                                                                                                                     |

### Other Environment Variables

#### Overriding Settings

You can override your Rocket.Chat settings directly from environment variables.

Settings capable of this can be seen when hovered upon in the **Administration** > **Workspace** > **Settings** section.

![Example Settings code](<../../.gitbook/assets/Example Settings code>)

This is done by using the environment variable `OVERWRITE_SETTING_<Setting Code>`

To override the value of setup wizard for example:

```
OVERWRITE_SETTING_Show_Setup_Wizard=completed
```

#### Hide and Block Settings

You can choose to hide or block Rocket.Chat settings using environment variables. This is done by specifying `SETTINGS_HIDDEN` and `SETTINGS_BLOCKED` values.
