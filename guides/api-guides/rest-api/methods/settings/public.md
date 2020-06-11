# Public Settings Get

List all public settings.

It supports the [Offset, Count, and Sort Query Parameters](https://github.com/RocketChat/docs/tree/76dab9a719fdb2d09343eb5dff3f622d8bdc64f7/developer-guides/offset-and-count-and-sort-info/README.md) along with [Query and Fields Query Parameters](https://github.com/RocketChat/docs/tree/76dab9a719fdb2d09343eb5dff3f622d8bdc64f7/developer-guides/query-and-fields-info/README.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/settings.public` | `no` | `GET` |

## Query Parameters

| Argument | Example | Required | Description | Format |
| :--- | :--- | :--- | :--- | :--- |
| `query` | `{"_id":{"$in":["LDAP_Enable", "Jitsi_Enabled"]}}` | Optional | Query for named properties | URL encoded JSON object |

## Example Call

```bash
curl http://localhost:3000/api/v1/settings.public
```

## Example Result

```javascript
{
  "settings": [
  { "_id": "API_Drupal_URL", "value": "" },
  { "_id": "API_Embed", "value": true }],
  "count": 50,
  "offset": 0,
  "total": 299,
  "success": true
}
```

