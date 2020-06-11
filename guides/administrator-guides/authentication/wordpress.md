# WordPress oAuth Setup

The easiest way to configure Rocket.Chat using WordPress as your identity backend is to use the MiniOrange oAuth Plugin Version 2.5.6 or higher: [https://wordpress.org/plugins/miniorange-oauth-20-server/](https://wordpress.org/plugins/miniorange-oauth-20-server/)

## Instructions

* Sign into your Rocket.Chat instance with an administrator account.
* Procced to the `oAuth` section under `Administration`.
* Click on **Add custom oAuth** to create a new OAuth Application, as depicted below:

![alt text](https://savvymatthew.sfo2.cdn.digitaloceanspaces.com/rocketchat-docs/rct-oauth-step-03.png)

* In the **Application Configuration** tab, copy the `Callback URL` \(example: `http://your.domain.com/_oauth/id`\), and put it into a notepad, or another text application, as we will need it in the next few steps.
* Log into your WordPress site as an administrator and navigate to **Add New** under `Plugins`.
* Search for "MiniOrange oAuth Server" \(Red below\).
* Install and activate the `MiniOrange oAuth Server` plugin \(Purple, and then Green\).

![alt text](https://savvymatthew.sfo2.cdn.digitaloceanspaces.com/rocketchat-docs/rct-oauth-step-8.png)

* Navigate to the `MiniOrange oAuth Server` Menu item, and click though the quick guided tour.
* Click **Add client** \(Red\).

![alt text](https://savvymatthew.sfo2.cdn.digitaloceanspaces.com/rocketchat-docs/rct-oauth-step-10.png)

* Give your client a name \(Red\), enter the Callback URL you saved before \(Purple\), and click **Save client**.

![alt text](https://savvymatthew.sfo2.cdn.digitaloceanspaces.com/rocketchat-docs/rct-oauth-step-11.png)

* It now shows your `Client ID` \(Red\) and `Client Secret` \(Purple\). Copy them into the same notepad, or another text application where you have your Callback URL.

![alt text](https://savvymatthew.sfo2.cdn.digitaloceanspaces.com/rocketchat-docs/rct-oauth-step-12.png)

* Click the **Endpoints** tab, and copy each line from the purple box to your notepad. Don't forget to note the endpoint each line represents.

![alt text](https://savvymatthew.sfo2.cdn.digitaloceanspaces.com/rocketchat-docs/rct-oauth-step-13.png)

* Go back to the custom oAuth you already created in Rocket.Chat, and match the information saved in the notepad into the correct fields listed below and in the screenshot:
* **Enable** = True
* **URL** = `https://your.domain.com` \(do not include a trailing “/”\)
* **Token Path** = Access Token Endpoint
* **Token Sent Via** = Payload
* **Identity Token Sent Via** = Payload
* **Identity Path** = Get User Info Endpoint
* **Authorize Path** = Authorize Endpoint
* **Scope** = Profile
* **Id** = Client ID
* **Secret** = Client Secret
* **Login Style** = Redirect \(you can use any of them, but redirect is really the only one that plays nice with mobile and desktop apps\)
* **Username field** = username \(a normal hook for a WordPress username is user\_login, but the plugin rewrites this in the JSON response to Rocket for username\)
* **Merge users** = true

![alt text](https://savvymatthew.sfo2.cdn.digitaloceanspaces.com/rocketchat-docs/rct-oauth-step-14.png)

### Button Customization

In regards to the customization of the **Log in** button, you can customize it without affecting oAuth working.

**Note**: When using mobile and desktop apps, your imputed **Button** text is not displayed. Instead, the apps will display your custom oAuth name at the top.

### Troubleshooting oAuth

The first thing to do when having an issue with oAuth is to enable `Level 2 Logging` to see what's going on: `Administration > Logs > Log Level > View Logs`.

When looking at the logs, you may want to open an incognito mode browser window for the log in screen, and have the logs and your login screen side-by-side. When you attempt a login, the log displays the oAuth response in real time, which gives you valuable information to help you troubleshoot your issue.

Here are some forum threads that provide issues experienced by others:

**The redirect URI provided is missing or does not match** [https://wordpress.org/support/topic/rocketchat-wordpress-the-redirect-uri-provided-is-missing-or-does-not-match/](https://wordpress.org/support/topic/rocketchat-wordpress-the-redirect-uri-provided-is-missing-or-does-not-match/)

