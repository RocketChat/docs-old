# Retention Policies

> Please note that this feature will only be available from versions 0.67 and forward.

This feature adds the ability to set retention policies on channels and globally. Such retention policies can automatically remove old messages and files with custom rules.

## Permissions

The ability to set retention policies depends on two permissions, `edit-privileged-setting` and `edit-room-retention-policy`:

- To set __a global policy__, the `edit-privileged-setting` permission is required.

- To set __a per-channel policy__, the `edit-room-retention-policy` permission is required.

- To __make a per-channel policy override a global policy__, or to __disable the global policy for a channel__, the `edit-privileged-setting` permission is required.

If you want to enable channel owners to set their own policies, assign the `edit-room-retention-policy` permission to channel owners.

## Configuration

Retention policies have two levels, global policies (enforced everywhere) and per-channel policies (enforced in specific channels).

### Global policies

> __Watch out!__ Tweaking these settings without utmost care can destroy __all message history__. Please read this entire section __before__ turning the feature on.

You can find the settings for this feature in `Retention Policy` in the admin panel.

To turn on the global policy, switch `Enabled` to `True`.

The policy is split up in three parts, a policy for all channels, for all private groups and for all direct messages. Each type has two options:

- __Applies to channels/private groups/direct messages__: this switch establishes whether the global retention policy should apply to this type. For example, if you only wish to prune messages in private groups, switch this to `True` for private groups, and to `False` for all others.

- __Maximum message age in channels/private groups/direct messages__: this value establishes how old messages may be, in seconds. For example, to make the policy automatically delete all messages older than 30 days, enter `2592000` - to make the policy automatically delete all messages older than a year, enter `31536000`, etc... You can also set this to a very short time (for example, `3600` for 1 hour) to remove messages really quickly.

Furthermore, there are three more options that allow you to specify how the policy works:

- __Exclude pinned messages__: if this is set to `True`, pinned messages will not be deleted. For example, if you have pinned a few messages with important links, this message will stay intact.

- __Only delete files__: if this is set to `True`, messages will not be deleted, but files will - they will be replaced by a simple _File removed by automatic prune_ message. When used together with __Exclude pinned messages__, only unpinned files will be deleted.

- __Timer Precision__: this value establishes how often the deletion script should run. If your policies have long lifetimes, or you simply do not care about the precision of the policy, you can lower this to save processing power.

### Per-channel policies

> __Watch out!__ Tweaking these settings without utmost care can destroy __your channel's message history__. Please read this entire section __before__ turning the feature on.

You can find the settings for this feature in a channel's settings screen.

To turn on the per-channel policy, switch `Automatically prune old messages` on.

There are a few settings you can tweak to specify how the policy works:

- __Maximum message age in seconds__: this value establishes how old messages may be, in seconds. For example, to make the policy automatically delete all messages older than 30 days, enter `2592000` - to make the policy automatically delete all messages older than a year, enter `31536000`, etc... You can also set this to a very short time (for example, `3600` for 1 hour) to remove messages really quickly.

- __Exclude pinned messages__: if this is switched on, pinned messages will not be deleted. For example, if you have pinned a few messages with important links, this message will stay intact.

- __Prune files only, keep messages__: if this is switched on, messages will not be deleted, but files will - they will be replaced by a simple _File removed by automatic prune_ message. When used together with __Exclude pinned messages__, only unpinned files will be deleted.

#### Overriding global policies

If a global policy is set, you may normally only make a policy __stricter__ than the global one. For example:

- If the global policy's maximum message age is set to 30 days, you may only __lower__ it, not extend it (setting it to 7 days would work, but setting it to 60 would still delete messages after 30 days)

- If the global policy is __not__ set to exclude pinned messages, switching on `Exclude pinned messages` will do nothing.

- If the global policy is __not__ set to only remove files, switching on `Prune files only, keep messages` will do nothing.

To circumvent this, you can switch on `Override global retention policy`. This will allow you to set a policy more lax than the one set globally. However, to switch this on, the `edit-privileged-setting` permission is required.

This can also be used to disable all policies for a channel - if you switch on `Override global retention policy`, and turn `Automatically prune old messages` __OFF__, there will be no policy present on this channel. This is great for announcement or info channels, or simply very slow channels that do not benefit from any sort of pruning.

## Info available to users

Users can see if a channel's messages will be pruned by either scrolling to the very top of the message history, or opening the channel info. A message will be displayed if a policy, (global or per-channel) is present, for example: _Messages older than 30 days are automatically pruned here_ or _Unpinned files older than a year are automatically pruned here_.