# Get Permissions

Use this call to get a collection with all the permissions of the server. Each permission will have the roles it applies to.

You may use this information to change your UI according to the permissons a user has (hidding what he can't do for example).

Example call:

```json
{
    "msg": "method",
    "method": "permissions/get",
    "id": "42",
    "params": []
}
```

Response:

```json
{
    "msg": "result",
    "id": "9",
    "result": [
        ... // permissions
    ]
}
```

## The Permisson object

The permission object describes a permisson as:

- `_id`: The permission id
- `roles`: An collection of roles that this permissions applies to
- `_updatedAt`: (Optional) (?)
- `meta`: Metadata about the permission (describe bellow)
- `$loki`: (?)

The `meta` object is defined as:

- `revision`: The revision of the permission
- `created`: The date of the permission creation
- `version`: The permission version
- `updated`: (Optional) The date of the permisson latest update

Example:

```json
{
    "_id": "snippet-message",
    "roles": [
        "owner",
        "moderator",
        "admin"
    ],
    "_updatedAt": { "$date": 1478185758833 },
    "meta": {
        "revision": 3,
        "created": 1478185726811,
        "version": 0,
        "updated": 1478185758863
    },
    "$loki": 66
}
```
