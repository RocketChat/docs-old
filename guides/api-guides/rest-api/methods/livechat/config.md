# Config

Get Livechat widget configuration info and additional visitor data

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/config` | `no` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `token` | `iNKE8a6k6cjbqWhWd` | Optional | The visitor `token`. |

## Example Call

```bash
curl http://localhost:3000/api/v1/livechat/config?token=iNKE8a6k6cjbqWhWd
```

## Example Result

```javascript
{
  "config": {
    "enabled": true,
    "settings": {
      "registrationForm": true,
      "allowSwitchingDepartments": false,
      "nameFieldRegistrationForm": true,
      "emailFieldRegistrationForm": true,
      "displayOfflineForm": true,
      "videoCall": false,
      "fileUpload": true,
      "language": "",
      "transcript": false,
      "historyMonitorType": "url"
    },
    "theme": {
      "title": "Rocket.Chat",
      "color": "#C1272D",
      "offlineTitle": "Leave a message",
      "offlineColor": "#666666",
      "actionLinks": [{
          "icon": "icon-videocam",
          "i18nLabel": "Accept",
          "method_id": "createLivechatCall",
          "params": ""
        },
        {
          "icon": "icon-cancel",
          "i18nLabel": "Decline",
          "method_id": "denyLivechatCall",
          "params": ""
        }
      ],
    },
    "messages": {
      "offlineMessage": "",
      "offlineSuccessMessage": "",
      "offlineUnavailableMessage": "",
      "conversationFinishedMessage": "",
      "transcriptMessage": ""
    },
    "survey": {
      "items": [
        "satisfaction",
        "agentKnowledge",
        "agentResposiveness",
        "agentFriendliness"
      ],
      "values": [
        "1",
        "2",
        "3",
        "4",
        "5"
      ],
    },
    "online": true,
    "guest": {
      "_id": "2KNu66RPCwxA4ncy7",
      "username": "guest-3",
      "token": "iNKE8a6k6cjbqWhWd",
      "name": "Livechat Visitor"
    },
    "room": {
      "_id": "zRAeTszXor8CCPceB",
      "servedBy": {
        "_id": "7Gm3PoFCJWTCJ68XR",
        "username": "livechat.agent"
      },
      "open": true
    },
    "agent": {
      "_id": "7Gm3PoFCJWTCJ68XR",
      "emails": [{
        "address": "agent@rocket.chat",
        "verified": true
      }],
      "name": "Livechat Agent",
      "username": "livechat.agent"
    }
  },
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.70.0 | Added |

