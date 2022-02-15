# Layout

RocketChat's Layout feature gives you the possibility to customize the look of your RocketChat server.

&#x20;To access this setting, go to **Administration** > **Settings** > **Layout**.

{% hint style="success" %}
Remember to always **Save changes** and refresh to apply any customization made.
{% endhint %}

## Colors

This section has color settings and definitions you can edit or customize to have a different look on your UI elements.

{% hint style="info" %}
A list of RocketChat's pre-defined color variables can be found on **** [**the repository**.](https://github.com/RocketChat/Rocket.Chat/blob/b092bef8139f9db692872073ce9788c19b364780/app/theme/client/imports/general/variables.css)
{% endhint %}

Colors can be set using existing **Expressions** or **Color** by specifying it from the color picker provided.

![](<../../../.gitbook/assets/image (637) (1) (1) (1).png>)

To learn more about setting colors, see the **** [**colors section of the Basic White-labeling guide**](../basic-white-labeling.md#colors).

## Content

The section allows you to change the HTML content of certain screens.

* **Home Title:** The title on the header of the first screen that your users will see when they log in.

![](<../../../.gitbook/assets/image (661) (1) (1) (1) (1) (1).png>)

* **Show "Home Button"**: When enabled, the Home button will be shown on your server's navbar.

![](<../../../.gitbook/assets/image (650) (1) (1) (1) (1).png>)

* **Home Body:** The content of the first screen that your users will see when logging in.

![](<../../../.gitbook/assets/image (631).png>)

* **Login Terms:** Specifies the terms on which users are to accept before login in.
* **Terms of Service:** Here, you can set the terms of service of your server. You can also redirect to YOUR-SERVER-URL/terms-of-service. This is shown by default on the links below your login page.
* **Privacy Policy:** Here you can set the privacy policy of your server. Can also be accessed via YOUR-SERVER-URL/privacy-policy. This is shown by default on the links below your login page.
* **Legal Notice:** By default this screen is accessed on the links under the login page, here you can set the legal notice of your server. Can also be accessed via YOUR-SERVER-URL/legal-notice.
* **Side navigation footer:** This is the logo or text on the bottom left of the sidebar. We recommend using the images set on your [Assets](../basic-white-labeling.md#assets) for better consistency.

![](<../../../.gitbook/assets/image (670) (1) (1) (1) (1) (1) (1).png>)

## Custom CSS

Here, you can define custom CSS that will be applied to your server's layout.

### Example

A simple CSS styling to the wrapper class like this will transform your server into a whole new look.&#x20;

```
.wrapper {
	background-color: #062d33;
}
```

![](<../../../.gitbook/assets/image (634) (1) (1).png>)

## Custom Scripts

This takes in javascript code that will be executed on specified events.

* **Custom Script for Logout Flow**: Set a script to be run during any logout process.
* **Custom Script for Logged Out Users**: Custom Script that will run ALWAYS and to ANY user that is NOT logged in. e.g. (whenever you enter the login page).
* **Custom Script for Logged In Users**: Custom Script that will run ALWAYS and to ANY user that is logged in. e.g. (whenever you enter the chat and you are logged in)

### Example

Setting a custom script for logged in users, like the example below, will alert "Welcome" whenever a user logs in and is on the `/home` page.

```
if(window.location.pathname == '/home'){
    alert("Welcome")
}
```

![](<../../../.gitbook/assets/image (645) (1) (1).png>)

## Fonts

Here, you set the fonts to be used on your server.

* **Body Font Family**: Takes in a list of comma-separated font families. RocketChat will start using the most available from left to right.

## Old Colors

This section has a list of color swatches used in older versions of RocketChat. They can be edited and customized still. Learn more about color properties and what they affect in [this guide](../basic-white-labeling.md#colors).

## Old Colors(minor)

A list of variable names and some old minor colors used before. See the color section above for more detail.

## User Interface



* **Display Roles:** Toggles the display of user roles shown beside the usernames on messages.

![](<../../../.gitbook/assets/image (663) (1) (1) (1) (1) (1) (1).png>)

* **Group Channels By Type:** Enabling this will separate the channels by category (**Channel**, **Private Room**, **Direct Message** or **Discussion**) on the left sidebar.
* **Use Full Name Initials to Generate Default Avatar:** This will make so the default avatars are generated using the person's Full Name instead of Username. E.g. By default the user `blue.ducks` with the name `Richards Nate` will have an avatar with the letters `BD`by default but if this setting is active, it will be `RN`.
* **Use Real Name:** Enabling this will change the display of Usernames to Full Names
* **Click to Create Direct Message:** Enabling this will make it so when you click an avatar, it will open a Direct Message with the selected user and skip viewing the user's profile.
* **Number of users' autocomplete suggestions**: Sets the number of autocomplete suggestions shown when you begin tagging any user with the `@` symbol.
* **Unread Counter Style**:&#x20;
  * **Different Style for user mentions:** This will make the notification counter differentiate normal messages from mentions
  * **Same style for mentions:** This will make the count mark mentions and normal messages the same
* **Allow Special Characters in Room Names:** When enabled, it allows for the use of special characters like `! @ # $ % ^ & *` in room names
* **Show top navbar in embedded layout:** If set to true, it shows the top navbar when using `?layout=embedded` at the end of the URL.
