# Request Data Download

Request the user's data for download.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.requestDataDownload` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `fullExport` | `true` or `false` | Optional, default `false` | If needs a full export. |

## Other Users Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/users.requestDataDownload
```

## Example Result

```javascript
{
    "requested": false,
    "exportOperation": {
        "_id": "uDSuaW7vGd9B7j8qD",
        "createdAt": "2019-06-07T23:02:13.359Z",
        "userId": "hjwGZafNqExtFNmN7",
        "roomList": [
            {
                "roomId": "GENERAL",
                "roomName": "general",
                "userId": null,
                "exportedCount": 8,
                "status": "completed",
                "targetFile": "general.html",
                "type": "c"
            }
        ],
        "status": "uploading",
        "exportPath": "/tmp/userData/hjwGZafNqExtFNmN7/partial",
        "assetsPath": "/tmp/userData/hjwGZafNqExtFNmN7/partial/assets",
        "fileList": [],
        "generatedFile": "/tmp/zipFiles/hjwGZafNqExtFNmN7.zip",
        "fullExport": false,
        "_updatedAt": "2019-06-07T23:15:00.326Z"
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 1.2.0 | Added as `users.requestDataDownload` |

