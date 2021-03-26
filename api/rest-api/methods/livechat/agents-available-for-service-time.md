---
description: Return the list of agents and their available time for the provided time frame
---

# Agents available for service time

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `api/v1/livechat/analytics/agents/available-for-service-history` | `YES` | `GET` |

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
curl --location --request GET 'http://localhost:3000/api/v1/livechat/analytics/agents/available-for-service-history?start=2020-09-09T00:11:22.345Z&end=2020-09-10T23:59:22.345Z' \
--header 'X-Auth-Token: myauth-token' \
--header 'X-User-Id: myuser-name'
```

### Result

```javascript
{
    "agents": [
        {
            "availableTimeInSeconds": 102117,
            "username": "andres.mauricio"
        },
        {
            "availableTimeInSeconds": 280,
            "username": "bruna.martins"
        },
        {
            "availableTimeInSeconds": 40242,
            "username": "marina"
        },
        {
            "availableTimeInSeconds": 1,
            "username": "rogerio"
        }
    ],
    "count": 4,
    "offset": 0,
    "total": 4,
    "success": true
}
```

### Change Log

