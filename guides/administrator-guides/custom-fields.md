# Custom Fields

In Rocket.Chat you can set customized fields for user registration. By adding an `address` or `role` field, where the user could select from various roles of a company, for example.

**Note**: Currently you may need some basic understanding of Javascript, and Rocket.Chat's internal working structure to set other custom fields than in the example below. A more _user-friendly_ interface is planned for the future.

You can set custom fields under `Administration > Accounts > Registration > Custom Fields`.

Custom fields show up when a user registers, and when an admin looks for that user's information.

For now, set custom fields using a [JSON object](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON).

Make sure to use a valid `JSON`, where `keys` are the `field names` containing a dictionary of field settings. Example:

```javascript
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
 },
 "crmUserId": {
  "type": "text",
  "required": false,
  "minLength": 12,
  "sendToIntegrations": true,
 }
}
```

In the example above we set three new fields with the following properties:

* **type**: defines the type of the field, currently there are 2 types: `select` and `text`, where `select` creates a dropdown list, and `text` creates a plain text form.
* **defaultValue**: used with a `select` form type to set the default option for the list.
* **options**: used with a `select` form type for the values that should be on the dropdown list, which follows the `["item1", "item2","item3"]` pattern. Use a [javascript Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) to create it.
* **required**: defines if the field is required for registration; use `true` or `false` in this property.
* **minLength**: used with a `text` to define the minimum length required in the form.
* **maxLength**: used with a `text` to define the maximum length required in the form.
* **modifyRecordField**: this property is required when you add a field that already exists in Rocket.Chat.
* **array**: used inside the `modifyRecordField` property to define if the existing field is an array.
* **field**: used inside the `modifyRecordField` property; it should be the name of the existing field.
* **public**: defines the field as visible for other users when looking at this user's profile.
* **private**: defines the field as private, so only users with `view-full-other-user-info` permission can see this field when viewing this user's profile.
* **sendToIntegrations**: define the field as shareable with external applications, such as Omnichannel integrations.

**Note**: Fields work with `tabs` for indentation, avoid using `spaces`.

## Show custom fields on the user's info

The list of custom fields shown on the user's info panel can be configured under `Administration -> Accounts -> Custom Fields to show in User Info`.

The list of fields needs to be specified as JSON array in the form

```text
[{"label1":"key2"},{"label2":"key2"},...]
```

A label can by any text, the key needs to be a custom field name defined above.

Fields are only shown if the user has the permission to view private fields or if the field is set to `"public":true`.

