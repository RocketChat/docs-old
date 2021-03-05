# Unset Asset

Unset an asset by name. Requires `manage-assets` permission.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/assets.unsetAsset` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `assetName` | `"logo"` | Required | Asset naeme to unset. |
| `refreshAllClients` | `true` | Optional | If needs refresh all clients to apply changes immediately. |

`assetName` can be one of these: \[`logo`, `background`, `favicon_ico`, `favicon`, `favicon_16`, `favicon_32`, `favicon_192`, `favicon_512`, `touchicon_180`, `touchicon_180_pre`, `tile_70`, `tile_144`, `tile_150`, `tile_310_square`, `tile_310_wide`, `safari_pinned ]`

### Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/assets.unsetAsset \
     -H "Content-Type:application/json" \
     -d '{ "assetName": "logo", "refreshAllClients": true}'
```

### Example Result

```javascript
{
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.69.0 | Added |

