# Database Migration

As features are added to Rocket.Chat, the database schema may change between versions.

The action of updating an older schema to a newer one (or vice versa) is called database migration.

When you incrementally update Rocket.Chat versions, database migration is automatic and you do not have to take any explicit action.

However, from time to time, you may have need to skip multiple versions in your Rocket.Chat upgrades.

Database migration may fail in these scenarios.

A typical failure message is similar to:

```bash
|                    Your database migration failed:                   |
|        Object [object Object] has no method 'addUsersToRoles'        |
(...)
|                   This Rocket.Chat version: 0.39.0                   |
|                    Database locked at version: 18                    |
|                      Database target version: 58                     |
```

As an example, the above migration is locked and stuck on 18.  We need a target of 19 before migration to 58.

One way to force migration is to manually unlock the migration in mongo and also increase database version to the target version (19).

```js
use rocketchat
db.migrations.update({_id: 'control'},{$set:{locked:false,version:19}})
```

Restart Rocket.Chat and the migration should succeed now to the latest version.

Note that certain new values that are vital to Rocket.Chat operations may remain unpopulated when you skip versions.

For example, you may have to manually apply roles to users.
