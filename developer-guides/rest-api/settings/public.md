# Public Settings Get

List all public settings.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/settings.public` | `no` | `GET` |

## Query Parameters

| Argument | Example | Required | Description | Format |
| :--- | :--- | :--- | :--- | :--- |
| `query` | `{"_id":{"$in":["LDAP_Enable", "Jitsi_Enabled"]}}` | Optional | Query for named properties | URL encoded JSON object |
| `count` | `50` | Optional | How many settings to return. Defaults to `API_Default_Count` setting (which in turn defaults to 50) | Integer |
| `offset` | `50` | Optional | Returns `count` messages, starting after `offset` | Positive integer |
| `sort` | `{"value": -1, "_id": 1}` | Optional | List of fields to order by and in what order | JSON object, with properties listed in desired order, with values of 1 or -1 for ascending or descending respectively. |
| `fields` | `{"type": true}` | Optional | List of additional fields to include in the response | JSON object. Possible additional field names: `_updatedAt`, `autocomplete`, `blocked`, `createdAt`, `enableQuery`, `group`, `hidden`, `i18nDescription`, `i18nLabel`, `packageValue`, `public`, `secret`, `section`, `sorter`, `meteorSettingsValue`, `ts`, `type`, `valueSource` |


**Notes**
 - Regardless of `count`, this endpoint will return a maximum number of settings simultaneously as defined by the  `API_Upper_Count_Limit` setting (default: 100)
 - Negative values of `count` are treated as positive
 - Providing a `fields` value of `{"_id": false, "value": false}` will return all other fields.

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

