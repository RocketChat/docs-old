# User Methods
| Url | Quick Link |
| --- | --- |
| `/api/v1/users.create` | [Users Create Method](#users-create-details) |
| `/api/v1/user.update` | [User Update Method](#user-update-details) |
| `/api/v1/users.setAvatar` | [User Set Photo/Avatar](#user-set-photo-avatar) |

## Users Create Details
| URL | Requires Auth | HTTP Method | Payload |
| --- | --- | --- | --- |
| `/api/v1/users.create` | `yes` | `post` | Object: `{ name, email, username, password, customFields: { "twitter": "example" } }` |

### Example Call
```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/users.create \
     -d '{"name": "name", "email": "email@user.tld", "password": "anypassyouwant", "username": "uniqueusername", "customFields": { "twitter":"userstwitter" } }'
```

### Example Result
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

## User Update Details
| URL | Requires Auth | HTTP Method | Payload |
| --- | --- | --- | --- |
| `/api/v1/user.update` | `yes` | `post` | Object: `{ name, email, username, password, customFields: { "twitter": "example" } }` |

### Example Call
```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/user.update \
     -d '{"userId": "", "data": { "name": "new name", "email": "newemail@user.tld" }'
```

### Example Result
```json
{
   "user":{
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
            "address": "newemail@user.tld",
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
      "name": "new name",
      "customFields": {
         "twitter": "userstwitter"
      }
   },
   "success": true
}
```

## User Set Photo/Avatar
| URL | Requires Auth | HTTP Method | Payload |
| --- | --- | --- | --- |
| `/api/v1/users.setAvatar` | `yes` | `post` | Object: `{ avatarUrl: "http://domain.tld/to/my/own/avatar.jpg" }` _or_ a file |

### Upload a file

#### Example Call
```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     -F "image=@my-own-avatar.png" \
     http://localhost:3000/api/v1/users.setAvatar
```

#### Example Result
```json
{
    "success": true
}
```


### Set from a URL

#### Example Call
```json
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     -d '{"avatarUrl": "http://domain.tld/to/my/own/avatar.jpg"}' \
     http://localhost:3000/api/v1/users.setAvatar
```

#### Example Result
```json
{
    "success": true
}
```
