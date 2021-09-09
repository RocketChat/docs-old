# LDAP

To configure LDAP authentication, go to the LDAP section of administration settings, enable LDAP, and add configurations to connect with your LDAP server. [Rocket.Chat](http://rocket.chat/) supports a variety of LDAP capabilities and associated identity management features. Below is a listing of key features sets associated with each of the [Rocket.Chat](http://rocket.chat/) versions.

## \*\*\*\*[**LDAP / AD**](https://docs.rocket.chat/guides/administration/administration/settings/ldap)\*\*\*\*

### **Community**

* **Basic Login**
  * **Login Fallback:** This option allows regular password users to log in on Rocket.Chat. It will let LDAP users continue using Rocket.Chat if the LDAP server is down.
  * **Merge with existing Rocket.Chat users:** Detect if the LDAP user is already registered on Rocket.Chat and use the same user for both authentication types
* **Encryptions:** The encryption method used to secure communications to the LDAP server
* **Basic User Data Sync:** Load information from the LDAP user to Rocket.Chat
  * **Load Basic User Data from LDAP:** Email, name, and username

### Enterprise

* **Advanced Login**
  * **Filter what LDAP users can log in:** There are two settings to manage this: Search Filter and Group Filter
* **Advanced User Data Sync:** Load information from the LDAP user to Rocket.Chat
  * **Load Custom User Data from LDAP:** Load any LDAP attribute to a custom field on Rocket.Chat
  * **Load Avatars:** Load the user's avatar from an LDAP attribute
  * **Advanced-Data Sync:** Perform additional operations based on data from LDAP
  * **Load Roles:** You can map any LDAP group to a Rocket.Chat role
  * **Auto-Subscribe to Channels:** You can map any LDAP group to a Rocket.Chat channel
  * **Auto-Unsubscribe from Channels:** You can also remove users from Rocket.Chat channels on LDAP
  * **Auto-Join Teams:** You can map any LDAP group to a Rocket.Chat team
  * **Auto-Leave Teams:** You can also remove users from Rocket.Chat teams on LDAP
* **Background Sync:** Periodic background sync
  * **Incremental Sync:** Give the option to use Incremental Sync \(better performance\)
  * **Sync User Active State:** Determine if users should be enabled or disabled on Rocket.Chat based on the LDAP status
  * **Auto logout:** Auto logout user on next sync when it's removed/disabled on LDAP group

## [**SAML**](https://docs.rocket.chat/guides/administration/administration/settings/saml)

### **Community**

* **Basic Synchronization:** Keep user data in sync with the server on login \(email, name, and username\)
* **Customizable User Interface:** Ability to customize button color and text

### Enterprise

* **Roles mapping:** Role mapping from user groups
* **Fields mapping:** Select any field you want to sync with RC
* **Advanced:** Advanced settings \(eg. login with username and password x win user\)

## \*\*\*\*[**OAuth / Custom OAuth**](https://docs.rocket.chat/guides/administration/administration/settings/oauth)\*\*\*\*

### **Community**

* **Basic Social logins / pre-defined OAuth options:** Keep user data in sync with the server on login \(Unique identifier and username\)
  * Apple
  * Dolphin
  * Drupal
  * Facebook
  * GitHub
  * GitHub Enterprise
  * GitLab
  * Google
  * Linkedin
  * Meteor
  * Nextcloud
  * Tokenpass
  * Twitter
  * WordPress
* **Basic Custom OAuth:** Basic login settings
  * Login via Custom OAuth protocol using a unique identifier
  * Username Import

### Enterprise

* **Advanced Social logins / pre-defined OAuth options:**
  * Avatar import
* **Advanced Custom OAuth:** Extra login settings as mappings and import of extra information
  * Role mapping
  * Avatar import

