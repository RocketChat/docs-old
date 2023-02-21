---
description: >-
  Leverage our white-labeling capabilities to make Rocket.Chat look and feel
  exactly like your organization.
---

# Basic White-labeling

This guide focuses on customizations to the looks and feels that you can make for your Rocket.Chat workspace. To achieve this, you are required to have an [administrator](roles-in-rocket.chat/) role.

Most of the UI changes take place in the **Layout** settings. To access this menu, go to **Administration > Workspace > Settings > Layout**.&#x20;

### Customizing Colors

Rocket.Chat gives you the ability to tweak the default color palette to suit your brand. You can check [Customizing Colors](https://app.gitbook.com/s/-MWf1K8RJU-TjNEtPxvb/rocket.chat/white-labelling-rocket.chat/customizing-colors) in the developer documentation to understand how you can do this.

## Content

The content section allows you to change the HTML content of several screens on your Rocket.Chat workspace. The areas under the Content section include the home title, the body, which is the first screen users see when logged in, terms of service, login terms, privacy policy, legal notice, and the side navigation folder. Make sure to hit **Save Changes** after making any of the content changes.

### Fonts

Here you can define the font family for the system in a list separated by commas, Rocket.Chat tries to use the available fonts starting from left to right.

### User Interface

The User Interface Option has basic settings for the UI. The settings are listed thus:

* **Display Roles:** Toggles the display of user roles by the usernames on messages.
* **Group Channels By Type:** Enabling separates the channels by category (Channel, Private Room, DM, or discussion) on the left sidebar.
* **Use Full Name Initials to Generate Default Avatar:** Turning on this option ensures that default avatars are generated using your users' full names. By default, the user with the username `john.doe` and name `Richard Bricks` has the avatar with default letters `JD` and becomes RB after turning on this option.
* **Use Real Name:** Enabling this changes the display of usernames to Full Names.
* **Click to Create Direct Message:** Enabling this makes it so that when you click an avatar, it opens a DM with the selected user rather than going to their profile.

Unread Counter Style: This option lets you differentiate or use the same style for regular messages and mentions.

* **Different Style for user mentions:** This makes the notification counter differentiate average messages from mentions.
* **Same style for mentions:** This makes the counter mark mentions and regular messages the same.
* **Allow Special Characters in Room Names:** This enables the use of special characters like`! @ # $ % ^ & *` in room names.
* **Show top navbar in embedded layout:** This toggles the top navbar when using `?layout=embedded` at the end of the URL.

## Assets

You can change most of the logos on your server in the administration menu.

* **Logo (SVG, png, jpg)**: Changes the logo on the footer of the left sidebar and the login page.
* **Login background (SVG, png, jpg)**:.Changes the background of the login page.

The following items are mostly icons for different operating systems and platforms; we recommend using the same image with the specified size and format on each item: Favicons are used in the browser tabs and as the icon for the server on the desktop application:

* favicon (ico)
* favicon (SVG)
* favicon 16x16 (png)
* favicon 32x32 (png)

Icons for the notifications on chrome in android:

* android-chrome 192x192 (png)
* android-chrome 512x512 (png)

Icons for favorites on iPhone:

* apple-touch-icon 180x180 (png)
* apple-touch-icon-precomposed 180x180 (png)

Tiles on Microsoft Windows 10 start menu:

* mstile 70x70 (png)
* mstile 144x144 (png)
* mstile 150x150 (png)
* mstile 310x310 (png)
* mstile 310x150 (png)

Safari pinned tab Icon:

* Safari pinned tab (SVG)
