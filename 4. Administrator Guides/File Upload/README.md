# File Uploads

You'll need to set the following _CORS Configuration_ to your bucket:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
	<CORSRule>
		<AllowedOrigin>*</AllowedOrigin>
		<AllowedMethod>PUT</AllowedMethod>
		<AllowedMethod>POST</AllowedMethod>
		<AllowedMethod>GET</AllowedMethod>
		<AllowedMethod>HEAD</AllowedMethod>
		<MaxAgeSeconds>3000</MaxAgeSeconds>
		<AllowedHeader>*</AllowedHeader>
	</CORSRule>
</CORSConfiguration>
```

## Basic configuration

You'll need to set the following fields:

Config. Name | Description
------------ | -------------
**Amazon S3 bucket name** | The bucket name you've created on Amazon S3
**Amazon S3 AWSAccessKeyId** | Your Amazon Access Key ID
**Amazon S3 AWSSecretAccessKey** | Your Amazon Secret Access Key


## Advanced configuration

The following fields are optional, you don't need to set them to get upload to S3 working.

Config. Name | Description
------------ | -------------
**Region** | If you have created your bucket on region different from the US Standard, you **have** to set their code here (see a list of region codes [here](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions))
**Amazon S3 acl** | A _Canned ACL_ configuration (see a full list [here](http://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl))
**CDN domain for downloads** | If you had set a CDN for your bucket, put it here
**Bucket URL** | Override URL to which files are uploaded. This URL will also be used for downloads unless a CDN is given
