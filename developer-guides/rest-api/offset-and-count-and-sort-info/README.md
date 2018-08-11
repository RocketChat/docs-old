# Offset and Count Information

Starting in version `0.49`, some of the endpoints support the query parameters `offset`, `count` and `sort`.
However, the defaults are different per server due to configuration settings.

## Query Parameter Information

- `offset` - number of items to "skip" in the query, is zero based so it starts off at `0` being the first item.
- `count` - the number of items to "get" in the query, is one based so to get only one you would pass in `1`. If you want to get all of the records, then pass in `0` but this will only work if the setting (see below) allows it.
- `sort` - specify the order in which the results should be returned. Sort hash uses attribute name for key and value of `1` for asc, `-1` for desc.

## Settings

These are the settings for the REST API which relate to the offset and count. If you need to change them, go to `Administration -> General -> REST API`.

- `API_Default_Count` _(Default Count)_ - Defines the default `count` for when the parameter is not provided
- `API_Upper_Count_Limit` _(Max Record Amount)_ - Defines ceiling for the `count` and this value will be set if the `count` is higher
- `API_Allow_Infinite_Count` _(Allow Getting Everything)_ - Determines whether `0` can be passed into the `count` to allow getting all of the records.

## Example

To limit the results to 5 items and to get the third "_page_", you would provide `count=5` and `offset=10`.

`http://localhost:3000/api/v1/channels.list?count=5&offset=10`

To sort by name descending, and status ascending, you would provide `sort={"name":-1,"status":1}`

`http://localhost:3000/api/v1/users.list?sort={"name":-1,"status":1}`
