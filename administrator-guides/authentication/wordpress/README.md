# WordPress oAuth Setup

The Easiest way to configure Rocket.Chat using WordPress as your identity backend is to use the MiniOrange oAuth Plugin Version 2.5.6 or higher: <https://wordpress.org/plugins/miniorange-oauth-20-server/>

## Step by Step Guide

1) Sign into your Rocket Chat instance with an administrator account.
2) procced to the oAuth section under administration.
3) Click on Add custom oAuth to create a new OAuth Application (refer to image below).

![alt text](https://savvymatthew.sfo2.cdn.digitaloceanspaces.com/rocketchat-docs/rct-oauth-step-03.png)

4) You will be shown the Application Configuration tab, copy the Callback URL (example: `http://your.domain.com/_oauth/id`) put this into notepad or another text application as we will need this in the next few steps.

6) Login to your WordPress site as an administrator and navigate to Add New under Plugins.

7) Search for "MiniOrange oAuth Server" (Red Below)

8) Install and activate the MiniOrange oAuth Server plugin (Purple then Green)

![alt text](https://savvymatthew.sfo2.cdn.digitaloceanspaces.com/rocketchat-docs/rct-oauth-step-8.png)

9) Navigate to the MiniOrange oAuth Server Menu item and click though the quick guided tour.

10) Click add client (Red)

![alt text](https://savvymatthew.sfo2.cdn.digitaloceanspaces.com/rocketchat-docs/rct-oauth-step-10.png)

11) Give your client a name (Red) and enter in the Callback URL we saved above (Purple) and click save client.

![alt text](https://savvymatthew.sfo2.cdn.digitaloceanspaces.com/rocketchat-docs/rct-oauth-step-11.png)

12) This will now show your Client ID (Red) and Client Secret (Purple) copy these into the same notepad or another text application where you have your Callback URL.

![alt text](https://savvymatthew.sfo2.cdn.digitaloceanspaces.com/rocketchat-docs/rct-oauth-step-12.png)

13) Click the Endpoints tab and copy Each line under in the purple box to your notepad as well noting what endpoint it is.

![alt text](https://savvymatthew.sfo2.cdn.digitaloceanspaces.com/rocketchat-docs/rct-oauth-step-13.png)

14) Go back to your already created custom oAuth in Rocket Chat and match up everything in the notepad into the correct fields listed below and in the screenshot.

- **Enable** = True
- **URL** = `https://your.domain.com` (Do not include a trailing “/”)
- **Token Path** = Access Token Endpoint
- **Token Sent Via** = Payload
- **Identity Token Sent Via** = Payload
- **Identity Path** = Get User Info Endpoint
- **Authorize Path** = Authorize Endpoint
- **Scope** = Profile
- **Id** = Client ID
- **Secret** = Client Secret
- **Login Style** = Redirect (You can use any of them really but redirect is really the only one that plays nice with the mobile and desktop apps.)
- **Username field** =  username ( Note WordPress’s normal hook for a username is user_login but the plugin rewrites this in the json response to Rocket to username)
- **Merge users** = true

![alt text](https://savvymatthew.sfo2.cdn.digitaloceanspaces.com/rocketchat-docs/rct-oauth-step-14.png)

### Button Customization

In regards to the customization of the login button you can customize it without affecting oAuth working. One thing to note though is when using the mobile and desktop apps they will not display your imputed Button text, they will display your custom oAuth name at the top.

### Troubleshooting oAuth

First thing to do when having an issue with oAuth is to enable Level 2 Logging to see whats going on:
Administration > Logs > Log Level then you can Click View Logs.

When looking at the logs you want may want to open an incognito mode browser window for the log in screen and have the logs and your login screen side by side. When you attempt a login, the log will display the oAuth response in Realtime giving you valuable information to help your troubleshoot your issue.

Here are some forum threads that provide some issues others have had:

**The redirect URI provided is missing or does not match**
<https://wordpress.org/support/topic/rocketchat-wordpress-the-redirect-uri-provided-is-missing-or-does-not-match/>
