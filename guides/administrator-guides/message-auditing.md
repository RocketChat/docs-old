---
permalink: /administrator-guides/message-auditing/
official: true
enterprise: true
---

# Message Auditing Panel

The Message Auditing Panel includes the following features, allowing you or specified users to:

* Review messages between users in the Message Auditing Panel.
* Check details in the Auditing Log about the individuals who used the Message Auditing Panel.

You access the Message Auditing Panel and the Message Auditing Log from the Administration UI ![](../../.gitbook/assets/administrator-ui%20%281%29.png).

This feature is only available with the Enterprise and Gold versions of Rocket.Chat.

![](../../.gitbook/assets/auditing-ui.png)

## Assign Message Auditing Permissions to Specific Users

The Auditor or Auditor Log roles have permissions to use Message Auditing features.

You assign permissions to use the Message Auditing Panel or Auditing Log to such roles as the Admin role.

On the **Permissions** screen in the Administration UI, do the following to assign access:

* For access to the Message Auditing Panel, select the `can-audit` option.
* For access to the Message Auditing Log, select the `can-audit-log` option.

![](../../.gitbook/assets/auditing-roles.png)

## Review Messages in the Message Auditing Panel

* To open the Message Auditing Panel, click **Message Auditing** in the Administration UI.
* To search for a specific message, use the **Message** field.
* To narrow the details of your search, select the **Direct Messages** or **Others** message option.

![](../../.gitbook/assets/auditing-toggle.png)

### Search for Direct Messages

* Enter the information about sender and receiver \(mandatory\).
* Enter the time range \(mandatory\).
* Click **Apply**.

![](../../.gitbook/assets/direct-messages.png)

### Search for Other Message Types

The **Others** search option includes messages sent within a selected time range, in public channels or in private rooms.

* Fill in a room name \(mandatory\).
* Fill in the time range \(mandatory\).
* Click **Apply**.

![](../../.gitbook/assets/auditing-others.png)

### Review Search Results

The Message Auditing Panel returns all messages that match the search values defined in the mandatory fields for each option.

Note that the auditor does not have to be a participant in the room to be able to read the messages. However, the auditor cannot read the encrypted messages of other users if they are not included in the conversation. In this case, Rocket.Chat recommends that you disable message encryption:

* Go to the Administration UI ![](../../.gitbook/assets/administrator-ui%20%282%29.png).
* Click **Administration**.
* Scroll down to **E2E Encryption** on the left-side menu.

![](../../.gitbook/assets/e2e-encryption.png)

## Review the Message Auditing Log

To check the details about who used the Message Auditing Panel and their search results, you must have the `auditor-log` role or the `can-audit-log` permission.

![](../../.gitbook/assets/audit-log.png)

## Check Historical Edits and Deletions

Rocket.Chat recommends the following setting preferences to enable you to view any modified or removed messages.

* Got to the Administration UI ![](../../.gitbook/assets/administrator-ui.png).
* Click **Administration**.
* Scroll down to **Messages** on the left-side menu.

![](../../.gitbook/assets/audit-settings.png)

Make sure to set your message preferences as follows:

* Enable **Allow Message Editing** and **Keep Per Message Editing History** to see a history of all messages and not only the last edit made.
* Disable **Allow Message Deleting**, otherwise messages show only the _message deleted_ status and you cannot see the complete message history.

