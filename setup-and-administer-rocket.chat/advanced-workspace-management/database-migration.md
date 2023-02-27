# Database Migration

As features are added to Rocket.Chat, the database schema may change between versions.&#x20;

Database migration means updating an older schema to a newer one (or vice versa). When you incrementally update your Rocket.Chat version, the database migration is automatic, and you do not have to take any explicit action. Rocket.Chat migrations and thier versions can be found on [GitHub](https://github.com/RocketChat/Rocket.Chat/blob/develop/apps/meteor/server/startup/migrations).

We use migrations to force an updatable version range. It means you cannot upgrade from version three to five because the migrations in between are removed.

{% hint style="info" %}
Rocket.Chat cannot be officially downgraded due to database migrations. However, you can manually roll back migrations separately.
{% endhint %}

### Migration Collection

A migration collection has only one document with the following structure:

```javascript
{"_id": "control","locked":false, "version":19}
```

* &#x20;`_id` : The value is always `control`. It means the collection has only one document to control migration actions.
* &#x20;`locked` : The value is boolean and can either be `true` or `false`. It identifies whether migration is currently happening or not. If  a migration fails, it will be stuck at true.
* &#x20;`version` - The migration version your server is currently at.

**To skip a migration**, set the version field in the migration collection to the next version of the one you want to skip.
