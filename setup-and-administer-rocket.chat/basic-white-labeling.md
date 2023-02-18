---
description: >-
  Leverage our white-labeling capabilities to make Rocket.Chat look and feel
  exactly like your organization.
---

# Basic White-labeling

This guide focuses on customizations to the looks and feels that you can make for your Rocket.Chat workspace. To achieve this, you are required to have an [administrator](roles-in-rocket.chat/) role.

Most of the UI changes take place in the **Layout** settings. To access this menu, go to **Administration > Workspace > Settings > Layout**.&#x20;

### Custom CSS

With Custom CSS, you define your brand's color system using CSS. Rocket.Chat has revamped the semantic color palette to make it easier for developers and designers to work with the palette. The token names say where and how the color should be used. For example, the token name `button-background-primary-default` has four parts to its name which are significant as follows:

* button: UI element it is responsible for.
* background: Part of the UI element.
* primary: Type of UI element.
* default: State of the UI element.

To modify various elements, you are required to copy and paste the text block (variables list) below in the Custom CSS text field and modify the colors to suit your brand's colors accordingly and hit Save.

```css
.rcx-content--main {
--rcx-color-stroke-extra-light: #2F343D;
--rcx-color-stroke-light: #333842;
--rcx-color-stroke-medium: #404754;
--rcx-color-stroke-dark: #9EA2A8;
--rcx-color-stroke-extra-dark: #CBCED1;
--rcx-color-stroke-extra-light-highlight: #87CBFC;
--rcx-color-stroke-highlight: #3976D1;
--rcx-color-stroke-extra-light-error: #F49AA6;
--rcx-color-stroke-error: #BB3E4E;
--rcx-color-surface-light: #262931;
--rcx-color-surface-tint: #1F2329;
--rcx-color-surface-room: #1F2329;
--rcx-color-surface-neutral: #2D3039;
--rcx-color-surface-disabled: #24272E;
--rcx-color-surface-hover: #1A1E23;
--rcx-color-surface-selected: #3C3F44;
--rcx-color-surface-dark: #E4E7EA;
--rcx-color-font-white: #2F343D;
--rcx-color-font-disabled: #3E4146;
--rcx-color-font-hint: #9EA2A8;
--rcx-color-font-secondary-info: #9EA2A8;
--rcx-color-font-default: #E4E7EA;
--rcx-color-font-titles-labels: #F2F3F5;
--rcx-color-font-info: #739EDE;
--rcx-color-font-danger: #CF6E7A;
--rcx-color-status-background-info: #A8C3EB;
--rcx-color-status-background-success: #C1EBDD;
--rcx-color-status-background-warning: #FEEFBE;
--rcx-color-status-background-warning-2: #4E4731;
--rcx-color-status-background-danger: #FFBDC5;
--rcx-color-status-background-service-1: #FCE3CF;
--rcx-color-status-font-on-info: #739EDE;
--rcx-color-status-font-on-success: #58AD90;
--rcx-color-status-font-on-warning: #C7AA66;
--rcx-color-status-font-on-warning-2: #FFFFFF;
--rcx-color-status-font-on-danger: #D88892;
--rcx-color-status-font-on-service-1: #CA9163;
--rcx-color-status-font-on-service-2 : #C393D2;
--rcx-color-badge-background-level-1: #484C51;
--rcx-color-badge-background-level-2: #3070CF;
--rcx-color-badge-background-level-3: #A9642D;
--rcx-color-badge-background-level-4: #BB3E4E;
--rcx-color-shadow-elevation-1: rgba(9, 9, 9, 0.35);
--rcx-color-shadow-elevation-2x: rgba(9, 9, 9, 0.3);
--rcx-color-shadow-elevation-2y: rgba(9, 9, 9, 0.45);
--rcx-color-button-background-primary-default: #3976D1;
--rcx-color-button-background-primary-hover: #295EAE;
--rcx-color-button-background-primary-press: #245399;
--rcx-color-button-background-primary-focus: #3976D1;
--rcx-color-button-background-primary-keyfocus: #3976D1;
--rcx-color-button-background-primary-disabled: #1D3963;
--rcx-color-button-background-secondary-default: #2F343D;
--rcx-color-button-background-secondary-hover: #3A404B;
--rcx-color-button-background-secondary-press: #454C59;
--rcx-color-button-background-secondary-focus: #2F343D;
--rcx-color-button-background-secondary-keyfocus: #2F343D;
--rcx-color-button-background-secondary-disabled: #2F343D;
--rcx-color-button-background-secondary-danger-default: #2F343D;
--rcx-color-button-background-secondary-danger-hover: #3A404B;
--rcx-color-button-background-secondary-danger-press: #454C59;
--rcx-color-button-background-secondary-danger-focus: #2F343D;
--rcx-color-button-background-secondary-danger-keyfocus: #2F343D;
--rcx-color-button-background-secondary-danger-disabled: #2F343D;
--rcx-color-button-background-danger-default: #BB3E4E;
--rcx-color-button-background-danger-hover: #95323F;
--rcx-color-button-background-danger-press: #822C37;
--rcx-color-button-background-danger-focus: #BB3E4E;
--rcx-color-button-background-danger-keyfocus: #BB3E4E;
--rcx-color-button-background-danger-disabled: #3D2126;
--rcx-color-button-background-success-default: #1D7256;
--rcx-color-button-background-success-hover: #175943;
--rcx-color-button-background-success-press: #134937;
--rcx-color-button-background-success-focus: #1D7256;
--rcx-color-button-background-success-keyfocus: #1D7256;
--rcx-color-button-background-success-disabled: #1E4B40;
--rcx-color-button-font-on-secondary: #E4E7EA;
--rcx-color-button-font-on-secondary-danger: #C14454;
--rcx-color-button-font-on-success: #FFFFFF;
--rcx-color-button-font-on-primary-disabled: #6C727A;
--rcx-color-button-font-on-secondary-disabled: #6C727A;
--rcx-color-button-font-on-secondary-danger-disabled: #613339;
--rcx-color-button-font-on-danger-disabled: #757575;
--rcx-color-button-font-on-success-disabled: #757575;
}
.rcx-sidebar--main {
--rcx-color-stroke-medium: #324677;
--rcx-color-surface-tint: #262931;
--rcx-color-surface-hover: #1B1D22;
--rcx-color-surface-selected: #31363F;
--rcx-color-button-background-secondary-default: #0D0F11;
--rcx-color-button-background-secondary-press: #2C313A;
--rcx-color-button-background-secondary-focus: #0D0F11;
--rcx-color-user-presence-online: #1CBF89;
--rcx-color-user-presence-busy: #C14454;
--rcx-color-user-presence-away: #AC892F;
--rcx-color-user-presence-offline: #6C727A;
--rcx-color-button-icon-disabled-color: #6C727A;
}
```

The  name `rcx-content--main` refers to Rocket.Chat's main content body and `rcx-sidebar--main` refers to Rocket.Chat's sidebar and essentially, the blocks represent the part of Rocket.Chat's UI colors which you should modify.

### Custom Scripts



### Home page content



### Login

## Content

The content section allows you to change the HTML content of several screens on your Rocket.Chat server. The areas under the Content section that allows you to customize include the home title, the body, which is the first screen users see when logged in, terms of service, login terms, privacy policy, legal notice, and the side navigation folder. Make sure to hit **Save Changes** after making any of the content changes.

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
