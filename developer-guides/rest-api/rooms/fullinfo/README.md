# Rooms Full Info

Get all opened rooms and your subscriptions for this user.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/rooms.fullInfo` | `yes` | `GET` |

## Example Call to get all of the rooms and subscriptions

```bash
curl -H "X-Auth-Token: ijFlJ1yfidXhwEYY284Anoq_iEsOeMMVCupzNhX22tB" \
     -H "X-User-Id: hw5DThnhQmxDWnavu" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/rooms.fullInfo
```

## Example Result

```json
{
   "update": [
      {
          "room": {
              "_id": "8LA3k5L2GDQMSkkZN",
              "name": "EDITEDapichannel-test-1534369684821",
              "fname": "EDITEDapichannel-test-1534369684821",
              "t": "p",
              "u": {
                  "_id": "rocketchat.internal.admin.test",
                  "username": "rocketchat.internal.admin.test"
              },
              "customFields": {},
              "ro": true,
              "sysMes": true,
              "_updatedAt": "2018-08-15T21:48:24.535Z",
              "description": "this is a purpose of a channel for api tests",
              "topic": "this is a topic of a channel for api tests",
              "announcement": "this is an announcement of a channel for api tests",
              "announcementDetails": null,
              "archived": false,
              "joinCodeRequired": true,
              "muted": [
                  "editedapiuser.test.1534369684822",
                  "tesla"
              ]
          },
          "subscription": {
              "_id": "CuNX74R8XiCHbArrk",
              "open": true,
              "alert": true,
              "unread": 1,
              "userMentions": 1,
              "groupMentions": 0,
              "ts": "2018-08-15T21:48:21.264Z",
              "rid": "8LA3k5L2GDQMSkkZN",
              "name": "EDITEDapichannel-test-1534369684821",
              "fname": "EDITEDapichannel-test-1534369684821",
              "t": "p",
              "u": {
                  "_id": "Q4GkX6RMepGDdQ7YJ",
                  "username": "rocket.cat",
                  "name": "Rocket Cat"
              },
              "emailNotifications": "mentions",
              "_updatedAt": "2018-08-15T21:48:24.505Z"
          }
      }
   ],
   "remove": [],
   "success": true
}
```

## Example Call to get the rooms which have changed after the provided date

```bash
curl -H "X-Auth-Token: ijFlJ1yfidXhwEYY284Anoq_iEsOeMMVCupzNhX22tB" \
     -H "X-User-Id: hw5DThnhQmxDWnavu" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/rooms.fullInfo?updatedSince=2018-01-26T00:11:22.345Z
```

## Example Result

```json
{
   "update": [
      {
          "room": {
              "_id": "8LA3k5L2GDQMSkkZN",
              "name": "EDITEDapichannel-test-1534369684821",
              "fname": "EDITEDapichannel-test-1534369684821",
              "t": "p",
              "u": {
                  "_id": "rocketchat.internal.admin.test",
                  "username": "rocketchat.internal.admin.test"
              },
              "customFields": {},
              "ro": true,
              "sysMes": true,
              "_updatedAt": "2018-08-15T21:48:24.535Z",
              "description": "this is a purpose of a channel for api tests",
              "topic": "this is a topic of a channel for api tests",
              "announcement": "this is an announcement of a channel for api tests",
              "announcementDetails": null,
              "archived": false,
              "joinCodeRequired": true,
              "muted": [
                  "editedapiuser.test.1534369684822",
                  "tesla"
              ]
          },
          "subscription": {
              "_id": "CuNX74R8XiCHbArrk",
              "open": true,
              "alert": true,
              "unread": 1,
              "userMentions": 1,
              "groupMentions": 0,
              "ts": "2018-08-15T21:48:21.264Z",
              "rid": "8LA3k5L2GDQMSkkZN",
              "name": "EDITEDapichannel-test-1534369684821",
              "fname": "EDITEDapichannel-test-1534369684821",
              "t": "p",
              "u": {
                  "_id": "Q4GkX6RMepGDdQ7YJ",
                  "username": "rocket.cat",
                  "name": "Rocket Cat"
              },
              "emailNotifications": "mentions",
              "_updatedAt": "2018-08-15T21:48:24.505Z"
          }
      }
   ],
   "remove": [
    {
        "room": {
           "_id": "Zn4xqhiuso2xL6WLC",
           "_deletedAt": "2018-08-16T20:13:19.940Z"
        },
        "subscription": {}
    },
    {
        "room": {
           "_id": "humKkNHNgfyacryws",
           "_deletedAt": "2018-08-16T20:13:20.129Z"
        },
        "subscription": {}
    }],
   "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.69.0 | Added |
