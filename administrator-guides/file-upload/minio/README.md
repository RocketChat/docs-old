# Minio

## Introduction

Minio is an object storage server built for cloud applications and DevOps. Minio is S3 compatible and provides an open source
alternative to AWS S3. You can [download and install](https://minio.io/downloads) Minio pretty quickly. Minio also provides [official Docker image](https://hub.docker.com/r/minio/minio/). For further details, check out [Minio documentation website](https://docs.minio.io/).

## AccessKey and SecretKey

Once you install and deploy Minio server, you can get the AccessKey and SecretKey from the startup message.

```bash
2017-01-24T19:53:21.141689279Z
2017-01-24T19:53:21.141730078Z Endpoint:  http://172.17.0.2:9000  http://127.0.0.1:9000
2017-01-24T19:53:21.141735582Z AccessKey: 5fD3434325fDaGE77BNJlSoV1xGp
2017-01-24T19:53:21.141738933Z SecretKey: Quie2teech4oofoo9Dahsoo7aithauja
2017-01-24T19:53:21.141742292Z Region:    us-east-1
2017-01-24T19:53:21.141745405Z SQS ARNs:  <none>
2017-01-24T19:53:21.141749472Z
2017-01-24T19:53:21.141752499Z Browser Access:
2017-01-24T19:53:21.141755711Z    http://172.17.0.2:9000  http://127.0.0.1:9000
2017-01-24T19:53:21.141758830Z
2017-01-24T19:53:21.141762000Z Command-line Access: https://docs.minio.io/docs/minio-client-quickstart-guide
2017-01-24T19:53:21.141765638Z    $ mc config host add myminio http://172.17.0.2:9000 1H2MI5BCU45990DZ3WRL flJlSoV1xGp+u2fhfDaGE77BNE6OdyvAsdI15kPq
2017-01-24T19:53:21.141768751Z
2017-01-24T19:53:21.141771631Z Object API (Amazon S3 compatible):
2017-01-24T19:53:21.141774638Z    Go:         https://docs.minio.io/docs/golang-client-quickstart-guide
2017-01-24T19:53:21.142003548Z    Java:       https://docs.minio.io/docs/java-client-quickstart-guide
2017-01-24T19:53:21.142019474Z    Python:     https://docs.minio.io/docs/python-client-quickstart-guide
2017-01-24T19:53:21.142024004Z    JavaScript: https://docs.minio.io/docs/javascript-client-quickstart-guide
2017-01-24T19:53:21.142027614Z
2017-01-24T19:53:21.142030994Z Drive Capacity: 262 GiB Free, 303 GiB Total
```

To override Minio's auto-generated keys, you may pass secret and access keys explicitly as environment variables. Explained [here](https://docs.minio.io/docs/minio-docker-quickstart-guide)

## Setup Rocket.Chat to use Minio

To setup Minio as the file storage server in Rocket.Chat, go to `File Uploads` section under `administration`, then set `Storage Type: GridFS (default)` to `AmazonS3`. Next, access the AmazonS3 menu and update the following details:

| Configuration Name   | Description                                               |
| -------------------- | --------------------------------------------------------- |
| Bucket name          | Minio Bucket Name                                         |
| Access Key           | Minio server Access Key                                   |
| Secret Key           | Minio server Secret Access Key                            |
| Region               | us-east-1                                                 |
| Bucket URL           | `http://[your.minio.domain/bucketname]`                   |
| Signature Version    | v2 (This may not be needed if using ssl)                  |
| Force Path Style     | true (this may not be needed if using ssl)                |
| URLs expiration time | 0 (if you want that your files don't have an expiry date) |

## Production setup

In production you can use a reverse proxy with Minio server. Check out the documentation for [Nginx](https://docs.minio.io/docs/setup-nginx-proxy-with-minio#main), [Apache](https://docs.minio.io/docs/setup-apache-http-proxy-with-minio-server) and [Apache2](https://www.digitalocean.com/community/tutorials/how-to-use-apache-http-server-as-reverse-proxy-using-mod_proxy-extension).

You can secure access to Minio server with TLS. Check out the documentation [here](https://docs.minio.io/docs/how-to-secure-access-to-minio-server-with-tls).

**Note** If you specify a different region in Minio, make sure it is the same as an S3 region.  Full list of regions found [here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions).
