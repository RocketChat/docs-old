# Google Cloud Storage

Here is more information on the fields required to set up your Google Cloud Storage with Rocket.Chat using a service account.

Set the following fields:

| Config. Name                   | Description                                                                                                                                                                    |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Google Storage Bucket Name** | The bucket name you created on Google Storage                                                                                                                                  |
| **Google Storage Access Id**   | The access ID (or username) of the service account that has access to your Cloud Storage bucket, usually in the following format: example-test@example.iam.gserviceaccount.com |
| **Google Storage Secret**      | Essentially a PEM that contains your private key and certificate                                                                                                               |

## More Information

**Google Storage Secret**: the value pushed here takes an argument of a PEM file to connect to your Cloud Storage bucket. When you create a service account, you have the ability to download a JSON file that contains a number of variables. You need the unescaped private key, along with one of the certificates linked at the bottom of the JSON.

Syntax then looks just like a regular PEM file:

```
-----BEGIN PRIVATE KEY-----
unescaped private key goes here
-----END PRIVATE KEY-----
----BEGIN CERTIFICATE-----
first certificate goes here
-----END CERTIFICATE-----
```

Enter this into Rocket.Chat to allow the authentication with Google and store items in the bucket.
