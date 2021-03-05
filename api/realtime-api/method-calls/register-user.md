# Register User

Used for user registration.

There is the possibility of `customFields` as extra fields for user registration. The information of extra fields is found in setting `Accounts_CustomFields` in JSON format.

The call format is:

```javascript
{
    "msg": "method",
    "method": "registerUser",
    "id":"42",
    "params": [{
        "email": "String",
        "pass": "String",
        "name": "String",
        "secretURL": "String" // Optional
    }]
}
```

The response is just the created user's \_id:

```javascript
{
    "msg": "result",
    "id": "42",
    "result": "random_id"
}
```

## Errors

In the case there's an error on the request, a possible error response would be in this format:

```javascript
{
    "msg": "result",
    "id": "42",
    "error": {
        "error": 403,
        "reason": "...",
        "message": "... [403]",
        "errorType": "Meteor.Error"
    }
}
```

### Possible errors

```text
"reason": "error-user-registration-disabled",
"message": "User registration is disabled [403]",

"reason": "error-user-registration-secret",
"message": "User registration is only allowed via Secret URL [403]",

"reason": "error-invalid-customfield-json",
"message": "Invalid JSON for Custom Fields [403]",
```

#### Custom Fields related

```text
"reason": "error-user-registration-custom-field",
"message": "Field ${ fieldName } is required [403]",

"reason": "error-user-registration-custom-field",
"message": "Value for field ${ fieldName } is invalid [403]",

"reason": "error-user-registration-custom-field",
"message": "Max length of field ${ fieldName } ${ field.maxLength } [403]",

"reason": "error-user-registration-custom-field",
"message": "Min length of field ${ fieldName } ${ field.minLength } [403]",
```

## Accounts\_CustomFields

Example of what we can find inside the `Accounts_CustomFields` **encoded as JSON**

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
    }
}
```

