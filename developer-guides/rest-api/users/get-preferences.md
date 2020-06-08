# Get Preferences

Gets all preferences of the user.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.getPreferences` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/users.getPreferences
```

## Example Result

```javascript
{
    "preferences": {
        "newRoomNotification": "door",
        "newMessageNotification": "chime",
        "muteFocusedConversations": true,
        "useEmojis": true,
        "convertAsciiEmoji": true,
        "saveMobileBandwidth": true,
        "collapseMediaByDefault": false,
        "autoImageLoad": true,
        "emailNotificationMode": "all",
        "roomsListExhibitionMode": "category",
        "unreadAlert": true,
        "notificationsSoundVolume": 100,
        "desktopNotifications": "default",
        "mobileNotifications": "default",
        "enableAutoAway": true,
        "highlights": [],
        "desktopNotificationDuration": 0,
        "viewMode": 0,
        "hideUsernames": false,
        "hideRoles": false,
        "hideAvatars": false,
        "hideFlexTab": false,
        "sendOnEnter": "normal",
        "roomCounterSidebar": false
    },
    "success": true
}
```

