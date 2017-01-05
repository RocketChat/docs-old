---
order: 1
---

# Create Integration
Creates an integration, if the callee has the permission.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/integrations.create` | `yes` | `POST` |

## Payload
| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `type` | `webhook-outgoing` | Required | The type of integration to create, currently only `webhook-outgoing` is supported. |
| `name` | `Guggy` | Required | The name of the integration, only is show on the Administration area. |
| `enabled` | `true` | Required | Whether this integration should be enabled or not. |
| `username` | `rocket.cat` | Required | The username who to post this the messages as. |
| `urls` | `['http://text2gif.guggy.com/guggify']` | Required | The urls to call whenever this integration is triggered. |
| `scriptEnabled` | `false` | Required | Whether the script should be enabled. |
| `channel` | `#general` | Optional <br> Default: `''` | The channel, group, or `@username`. Can also be `all_public_channels`, `all_private_groups`, or `all_direct_messages`. Comma separated for more than one. |
| `triggerWords` | `!guggy` | Optional <br> Default: `''` | Specific words, separated by commas, which should trigger this integration. |
| `alias` | `Guggy` | Optional <br> Default: `''` | The alias which should be applied to messages when this integration is processed. |
| `avatar` | `http://res.guggy.com/logo_128.png` | Optional <br> Default: `''` | The logo to apply to the messages that this integration sends. |
| `emoji` | `:ghost:` | Optional <br> Default: `''` | The emoji which should be displayed as the avatar for messages from this integration. |
| `token` | `8DFS89DMKLWEN` | Optional <br> Default: `''` | If your integration requires a special token from the server (api key), use this. |
| `script` | [Integrations](/administrator-guides/integrations/) | Optional | Script triggered when this integration is triggered. |

## Example Call
```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/integrations.create \
     -d '{ "name": "channelname" }'
```

## Example Result
```json
{
   "channel": {
      "_id": "ByehQjC44FwMeiLbX",
      "name": "channelname",
      "t": "c",
      "usernames": [
         "example"
      ],
      "msgs": 0,
      "u": {
         "_id": "aobEdbYhXfu5hkeqG",
         "username": "example"
      },
      "ts": "2016-05-30T13:42:25.304Z"
   },
   "success": true
}
```

## Change Log
| Version | Description |
| :--- | :--- |
| 0.49.0 | Added |
