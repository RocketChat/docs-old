---
description: Automatically prune old messages and files across your workspace
---

# Retention Policy

The Retention Policy allows you to automatically remove old messages and files with custom rules on channels and globally.

## Permissions

Retention policies depend on two types of permissions:

* `edit-privileged-setting` : It is required to set a **global** policy.
* `edit-room-retention-policy`: It is required to set a **per-channel** policy.

{% hint style="info" %}
To enable channel owners to set their policies, assign `edit-room-retention-policy` permission to channel owners. By default, it is assigned to administrators only.
{% endhint %}

## Configuration

Retention policies have two levels, global policies (enforced everywhere) and per-channel policies (implemented in specific channels).

To enable retention policies,

* Navigate to **Administration > Workspace > Settings > Retention Policy**
* Toggle on **Enabled.**

### Global policies

{% hint style="danger" %}
Tweaking these settings without extreme caution can **destroy** **all message history across your server**. Please read this entire section **before** you enable this feature.
{% endhint %}

To update the **Global Policies** settings,

* Navigate to **Administration > Workspace > Settings > Retention Policy > Global Policies**

The policy is split into three parts: one for all channels, one for all private groups, and one for all direct messages. Each type has two options:

* **Applies to channels/private groups/direct messages**: Enabling this option applies the global retention policy to this type of message. For example, if you only wish to prune messages in private groups, enable the option for private groups and disable the others.
* **Maximum message age in channels/private groups/direct messages**: This option establishes how old messages may be in days. For example, to make the policy automatically delete all messages older than 30 days, enter `30`; to make the policy automatically delete all messages older than a year, enter `365`, etc.

Furthermore, other options allow you to specify how the policy works:

* **Exclude pinned messages**: If enabled, pinned messages are not deleted. For example, when you pin a few messages with essential links, these messages stay intact.
* **Only delete files**: If enabled, messages are not deleted, but files are. They are replaced by a simple _File removed by automatic prune_ message. When used together with **Exclude pinned messages**, only unpinned files are deleted.
* **Timer Precision**: It establishes how often the deletion script should run. When your policies have a long lifetime or do not care about the policy's precision, you can lower this to save processing power.
* **Do not prune discussion messages:** If enabled, discussion messages are not deleted. All the discussions in your workspace remain intact.

{% hint style="danger" %}
If you don't enable **Do not prune discussion messages,** all your discussion messages will be deleted irrespective of the dates.
{% endhint %}

**Do not prune Threads:** When enabled, threads are not deleted. All the threads in your workspace remain intact.

### Per-channel Policies

{% hint style="info" %}
Tweaking these settings without extreme caution can **destroy** **all message history across your server**. Please read this entire section **before** you turn the feature on.
{% endhint %}

{% hint style="info" %}
Ensure you have the `edit-room-retention-policy` permission.
{% endhint %}

To enable retention policy in a room,&#x20;

* Navigate to the Kebab menu of the channel on the top right corner of the channel screen
* Click **Prune Messages.** Update the options.
  * **Newer than**: Set a date and time to prune messages newer than the select moment.
  * **Older than**: Set a date and time to prune messages older than the select moment.
  * **Only prune content from these users**: Select users to delete their messages. Leave empty to prune everyone's content.
  * **Inclusive**: If you check the inclusive checkbox, messages sent on and between **Newer than** and **Older than** dates are deleted (messages are deleted between and including those dates). If you don't check the inclusive checkbox, messages between **Newer than** and **Older than** dates are deleted, and the messages sent on those dates are not deleted.
  * **Do not prune pinned messages**: Pinned messages are not deleted if enabled. For example, if you pinned a few messages with important links, they stay intact.
  * **Do not prune discussion messages**: If enabled, messages in the discussions are not deleted.
  * **Do not prune threads:** If enabled, messages in the threads are not deleted.
  * **Only remove the attached files, keep messages:** If enabled, messages are not deleted, but files are. They are replaced by a simple _File removed by automatic prune_ message. When used together with **Exclude pinned messages**, only unpinned files are deleted.
* Click **Prune**.

## Info Available to Users

Users can see if a channel's messages will be pruned by either scrolling to the top of the message history or opening the channel info. A message is displayed if a policy (global or per-channel) is present. For example, _Messages older than 30 days are automatically pruned here,_ or _Unpinned files older than a year are automatically pruned here_.
