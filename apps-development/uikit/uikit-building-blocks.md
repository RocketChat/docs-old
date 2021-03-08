# UIKit building blocks

## Objects

### Text object

| Field | Type | Required? | Description |
| :--- | :--- | :--- | :--- |
| type | String | Yes | The available values are `plain_text` and `mrkdwn` |
| text | String | Yes | The actual text |
| emoji | Boolean | No | Works with the `plain_text` type |

**Example**

```javascript
{
  type: 'plain_text',
  text: 'lorem ipsum 🚀',
  emoji: true,
}
```

### Option object

| Field | Type | Required? | Description |
| :--- | :--- | :--- | :--- |
| text | Object | Yes | The `text object` to be displayed at the menu. Can be either `plain_text` or `mrkdwn` |
| value | String | Yes | The actual value the option represents |

#### Example

```javascript
{
  value: 'option_1',
  text: {
      type: 'plain_text',
      text: 'lorem ipsum 🚀',
      emoji: true,
    }
}
```

## Block elements

### button

| Field | Type | Required? | Description |
| :--- | :--- | :--- | :--- |
| type | String | Yes | The type of the block element, that is this case is 'button' |
| text | Object | Yes | The `text object` to be displayed in the button. Can be either `plain_text` or `mrkdwn` |
| value | String | No | A value sent along with the button information when an action is made upon the element |
| url | String | No | An URL \* |
| style | String | No | The style of the button. Can be either `primary` or `danger` |
| actionId | String | Yes | An unique identifier for an action make upon the element |

#### Example

```javascript
{
  type: 'button',
  text: {
      type: 'plain_text',
      text: 'danger❗',
      emoji: true,
    },
  actionId: 'button_1_danger',
  style: 'danger',
}
```

### image

| Field | Type | Required? | Description |
| :--- | :--- | :--- | :--- |
| type | String | Yes | The type of the block element, that is this case is 'image' |
| imageUrl | String | Yes | The URL of the image |
| altText | String | Yes | A text describing the image being displayed |

#### Example

```javascript
{
  type: 'image',
  imageUrl: 'https://picsum.photos/200/300',
  altText: 'An image',
}
```

### overflow menu

| Field | Type | Required? | Description |
| :--- | :--- | :--- | :--- |
| type | String | Yes | The type of the block element, that is this case is 'overflow' |
| options | Array | Yes | An array with the possible options \(the option object\) |
| actionId | String | Yes | An unique identifier for an action make upon the element |

#### Example

```javascript
{
  type: 'overflow',
  actionId: 'overflow_1',
  options: [
    {
      value: 'option_1',
      text: {
          type: 'plain_text',
          text: 'lorem ipsum 🚀',
          emoji: true,
        }
    },
    {
      value: 'option_2',
      text: {
          type: 'plain_text',
          text: 'lorem ipsum 🚀',
          emoji: true,
        }
    },
  ],
}
```

### plain text input

| Field | Type | Required? | Description |
| :--- | :--- | :--- | :--- |
| type | String | Yes | The type of the block element, that is this case is 'plain\_text\_input' |
| actionId | String | Yes | An unique identifier for an action make upon the element |
| placeholder | Object | Yes | A placeholder text for the input \(plain text object\) |
| initialValue | String | No | The initial value of the field |
| multiline | Boolean | No | A flag that indicates whether the field should be a single line \(default\) or a bigger text area |

#### Example

```javascript
{
  type: 'plain_text_input',
  actionId: 'plain_text_input_1',
  placeholder: {
      type: 'plain_text',
      text: 'Enter name',
      emoji: true,
    },
  initialValue: 'John Doe',
  multiline: false,
}
```

### static select menu

| Field | Type | Required? | Description |
| :--- | :--- | :--- | :--- |
| type | String | Yes | The type of the block element, that is this case is 'static\_select' |
| actionId | String | Yes | An unique identifier for an action make upon the element |
| placeholder | Object | Yes | A placeholder text for the input \(plain text object\) |
| initialValue | String | No | The initial value selected \(`value` field from the option object\) |
| options | Array | Yes | An array with the possible options \(the option object\) |

#### Example

