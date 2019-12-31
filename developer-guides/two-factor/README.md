# Handling Two Factor Authorization

Rocket.Chat uses Two Factor to authorize important actions. There are a list of possible sources for the two factor code:

* **Authenticator App**: like Google Authenticator or Authy (need to be configured by the user);
* **Email**: users will receive the code via email (configured by default and enabled for those users with verified emails);
* **Password***: it's not a two factor by it self, but a fallback for the cases where the user has no other option configure;

> \* The password fallback is disabled for the login process, so the login will not require the password twice when the user has no other two factor method configure.

Any **DDP Method** or **REST call** may have the two factor requirement, for that reason we suggest the creation of a wrapper for your calls to handle the errors described here and executing the request again passing the required info as we will describe here as well.

## Remember Me

By default, after a two factor validation, the client used (a hash of user-agent + ip address) will be trusted for 5 minutes. It's configurable via admin panel.

Some methods may disable this feature forcing the api to always require the two factor for that method/endpoint. The method to disable the two factor by email and the login are examples.

## Compatibility

We are using the error `totp-required` for compatibility purposes, it doesn't means that the error is related to TOTP only, so we pass more details to identify the action required.

## Personal Access Tokens

Personal Access Tokens are tokens created by the users (when enabled by the server) commonly used to give access to other applications, bots, etc. Those tokens does not expires and they have the option to **bypass** the Two Factor (required by default) allowing users to use their integrations without restrictions when needed.

Now it's the two factor is required to create personal access tokens.

> The bypass should be used carefully because it gives super powers to who gain access to the token

## DDP Methods

### Errors

When a call that requires two factor is made it will return an error `totp-require`. The details object will list the method that has been required (email on this example) so it's possible to inform the user to check his email for the code.

* **method**: The method selected by the server. Useful to inform the user where to look for the code.
* **codeGenerated**: Email only. Used to inform if the code was generated or if there are tokens available already.
* **codeCount**: Email only. The number of available codes already sent via email.
* **codeExpires**: Email only. A list of expiration dates of the tokens.
* **availableMethods**: The list of available methods for Two Factor. When calling an api it's possible to define the method to use.

```JSON
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

### Calling a method with Two Factor

After receive the error it's necessary to pass the informed code to the API. For that we need to call a new method called `callWithTwoFactorRequired` passing the information as an object:

* **code**: The code informed by the user;
* **ddpMethod**: The original method called;
* **method**: The desired method to check the Two Factor, usually the same from the error;
* **params**: An array of parameters used for the original method;

If the two factor was accepted the **result** and the **error** will came from the original method.
If the two factor was not accepted the **error** `totp-invalid` will be returned.

```JavaScript
Meteor.call('callWithTwoFactorRequired', { code, ddpMethod, method, params: args }, (error, result) => {});
```

### Requesting a new email code

TODO

### Enabling the Two Factor via Email

TODO

### Disabling the Two Factor via Email

TODO

## REST API

### Errors

TODO

### Calling a method with Two Factor

TODO

### Requesting a new email code

TODO

### Enabling the Two Factor via Email

TODO

### Disabling the Two Factor via Email

TODO

