# LDAP Enterprise Settings

## Advanced Sync

* **Sync User Active State**: Determine if users should be enabled or disabled on Rocket.Chat based on the LDAP status. The '`pwdAccountLockedTime`' attribute will be used to determine if the user is disabled. This setting is not yet compatible with all LDAP Servers, so if you don't use the '`pwdAccountLockedTime`' attribute, you may want to disable it completely.
* **Attributes to Query**: Specify which attributes should be returned on LDAP queries, separating them with commas. Defaults to everything. `*` represents all regular attributes and `+` represents all operational attributes. Make sure to include every attribute that is used by every Rocket.Chat sync option.

## Auto Logout Deactivated Users

* **Enable Auto Logout**: Set true to enable auto-logout.
* **Auto Logout Interval**: Allows you to set the interval for auto-logout.

## Background Sync <a href="#z21x5q1bor" id="z21x5q1bor"></a>

* **Background Sync**: Enable periodic background sync.
* **Background Sync interval**: The interval between synchronizations, using the [Cron Text](https://bunkat.github.io/later/parsers.html#text) format.
* **Background Sync Import New Users**: Will import all users (based on your filter criteria) that exist in LDAP and do not exist in Rocket.Chat.
* **Background Sync Update Existing Users**: This will sync the avatar, fields, username, etc (based on your configuration) of all users already imported from LDAP on every **Sync Interval**.
* **Avatar Background Sync**: Enable a separate background process to sync user avatars.
* **Avatar Background Sync Interval**: The interval between avatar sync, using the [Cron Text](https://bunkat.github.io/later/parsers.html#text) format.

## Sync Channels

* **Auto Sync LDAP Groups to Channels**: Enable this feature to automatically add users to a channel based on their LDAP group.
* **Channel Admin**: When the above setting causes a channel to be created automatically during user sync, this setting will determine what user will become the channel's admin.
* **User Group filter**: The LDAP search filter checks if a user is in a group. If the search returns any results, the user is considered to be in the group. When performing the search, the following strings, if present in the filter, will be substituted with data from the user and group whose membership status is being checked:
  * `#{username}` - Replaced with the username of the user in RocketChat
  * `#{groupName}` - Replaced with the name of the group in LDAP
  * `#{userdn}` - Replaced with the LDAP Distinguished Name of the user
* **LDAP Group BaseDN**: The LDAP group base DN
* **LDAP Group Channel Map**: The map of LDAP groups to Rocket.Chat channels in JSON format. For example, the following objectives will add any user in the LDAP group "employee" to the general channel on Rocket.Chat.

```json
{
	"employee": "general"
}
```

* **Auto Remove Users from Channels**: Enabling this will remove any users in a channel that does not have the corresponding LDAP group! This will happen in every login and background sync, so removing a group on LDAP will not instantly remove access to channels on Rocket.Chat.

## Sync Custom Fields <a href="#46mhpg4k6kv" id="46mhpg4k6kv"></a>

* **Sync Custom Fields**: Enable to activate custom field sync
* **Custom Fields Mapping**: A map of the custom field to sync

## Sync Roles <a href="#y262hx6p5o9" id="y262hx6p5o9"></a>

* **Sync LDAP Groups**: Enable this setting to activate role mapping from user groups on the community edition of Rocket.Chat.
* **Auto Remove User Roles**: Enable this setting to automatically remove roles from LDAP users that don't have the corresponding group. This will only remove roles automatically that are set under the user data group map below.
* **User Group Filter**: The LDAP search filter checks if a user is in a group. If the search returns any results, the user is considered to be in the group. When performing the search, the following strings, if present in the filter, will be substituted with data from the user and group whose membership status is being checked:
  * `#{username}` - Replaced with the username of the user in RocketChat
  * `#{groupName}` - Replaced with the name of the group in LDAP
  * `#{userdn}` - Replaced with the LDAP Distinguished Name of the user
* **LDAP Group BaseDN**: The LDAP BaseDN is used to determine if users are in a group.
* **User Data Group Map**: The mapping of LDAP groups to Rocket.Chat roles in JSON format. For example, the following object will map the rocket-admin LDAP group to Rocket.Chat's "admin" role and the "tech-support" group to the "support" role. It's also possible to map one group to multiple roles ("manager" group to "leader" and "moderator" roles).

```
{
	"rocket-admin": "admin",
	"tech-support": "support",
	"manager": ["leader", "moderator"]
}
```

## Sync Teams <a href="#h8eyqbx7wnb" id="h8eyqbx7wnb"></a>

* **Enable team mapping from LDAP to Rocket.Chat**: Enables team mapping from LDAP to Rocket.Chat
* **Team mapping from LDAP to Rocket.Chat**: Team mapping from LDAP to Rocket.Chat
* **Validate mapping for each login**: Determine if users' teams should be updated every time they log in to Rocket.Chat. The team will be loaded only on their first login if this is turned off.
* **LDAP Teams BaseDN**: The LDAP BaseDN used to look up user teams.
* **LDAP Team Name Attribute**: The LDAP attribute that Rocket.Chat should use to load the team's name. You can specify more than one attribute name by separating them with a comma.
* **LDAP query to get user groups**: LDAP query to get the LDAP groups that the user is part of
