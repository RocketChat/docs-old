# Two Factor Authentication

Visit the [Two Factor Authentication](../../guides/developer/two-factor.md) guide for general information.

## Errors

When a call that requires two factor is made it will return an errorType `totp-require`. The details object will list the method that has been required \(email on this example\) so it's possible to inform the user to check his email for the code.

* **method**: The method selected by the server. Useful to inform the user where to look for the code.
* **codeGenerated**: Email only. Used to inform if the code was generated or if there are tokens available already.
* **codeCount**: \(optional\) Email only. The number of available codes already sent via email.
* **codeExpires**: \(optional\) Email only. A list of expiration dates of the tokens.
* **availableMethods**: The list of available methods for Two Factor. When calling an api it's possible to define the method to use.

```javascript
{
  "success": false,
  "error": "TOTP Required [totp-required]",
  "errorType": "totp-required",
  "details": {
    "method": "email",
    "codeGenerated": false,
    "codeCount": 1,
    "codeExpires": [
      "2020-01-02T13:06:42.408Z"
    ],
    "availableMethods": [
      "email"
    ]
  }
}
```

## Calling an endpoint with Two Factor

After receive the error it's necessary to pass the informed code to the API. For that we need to call the same endpoint passing the some new new headers:

### Request \(new headers\)

* **x-2fa-code**: \(string\) The code informed by the user;
* **x-2fa-method**: \(string\) The desired method to check the Two Factor, usually the same from the error;

### Result

* If the two factor was accepted the **result** and the **error** will came from the original endpoint;
* If the two factor was not accepted the **error** `totp-invalid` will be returned;

```javascript
// Error example
{
  "success": false,
  "error": "TOTP Invalid [totp-invalid]",
  "errorType": "totp-invalid",
  "details": {
    "method": "email"
  }
}
```

## Requesting a new email code

If the user didn't receive the code it's possible to request the server to send a new code via email by calling the endpoint `users.2fa.sendEmailCode` via POST passing the user's email or username as body. It's required to pass the email or username because this endpoint can be called when the user is not logged in.

### Request

* **sendEmailCode**: \(string\) The user's username or email

### Result

* If success: **array of emails** to where the code was sent;
* If error: **error-parameter-required** if the parameter `emailOrUsername` was not provided;
* If error: **error-invalid-user** if the user was not found with the provided `emailOrUsername`;

### Example

```javascript
await APIClient.v1.post('users.2fa.sendEmailCode', undefined, {emailOrUsername: '{{emailOrUsername}}'});
```

## Enabling the Two Factor via Email

It's possible to enable the email check by calling the endpoint `users.2fa.enable-email` via POST. Note that the two factor via email will only work if the user has at least one verified email.

### Result

* If success: **{success: true}** is returned;
* If error: **not-authorized** if the user is not logged in;

### Example

```javascript
await APIClient.v1.post('users.2fa.enable-email');
```

## Disabling the Two Factor via Email

It's possible to disabled the email check by calling the endpoint `users.2fa.disable-email` via POST. Note this endpoint requires the two factor to be executed.

### Result

* If success: **{success: true}** is returned;
* If error: A two factor verification error is returned;

### Example

```javascript
await APIClient.v1.post('users.2fa.disable-email');
```

