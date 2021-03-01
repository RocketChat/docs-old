# Iframe integration: Sending commands

## Available commands

| Command | Params | Description |
| :--- | :--- | :--- |
| go | - `path` string | Change url |
| login-with-token | - `token` string | Allow login with token |
| call-custom-oauth-login | - `service` string | Allow login via oauth methods |
| set-user-status | - `status` string | Set the status of the user |
| logout |  | Log the user out of their current session |

## Example

```javascript
document.querySelector('iframe').contentWindow.postMessage({
  externalCommand: 'go',
  path: '/admin/General'
}, '*')
```

