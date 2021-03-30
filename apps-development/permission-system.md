# Permission System

## How it works

Each feature available in the Apps Engine is mapped to a permission. Adding the permission in the app's manifest \(`app.json` file\) will unlock said feature to be used by the app. For example, if you add "send messages" as a permission in your app's manifest, your app will be able to send messages in the Rocket.Chat server. If your app tries to send a message without having the "send messages" permission listed in the manifest, the Apps Engine will block the feature and the app will not be able to perform the desired action.

When installing an app, being it by the Marketplace page or installing it manually via zip file, a window asks the user to review the permissions the app requires to work properly. The user installing the app can either accept and install the app or deny the permissions and not install it.

## How to use it

In your app's manifest file \(`app.json`\), add the field `permissions`. It receives a list containing all the permissions you are asking for. Example:

```javascript
{
...
"permissions": [
    {
        "name": "user.read"
    },
    {
        "name": "user.write"
    },
    {
        "name": "upload.read"
    },
  ],
...
}
```

### Notice about rule enforcement

As of right now, the Apps Engine does not enforce the use of the permissions to make your apps work, meaning your current apps \(including the ones published at the Marketplace\) will still work as expected. All the apps that do not have the permissions listed in their manifest will still have access to all the features they need through the `default permissions`. They are applied to your app automatically when no `permissions` property is found in the app's manifest.

Until no sunsetting period for the "permissionless engine" is defined, setting permissions in your app's manifest will be optional.

## Permissions

### Access user information

Permission name: `user.read`

```javascript
{
  "permissions": [
    {
      "name":"user.read"
    }
  ]
}
```

### Modify user information

Permission name: `user.write`

```javascript
{
  "permissions": [
    {
      "name":"user.write"
    }
  ]
}
```

### Access files uploaded to the server

Permission name: `upload.read`

```javascript
{
  "permissions": [
    {
      "name":"upload.read"
    }
  ]
}
```

### Upload files to the server

Permission name: `upload.write`

```javascript
{
  "permissions": [
    {
      "name":"upload.write"
    }
  ]
}
```

### Access settings in the server

Permission name: `server-setting.read`

```javascript
{
  "permissions": [
    {
      "name":"server-setting.read"
    }
  ]
}
```

### Modify settings in the server

Permission name: `server-setting.write`

```javascript
{
  "permissions": [
    {
      "name":"server-setting.write"
    }
  ]
}
```

### Access room information

Permission name: `room.read`

```javascript
{
  "permissions": [
    {
      "name":"room.read"
    }
  ]
}
```

### Create and modify rooms

Permission name: `room.write`

```javascript
{
  "permissions": [
    {
      "name":"room.write"
    }
  ]
}
```

### Access messages

Permission name: `message.read`

```javascript
{
  "permissions": [
    {
      "name":"message.read"
    }
  ]
}
```

### Send and modify messages

Permission name: `message.write`

```javascript
{
  "permissions": [
    {
      "name":"message.write"
    }
  ]
}
```

### Access Livechat status information

Permission name: `livechat-status.read`

```javascript
{
  "permissions": [
    {
      "name":"livechat-status.read"
    }
  ]
}
```

### Modify Livechat custom field configuration

Permission name: `livechat-custom-fields.write`

```javascript
{
  "permissions": [
    {
      "name":"livechat-custom-fields.write"
    }
  ]
}
```

### Access Livechat visitor information

Permission name: `livechat-visitor.read`

```javascript
{
  "permissions": [
    {
      "name":"livechat-visitor.read"
    }
  ]
}
```

### Modify Livechat visitor information

Permission name: `livechat-visitor.write`

```javascript
{
  "permissions": [
    {
      "name":"livechat-visitor.write"
    }
  ]
}
```

### Access Livechat message information

Permission name: `livechat-message.read`

```javascript
{
  "permissions": [
    {
      "name":"livechat-message.read"
    }
  ]
}
```

### Modify Livechat message information

Permission name: `livechat-message.write`

```javascript
{
  "permissions": [
    {
      "name":"livechat-message.write"
    }
  ]
}
```

### Access Livechat room information

Permission name: `livechat-room.read`

```javascript
{
  "permissions": [
    {
      "name":"livechat-room.read"
    }
  ]
}
```

### Modify Livechat room information

Permission name: `livechat-room.write`

```javascript
{
  "permissions": [
    {
      "name":"livechat-room.write"
    }
  ]
}
```

### Access Livechat department information

Permission name: `livechat-department.read`

```javascript
{
  "permissions": [
    {
      "name":"livechat-department.read"
    }
  ]
}
```

### Modify Livechat department information

Permission name: `livechat-department.write`

```javascript
{
  "permissions": [
    {
      "name":"livechat-department.write"
    }
  ]
}
```

### Register new slash commands

Permission name: `slashcommand`

```javascript
{
  "permissions": [
    {
      "name":"slashcommand"
    }
  ]
}
```

### Register new HTTP endpoints

Permission name: `api`

```javascript
{
  "permissions": [
    {
      "name":"api"
    }
  ]
}
```

### Access minimal information about the server environment

Permission name: `env.read`

```javascript
{
  "permissions": [
    {
      "name":"env.read"
    }
  ]
}
```

### Access to the server network

Permission name: `networking`

```javascript
{
  "permissions": [
    {
      "name":"networking"
    }
  ]
}
```

### Store internal data in the database

Permission name: `persistence`

```javascript
{
  "permissions": [
    {
      "name":"persistence"
    }
  ]
}
```

### Register and maintain scheduled jobs

Permission name: `scheduler`

```javascript
{
  "permissions": [
    {
      "name":"scheduler"
    }
  ]
}
```

### Interact with the UI \(UIKit\)

Permission name: `ui.interact`

```javascript
{
  "permissions": [
    {
      "name":"ui.interact"
    }
  ]
}
```

