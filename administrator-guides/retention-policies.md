# Retention Policies

> Please note that this feature will only be available from versions 0.67 and forward.

This feature adds the ability to set retention policies on channels and globally. Such retention policies can automatically remove old messages and files with custom rules.

## Permissions

The ability to set retention policies depends on two permissions, `edit-privileged-setting` and `edit-room-retention-policy`:

* To set **a global policy**, the `edit-privileged-setting` permission is required.
* To set **a per-channel policy**, the `edit-room-retention-policy` permission is required.

If you want to enable channel owners to set their own policies, assign the `edit-room-retention-policy` permission to channel owners - by default it is assigned to admins only.

## Configuration

Retention policies have two levels, global policies \(enforced everywhere\) and per-channel policies \(enforced in specific channels\).

To turn on retention policies, switch `Enabled` to `True`.

> Tip: If you wish to use per-channel policies but not use a global policy, switch all three `Applies to` switches to `False`, but switch the global `Enabled` switch to `True`.

### Global policies

> **Watch out!** Tweaking these settings without utmost care can destroy **all message history across your server**. Please read this entire section **before** turning the feature on.

You can find the settings for this feature in `Retention Policy` in the admin panel, under section `Global Policy`.

The policy is split up in three parts, a policy for all channels, one for all private groups and one for all direct messages. Each type has two options:

* **Applies to channels/private groups/direct messages**: this switch establishes whether the global retention policy should apply to this type. For example, if you only wish to prune messages in private groups, switch this to `True` for private groups, and to `False` for all others.
* **Maximum message age in channels/private groups/direct messages**: this value establishes how old messages may be, in days. For example, to make the policy automatically delete all messages older than 30 days, enter `30` - to make the policy automatically delete all messages older than a year, enter `365`, etc.

Furthermore, there are three more options that allow you to specify how the policy works:

* **Exclude pinned messages**: if this is set to `True`, pinned messages will not be deleted. For example, if you have pinned a few messages with important links, these messages will stay intact.
* **Only delete files**: if this is set to `True`, messages will not be deleted, but files will - they will be replaced by a simple _File removed by automatic prune_ message. When used together with **Exclude pinned messages**, only unpinned files will be deleted.
* **Timer Precision**: this value establishes how often the deletion script should run. If your policies have long lifetimes, or you simply do not care about the precision of the policy, you can lower this to save processing power.

### Per-channel policies

> **Watch out!** Tweaking these settings without utmost care can destroy **all of your channel's message history**. Please read this entire section _before_ turning the feature on.

You can find the settings for this feature in a channel's settings screen, if you have the `edit-room-retention-policy` permission.

The switch `Automatically prune old messages` has three states:

* **Default**: use the global policy if enabled, otherwise do nothing
* **Disabled**: do nothing - no retention policy will be applied to the channel ever
* **Enabled**: use the retention policy described below, instead of any global policy

If you switch `Automatically prune old messages` to `Enabled`, there are a few settings you can tweak to specify how the new policy works:

* **Maximum message age in days**: this value establishes how old messages may be, in seconds. For example, to make the policy automatically delete all messages older than 30 days, enter `30` - to make the policy automatically delete all messages older than a year, enter `365`, etc.
* **Exclude pinned messages**: if this is switched on, pinned messages will not be deleted. For example, if you have pinned a few messages with important links, this message will stay intact.
* **Prune files only, keep messages**: if this is switched on, messages will not be deleted, but files will - they will be replaced by a simple _File removed by automatic prune_ message. When used together with **Exclude pinned messages**, only unpinned files will be deleted.

## Info available to users

Users can see if a channel's messages will be pruned by either scrolling to the very top of the message history, or opening the channel info. A message will be displayed if a policy, \(global or per-channel\) is present, for example: _Messages older than 30 days are automatically pruned here_ or _Unpinned files older than a year are automatically pruned here_.

