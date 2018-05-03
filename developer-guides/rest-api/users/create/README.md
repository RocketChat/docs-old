# User Create

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.create` | `yes` | `POST` |

**Note**

- To save `customFields` you must first define the `customFields` in admin panel (Accounts -> Registration -> Custom fields)

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `email` | `example@example.com` | Required | The email address for the user. |
| `name` | `Example User` | Required | The display name of the user. |
| `password` | `pass@w0rd` | Required | The password for the user. |
| `username` | `example` | Required | The username for the user. |
| `active` | `false` | Optional <br> Default: `true` | Whether the user is active, which determines if they can login or not. |
| `roles` | `['bot']` | Optional <br> Default: `['user']` | The roles the user has assigned to them on creation. |
| `joinDefaultChannels` | `false` | Optional <br> Default: `true` | Whether the user should join the default channels when created. |
| `requirePasswordChange` | `true` | Optional <br> Default: `false` | Should the user be required to change their password when they login? |
| `sendWelcomeEmail` | `true` | Optional <br> Default: `false` | Should the user get a welcome email? |
| `verified` | `true` | Optional <br> Default: `false` | Should the user's email address be verified when created? |
| `customFields` | `{ twitter: '@example' }` | Optional <br> Default: `undefined` | Any custom fields the user should have on their account. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/users.create \
     -d '{"name": "name", "email": "email@user.tld", "password": "anypassyouwant", "username": "uniqueusername", "customFields": { "twitter": "@userstwitter" } }'
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
         "twitter": "@userstwitter"
      }
   },
   "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.48.0 | `role` property is now `roles` which is an array of strings for the roles to create the user with. |
| 0.45.0 | Users created via this now join the default channels. |
| 0.40.0 | Added |
