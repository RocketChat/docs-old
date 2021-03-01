# Livechat Widget API

## Usage

Livechat Widget API code must be inserted after the Livechat Widget installation script and wrapped as a callback of `RocketChat();` function.

You can call multiple Livechat Widget APIs on the same page.

### Methods

#### _Set custom field_

To set a custom field for a visitor, you can use the following code:

```javascript
RocketChat(function() {
    this.setCustomField('fieldName1', 'Any value you want to store');
    this.setCustomField('fieldName2', 'A value set just once', false); // you can pass false as the third parameter to not overwrite an already set value
});
```

#### _Set theme options_

To change the online color of the Livechat widget, use the following code:

```javascript
RocketChat(function() {
    this.setTheme({
        color: '#04436A', // widget title background color
        fontColor: '#FFFFFF', // widget title font color
        iconColor: '#1d74f5', // widget icon color
        title: "Welcome to Rocket.Chat", // default widget title when the status of service is online
        offlineTitle: "Service is offline", // default widget title when the status of service is online
    });
});
```

#### _Assign chats to a specific department_

To automatically assign a Livechat widget to a specific department \(for example, to use a unique Livechat widget on more than one website\), use the following code:

```javascript
RocketChat(function() {
    this.setDepartment('FILL HERE DEPARTMENT NAME - case sensitive');
});
```

#### _Set visitor token_

To set an external token for a visitor, you can use the following code:

```javascript
RocketChat(function() {
    this.setGuestToken('FHwaLnp8fzjMupSAj');
});
```

#### _Set name field_

To set the visitor name field, you can use the following code:

```javascript
RocketChat(function() {
    this.setGuestName('visitor name');
});
```

#### _Set email field_

To set the visitor email field, you can use the following code:

```javascript
RocketChat(function() {
    this.setGuestEmail('sample@rocket.chat');
});
```

#### _Register visitor_

To register the visitor without using the registration form, you can use the following code:

```javascript
RocketChat(function() {
    this.registerGuest({
        token: 'FHwaLnp8fzjMupSAj', // The token field is not required. If it is not passed, a new token will be generated
        name: 'visitor Name',
        email: 'sample@rocket.chat',
        department: 'my_department', // The department field is not required,
        customFields: [ // The customFields field is not required. If it is passed it needs to be an Array, where each item needs to be an object with key and value fields
            {key:  'my_custom_field_a', value: 'my_custom_field_a_value'},
            {key:  'my_custom_field_b', value: 'my_custom_field_b_value'}
        ]
    });
});
```

#### _Set Language for Widget_

