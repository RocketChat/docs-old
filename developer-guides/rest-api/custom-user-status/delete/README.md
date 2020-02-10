# Custom User Status Delete

| URL                               | Requires Auth | HTTP Method |
| :-------------------------------- | :------------ | :---------- |
| `/api/v1/custom-user-status.delete` | `yes`         | `POST`       |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `customUserStatusId` | `ByehQjC44FwMeiLbX` | Required | The custom user status id to be deleted. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/custom-user-status.delete
     -d '{ "customUserStatusId": "ByehQjC44FwMeiLbX" }'
```

## Example Result

```json
{
  "success": true
}
```

## Change Log

| Version | Description |
| :------ | :---------- |
| 2.4.0   | Added       |
