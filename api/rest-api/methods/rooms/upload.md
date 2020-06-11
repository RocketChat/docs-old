---
description: REST API Upload Methods
---

# Upload

Post a message with attached file to a dedicated room.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/rooms.upload/:rid` | `yes` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `file` | `$HOME/example.txt` | Required | A file name to upload |
| `msg` | `This is a message with a file` | Optional | A message text |
| `description` | `Simple text file` | Optional | A description of the file |
| `tmid` | `vg3h21v31v23` | Optional | The thread message id \(if you want upload a file to a thread\) |

## Example Call

```bash
curl "http://localhost:3000/api/v1/rooms.upload/GENERAL" \
    -F file=@$HOME/example.txt \
    -F "msg=This is a message with a file" \
    -F "description=Simple text file" \
    -H "X-Auth-Token: ijFlJ1yfidXhwEYY284Anoq_iEsOeMMVCupzNhX22tB" \
    -H "X-User-Id: hw5DThnhQmxDWnavu"
```

**Note: For some file types if uploading via curl you may need to set the mime type.**

With some file types, curl will upload the file as `application/octet-stream`. You can pass a custom mime type like this: `-F "file=@file.wav;type=audio/wav"`

## Example Result

```javascript
{
  "message": {
    "_id": "HxX7qtrm6azSaMChG",
    "rid": "GENERAL",
    "ts": "2019-03-24T20:28:02.501Z",
    "msg": "This is a message with a file and I want to test it",
    "file": {
      "_id": "RwiWv3waLHfXLW3mj",
      "name": "temp.txt",
      "type": "text/plain"
    },
    "attachments": [
      {
        "ts": "1970-01-01T00:00:00.000Z",
        "title": "temp.txt",
        "title_link": "/file-upload/RwiWv3waLHfXLW3mj/temp.txt",
        "title_link_download": true,
        "type": "file",
        "description": "Simple text file"
      }
    ],
    "u": {
      "_id": "abJaoNiibGs7gP9fe",
      "username": "knrt10",
      "name": "knrt10"
    },
    "_updatedAt": "2019-03-24T20:28:02.558Z"
  },
  "success": true
}
```

![A picture with a message](../../../../.gitbook/assets/example.png)

## Example HTTP dump

```text
POST /api/v1/rooms.upload/GENERAL HTTP/1.1
Host: 192.168.2.71:3000
User-Agent: curl/7.45.0
Accept: */*
X-Auth-Token: ijFlJ1yfidXhwEYY284Anoq_iEsOeMMVCupzNhX22tB
X-User-Id: hw5DThnhQmxDWnavu
Content-Length: 457
Expect: 100-continue
Content-Type: multipart/form-data; boundary=------------------------f2ee26fd9d793455

--------------------------f2ee26fd9d793455
Content-Disposition: form-data; name="file"; filename="example.txt"
Content-Type: text/plain

This text file contains a text.
--------------------------f2ee26fd9d793455
Content-Disposition: form-data; name="msg"

This is a message with a file
--------------------------f2ee26fd9d793455
Content-Disposition: form-data; name="description"

Simple text file
--------------------------f2ee26fd9d793455--

HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
X-Instance-ID: 6vZ3BLNJ8jnPZfYYx
Cache-Control: no-store
Pragma: no-cache
content-type: application/json
Vary: Accept-Encoding
Date: Sun, 28 Jan 2018 11:08:18 GMT
Connection: keep-alive
Transfer-Encoding: chunked

{
    "message": {
        "_id": "HxX7qtrm6azSaMChG",
        "rid": "GENERAL",
        "ts": "2019-03-24T20:28:02.501Z",
        "msg": "This is a message with a file and I want to test it",
        "file": {
            "_id": "RwiWv3waLHfXLW3mj",
            "name": "temp.txt",
            "type": "text/plain"
        },
        "attachments": [
            {
                "ts": "1970-01-01T00:00:00.000Z",
                "title": "temp.txt",
                "title_link": "/file-upload/RwiWv3waLHfXLW3mj/temp.txt",
                "title_link_download": true,
                "type": "file",
                "description": "Simple text file"
            }
        ],
        "u": {
            "_id": "abJaoNiibGs7gP9fe",
            "username": "knrt10",
            "name": "knrt10"
        },
        "_updatedAt": "2019-03-24T20:28:02.558Z"
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 1.0.0 | Return Message object on file upload |
| 0.62.0 | Added |

