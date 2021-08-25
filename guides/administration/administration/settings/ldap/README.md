# LDAP

To configure LDAP authentication, go to the LDAP section of administration settings, enable LDAP, and add configurations to connect with your LDAP server. [Rocket.Chat](http://rocket.chat/) supports a variety of LDAP capabilities and associated identity management features. Below is a listing of key features sets associated with each of the [Rocket.Chat](http://rocket.chat/) versions.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Functionality</th>
      <th style="text-align:left">CE/Bronze/Silver/Pro</th>
      <th style="text-align:left">EE/Gold</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">&lt;b&gt;&lt;/b&gt;<a href="https://docs.rocket.chat/guides/administration/administration/settings/ldap"><b>LDAP</b></a>&lt;b&gt;&lt;/b&gt;</td>
      <td
      style="text-align:left">&lt;b&gt;&lt;/b&gt;</td>
        <td style="text-align:left"></td>
        <td style="text-align:left">&lt;b&gt;&lt;/b&gt;</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Basic Sync User Data</b>
      </td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Keep user data in sync with the server on the login</td>
    </tr>
    <tr>
      <td style="text-align:left">User Data Field Map</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">
        <p></p>
        <p>(email, name, and username)</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Login Fallback</b>
      </td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">This option allows regular password users to log in on Rocket.Chat. It
        will let LDAP users continue using Rocket.Chat if the LDAP server is down.</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p></p>
        <p><b>LDAP Encryption</b>
        </p>
      </td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">The encryption method used to secure communications to the LDAP server</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Advanced Sync User Data</b>
      </td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Advanced user data sync options</td>
    </tr>
    <tr>
      <td style="text-align:left">User Data Custom Field Map</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Select any field you want to sync with RC</td>
    </tr>
    <tr>
      <td style="text-align:left">Sync User Avatar</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Toggle avatar syncing on or off</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Sync LDAP Groups to Roles</b>
      </td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Role mapping from user groups</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>User Search / Group Filter</b>
      </td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">The LDAP search filter is used to check if a user is in a group (filter
        which LDAP users can log in at RC)</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Auto Sync LDAP Groups to Channels</b>
      </td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Automatically add users to a channel based on their LDAP group</td>
    </tr>
    <tr>
      <td style="text-align:left">Teams Sync</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Automatically add users to a team based on their LDAP group</td>
    </tr>
    <tr>
      <td style="text-align:left">Auto Remove Users from Channels</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Remove any users in a channel that does not have the corresponding LDAP
        group</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Background Sync</b>
      </td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Periodic background sync</td>
    </tr>
    <tr>
      <td style="text-align:left">Incremental Sync</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Give the option to use Incremental Sync (better performance)</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Sync User Active State</b>
      </td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Determine if users should be enabled or disabled on Rocket.Chat based
        on the LDAP status</td>
    </tr>
    <tr>
      <td style="text-align:left">Auto logout</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Auto logout user on next sync when it&apos;s removed/disabled on LDAP
        group</td>
    </tr>
    <tr>
      <td style="text-align:left">&lt;b&gt;&lt;/b&gt;<a href="https://docs.rocket.chat/guides/administration/administration/settings/saml"><b>SAML</b></a>&lt;b&gt;&lt;/b&gt;</td>
      <td
      style="text-align:left"></td>
        <td style="text-align:left"></td>
        <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Basic Sync User Data</b>
      </td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Keep user data in sync with the server on login (email, name, and username)</td>
    </tr>
    <tr>
      <td style="text-align:left">Customizable User Interface</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Ability to customize button color and text</td>
    </tr>
    <tr>
      <td style="text-align:left">Roles</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Role mapping from user groups</td>
    </tr>
    <tr>
      <td style="text-align:left">Mapping</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Select any field you want to sync with RC</td>
    </tr>
    <tr>
      <td style="text-align:left">Advanced</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Advanced settings (eg. login with username and password x win user)</td>
    </tr>
    <tr>
      <td style="text-align:left">&lt;b&gt;&lt;/b&gt;<a href="https://docs.rocket.chat/guides/administration/administration/settings/oauth"><b>OAuth</b></a>&lt;b&gt;&lt;/b&gt;</td>
      <td
      style="text-align:left"></td>
        <td style="text-align:left"></td>
        <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>All available Oauth options</b>
      </td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Keep user data in sync with the server on login (Unique identifier and
        username)</td>
    </tr>
    <tr>
      <td style="text-align:left">Apple</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Sync user data with Apple</td>
    </tr>
    <tr>
      <td style="text-align:left">Dolphin</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Sync user data with Dolphin</td>
    </tr>
    <tr>
      <td style="text-align:left">Drupal</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Sync user data with Drupal</td>
    </tr>
    <tr>
      <td style="text-align:left">Facebook</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Sync user data with Facebook</td>
    </tr>
    <tr>
      <td style="text-align:left">GitHub</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Sync user data with GitHub</td>
    </tr>
    <tr>
      <td style="text-align:left">GitHub Enterprise</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Sync user data with GitHub Enterprise</td>
    </tr>
    <tr>
      <td style="text-align:left">GitLab</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Sync user data with GitLab</td>
    </tr>
    <tr>
      <td style="text-align:left">Google</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Sync user data with Google</td>
    </tr>
    <tr>
      <td style="text-align:left">Linkedin</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Sync user data with Linkedin</td>
    </tr>
    <tr>
      <td style="text-align:left">Meteor</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Sync user data with Meteor</td>
    </tr>
    <tr>
      <td style="text-align:left">Nextcloud</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Sync user data with Nextcloud</td>
    </tr>
    <tr>
      <td style="text-align:left">Tokenpass</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Sync user data with Tokenpass</td>
    </tr>
    <tr>
      <td style="text-align:left">Twitter</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Sync user data with Twitter</td>
    </tr>
    <tr>
      <td style="text-align:left">WordPress</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Sync user data with WordPress</td>
    </tr>
    <tr>
      <td style="text-align:left">Custom OAuth Role mapping</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Role mapping from user groups</td>
    </tr>
    <tr>
      <td style="text-align:left">Sync User Avatar</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Toggle avatar syncing on or off</td>
    </tr>
  </tbody>
</table>

