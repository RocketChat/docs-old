# LDAP

To configure LDAP authentication, go to the LDAP section of administration settings, enable LDAP, and add configurations to connect with your LDAP server. [Rocket.Chat](http://rocket.chat/) supports a variety of LDAP capabilities and associated identity management features. Below is a listing of key features sets associated with each of the [Rocket.Chat](http://rocket.chat/) versions.

| Functionality | CE/Bronze/Silver/Pro | EE/Gold | Description |
| :--- | :--- | :--- | :--- |
| [**LDAP**](https://docs.rocket.chat/guides/administration/administration/settings/ldap) |  |  |  |
|     Basic LDAP Login | Yes | Yes |  |
|         Login Fallback | Yes | Yes | This option allows regular password users to log in on Rocket.Chat. It will let LDAP users continue using Rocket.Chat if the LDAP server is down. |
|         Filter what       LDAP users can log in |  | Yes | There are two settings to manage this: Search Filter and Group Filter |
|         Merge with existing Rocket.Chat users | Yes | Yes | Detect if the LDAP user is already registered on Rocket.Chat and use the same user for both authentication types |
|     LDAP encryptions | Yes | Yes | The encryption method used to secure communications to the LDAP server |
|     Sync User Data |  |  | Load information from the LDAP user to Rocket.Chat |
|         Load Basic User Data from LDAP | Yes | Yes | Email, name, and username |
|         Load Custom User Data from LDAP |  | Yes | Load any LDAP attribute to a custom field on Rocket.Chat |
|         Load Avatars |  | Yes | Load the user's avatar from an LDAP attribute |
|         Advanced-Data Sync |  |  | Perform additional operations based on data from LDAP |
|         Load Roles |  | Yes | You can map any LDAP group to a Rocket.Chat role |
|         Auto-Subscribe to Channels |  | Yes | You can map any LDAP group to a Rocket.Chat channel |
|         Auto-Unsubscribe from Channels |  | Yes | You can also remove users from Rocket.Chat channels on LDAP |
|         Auto-Join Teams |  | Yes | You can map any LDAP group to a Rocket.Chat team |
|         Auto-Leave Teams |  | Yes | You can also remove users from Rocket.Chat teams on LDAP |
|     Background Sync |  | Yes | Periodic background sync |
|         Incremental Sync |  | Yes | Give the option to use Incremental Sync \(better performance\) |
|     Sync User Active State |  | Yes | Determine if users should be enabled or disabled on Rocket.Chat based on the LDAP status |
|         Auto logout |  | Yes | Auto logout user on next sync when it's removed/disabled on LDAP group |
| [**SAML**](https://docs.rocket.chat/guides/administration/administration/settings/saml) |  |  |  |
|     Basic Sync User Data | Yes | Yes | Keep user data in sync with the server on login \(email, name, and username\) |
|         Customizable User Interface | Yes | Yes | Ability to customize button color and text |
|         Roles |  | Yes | Role mapping from user groups |
|         Mapping |  | Yes | Select any field you want to sync with RC |
|         Advanced |  | Yes | Advanced settings \(eg. login with username and password x win user\) |
| [**OAuth**](https://docs.rocket.chat/guides/administration/administration/settings/oauth) |  |  |  |
|     All available Oauth options | Yes | Yes | Keep user data in sync with the server on login \(Unique identifier and username\) |
|         Apple | Yes | Yes | Sync user data with Apple |
|         Dolphin | Yes | Yes | Sync user data with Dolphin |
|         Drupal | Yes | Yes | Sync user data with Drupal |
|         Facebook | Yes | Yes | Sync user data with Facebook |
|         GitHub | Yes | Yes | Sync user data with GitHub |
|         GitHub Enterprise | Yes | Yes | Sync user data with GitHub Enterprise |
|         GitLab | Yes | Yes | Sync user data with GitLab |
|         Google | Yes | Yes | Sync user data with Google |
|         Linkedin | Yes | Yes | Sync user data with Linkedin |
|         Meteor | Yes | Yes | Sync user data with Meteor |
|         Nextcloud | Yes | Yes | Sync user data with Nextcloud |
|         Tokenpass | Yes | Yes | Sync user data with Tokenpass |
|         Twitter | Yes | Yes | Sync user data with Twitter |
|         WordPress | Yes | Yes | Sync user data with WordPress |
|         Custom OAuth Role mapping |  | Yes | Role mapping from user groups |
|         Sync User Avatar |  | Yes | Toggle avatar syncing on or off |

