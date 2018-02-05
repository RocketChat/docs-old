# Command Run

Execute a slash command in the specified room.

| URL                    | Requires Auth | HTTP Method |
| :--------------------- | :------------ | :---------- |
| `/api/v1/commands.run` | `yes`         | `POST`      |

## Payload

| Argument  | Example             | Required                           | Description                             |
| :-------- | :------------------ | :--------------------------------- | :-------------------------------------- |
| `command` | `unmute`            | Required                           | The name of the command to be executed. |
| `roomId`  | `ByehQjC44FwMeiLbX` | Required                           | The ID of the room.                     |
| `params`  | `@user123`          | Optional <br> Default: `undefined` | Parameters of the command if required.  |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/commands.run \
     -d '{"command":"unmute","roomId":"ByehQjC44FwMeiLbX","params":"@user123"}'
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
| 0.60.2  | Added       |
