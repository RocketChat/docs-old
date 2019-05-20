# Users Presence

Gets all connected users presence.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.presence` | `yes` | `GET` |

## Other Users Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/users.presence
```

## Example Result

```json
{
   "users":[
      {
         "_id":"rocket.cat",
         "name":"Rocket.Cat",
         "username":"rocket.cat",
         "status":"online",
         "utcOffset":0
      },
      {
         "_id":"rocketchat.internal.admin.test",
         "name":"RocketChat Internal Admin Test",
         "username":"rocketchat.internal.admin.test",
         "status":"online",
         "utcOffset":-2
      }
   ],
   "success":true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 1.1.0 | Added |
