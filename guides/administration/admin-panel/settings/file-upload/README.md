---
description: Configure file upload and storage
---

# File Upload

In this article you will find all of the settings related to File Uploads.

## General Settings

* **File Uploads Enabled**: Use this setting to enable or restrict file uploads on your server
* **File Uploads Enabled in Direct Messages**: Use this setting to enable or restrict file uploads on Direct Messages
* **Maximum File Upload Size (in bytes)**: Use this setting to define the maximum allowed file size for uploads. `Set it to -1 to remove the file size limitation.`
*   **Accepted Media Types**: Use this setting to define what types of files the users will be able to upload.

    > Comma-separated list of media types. Leave it blank for accepting all media types.
* **Protect Uploaded Files**
  * **Yes**: Only authenticated users will have access to the uploaded files.
  * **No**: If in possession of the uploaded file's URL, unauthenticated users will be able to access and download said files.
* **Storage Type**
  * **GridFS**: Uses the GridFS storage type
  * **AmazonS3**: Uses the [Amazon S3](./#amazon-s3) storage type
  * **Google Cloud Storage**: Uses the [Google Cloud Storage](./#google-cloud-storage) storage type
  * **WebDAV**: Uses the [WebDav](./#webdav) storage type
  * **FileSystem**: Uses the [FileSystem](./#filesystem) storage type

## Amazon S3

You can find a more detailed guide on how to set your Amazon S3 server [here](amazon-s3.md).

* **Access Key**: Your Amazon Access Key ID (optional)
*   **Secret Key**: Your Amazon Secret Access Key (optional)

    > **Note**: If no `AWSAccessKeyId` and `AWSSecretAccessKey` are set, the underlying AWS SDK will fallback to trying to retrieve credentials from the [usual locations](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html).
* **Acl**(Optional): A _Canned ACL_ configuration (see a full list [here](http://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl))
* **Bucket name**: The bucket name you've created on Amazon S3
* **Bucket URL**(Optional): Override URL to which files are uploaded. This URL will also be used for downloads unless a CDN is given
* **CDN Domain for Downloads**(Optional): If you had set a CDN for your bucket, put it here
* **Proxy Avatars**: Proxy avatar file transmissions through your server instead of direct access to the asset's URL
* **Proxy Uploads**: Proxy upload file transmissions through your server instead of direct access to the asset's URL
* **Region**(Optional): If you have created your bucket on region different from the US Standard, you **have** to set their code here (see a list of region codes [here](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions))
* **Signature Version**: Identifies the version of AWS Signature that you want to support for authenticated requests.
*   **URLs Expiration Timespan**: Time after which Amazon S3 generated URLs will no longer be valid (in seconds). If set to less than 5 seconds, this field will be ignored.

    > If you run into issues with files not loading consistently for some users located further from server location. Increasing this time might help.

## FileSystem

* **System Path**: The local path for where the uploaded files will be stored.&#x20;

## Google Cloud Storage

The settings used when configuring a Google Cloud Storage server. You can find more details in [here](google-cloud-storage.md)

* **Google Storage Bucket Name**: The name of the bucket to which the files should be uploaded.
*   **Google Storage Access Id**: The access ID (or username) of the service account which has access to your Cloud Storage bucket.

    > The Access Id is generally in an email format, for example: "example-test@example.iam.gserviceaccount.com"
*   **Google Storage Secret**: What is essentially a .pem containing your private key and certificate.

    > You can find a guide [here](https://github.com/CulturalMe/meteor-slingshot#google-cloud) on how to get your keys.
* **Proxy Avatars**: Proxy avatar file transmissions through your server instead of direct access to the asset's URL
* **Proxy Uploads**: Proxy upload file transmissions through your server instead of direct access to the asset's URL

## WebDAV

Settings used in the setting of a WebDAV storage server.

* **Upload Folder Path**: WebDAV folder path which the files should be uploaded to.
* **WebDAV Server Access URL**: The URL of the WebDAV server ([WebDAV URLs of Common Cloud Storage Services](https://community.cryptomator.org/t/webdav-urls-of-common-cloud-storage-services/75)).
* **WebDAV Username**: Username for the remote WebDav server.
* **WebDAV Password**: Password for the remote webdav server.
* **Proxy Avatars**: Proxy avatar file transmissions through your server instead of direct access to the asset's URL.
* **Proxy Uploads**: Proxy upload file transmissions through your server instead of direct access to the asset's URL.
