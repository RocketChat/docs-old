# Prune Messages from a Discussion

If you are a server admin, or your admin has given you the **clean-discussion-history** permission, the **prune messages** option allows you to delete messages from a discussion swiftly.

_Note: Messages and files deleted with this option are deleted forever and cannot be recovered. Be careful and double-check your arguments before pressing Prune._

Use the following parameters to delete specific messages:

* `Newer than`: Deletes all messages posted **after** a particular date.
* `Older than`: Deletes all messages posted **before** a particular date.

Fill dates for both the `Newer than` and `Older than` fields to delete all messages.

* `Users`: Allows you to specify any users to delete the content. When filled with a username, that user's messages deleted.

Refine the parameters above with the following options. Check each to enable:

* **Inclusive**: Deletes all messages that land on the exact start/end times you have specified in the `Newer than` and `Older than` fields.
* **Exclude pinned messages**: Do **not** delete pinned messages.
* **Only remove the attached files, keep messages**: Removes files but not the messages themselves