```javascript
{
  type: 'static_select',
  actionId: 'overflow_1',
  initialValue: 'option_2',
  options: [
    {
      value: 'option_1',
      text: {
          type: 'plain_text',
          text: 'lorem ipsum 🚀',
          emoji: true,
        }
    },
    {
      value: 'option_2',
      text: {
          type: 'plain_text',
          text: 'lorem ipsum 🚀',
          emoji: true,
        }
    },
  ],
  placeholder: {
      type: 'plain_text',
      text: 'Select an item',
    },
}
```

### multi static select menu

| Field | Type | Required? | Description |
| :--- | :--- | :--- | :--- |
| type | String | Yes | The type of the block element, that is this case is 'multi\_static\_select' |
| actionId | String | Yes | An unique identifier for an action make upon the element |
| placeholder | Object | Yes | A placeholder text for the input \(plain text object\) |
| initialValue | Array of strings | No | The initial values selected \(`value` field from the option object\) |
| options | Array | Yes | An array with the possible options \(the option object\) |

#### Example

```javascript
{
  type: 'static_select',
  actionId: 'overflow_1',
  initialValue: ['option_1' ,'option_2'],
  options: [
    {
      value: 'option_1',
      text: {
          type: 'plain_text',
          text: 'lorem ipsum 🚀',
          emoji: true,
        }
    },
    {
      value: 'option_2',
      text: {
          type: 'plain_text',
          text: 'lorem ipsum 🚀',
          emoji: true,
        }
    },
  ],
  placeholder: {
      type: 'plain_text',
      text: 'Select an item',
    },
}
```

## Blocks

### section

| Field | Type | Required? | Description |
| :--- | :--- | :--- | :--- |
| blockId | String | No | An unique identifier for the block |
| type | String | Yes | The type of the block, that is this case is 'section' |
| text | Object | Yes | The `text object` to be displayed in the button. Can be either `plain_text` or `mrkdwn` |
| accessory | Object | No | One element that can be a `button element`, an `image element` or a `overflow menu` |

#### Example

```javascript
{
  type: 'section',
  blockId: 'section_1',
  text: {
      type: 'plain_text',
      text: 'lorem ipsum 🚀',
      emoji: true,
    }
  accessory: { /* one of the accessory elements */ } ,
}
```

### divider

| Field | Type | Required? | Description |
| :--- | :--- | :--- | :--- |
| blockId | String | No | An unique identifier for the block |
| type | String | Yes | The type of the block, that is this case is 'divider' |

#### Example

```javascript
{
  type: 'divider',
  blockId: 'divider_1',
}
```

### image

| Field | Type | Required? | Description |
| :--- | :--- | :--- | :--- |
| blockId | String | No | An unique identifier for the block |
| type | String | Yes | The type of the block, that is this case is 'image' |
| imageUrl | String | Yes | The URL of the image |
| altText | String | Yes | A text describing the image being displayed |
| title | Object | No | The `text object` to be displayed as the image's title. Can be either `plain_text` or `mrkdwn` |

#### Example

```javascript
{
  type: 'image',
  blockId: 'image_1',
  imageUrl: 'https://picsum.photos/200/300',
  altText: 'An image',
  title: {
      type: 'plain_text',
      text: 'lorem ipsum 🚀',
      emoji: true,
    }
}
```

### actions

| Field | Type | Required? | Description |
| :--- | :--- | :--- | :--- |
| blockId | String | No | An unique identifier for the block |
| type | String | Yes | The type of the block, that is this case is 'actions' |
| elements | Array | Yes | A list of interactive block elements |

#### Example

```javascript
{
  type: 'actions',
  blockId: 'actions_1',
  elements: [ /* block elements */ ]
}
```

### context

| Field | Type | Required? | Description |
| :--- | :--- | :--- | :--- |
| blockId | String | No | An unique identifier for the block |
| type | String | Yes | The type of the block, that is this case is 'actions' |
| elements | Array | Yes | A list of block elements. Allowed elements are `plain text object` and `image element` |

#### Example

```javascript
{
  type: 'context',
  blockId: 'context_1',
  elements: [ /* block elements */ ]
}
```

### input

| Field | Type | Required? | Description |
| :--- | :--- | :--- | :--- |
| blockId | String | No | An unique identifier for the block |
| type | String | Yes | The type of the block, that is this case is 'input' |
| element | Array | Yes | The input element, that can be `plain text input`, `static select menu` and `multi static select menu` |

#### Example

```javascript
{
  type: 'input',
  blockId: 'input_1',
  element: { /* input element */ }
}
```