There are number of language options, which you can choose from to set language for your widget. To check supported languages refer [here](https://github.com/RocketChat/Rocket.Chat.Livechat/tree/dev/src/i18n). To set language of widget use the following code.

```javascript
RocketChat(function() {
    this.setLanguage('af');
});
```

#### _Set a default Agent before starting a new conversation_

The widget allows setting a specific agent before the conversation starts, to do this follow these steps:

```javascript
RocketChat(function() {
    this.setAgent({
        _id: 'h24yNtyoCmvp96wgt',
        username: 'rocket.chat',
  });
});
```

#### _Initialize the widget by configuring all available properties in just one call_

The widget allows configuring all the settings in just one method, the following properties are acceptable:

```javascript
RocketChat(function() {
    this.initialize({
        theme: {
            color: '#04436A',
            fontColor: '#FFFFFF',
            iconColor: '#1d74f5',
            title: "Welcome to Rocket.Chat",
           offlineTitle: "Service is offline",
        },
        department: 'sales',
        guestToken: 'FHwaLnp8fzjMupSAj',
        language: 'en',
  });
});
```

#### _Change widget visibility_

You can either hide or show widget in your website. To hide widget use the following code:

```javascript
RocketChat(function() {
    this.hideWidget();
});
```

To show widget use the following code.

```javascript
RocketChat(function() {
    this.showWidget();
});
```

#### _Change widget window state_

You can either open or close then widget in your website. To open widget\(default state\) use the following code:

```javascript
RocketChat(function() {
    this.maximizeWidget();
});
```

To close the widget use the following code.

```javascript
RocketChat(function() {
    this.minimizeWidget();
});
```

### Events

#### _onChatMaximized_

Fired when the chat widget is maximized.

```javascript
RocketChat(function() {
    this.onChatMaximized(function() {
        // do whatever you want
        console.log('chat widget maximized');
    });
});
```

#### _onChatMinimized_

Fired when the chat widget is minimized.

```javascript
RocketChat(function() {
    this.onChatMinimized(function() {
        // do whatever you want
        console.log('chat widget minimized');
    });
});
```

#### _onChatStarted_

Fired when the chat is started \(the first message was sent\).

```javascript
RocketChat(function() {
    this.onChatStarted(function() {
        // do whatever you want
        console.log('chat started');
    });
});
```

#### _onChatEnded_

Fired when the chat is ended either by the agent or the visitor.

```javascript
RocketChat(function() {
    this.onChatEnded(function() {
        // do whatever you want
        console.log('chat ended');
    });
});
```

#### _onPrechatFormSubmit_

Fired when the pre-chat form is submitted.

```javascript
RocketChat(function() {
    this.onPrechatFormSubmit(function(data) {
        // data is an object containing the following fields: name, email and deparment (the department _id)

        // do whatever you want
        console.log('pre-chat form submitted');
    });
});
```

#### _onOfflineFormSubmit_

Fired when the offline form is submitted.

```javascript
RocketChat(function() {
    this.onOfflineFormSubmit(function(data) {
        // data is an object containing the following fields: name, email and message

        // do whatever you want
        console.log('offline form submitted');
    });
});
```

#### _onWidgetHidden_

Fired when widget is hidden.

```javascript
RocketChat(function() {
    this.onWidgetHidden(function(data) {
        // do whatever you want
        console.log('chat widget hidden');
    });
});
```

#### _onAssignAgent_

Fired when an agent is assigned to the chat.

```javascript
RocketChat(function() {
    this.onAssignAgent(function(data) {
        // data is an object containing the following fields: name, username and status

        // do whatever you want
        console.log('Agent assigned');
    });
});
```

#### _onWidgetShown_

Fired when widget is shown.

```javascript
RocketChat(function() {
    this.onWidgetShown(function(data) {
        // do whatever you want
        console.log('chat widget shown');
    });
});
```

#### _onAgentStatusChange_

Fired when the status of the current agent changes.

```javascript
RocketChat(function() {
    this.onAgentStatusChange(function(data) {
        // data is an object containing the following fields: name, username and status

        // do whatever you want
        console.log('The status of the agent has changed');
    });
});
```

#### _onServiceOffline_

Fired when a visitor tries to start a new conversation and the Livechat service is offline.

```javascript
RocketChat(function() {
    this.onServiceOffline(function(data) {
        // do whatever you want
        console.log('The Livechat service is offline');
    });
});
```

## Change Log

| Version | Description |
| :--- | :--- |
| 3.1.0 | Added `setAgent` and `initialize` methods. Also, improved the `setTheme` method adding more options to customize the widget |
| 3.0.0 | Added `onServiceOffline` callback |
| 2.2.0 | Added `maximizeWidget` and `minimizeWidget` methods. |
| 1.3.0 | Added `onAssignAgent` and `onAgentStatusChange` methods. |
| 1.1.0 | Added `showWidget` and `hideWidget` methods along with `onWidgetHidden` and `onWidgetShown` events |
| 1.0.0 | Added `setLanguage` method |
| 0.66.0 | Added `setGuestToken`, `setGuestName`, `setGuestEmail` and `registerGuest` methods. |
| 0.53.0 | Added callback events and the ability to pass a flag to `setCustomField` so the value passed does not get wrote if there is already an existing value. |
| 0.36.0 | Added `setTheme` method |
| 0.26.0 | Added `setCustomField` method |

