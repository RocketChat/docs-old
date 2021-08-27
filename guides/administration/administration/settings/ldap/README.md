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
      <td style="text-align:left"><b>Basic LDAP Login</b>
      </td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">Login Fallback</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">This option allows regular password users to log in on Rocket.Chat. It
        will let LDAP users continue using Rocket.Chat if the LDAP server is down.</td>
    </tr>
    <tr>
      <td style="text-align:left">Filter what LDAP users can log in</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">
        <p>There are two settings to manage this: Search Filter and Group Filter</p>
        <p></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Merge with existing Rocket.Chat users</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Detect if the LDAP user is already registered on Rocket.Chat and use the
        same user for both authentication types</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p></p>
        <p><b>LDAP encryptions </b>
        </p>
      </td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">The encryption method used to secure communications to the LDAP server</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Sync User Data</b>
      </td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Load information from the LDAP user to Rocket.Chat</td>
    </tr>
    <tr>
      <td style="text-align:left">Load Basic User Data from LDAP</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Email, name, and username</td>
    </tr>
    <tr>
      <td style="text-align:left">Load Custom User Data from LDAP</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Load any LDAP attribute to a custom field on Rocket.Chat</td>
    </tr>
    <tr>
      <td style="text-align:left">Load Avatars</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">Load the user&apos;s avatar from an LDAP attribute</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Advanced-Data Sync</b>
      </td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Perform additional operations based on data from LDAP</td>
    </tr>
    <tr>
      <td style="text-align:left">Load Roles</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">You can map any LDAP group to a Rocket.Chat role</td>
    </tr>
    <tr>
      <td style="text-align:left">Auto-Subscribe to Channels</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">You can map any LDAP group to a Rocket.Chat channel</td>
    </tr>
    <tr>
      <td style="text-align:left">Auto-Unsubscribe from Channels</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">You can also remove users from Rocket.Chat channels on LDAP</td>
    </tr>
    <tr>
      <td style="text-align:left">Auto-Join Teams</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">You can map any LDAP group to a Rocket.Chat team</td>
    </tr>
    <tr>
      <td style="text-align:left">Auto-Leave Teams</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Yes</td>
      <td style="text-align:left">You can also remove users from Rocket.Chat teams on LDAP</td>
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

