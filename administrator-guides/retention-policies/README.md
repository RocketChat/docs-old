# Retention Policies

This feature adds the ability to set retention policies on channels and globally. Such retention policies can automatically remove old messages and files with custom rules.

**Note**: This feature is only available from version 0.67 or later.

## Permissions

The ability to set retention policies depends on two permissions: `edit-privileged-setting` and `edit-room-retention-policy`:

- To set __a global policy__, the `edit-privileged-setting` permission is required
- To set __a per-channel policy__, the `edit-room-retention-policy` permission is required

If you want to enable channel owners to set their own policies, assign the `edit-room-retention-policy` permission to channel owners - by default it is assigned to Admins only.

## Configuration

Retention policies have two levels, global policies (enforced everywhere) and per-channel policies (enforced in specific channels).

To turn on retention policies, set `Enabled` to `True`.

**Note**: If you wish to use per-channel policie,s but not a global policy, set all three `Applies to` options to `False`, but set the global `Enabled` option to `True`.

### Global policies

**Note**: Tweaking these settings without extreme caution can destroy __all message history across your server__. Please read this entire section __before__ you turn the feature on.

You can find the settings for this feature in `Retention Policy` in the Admin panel, under the `Global Policy` section.

The policy is split up in three parts, a policy for all channels, one for all private groups, and one for all direct messages. Each type has two options:

- __Applies to channels/private groups/direct messages__: establishes whether the global retention policy should apply to this type. For example, if you only wish to prune messages in private groups, set this to `True` for private groups, and to `False` for all others.
- __Maximum message age in channels/private groups/direct messages__: establishes how old messages may be, in days. For example, to make the policy automatically delete all messages older than 30 days, enter `30`; to make the policy automatically delete all messages older than a year, enter `365`, etc.

Furthermore, there are three more options that allow you to specify how the policy works:

- __Exclude pinned messages__: when set to `True`, pinned messages are not deleted. For example, when you pin a few messages with important links, these messages stay intact.
- __Only delete files__: when set to `True`, messages are not deleted, but files are - they are replaced by a simple _File removed by automatic prune_ message. When used together with __Exclude pinned messages__, only unpinned files are deleted.
- __Timer Precision__:  establishes how often the deletion script should run. when your policies have long lifetimes, or you simply do not care about the precision of the policy, you can lower this to save processing power.

### Per-channel Policies

**Note**: Tweaking these settings without extreme caution can destroy __all message history across your server__. Please read this entire section __before__ you turn the feature on.

Find the settings for this feature in the `Settings` screen of a channel, if you have the `edit-room-retention-policy` permission.

The `Automatically prune old messages` option has three states:

- __Default__: uses the global policy if enabled, otherwise do nothing
- __Disabled__: does nothing; the retention policy never applies to the channel
- __Enabled__: uses the retention policy described below, instead of any global policy

If you set `Automatically prune old messages` to `Enabled`, there are a few settings you can tweak to specify the new policy:

- __Maximum message age in days__: establishes how old messages may be, in seconds. For example, to make the policy automatically delete all messages older than 30 days, enter `30`; to make the policy automatically delete all messages older than a year, enter `365`, etc.
- __Exclude pinned messages__: if enabled, pinned messages are not deleted. For example, if you pinned a few messages with important links, they stay intact.
- __Prune files only, keep messages__: if enabled, messages are not be deleted, but files are; they are replaced by a simple _File removed by automatic prune_ message. When used together with __Exclude pinned messages__, only unpinned files are deleted.

## Info Available to Users

Users can see if the messages of a channel will be pruned by either scrolling to the very top of the message history, or opening the channel info. A message is displayed if a policy, (global or per-channel) is present, for example: _Messages older than 30 days are automatically pruned here_ or _Unpinned files older than a year are automatically pruned here_.
