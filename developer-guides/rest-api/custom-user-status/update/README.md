# Custom User Status List

Update an existent custom user status.

| URL                               | Requires Auth | HTTP Method |
| :-------------------------------- | :------------ | :---------- |
| `/api/v1/custom-user-status.update` | `yes`         | `POST`       |


### Arguments

| Argument   | Example           | Required | Description |
| :--------- | :---------------- | :------- | :---------- |
| `_id`      | `AG7DSB2H32YHS`   | Required | The id of the custom user status. |
| `name`     | `my-custom-status` | Required | The name of the custom user status. |
| `statusType`  | `online`     | Optional | The status of the custom user status. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -F "_id=AG7DSB2H32YHS" \
     -F "name=my-custom-status" \
     -F "statusType=online" \
     http://localhost:3000/api/v1/custom-user-status.update
```

## Example Result

```json
{
  "customUserStatus": {
      "_id": "oGxJ2irQcPkgFLGef",
      "name": "status 1",
      "statusType": "busy",
      "_updatedAt": "2019-12-09T20:26:06.477Z"
    },
  "success": true
}
```

## Change Log

| Version | Description |
| :------ | :---------- |
| 2.4.0   | Added       |
