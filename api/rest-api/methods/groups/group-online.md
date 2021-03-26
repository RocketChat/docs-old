---
description: >-
  Lists all online users of a group if the group's id is provided, otherwise it
  gets all online users of all groups. It supports the Query Parameters only.
---

# Group Online

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/groups.online` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `query` | `{"_id":"5HmCfpoB7jp2uibTC"}` | Optional | See [Query Parameter](https://github.com/RocketChat/docs/blob/aeb4dd8de5017b7cd9c9d9367a0e2155f911ba5a/api/rest-api/query-and-fields-info.md) |

## Example Call

```text
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
http://localhost:3000/api/v1/groups.online
```

## Example Result

```text
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

This example shows how to filter using group's id.

```text
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
http://localhost:3000/api/v1/groups.online?query={"_id": "5HmCfpoB7jp2uibTC"}
```

## Query Example Result

```text
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

