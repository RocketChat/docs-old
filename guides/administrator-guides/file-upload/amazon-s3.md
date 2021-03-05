# Amazon S3

Set set the following _CORS Configuration_ to your bucket.

XML format \(if using the old AWS console Interface\):

```markup
[
    {
        "AllowedHeaders": [
            "*"  
        ],
        "AllowedMethods": [
            "PUT",
            "POST",
            "GET",
            "HEAD"
        ],  
        "AllowedOrigins": [
            "*ROCKET_CHAT_DOMAIN*"
        ],  
        "ExposeHeaders": [], 
        "MaxAgeSeconds": 3000
    } 
]
```

JSON format \(if using the new AWS console Interface\):

```javascript
[
  {
    "AllowedHeaders": [
        "*"
    ],
    "AllowedMethods": [
        "PUT",
        "POST",
        "GET",
        "HEAD"
    ],
    "AllowedOrigins": [
        "*ROCKET_CHAT_DOMAIN*"
    ],
    "ExposeHeaders": [],
    "MaxAgeSeconds": 3000
  }
]
```

**Note**: Replace `*ROCKET_CHAT_DOMAIN*` with the domain of your Rocket.Chat installation, e.g. `https://chat.example.com`. If for some reason you want to make your CORS configuration ridiculously insecure, you can set it to `*` to allow CORS requests from any host on the Internet, but do so at your own risk.

## Basic Configuration

Set the following fields:

| Config. Name | Description |
| :--- | :--- |
| **Amazon S3 bucket name** | The bucket name you created on Amazon S3 |
| **Amazon S3 AWSAccessKeyId** | Your Amazon Access Key ID \(optional\) |
| **Amazon S3 AWSSecretAccessKey** | Your Amazon Secret Access Key \(optional\) |

**Note**: If no `AWSAccessKeyId` and `AWSSecretAccessKey` are set, the underlying AWS SDK will fallback and try to retrieve credentials from the [usual locations](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html).

## Advanced Configuration

The following fields are optional, and you don't need to set them to get the upload to S3 working.

| Config. Name | Description |
| :--- | :--- |
| **Region** | If you created your bucket on a region different from the US Standard, this is where you **must** set their code \(see a list of region codes [here](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions)\) |
| **Amazon S3 acl** | A _Canned ACL_ configuration \(see a full list [here](http://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl)\) |
| **CDN domain for downloads** | If you set a CDN for your bucket, put it here |
| **Bucket URL** | Override URL to which files are uploaded. This URL is also used for downloads, unless youset a CDN. |

