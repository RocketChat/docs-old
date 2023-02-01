---
description: Automatically prune old messages and files across your workspace
---

# Retention Policy

Retention PolicyThis feature adds the ability to set retention policies on channels and globally. Such retention policies can automatically remove old messages and files with custom rules.

## Permissions

The ability to set retention policies depends on two permissions:

`edit-privileged-setting` and&#x20;

`edit-room-retention-policy`

* To set **a global policy**, the `edit-privileged-setting` permission is required.
* To set **a per-channel policy**, the `edit-room-retention-policy` permission is required.

{% hint style="info" %}
If you want to enable channel owners to set their own policies, assign `edit-room-retention-policy` permission to channel owners. By default, it is assigned to administrators only.
{% endhint %}

## Configuration

Retention policies have two levels, global policies (enforced everywhere) and per-channel policies (enforced in specific channels).

To turn on retention policies:

* Navigate to **Administration > Workspace > Settings > Retention Policy**
* Set `Enabled` to `True`.

{% hint style="info" %}
If you wish to use per-channel policies but not a global policy, set all three `Applies to` options to `False` but set the global `Enabled` option to `True`.
{% endhint %}

### Global policies

{% hint style="danger" %}
Tweaking these settings without extreme caution can **destroy** **all message history across your server**. Please read this entire section **before** you turn the feature on.
{% endhint %}

To find the settings for **Global Policies** feature:

* Navigate to **Administration > Workspace > Settings > Retention Policy > Global Policies**

The policy is split up into three parts, a policy for all channels, one for all private groups, and one for all direct messages. Each type has two options:

* **Applies to channels/private groups/direct messages**: establishes whether the global retention policy should apply to this type. For example, if you only wish to prune messages in private groups, set this to `True` for private groups and to `False` for all others.
* **Maximum message age in channels/private groups/direct messages**: establishes how old messages may be in days. For example, to make the policy automatically delete all messages older than 30 days, enter `30`; to make the policy automatically delete all messages older than a year, enter `365`, etc.

Furthermore, three more options allow you to specify how the policy works:

* **Exclude pinned messages**: When set to `True`, pinned messages are not deleted. For example, when you pin a few messages with essential links, these messages stay intact.
* **Only delete files**: When set to `True`, messages are not deleted, but files are. They are replaced by a simple _File removed by automatic prune_ message. When used together with **Exclude pinned messages**, only unpinned files are deleted.
* **Timer Precision**: Establishes how often the deletion script should run. When your policies have a long lifetime, or you simply do not care about the policy's precision, you can lower this to save processing power.

### Per-channel Policies

{% hint style="info" %}
Tweaking these settings without extreme caution can **destroy** **all message history across your server**. Please read this entire section **before** you turn the feature on.
{% endhint %}

To find the settings for this feature:

{% hint style="info" %}
Make sure you have the `edit-room-retention-policy` permission.
{% endhint %}

* Navigate to the Kebab menu of the channel on the top right corner of the channel screen
* Click **Prune Messages**

The following settings are available:

* **Newer than**: Set a date and time and hit **Prune** to prune messages newer than the select moment.
* **Older than**: Set a date and time and hit **Prune** to prune messages older than the select moment.
* **Only prune content from these users (leave empty to prune everyone's content)**: Select users to delete their messages.
*   **Inclusive**: If you check the inclusive checkbox, messages sent on and between **Newer than** and **Older than** dates are deleted (messages are deleted between and including those dates).

    If you don't check the inclusive checkbox, messages between **Newer than** and **Older than** dates are deleted, and the messages sent on those dates are not deleted.
* **Do not prune pinned messages**: If enabled, pinned messages are not deleted. For example, if you pinned a few messages with important links, they stay intact.
* **Do not prune discussion messages**: If enabled, messages in the discussions are not deleted.
* **Do not prune threads:** If enabled, messages in the threads are not deleted.
* **Only remove the attached files, keep messages:** If enabled, messages are not deleted, but files are. They are replaced by a simple _File removed by automatic prune_ message. When used together with **Exclude pinned messages**, only unpinned files are deleted.

## Info Available to Users

Users can see if a channel's messages are going to be pruned by either scrolling to the very top of the message history or opening the channel info. A message is displayed if a policy (global or per-channel) is present. For example, _Messages older than 30 days are automatically pruned here,_ or _Unpinned files older than a year are automatically pruned here_.
