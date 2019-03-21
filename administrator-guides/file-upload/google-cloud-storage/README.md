# Google Cloud Storage

More information on the fields required to set up Google Cloud Storage with Rocket.Chat using a service account.

You can find the fields that you need to fill on [this article](/administrator-guides/admin/fileupload#google-cloud-storage)

## More information

**Google Storage Secret** - the value pushed here takes an argument of a .pem file to connect to your Cloud Storage bucket. When you create a service account, you will have the ability to download a .json file containing a number of variables. You'll need the unescaped private key, along with one of the certificates linked at the bottom of the .json.

Syntax will look just like a regular .pem file:

```
-----BEGIN PRIVATE KEY-----
unescaped private key goes here
-----END PRIVATE KEY-----
----BEGIN CERTIFICATE-----
first certificate goes here
-----END CERTIFICATE-----
```

Entering this into Rocket.Chat will allow it to authenticate with Google and store items in the bucket.
