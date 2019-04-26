# Custom Fields

In Rocket.Chat you can set customized fields for user registration. An example would be adding a field `address` or `role`, where the user could select from various roles of a company.

> Note: Unfortunately for now you might need some basic javascript and Rocket.Chat's internal workings understanding to set custom fields different from the example below. A more _user friendly_ interface is planned for the future.

You can set custom fields under `Administration -> Accounts -> Registration -> Custom Fields`.

Custom fields will show up when a user registers and when an admin look for that user's information.

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

In this example we are setting two new fields, we will go over each proadressperty of these fields:

- **type**: This defines the type of the field, currently we have 2 types: `select` and `text`. Where `select` creates a dropdown list and `text` creates a plain text form.

- **defaultValue**: This is to be used with a `select` form type. This sets the default option for the list.

- **options**: This is to be used with a `select` form type. These are the values that should be on the dropdown list. You need to use a [javascript Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) to create this. It follows this pattern `["item1", "item2","item3"]`.

- **required**: This sets if the field is required for registration. You should use `true` or `false` in this property.

- **minLength**: This is to be used with a `text`. This defines the minimum length required in the form.

- **maxLength**: This is to be used with a `text`. This defines the maximum length required in the form.

- **modifyRecordField**: If you are adding a field that already exists in Rocket.Chat, you will need to use this property.

- **array**: This is to be used inside the `modifyRecordField` property. This defines if the existing field is an array.

- **field**: This is to be used inside the `modifyRecordField` property. This should be the name of the existing field.

- **public**: This defines the field as visible for other users when looking at a user profile.

- **private**: This defines the field as private, so only users with the permission `view-full-other-user-info` will be able to see this field when viewing that user profile.

> Note: Please use `tabs` for indentation, if you use `spaces` for indentation the fields will not work.
