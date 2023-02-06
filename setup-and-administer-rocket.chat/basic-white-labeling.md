---
description: >-
  Leverage our white-labeling capabilities to make Rocket.Chat look and feel
  exactly like your organization.
---

# Basic White-labeling

This guide focuses on customizations that non-technical users can make to their Rocket.Chat server. To achieve this, you are required to have administrator privileges.

## Layout

Most of the UI changes take place in the Layout option. To access it, go to **Administration > Layout > Home  Body**. Various sections are presented to you, which are revealed or hidden by clicking on the options. The sections available include **Colors**, **Content**, **Custom CSS**, **Custom Scripts**, **Fonts, Old Colors, Old Colors(minor)**, and **User Interface**. I've included the various sections below.

### Colors

Rocket.Chat gives you the freedom to customize your brand's color palette. Let us see the various sections of the color palette.

### Error

The Error variable changes various elements of your brand's design. The features affected by the Error variable include the background on disabled switch buttons, the color of the line shown for unread messages, the delete button when performing deletion actions like deleting messages, audio recording, leaving a channel, text box with an error during verification and all activities considered to be dangerous actions.&#x20;

To change the error color, you are given two options, being:

* **Color** where you click in the box, and a color picker pops up, and you can select your preferred colo.r
* **Expression** such that you manually type a hex color code in the box, for example, **#fff067**, or a Rocket.Chat [variables color](https://app.gitbook.com/s/-MWf1K8RJU-TjNEtPxvb/desktop-app/desktop-app-white-labelling/ui-colors) expression such as **color-red**, **color-dark-100**, and so on.
* Click on **Save Changes** for the changes to take effect.

{% hint style="info" %}
As a rule of thumb, changing all the other colors require using either the color picker or color expressions.
{% endhint %}

### Error Light

The Error Light variable changes the border color of disabled switches, and the icon in the burger menu in mobile view. Change the variable by using either the color option or the expression option, as earlier stated.

### Alert

The Alert variable changes elements such as the warning icon and an away status.

### Alert Light

The Alert Light variable changes the Favorite button color.

### Success

The Success variable changes elements such as online status, enabled switch buttons, and done button.

### Success Light

The Success light variable changes the Confirmation icon.

### Button Primary

The **Button Primary** variable changes the colors of links. By default, the color is blue (color-blue), but if you wish to change it to green, modify its expression to **color-green**. This variable is used for the **clip icon** in the files list, the r**eply in thread** and **reactions button** colors, the room **action buttons** colors on hover, the enabled **switch button** in room settings, the r**eply counter**, the r**ecord** and **OK** buttons in video messages, active directory **tab**, member list actions which include the **Add users** and Invite users, room info save button and checkbox background color.

Many more elements of your UI can be customized. You should go ahead and check Rocket.Chat's [**variables**](https://github.com/RocketChat/Rocket.Chat/blob/develop/apps/meteor/app/theme/client/imports/general/variables.css) file and notice the color names and some layout properties that can be changed. In this regard, the variable is obtained by removing the two dashes (--) at the beginning of the variable.

**Content**

The Content variable changes the color for the number of unread messages.

**Other Colors**

Rocket.Chat also has some Old Colors, and Old Colors (minor) can also be customized to make changes to the UI using either the **Expression** choice or **Color**.

## Content

The content section allows you to change the HTML content of several screens on your Rocket.Chat server. The areas under the Content section that allows you to customize include the home title, the body, which is the first screen users see when logged in, terms of service, login terms, privacy policy, legal notice, and the side navigation folder. Make sure to hit **Save Changes** after making any of the content changes.

### Fonts

Here you can define the font family for the system in a list separated by commas, Rocket.Chat tries to use the available fonts starting from left to right.

### User Interface

The User Interface Option has basic settings for the UI. The settings are listed thus:

* **Display Roles:** Toggles the display of user roles by the usernames on messages.
* **Group Channels By Type:** Enabling separates the channels by category (Channel, Private Room, DM, or discussion) on the left sidebar.
* **Use Full Name Initials to Generate Default Avatar:** Turning on this option ensures that default avatars are generated using your users' full names. By default, the user with username `john.doe` and name `Richard Bricks` has the avatar with default letters `JD` and becomes RB after turning on this option.
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
