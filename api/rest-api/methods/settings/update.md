# Settings Update

Updates the setting for the provided `_id`.

The `_id` of a setting is the first argument of the `RocketChat.settings.add` method used in `Rocket.Chat/packages/rocketchat-lib/server/startup/settings.js` \(among other files\). For example, the following code in that `settings.js` file

```javascript
this.add('Accounts_AllowAnonymousRead', false, {
    type: 'boolean',
    public: true
  });
```

means that the setting labeled "Allow anonymous read" in the section "Accounts" has `_id` equal to `'Accounts_AllowAnonymousRead'`. The second argument is the default value \(`false`\). The third argument specifies the variable's type and whether it is public, hidden, and so on. To set a color, you can send

```text
{
  value: '<color-code>',
  editor: 'color'
}
```

And also to trigger a action-button use:

```text
{
  execute: true
}
```

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/settings/:_id` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `_id` | `Livechat_enabled` | Required | The setting's `_id` field |
| `value` | `true` | Required | The value to update the setting. |
| `color` | `<color-code>` | Optional | The color code to update the setting. |
| `editor` | `true` | Required if color was set | The editor key, with `color` value. |
| `execute` | `true` | Optional | To trigger a action-button |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/settings/Livechat_enabled \
     -d '{ "value": true }'
```

## Example Result

```javascript
{
  "success": true
}
```

## Example Call

Setting a color

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/settings/Livechat_enabled \
     -d '{ "value": "#ffffff", "editor": "color"}'
```

## Example Result

```javascript
{
  "success": true
}
```

## Example Call

Trigger an action

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/settings/Livechat_enabled \
     -d '{ "value": "method", "execute": true}'
```

## Example Result

```javascript
{
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.65.0 | Added option to set a color and trigger an action |
| 0.42.0 | Added |

