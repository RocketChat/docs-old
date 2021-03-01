# Channel Online

Lists all online users of a channel if the channel's id is provided, otherwise it gets all online users of all channels. It supports the [Query Parameters only](../../query-and-fields-info.md#query-example).

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/channels.online` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `query` | `{"_id":"5HmCfpoB7jp2uibTC"}` | Optional | See [Query Parameter](../../query-and-fields-info.md) |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
http://localhost:3000/api/v1/channels.online
```

## Example Result

```javascript
{
  "online": [
    {
      "_id": "47cRd58HnWwpqxhaZ",
      "username": "test"
    },
    {
      "_id": "BsxzC22xQ43taWdff",
      "username": "uniqueusername"
    }
  ],
  "success": true
}
```

## Query Example Call

This example shows how to filter using channel's id.

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
http://localhost:3000/api/v1/channels.online?query={"_id": "5HmCfpoB7jp2uibTC"}
```

## Query Example Result

```javascript
{
  "online": [
    {
      "_id": "47cRd58HnWwpqxhaZ",
      "username": "test"
    }
  ],
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.52.0 | Added |

