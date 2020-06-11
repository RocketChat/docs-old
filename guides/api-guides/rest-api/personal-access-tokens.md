# Access Tokens

With the addition of the ability to generate personal access tokens, you can use the REST API without having to sign in.

The administrator must grant to the user role the necessary permission`create-personal-access-tokens` to be able to generate personal access tokens.

After that you can generate personal access tokens in your profile page:

`Profile -> My Account -> Security -> Personal Access Tokens`

The tokens that will be generated are irrecoverable, once generated, you must save it in a safe place, if the token is lost or forgotten, you can regenerate or delete the token.

With the token in hand you can add in the header `X-Auth-Token` along with your user id `X-User-Id` of the request that is made to the REST API.

