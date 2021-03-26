# Get

Get all subscriptions. Please note that the **unread** counter value depends on your settings at the _Administration =&gt; General_ section.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/subscriptions.get` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description | Valid Format\(s\) |
| :--- | :--- | :--- | :--- | :--- |
| `updatedSince` | `2017-11-25T15:08:17.248Z` | Optional | Date and time from which to fetch changes | ISO 8601 datetime. Optional seconds, optional milliseconds, optional timezone, always with colon time separators |

When you provide the `updatedSince` query parameter in the URL then the `update` and `remove` in the response will contain only those updated and removed since this date and time.

## Example Call to get all of the rooms

```bash
curl -H "X-Auth-Token: ijFlJ1yfidXhwEYY284Anoq_iEsOeMMVCupzNhX22tB" \
     -H "X-User-Id: hw5DThnhQmxDWnavu" \
     -H "Content-type: application/json" \
     http://localhost:3000/api/v1/subscriptions.get?updatedSince=2017-11-25T15:08:17.248Z
```

## Example Result

```javascript
{
  "update": [
    {
      "t": "c",
      "ts": "2017-11-25T15:08:17.249Z",
      "name": "general",
      "fname": null,
      "rid": "GENERAL",
      "u": {
        "_id": "EoyAmF4mxx5HxJHJB",
        "username": "rocket.cat",
        "name": "Rocket Cat"
      },
      "open": true,
      "alert": true,
      "unread": 1,
      "userMentions": 1,
      "groupMentions": 0,
      "_updatedAt": "2017-11-25T15:08:17.249Z",
      "_id": "5ALsG3QhpJfdMpyc8"
    }
  ],
  "remove": [],
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.60.0 | Added |

