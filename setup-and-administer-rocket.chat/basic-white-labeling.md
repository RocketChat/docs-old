---
description: >-
  Leverage our white-labeling capabilities to make Rocket.Chat look and feel
  exactly like your organization.
---

# Basic White-labeling

This guide focuses on customizations to the looks and feels that you can make for your Rocket.Chat workspace. To achieve this, you are required to have an [administrator](roles-in-rocket.chat/) role.

Most of the UI changes take place in the **Layout** settings. To access this menu, go to **Administration > Workspace > Settings > Layout**.&#x20;

### Custom CSS

### Custom CSS

With Custom CSS, you define your brand's color system using CSS. Rocket.Chat has revamped the semantic color palette to make it easier for developers and designers to work with the palette. The token names say where and how the color should be used. For example, the token name `button-background-primary-default` has four parts to its name which are significant as follows:

With Custom CSS, you define your brand's color system using CSS. Rocket.Chat has revamped the semantic color palette to make it easier for developers and designers to work with the palette. The token names say where and how the color should be used. For example, the token name `button-background-primary-default` has four parts to its name which are significant as follows:

* button: UI element it is responsible for.
* background: Part of the UI element.
* primary: Type of UI element.
* default: State of the UI element.

To modify various elements, you must copy and paste the text block (variables list) below in the Custom CSS text field and modify the colors to suit your brand's colors accordingly, and hit Save.

<pre class="language-css"><code class="lang-css"><strong>.rcx-content--main {
</strong>--rcx-color-stroke-extra-light: #2F343D;
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
</code></pre>

The  name `rcx-content--main` refers to Rocket.Chat's main content body and `rcx-sidebar--main` refers to Rocket.Chat's sidebar, and essentially, the blocks represent the part of Rocket.Chat's UI colors which you should modify.

### Custom Scripts

Provide custom Javascript codes to run when a flow is executed on your workspace.

* **Custom Script for Logout Flow**: Provide JavaScript code that is run when a logout flow is executed on your workspace.
* **Custom Script for Logged Out Users**: Provide JavaSscript code that is run each time a user who is not logged in lands on your Rocket.Chat's login screen.
* **Custom Script for Logged In Users**: Provide custom JavaScript code that runs whenever a logged-in user opens Rocket.Chat . By default, there is a provided script for you in the text field.

### Home page content

Settings for your Rocket.Chat's home page when one successfully logged in. You can choose to change various parts of the homepage UI with the following options.

* **Home Title:** The tile displayed at the top left of the home page is changed using the Home Title field.
* **Show Home page button on the sidebar header**: Toggle whether to display the home icon button or not which when cli                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          cked takes you to your Rocket.Chat's home page.
* **Block content**: Provide custom content to be shown to your workspace users on the home page. It may take the whole home page if you are on Rocket.Chat Enterprise. By default, this content will be shown to only administrators of your workspace. You can make it available/unavailable to every user of your workspace by either clicking **Show to workspace**/**Hide on workspace** while on the homepage.
* **Show custom content to homepage**: If you have provided custom content in the Block content field described above, turning this option on will make the content **visible**/i**nvisible** respectively on the homepage.
* **Show custom content only**: Show only your provided **Block content** on your homepage provided you have also turned on the option **Show custom content to homepage**.
* **Terms of Service**: Provide your own terms of service in this text field The field accepts custom HTML, so you can even provide an external link that points to a file on the internet with your terms and conditions.
* **Login Terms**: Use this to provide a one-line text block with links to where the terms and conditions of your workspace can be found. Users joining your workspace must accept these terms and conditions by checking the option on the registration screen of your workspace.
* **Privacy Policy**: Provide the content of your workspace's privacy policy here.
* Legal Notice: Type in text for your workspace's legal notice.
* **Legal Notice**: Provide text content that carries the legal notice for your workspace users.
* **Side Navigation Footer**: Provide: Provide HTML content as the footer of your sidebar. by default, it points to the Rocket.Chat's logo using HTML's anchor and image tas as shown here.

```html
<a href="/home"><img src="assets/logo.png" alt="Home" /></a>
```

You can change the `src` attribute of `img` tag to point to a fully qualified link to an image on the internet or somewhere on your server. if you prefer, you can replace the `img` tag with just text as shown next.

```html
<a href="/home">Home</a>
```

The provided content will appear at the bottom of your sidebar and when clicked while on a different page other than home, you will be taken back to your home screen.

### Login

The login menu item has settings to apply to the login screen of your workspace.

* **Hide Logo**: The logo shown on the login screen is hidden when this option is turned on and otherwise if it is turned off.
* **Hide Title**: Switching this on hides the title shown to users when they are on the login screen of your workspace.
* **Hide Powerd by**: Hide the **Powered by** text shown on the login screen by switching the option on.
* **Login Template**: Choose between a vertical or horizontal template. If you want the login screen for your workspace, to be centered vertically, select Vertical, otherwise, choose Horizontal and the login screen is pushed to the right of the user's screen on devices with large displays.
* **Show Default Login Form**: Turning this option off hides the form for user login through email/username and password while showing only login through third-party authentication providers like GitHub, while otherwise, all the form is shown alongside the third-party login options.

### User Interface

The User Interface Option has basic settings for the UI. The settings are listed thus:

* **Display Roles:** Toggles the display of user roles by the usernames on messages.
* **Group Channels By Type:** Enabling separates the channels by category (Channel, Private Room, DM, or discussion) on the left sidebar.
* **Use Full Name Initials to Generate Default Avatar:** Turning on this option ensures that default avatars are generated using your users' full names. By default, the user with the username `john.doe` and name `Richard Bricks` has the avatar with default letters `JD` and becomes RB after turning on this option.
* **Use Real Name:** Enabling this changes the display of usernames to Full Names.
* **Click to Create Direct Message:** Enable this so that when users click another user's avatar, it opens a DM with the selected user rather than going to their profile.
* Number of users' autocomplete suggestions: The maximum number of users that can be suggested when a user while typing tries to `@` mention someone.&#x20;
* **Unread Counter Style**: Choose to differentiate mentions from unread messages or use the same style.
* **Allow Special Characters in Room Names:** This enables the use of special characters like`! @ # $ % ^ & *` in room names.
* **Show top navbar in embedded layout:** This toggles the top navbar when using `?layout=embedded` at the end of the URL.
* **Merge Private Groups with Channels**: Switch on this option if you wish for private groups and channels to be merged for your workspace users.

### Content
