# Keycloak

## Configuring Keycloak OpenID Connect

Create a client in Keycloak.

1. Provide a client ID: `rocket-chat-client`
2. Select the client protocol as openid-connect
3. Select the client access type as confidential
4. Standard flow implemented: ON
5. Valid Redirect URL: `http:{Rocket.Chat_server_address}/*`

The following image shows the minimal configurations needed to setup Keycloak as an Identity Provider to Rocket.Chat.

![](../../../../.gitbook/assets/client\_configurations.png)

(In the example above we are using http://locahost:3000/\* as the Redirect URI change it to the IP and PORT of your rocketchat instance.)

After saving the changes a new credentials tab will be created for the client. This credentials tab will provide the client secrets which will be used when configuring the Rocket.Chat.

## Configuring Rocket.Chat

### Create a Custom Oauth provider

* Login to Rocket.Chat with an administrator account and navigate to OAuth page.
* Click the Add custom OAuth button and provide the following configurations

The URL paths provided in the below configurations can be also obtained by navigating to the Realm setting and clicking the endpoints link in the `General Tab`. While configuring the below settings replace the `realm_name` with the appropriate realm name. The default realm provided by Keycloak is `master`.

1. URL: `http://{keycloak_ip_address}:{port}`
2. Token Path: `/realms/{realm_name}/protocol/openid-connect/token`
3. Token sent via: Header
4. Identity Token Sent Via: Same As "Token Sent Via"
5. Identity Path `/realms/{realm_name}/protocol/openid-connect/userinfo`
6. Authorize Path `/realms/{realm_name}/protocol/openid-connect/auth`
7. Scope: `openid`
8. Param Name for access token: `access_token`
9. Id: This is the id of the Rocket.Chat client created in the keycloak `rocket-chat-client`
10. Secret: Secret key provided in the credentials tab when creating the Rocket.Chat client
11. Button Text: `Login with Keycloak`

Leave the rest of the configurations as default. Click the blue button Save Changes at the top.

Next, make sure you enable the new Keycloak provider. And click the Refresh OAuth Services button.

If you are in a test environment with no SMTP server set make sure to disable Two-factor Authentication in Administration > Settings > General.

If you don't have an SMTP server set make sure to disable Two-Factor Authentication in Administration > Settings > General.

Now logout from Rocket.Chat to view the keycloak based login option visible in the login page.

![](../../../../.gitbook/assets/keycloak\_federation.png)

## Mapping non-federated keycloak user roles to Rocket.Chat roles

This section documents how client-specific roles of keycloak managed user can be mapped to Rocket.Chat roles. This does not work for federated users (e.g. LDAP managed users).

For this example, we map the `admin` and `livechat-manager` role, as documented in [Permissions](https://docs.rocket.chat/administrator-guides/permissions/).

First we add the required roles to the client.

**Add role to the client**

To create a role, click **Add Role**, enter in the name and description of the role, and then click **Save**.

![Add Role](../../../../.gitbook/assets/30052022\_Addnewrole.jpg)

then we have to add a mapper entry, that maps our client roles to OpenId, passing the value to Rocket.Chat.

**View all client roles**

To view all the client roles you have created, click **Roles** > **View all roles**

![View client roles](<../../../../.gitbook/assets/Keyclock\_Client Roles\_31052022.jpg>)

**Composite Roles**

A _composite role_ is a role that can be associated with other roles.

To define composite roles, click **Role** and then navigate to **Composite** **Roles.**

![Composite Roles](../../../../.gitbook/assets/keycloak\_CompositeRoles\_31052022.jpg)

Now in order to grant the Rocket.Chat role to a user, we have to modify the users Role Mappings.

**Create Protocol Mapper**

![Create Protocol Mapper](../../../../.gitbook/assets/Createprotocalmapping.jpg)

**Mappers**

![Mappers](../../../../.gitbook/assets/mappersrc.jpg)

The roles are only synced on first login, and not being refreshed on each login. Please see the [bug report](https://github.com/RocketChat/Rocket.Chat/issues/15225) for current state.
