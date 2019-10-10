# Custom fields

In Rocket.Chat you can set customized fields for user registration. By adding a field `address` or `role` , the user can select various roles of a company, for example.

**Note**: Currently you may need some understanding of basic Javascript, and Rocket.Chat's internal working structure, to set other custom fields than in the example below. A more _user-friendly_ interface is planned for the future.

You can set custom fields under `Administration > Accounts > Registration > Custom Fields`.

Custom fields show up when a user registers, and when an admin looks for that user's information.

For now, set custom fields using a [JSON object](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON).

Make sure to use a valid `JSON` where `keys` are the `field names` that contain a dictionary of field settings. Example:

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

In the example above we set two new fields that require the following properties:

- **type**: defines the type of the field, currently we have 2 types: `select` and `text`, where `select` creates a dropdown list, and `text` creates a plain text form.

- **defaultValue**: used with a `select` form type to set the default option for the list.

- **options**: used with a `select` form type for the values on the dropdown list. It follows the pattern `["item1", "item2","item3"]`. Use a [javascript Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) to create it.

- **required**: defines if the field is required for registration. Use `true` or `false` in this property.

- **minLength**: used with a `text` to define the minimum length required in the form.

- **maxLength**: used with a `text` to define the maximum length required in the form.

- **modifyRecordField**: this property is required to add a field that already exists in Rocket.Chat.

- **array**: used inside the `modifyRecordField` property to define if the existing field is an array.

- **field**: used inside the `modifyRecordField` property. It should be the name of the existing field.

- **public**: defines the field as visible for other users when looking at this user profile.

- **private**: defines the field as private, so only users with the permission `view-full-other-user-info` can see this field when viewing this user profile.

**Note**: Fields work with `spaces` for indentation, avoid using `tabs`.
