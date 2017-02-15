---
order: 5
---

# Livechat API

## Usage

Livechat API code must be inserted after the livechat installation script and wrapped as a callback of `RocketChat();` function.

You can call multiple livechat APIs on the same page.

### Methods

#### *Set custom field*
To set a custom field for a visitor, you can use the following code:

```javascript
RocketChat(function() {
    this.setCustomField('fieldName1', 'Any value you want to store');
    this.setCustomField('fieldName2', 'A value set just once', false); // you can pass false as the third parameter to not overwrite an already set value
});
```

#### *Set theme options*
To change the online color of the livechat widget, use the following code:

```javascript
RocketChat(function() {
    this.setTheme({
        color: '#04436A', // widget title background color
        fontColor: '#FFFFFF' // widget title font color
    });
});
```

