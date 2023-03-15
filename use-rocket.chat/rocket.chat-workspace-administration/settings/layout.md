---
description: Customize the look of your workspace
---

# Layout

The layout feature gives you the possibility to customize the look of your Rocket.Chat workspace.

This involves aspects like specifying the content and setting custom CSS and Javascript.

To access this setting, go to **Administration** > **Workspace** > **Settings** > **Layout**.

{% hint style="success" %}
Remember to **Save changes** to apply any customization made.
{% endhint %}

<details>

<summary>Colors <img src="../../../.gitbook/assets/Deprecated (1).png" alt=""></summary>

This section has color settings and definitions you can edit or customize to have a different look on your UI elements.

Colors can be set using existing **Expressions** or **Color** by specifying them from the color picker provided.

<img src="../../../.gitbook/assets/image (637) (1) (1) (1) (1).png" alt="" data-size="original">

#### Old Colors

A list of pre-defined color variables for old versions of Rocket.Chat (<6.0) can be found [**here**.](https://github.com/RocketChat/Rocket.Chat/blob/b092bef8139f9db692872073ce9788c19b364780/app/theme/client/imports/general/variables.css)

</details>

## Custom CSS

Here, you can define custom CSS to modify how your workspace looks.

### Example

The simple CSS code below changes the color of your Rocket.Chat rooms and the hover color on the sidebar.

```css
.rcx-content--main {
  --rcx-color-surface-room: #5d91f7;
}
.rcx-sidebar--main {
--rcx-color-surface-hover: #e07c41;
}
```

<figure><img src="../../../.gitbook/assets/Customized RocketChat UI.png" alt=""><figcaption><p>Customized Rocket.Chat UI</p></figcaption></figure>

Learn more about the classes and colors available for easy customization in the guide below.

{% embed url="https://developer.rocket.chat/rocket.chat/white-labelling-rocket.chat/customizing-colors" %}

## Custom Scripts

This takes in javascript code that will be executed on specified events.

* **Custom Script for Logout Flow**: Set a script to be run during any logout process.
* **Custom Script for Logged Out Users**: Custom Script that will run ALWAYS and to ANY user that is NOT logged in. e.g. (whenever you enter the login page).
* **Custom Script for Logged In Users**: Custom Script that will run ALWAYS and to ANY user that is logged in. e.g. (whenever you enter the chat and you are logged in)

### Example

Setting a custom script for logged-in users, like the example below, will alert "Welcome" whenever a user logs in and is on the `/home` page.

```
if(window.location.pathname == '/home'){
    alert("Welcome")
}
```



## Home page content

The section allows you to change the content of your workspace homepage.

* **Home Title:** The title on the header of the first screen that your users will see when they log in.
* **Show home page button on sidebar header**: When enabled, the Home button will be shown on your server's navbar.
* **Block content:** The content of the first screen that your users will see when logging in.
* **Show custom content to homepage**: Enable to show custom content on the homepage.
* **Show custom content only**: ![](<../../../.gitbook/assets/2021-06-10\_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (1) (1) (1) (11) (27).jpg>)Turn this on to onhide all other white blocks in the homepage.
* **Terms of Service:** Here, you can set the terms of service of your workspace. You can also redirect to YOUR-SERVER-URL/terms-of-service. This is shown by default on the links below your login page.
* **Login Terms:** Specifies the terms on which users are to accept before login in.
* **Privacy Policy:** Here you can set the privacy policy of your server. Can also be accessed via `YOUR-SERVER-URL/privacy-policy`. This is shown by default on the links below your login page.
* **Legal Notice:** By default this screen is accessed on the links under the login page, here you can set the legal notice of your server. Can also be accessed via `YOUR-SERVER-URL/legal-notice`.
* **Side navigation footer:** This is the logo or text on the bottom left of the sidebar. We recommend using the images set on your [Assets](../../../setup-and-administer-rocket.chat/basic-white-labeling.md#assets) for better consistency.

## Login

Customize your login page.

{% hint style="info" %}
![](<../../../.gitbook/assets/2021-06-10\_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (1) (1) (1) (11) (27).jpg>)This is an Enterprise feature.
{% endhint %}

* **Hide Logo**: Enable this to hide the Rocket.Chat.
* **Hide Title**: Turn this on to hide the title on the login page.
* **Hide "Powered by"**: Enabling this hides the "Powered by" on the login page.
* **Login Template**: Select the direction of the login page. `Horizontal`/`Vertical`.
* **Show Default Login Form**: Enable to show the default login form.

## User Interface

* **Display Roles:** Toggles the display of user roles shown beside the usernames on messages.

![](<../../../.gitbook/assets/image (663) (1) (1) (1) (1) (1) (1) (1).png>)

* **Group Channels By Type:** Enabling this separates the channels by category (**Channel**, **Private Room**, **Direct Message** or **Discussion**) on the left sidebar.
* **Use Full Name Initials to Generate Default Avatar:** This makes the default avatars are generated using the person's Full Name instead of Username. E.g. By default the user `blue.ducks` with the name `Richards Nate` will have an avatar with the letters `BD`by default but if this setting is active, it will be `RN`.
* **Use Real Name:** Enabling this changes the display of Usernames to Full Names.
* **Click to Create Direct Message:** Turn this on for workspace users to be able to create a direct message with another user when they click on thier profile. This skips the viewing of the user's profile.
* **Number of users' autocomplete suggestions**: Sets the number of autocomplete suggestions shown when you begin tagging any user with the `@` symbol.
* **Unread Counter Style**:
  * **Different Style for user mentions:** Makes the notification counter differentiate normal messages from mentions
  * **Same style for mentions:** Makes the count mark mentions and normal messages the same
* **Allow Special Characters in Room Names:** When enabled, it allows for the use of special characters like `! @ # $ % ^ & *` in room names
* **Show top navbar in embedded layout:** If set to true, it shows the top navbar when embedding using `?layout=embedded` at the end of the URL.
