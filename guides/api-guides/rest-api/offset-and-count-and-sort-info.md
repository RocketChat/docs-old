---
description: 'Count, Offset and Sort'
---

# Pagination

Starting in version `0.49`, some of the endpoints support the query parameters `offset`, `count` and `sort`. However, the defaults are different per server due to configuration settings.

## Query Parameter Information

| Parameter | Example | Description | Format |
| :--- | :--- | :--- | :--- |
| `offset` | `50` | Number of items to "skip" in the query, i.e. requests return `count` items, skipping the first `offset` items | Positive integer |
| `count` | `50` | How many items to return. | Integer |
| `sort` | `{"value": -1, "_id": 1}` | List of fields to order by, and in which direction | JSON object, with properties listed in desired order, with values of `1` for ascending, or `-1` for descending. |

## Settings

These are the settings for the REST API which relate to the offset and count. If you need to change them, go to `Administration -> General -> REST API`.

* `API_Default_Count` _\(Default Count\)_ - Defines the default `count` for when the parameter is not provided
* `API_Upper_Count_Limit` _\(Max Record Amount\)_ - Defines ceiling for the `count` and this value will be set if the `count` is higher
* `API_Allow_Infinite_Count` _\(Allow Getting Everything\)_ - Determines whether `0` can be passed into the `count` to allow getting all of the records.

## Example

To limit the results to 5 items and to get the third "_page_", you would provide `count=5` and `offset=10`.

`http://localhost:3000/api/v1/channels.list?count=5&offset=10`

To sort by name descending, and status ascending, you would provide `sort={"name":-1,"status":1}`

`http://localhost:3000/api/v1/users.list?sort={"name":-1,"status":1}`

