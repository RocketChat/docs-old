---
description: Gives the total of transferred chats by department
---

# Total of transferred chats by department

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `api/v1/livechat/analytics/departments/total-transferred-chats` | `YES` | `GET` |

### Headers

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `X-User-Id` | `myuser-name` | Required | Your username hash \(returned after you log in through the API\) |
| `X-Auth-Token` | `myauth-token` | Required | Your token \(returned after you log in through the API\) |

### Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `start` | `2020-09-09T00:11:22.345Z` | Required | start date |
| `end` | `2020-09-10T23:59:22.345Z` | Required | end date |

#### Notes

* \*\* The API will return a blank page if the correct headers are not sent

### Example Call

```bash
curl --location --request GET 'http://localhost:3000/api/v1/livechat/analytics/departments/total-transferred-chats?start=2020-02-12T00:11:22.345Z&end=2020-02-18T23:59:22.345Z' \
--header 'X-Auth-Token: myauth-token' \
--header 'X-User-Id: myuser-name'
```

### Result

```javascript
{
    "departments": [],
    "count": 0,
    "offset": 0,
    "total": 0,
    "success": true
}
```

### Change Log

