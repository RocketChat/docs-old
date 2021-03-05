# Two Factor Authentication

Visit [the Two Factor Authorization page](../../guides/developer/two-factor.md) for general information about Two Factor Authorization.

## Errors

When a call that requires two factor is made it will return an error `totp-require`. The details object will list the method that has been required \(email on this example\) so it's possible to inform the user to check his email for the code.

* **method**: The method selected by the server. Useful to inform the user where to look for the code.
* **codeGenerated**: Email only. Used to inform if the code was generated or if there are tokens available already.
* **codeCount**: \(optional\) Email only. The number of available codes already sent via email.
* **codeExpires**: \(optional\) Email only. A list of expiration dates of the tokens.
* **availableMethods**: The list of available methods for Two Factor. When calling an api it's possible to define the method to use.

```javascript
{
  "msg": "result",
  "id": "1",
  "error": {
    "isClientSafe": true,
    "error": "totp-required",
    "reason": "TOTP Required",
    "details": {
      "method": "email",
      "codeGenerated": false,
      "codeCount": 1,
      "codeExpires": [
        "2019-12-31T22:05:22.159Z"
      ],
      "availableMethods": [
        "email"
      ]
    },
    "message": "TOTP Required [totp-required]",
    "errorType": "Meteor.Error"
  }
}
```

## Calling a method with Two Factor

After receive the error it's necessary to pass the informed code to the API. For that we need to call a new method called `callWithTwoFactorRequired` passing the information as an object:

### Request

* **code**: \(string\) The code informed by the user;
* **ddpMethod**: \(string\) The original method called;
* **method**: \(string\) The desired method to check the Two Factor, usually the same from the error;
* **params**: \(any\[\]\) An array of parameters used for the original method;

### Result

* If the two factor was accepted the **result** and the **error** will came from the original method;
* If the two factor was not accepted the **error** `totp-invalid` will be returned;

### Example

```javascript
Meteor.call('callWithTwoFactorRequired', { code, ddpMethod, method, params: args }, (error, result) => {});
```

## Requesting a new email code

If the user didn't receive the code it's possible to request the server to send a new code via email by calling the DDP Method `sendEmailCode` passing the user's email or username. It's required to pass the email or username because this Method can be called when the user is not logged in.

### Request

* **sendEmailCode**: \(string\) The user's username or email

### Result

* If success: **array of emails** to where the code was sent;
* If error: **error-parameter-required** if the parameter `emailOrUsername` was not provided;
* If error: **error-invalid-user** if the user was not found with the provided `emailOrUsername`;

### Example

```javascript
Meteor.call('sendEmailCode', emailOrUsername, (error, result) => {});
```

## Enabling the Two Factor via Email

It's possible to enable the email check by calling the Method `2fa:enable-email`. Note that the two factor via email will only work if the user has at least one verified email.

### Result

* If success: **true** is returned;
* If error: **not-authorized** if the user is not logged in;

### Example

```javascript
Meteor.call('2fa:enable-email', (error, result) => {});
```

## Disabling the Two Factor via Email

It's possible to disabled the email check by calling the Method `2fa:disable-email`. Note this Method requires the two factor to be executed.

### Result

* If success: **true** is returned;
* If error: A two factor verification error is returned;

### Example

```javascript
Meteor.call('2fa:disable-email', (error, result) => {});
```

