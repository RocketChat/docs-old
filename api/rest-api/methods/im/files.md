# Files

Retrieves the files from a direct message. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info.md) along with [Query and Fields Query Parameters](../../query-and-fields-info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/im.files` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `roomId`    `username` | `ByehQjC44FwMeiLbX`    `user` | Required | The room id.    The user name. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/im.files?roomId=ByehQjC44FwMeiLbX
```

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/im.files?username=user
```

## Example Result

```javascript
{
    "files": [
        {
            "_id": "zchmBCtCEGeGRFrFw",
            "name": "images.jpeg",
            "size": 9778,
            "type": "image/jpeg",
            "rid": "ksKsKmrjvxzkzxkwwzFWhJbub88A9mLrAD",
            "description": "dafsd",
            "store": "GridFS:Uploads",
            "complete": true,
            "uploading": false,
            "extension": "jpeg",
            "progress": 1,
            "user": {
                "_id": "ksKsKmrjvxzkzxkww",
                "username": "rocket.cat",
                "name": "Rocket Cat"
            },
            "_updatedAt": "2018-03-08T17:36:09.846Z",
            "instanceId": "uZG54xuoKauKHykbQ",
            "etag": "mnqbLcmKAptJBEKrx",
            "path": "/ufs/GridFS:Uploads/zchmBCtCEGeGRFrFw/images.jpeg",
            "token": "787868e89B",
            "uploadedAt": "2018-03-08T17:36:09.913Z",
            "url": "/ufs/GridFS:Uploads/zchmBCtCEGeGRFrFw/images.jpeg"
        }
    ],
    "count": 1,
    "offset": 0,
    "total": 1,
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.64.0 | Change `userId` to `user` object in response |
| 0.59.0 | Added |

