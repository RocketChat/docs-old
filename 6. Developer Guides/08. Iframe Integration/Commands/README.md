# Iframe integration: Sending commands

## Available commands
Command | Params | Description
--- | --- | ---
go | - `path` string | Change url
login-with-token | - `token` string | Allow login with token
call-custom-oauth-login | - `service` string | Allow login via oauth methods

## Example
```javascript
document.querySelector('iframe').contentWindow.postMessage({
  externalCommand: 'go',
  path: '/admin/General'
}, '*')
```
