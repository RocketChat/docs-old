# Custom Field

## Send a Livechat custom field

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/custom.field` | `no` | `POST` |

## Example payload

```javascript
{
  "token": "iNKE8a6k6cjbqWhWd",
  "key": "address",
  "value": "Rocket.Chat Avenue",
  "overwrite": true
}
```

## Example Call

```bash
curl -X POST \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/livechat/custom.field \
    -d '{"token": "iNKE8a6k6cjbqWhWd", "key": "address", "value": "Rocket.Chat Avenue", "overwrite": true}'
```

## Example Result

```javascript
{
  "field": {
    "key": "address",
    "value": "Rocket.Chat Avenue",
    "overwrite": true
  },
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.70.0 | Added |

## Send an array of Livechat custom fields

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/custom.fields` | `no` | `POST` |

## Example payload

```javascript
{
  "token": "iNKE8a6k6cjbqWhWd",
  "customFields": [{
    "key": "address",
    "value": "Rocket.Chat Avenue",
    "overwrite": true
  }]
}
```

## Example Call

```bash
curl -X POST \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/livechat/custom.fields \
     -d '{"token": "iNKE8a6k6cjbqWhWd", "customFields": [{"key": "address", "value": "Rocket.Chat Avenue", "overwrite": true}]}'
```

## Example Result

```javascript
{
  "fields": [
    {
      "Key": "address",
      "value": "Rocket.Chat Avenue",
      "overwrite": true
    }
  ],
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.70.0 | Added |

## List livechat custom fields

Get a list of Livechat custom fields. It supports the [Offset, Count, and Sort Query Parameters](../../offset-and-count-and-sort-info.md).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/custom-fields` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/livechat/custom-fields
```

## Example Result

```javascript
{
    "customFields": [
        {
            "_id": "address",
            "label": "address",
            "scope": "visitor",
            "visibility": "visible",
            "_updatedAt": "2019-10-03T14:12:47.595Z"
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
| 2.2.0 | Added |

## Get info about a custom field

Get info about a custom field.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/custom-fields/:_id` | `yes` | `GET` |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/livechat/custom-fields/address
```

## Example Result

```javascript
{
    "customField": {
        "_id": "address",
        "label": "address",
        "scope": "visitor",
        "visibility": "visible",
        "_updatedAt": "2019-10-03T14:12:47.595Z"
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.4.0 | Added |

