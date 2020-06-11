# Office Hours

Get Livechat office hours

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/office-hours` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/livechat/office-hours
```

## Example Result

```javascript
{
    "officeHours": [
        {
            "_id": "A7gaBDnbGen3qFqtx",
            "day": "Monday",
            "start": "08:00",
            "finish": "20:00",
            "code": 1,
            "open": true,
            "_updatedAt": "2019-10-04T13:50:04.010Z"
        },
        {
            "_id": "DjjRM49xwZ3LMraSC",
            "day": "Tuesday",
            "start": "08:00",
            "finish": "20:00",
            "code": 2,
            "open": true,
            "_updatedAt": "2019-10-04T13:50:04.023Z"
        },
        {
            "_id": "zx6vTXginatNnbWc2",
            "day": "Wednesday",
            "start": "08:00",
            "finish": "20:00",
            "code": 3,
            "open": true,
            "_updatedAt": "2019-10-04T13:50:04.038Z"
        },
        {
            "_id": "YWx7a3ebA5KeB9uNW",
            "day": "Thursday",
            "start": "08:00",
            "finish": "20:00",
            "code": 4,
            "open": true,
            "_updatedAt": "2019-10-04T13:50:04.048Z"
        },
        {
            "_id": "jw25hqfWnH3XvvxPm",
            "day": "Friday",
            "start": "08:00",
            "finish": "20:00",
            "code": 5,
            "open": true,
            "_updatedAt": "2019-10-04T13:50:04.060Z"
        },
        {
            "_id": "hLvF69wFf49AYYF6D",
            "day": "Saturday",
            "start": "08:00",
            "finish": "20:00",
            "code": 6,
            "open": false,
            "_updatedAt": "2019-10-04T13:50:04.071Z"
        },
        {
            "_id": "QHRZeuwXNPYXdoaJN",
            "day": "Sunday",
            "start": "08:00",
            "finish": "20:00",
            "code": 0,
            "open": false,
            "_updatedAt": "2019-10-04T13:50:04.093Z"
        }
    ],
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.2.0 | Added |

