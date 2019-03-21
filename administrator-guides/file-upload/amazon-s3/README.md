# Amazon S3

You'll need to set the following _CORS Configuration_ to your bucket:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
    <CORSRule>
        <AllowedOrigin>*ROCKET_CHAT_DOMAIN*</AllowedOrigin>
        <AllowedMethod>PUT</AllowedMethod>
        <AllowedMethod>POST</AllowedMethod>
        <AllowedMethod>GET</AllowedMethod>
        <AllowedMethod>HEAD</AllowedMethod>
        <MaxAgeSeconds>3000</MaxAgeSeconds>
        <AllowedHeader>*</AllowedHeader>
    </CORSRule>
</CORSConfiguration>
```

**Important**: Replace `*ROCKET_CHAT_DOMAIN*` with the domain of your Rocket Chat installation, e.g. `https://chat.example.com`. If for some reason you want to make your CORS configuration ridiculously insecure, you can set it to `*` to allow CORS requests from any host on the Internet, but do so at your own risk.

## Basic configuration

You Can find information on the fields used to configure Amazon S3 [here](/administrator-guides/admin/fileupload#amazon-s3)
