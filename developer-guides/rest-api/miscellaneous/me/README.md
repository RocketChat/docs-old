# Me

A method that retrives your user information.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- | :--- |
| `/api/v1/me` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: ijFlJ1yfidXhwEYY284Anoq_iEsOeMMVCupzNhX22tB" \
          -H "X-User-Id: hw5DThnhQmxDWnavu" \
          -H "Content-type: application/json" \
          http://localhost:3000/api/v1/me
```

## Example Result

```json
{
    "_id": "hw5DThnhQmxDWnavu",
    "name": "name",
    "emails": [
        {
            "address": "email@user.tldr",
            "verified": false
        }
    ],
    "status": "offline",
    "username": "user.name",
    "active": true,
    "roles": [
        "user"
    ],
    "settings": {
        "preferences": {
            "enableAutoAway": true,
            "idleTimeLimit": 300,
            "desktopNotificationDuration": 0,
            "audioNotifications": "mentions",
            "desktopNotifications": "mentions",
            "mobileNotifications": "mentions",
            "unreadAlert": true,
            "useEmojis": true,
            "convertAsciiEmoji": true,
            "autoImageLoad": true,
            "saveMobileBandwidth": true,
            "collapseMediaByDefault": false,
            "hideUsernames": false,
            "hideRoles": false,
            "hideFlexTab": false,
            "hideAvatars": false,
            "sidebarGroupByType": true,
            "sidebarViewMode": "medium",
            "sidebarHideAvatar": false,
            "sidebarShowUnread": false,
            "sidebarShowFavorites": true,
            "sendOnEnter": "normal",
            "messageViewMode": 0,
            "emailNotificationMode": "mentions",
            "roomCounterSidebar": false,
            "newRoomNotification": "door",
            "newMessageNotification": "chime",
            "muteFocusedConversations": true,
            "notificationsSoundVolume": 100
        }
    },
    "customFields": {
        "twitter": "@userstwi"
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.67.0 | Added `customFields` property. Return if it exists on server |
| 0.48.0 | Added |
