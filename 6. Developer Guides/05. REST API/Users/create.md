---
order: 10
---

# User Create
| URL | Requires Auth | HTTP Method | Payload |
| :--- | :--- | :--- | :--- |
| `/api/v1/users.create` | `yes` | `post` | Object: `{ name, email, username, password, customFields: { "twitter": "example" } }` |

## Example Call
```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/users.create \
     -d '{"name": "name", "email": "email@user.tld", "password": "anypassyouwant", "username": "uniqueusername", "customFields": { "twitter":"userstwitter" } }'
```

## Example Result
```json
{
   "user": {
      "_id": "BsNr28znDkG8aeo7W",
      "createdAt": "2016-09-13T14:57:56.037Z",
      "services": {
         "password": {
            "bcrypt": "$2a$10$5I5nUzqNEs8jKhi7BFS55uFYRf5TE4ErSUH8HymMNAbpMAvsOcl2C"
         }
      },
      "username": "uniqueusername",
      "emails": [
         {
            "address": "email@user.tld",
            "verified": false
         }
      ],
      "type": "user",
      "status": "offline",
      "active": true,
      "roles": [
         "user"
      ],
      "_updatedAt": "2016-09-13T14:57:56.175Z",
      "name": "name",
      "customFields": {
         "twitter": "userstwitter"
      }
   },
   "success": true
}
```
