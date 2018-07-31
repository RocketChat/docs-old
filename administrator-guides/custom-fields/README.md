# Custom Fields

In Rocket.Chat you can set customized fields for user registration. An example would be adding a field `adress` or `role`, where the user could select from various roles of a company.

You can set custom fields under `Administration -> Accounts -> Registration -> Custom Fields`.

For now, you need to set custom fields using a [JSON object](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON).

Make sure to use a valid `JSON` where `keys` are the `field names` containing a dictionary of field settings. Example:

```json
{
 "role": {
  "type": "select",
  "defaultValue": "student",
  "options": ["teacher", "student"],
  "required": true,
  "modifyRecordField": {
   "array": true,
   "field": "roles"
  }
 },
 "twitter": {
  "type": "text",
  "required": true,
  "minLength": 2,
  "maxLength": 10
 }
}
```