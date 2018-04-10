# Me

Quick information about the authenticated user.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- | :--- |
| `/api/v1/me` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/me
```

## Example Result

```json
{
  "_id": "aobEdbYhXfu5hkeqG",
  "name": "Example User",
  "emails": [
    {
      "address": "example@example.com",
      "verified": true
    }
  ],
  "status": "offline",
  "statusConnection": "offline",
  "username": "example",
  "utcOffset": 0,
  "active": true,
  "roles": [
      "user",
      "admin"
  ],
  "settings": {
    "preferences": {
          "newRoomNotification": "door",
          "newMessageNotification": "chime",
          "useEmojis": true,
          "convertAsciiEmoji": true,
          "saveMobileBandwidth": true,
          "collapseMediaByDefault": false,
          "muteFocusedConversations": true,
          "hideUsernames": false,
          "hideFlexTab": false,
          "hideAvatars": false,
          "sendOnEnter": "normal",
          "autoImageLoad": true,
          "emailNotificationMode": "all",
          "desktopNotificationDuration": 0,
          "desktopNotifications": "default",
          "mobileNotifications": "default",
          "unreadAlert": true,
          "notificationsSoundVolume": 100,
          "roomCounterSidebar": false,
          "highlights": [],
          "hideRoles": false,
          "enableAutoAway": false,
          "idleTimeLimit": 300000
      }
  },
  "success": true
}
```
