# Command Get

List all message types available.

| URL                      | Requires Auth | HTTP Method |
| :----------------------- | :------------ | :---------- |
| `/api/v1/messages/types` | `yes`         | `GET`       |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/messages/types
```

## Example Result

```json
{
    { result:
       [ { id: 'livechat_video_call',
           message: 'New_videocall_request',
           isSystemMessage: true,
           keysToReplaceInI18nByPropertiesOfMessage: {} }],
    "success": true
}
```
