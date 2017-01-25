# Minio

* Minio is a distributed object storage server built for cloud applications and devops
* You can use many as a replacement for the amazon s3 storage
* a basic setup guide for a minio instance can you find here: http://docs.minio.io/
* If you use docker, use the container image `minio/minio:edge` instead of latest (not included but needed fixes)

* Go to your File Upload Settings in rocket.chat (administration -> File Uploads)
* Adjust the following setting:

`Storage Type: gridfs (default) -> amazon s3`

* access the amazon s3 menu and adjust:

```
Amazon S3 Bucketname: <yourbucketname>
Amazon S3 AWS AccessKeyID: <your minio access key>
Amazon S3 AWSSecretAccessKey: <your minio secret access key>
Region: us-east-1
Bucket URL: https://minio.mydomain.com/<bucketname>
URLs expiration time: 0 (if you want that your files dont have an expiry date)
```

You get your access keys / secret access keys on first setup of minio, its displayed like:

```
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
