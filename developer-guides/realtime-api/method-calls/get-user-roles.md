# Get User Roles

This method call is used to get server-wide special users and their roles. You may send an empty list of parameters.

The `result` will be a collection of `user`. The `user` is defined as:

* `username`: The username of the user
* `roles`: The collection of roles the user belongs to \(at least one `role-name` will be present\)
* `_id`: The user id

That information is used to identify key users on the server \(ex.: admins\).

Example call:

```javascript
    {
        "msg": "method",
        "method": "getUserRoles",
        "id": "42",
        "params": []
    }
```

Response:

```javascript
    {
        "msg": "result",
        "id": "42",
        "result": [
            { "username": "username", "roles": [ "role-name" ], "_id": "user-id" },
            ... // more users
        ]
    }
```

