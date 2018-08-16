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
            "enableAutoAway": false,
            "idleTimeoutLimit": 300,
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
            "roomsListExhibitionMode": "category",
            "sidebarViewMode": "medium",
            "sidebarHideAvatar": false,
            "sidebarShowUnread": false,
            "sidebarShowFavorites": true,
            "sendOnEnter": "normal",
            "messageViewMode": 0,
            "emailNotificationMode": "all",
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
| 0.68.0 | Added `customFields` property. Return if it exists on server |
| 0.48.0 | Added |
