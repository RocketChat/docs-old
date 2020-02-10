# Custom User Status Create

Create new custom user status.

| URL                               | Requires Auth | HTTP Method |
| :-------------------------------- | :------------ | :---------- |
| `/api/v1/custom-user-status.create` | `yes`         | `POST`       |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/custom-user-status.create
```

## Example Result

```json
{
  "customUserStatus": {
      "_id": "d3TjnQgKWttgaW9Hh",
      "name": "status 2",
      "statusType": "online",
      "_updatedAt": "2019-12-09T20:25:10.884Z"
    },
  "success": true
}
```

## Change Log

| Version | Description |
| :------ | :---------- |
| 2.4.0   | Added       |
