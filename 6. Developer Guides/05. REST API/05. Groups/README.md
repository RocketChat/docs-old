# Group Methods
| Url | Quick Link |
| --- | --- |
| `/api/v1/groups.list` | [Groups List Method](#groups-list-details) |

## Groups List Details
| URL | Requires Auth | HTTP Method | Payload |
| --- | --- | --- | --- |
| `/api/v1/groups.list` | `yes` | `get` | _n/a_ |

### Example Call
```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/groups.list
```

### Example Result
```json
[{
   "_id": "ZSApFGbNFwKyvxBwa",
   "name": "afkt",
   "t": "p",
   "msgs": 0,
   "u": {
      "_id": null,
      "username": null
   },
   "ts": "2016-10-11T22:38:02.345Z",
   "ro": false,
   "sysMes": true,
   "_updatedAt": "2016-10-11T22:38:02.372Z",
   "meta": {
      "revision": 0,
      "created": 1481037867112,
      "version": 0
   },
   "usernames": [
      "username"
   ]
}]
```