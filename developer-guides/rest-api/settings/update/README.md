# Settings Update
Updates the setting for the provided `_id`.

The `_id` of a setting is the first argument of the `RocketChat.settings.add` method used in `Rocket.Chat/packages/rocketchat-lib/server/startup/settings.js` (among other files). For example, the following code in that `settings.js` file
```javascript
this.add('Accounts_AllowAnonymousRead', false, {
		type: 'boolean',
		public: true
	});
```
means that the setting labeled "Allow anonymous read" in the section "Accounts" has `_id` equal to `'Accounts_AllowAnonymousRead'`. The second argument is the default value (`false`). The third argument specifies the variable's type and whether it is public, hidden, and so on.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/settings/:_id` | `yes` | `POST` |

## Payload
| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `_id` | `Livechat_enabled` | Required | The setting's `_id` field |
| `value` | `true` | Required | The value to update the setting. |

## Example Call
```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/settings/Livechat_enabled \
     -d '{ "value": true }'
```

## Example Result

```json
{
  "success": true
}
```

## Change Log
| Version | Description |
| :--- | :--- |
| 0.42.0 | Added |
