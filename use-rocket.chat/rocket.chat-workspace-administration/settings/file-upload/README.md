---
description: Configure file upload and storage
---

# File Upload

Configure file uploads and storage on your workspace.&#x20;

To access the menu on your workspace, navigate to **Administration > Workspace > Settings > File Upload**

{% hint style="success" %}
Remember always to hit **Save Changes** to apply any changes made.
{% endhint %}

## General Settings

* **File Uploads Enabled**: Use this setting to enable or restrict file uploads on your workspace
* **Maximum File Upload Size (in bytes)**: Use this setting to define the maximum allowed file size for uploads. `Set it to -1 to remove the file size limitation.`
*   **Accepted Media Types**: Use this setting to define the files the users can upload.

    > Comma-separated list of media types. Leave it blank for accepting all media types.
*   **Blocked Media Types**: Define what types of files are blocked on the workspace.

    > Comma-separated list of media types. This setting has priority over the Accepted Media Types.
* **Protect Uploaded Files**
  * **Yes**: Only authenticated users can have access to the uploaded files.
  * **No**: If in possession of the uploaded file's URL, unauthenticated users can access and download said files.
* **Rotate images on upload**: Turn on to enable image rotation. This affects the image quality.
  * **Enable JSON Web Tokens protection to file uploads**: Turn on to enable JWT protection on file uploads.
* **File Upload Json Web Token Secret**: Set the JWT secret to be used.
* **Storage Type**
  * **AmazonS3**: Uses the [Amazon S3](./#amazon-s3) storage type
  * **Google Cloud Storage**: Uses the [Google Cloud Storage](./#google-cloud-storage) storage type
  * **WebDAV**: Uses the [WebDav](./#webdav) storage type
  * **FileSystem**: Uses the [FileSystem](./#filesystem) storage type
* **File Uploads Enabled in Direct Messages**: Use this setting to enable or restrict file uploads on Direct Messages

## Amazon S3

You can find a more detailed guide on how to set up your Amazon S3 server [here](broken-reference).

* **Bucket name**: The bucket name you've created on Amazon S3
* **Acl**(Optional): A _Canned ACL_ configuration (see a complete list [here](http://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl))
* **Access Key**: Your Amazon Access Key ID (optional)
*   **Secret Key**: Your Amazon Secret Access Key (optional)

    > **Note**: If no `AWSAccessKeyId` and `AWSSecretAccessKey` are set, the underlying AWS SDK the will fallback to trying to retrieve credentials from the [usual locations](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html).
* **CDN Domain for Downloads**(Optional): If you had set a CDN for your bucket, put it here
* **Region**(Optional): If you have created your bucket on region different from the US Standard, you **have** to set their code here (see a list of region codes [here](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions))
* **Bucket URL**(Optional): Override the URL to which files are uploaded. This URL is also used for downloads unless a CDN is given
* **Signature Version**: Identifies the version of AWS Signature that you want to support for authenticated requests.
* **Force Path Style**: Enable force path style.
*   **URLs Expiration Timespan**: Time after which Amazon S3 generated URLs are no longer valid (in seconds). If set to less than 5 seconds, this field is ignored.

    > If you run into issues with files not loading consistently for some users located further from server location. Increasing this time might help.
* **Proxy Avatars**: Proxy avatar file transmissions through your server instead of direct access to the asset's URL
* **Proxy Uploads**: Proxy upload file transmissions through your server instead of direct access to the asset's URL

<details>

<summary>Amazon S3 CORS Configuration</summary>

Set the following _CORS Configuration_ to your bucket.

XML format (if using the old AWS console Interface):

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

JSON format (if using the new AWS console Interface):

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

**Note**: Replace `*ROCKET_CHAT_DOMAIN*` with the domain of your Rocket.Chat installation, e.g. `https://chat.example.com`.  Setting CORS to `*` posses a security risk because it allows for requests from any host on the Internet.

</details>

## FileSystem

* **System Path**: The local path for where the uploaded files are stored.&#x20;

## Google Cloud Storage

The settings used when configuring a Google Cloud Storage server. You can find more details [here](broken-reference).

* **Google Storage Bucket Name**: The bucket name to which the files should be uploaded.
*   **Google Storage Access Id**: The access ID (or username) of the service account which has access to your Cloud Storage bucket.

    > The Access Id is generally in an email format, for example: "example-test@example.iam.gserviceaccount.com"
*   **Google Storage Secret**: A `.pem` containing your private key and certificate.

    > You can find a guide [here](https://github.com/CulturalMe/meteor-slingshot#google-cloud) on how to get your keys.
* **Proxy Avatars**: Proxy avatar file transmissions through your server instead of direct access to the asset's URL
* **Proxy Uploads**: Proxy upload file transmissions through your server instead of direct access to the asset's URL

### More Information

<details>

<summary>About <strong>Google Storage Secret</strong></summary>

The value here takes an argument of a PEM file to connect to your Cloud Storage bucket. When you create a service account, you have the ability to download a JSON file that contains a number of variables. You need the unescaped private key, along with one of the certificates linked at the bottom of the JSON.

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

</details>

## WebDAV

The settings used for WebDAV as storage server.

* **Upload Folder Path**: WebDAV folder path to which files are uploaded to.
* **WebDAV Server Access URL**: The URL of the WebDAV server ([WebDAV URLs of Common Cloud Storage Services](https://community.cryptomator.org/t/webdav-urls-of-common-cloud-storage-services/75)).
* **WebDAV Username**: Username for the remote WebDav server.
* **WebDAV Password**: Password for the remote WebDAV server.
* **Proxy Avatars**: Proxy avatar file transmissions through your server instead of direct access to the asset's URL.
* **Proxy Uploads**: Proxy uploads file transmissions through your server instead of directly accessing the asset's URL.
