# Configure Livechat

The **Livechat Manager** provides the following configuration options:

## User Management

You can add new Livechat manager users and agents.

To start receiving incoming Livechat sessions, you need to add Livechat agents.

## Departments

You can have the following behavior depending on how many departments you created:

- **No departments**: incoming chats are offered to the agent with the least number of active Livechat sessions, applying the [round robin rule](https://digitalcrm.com/lead-assignment-using-round-robin-in-crm-software/).

- **One department**: all incoming chats are offered **only** to agents in the specified department, applying the round robin rule.

- **More than one department**: the visitor has to choose which department he wants to chat with upon registration.

## Triggers

You can configure how to trigger your Livechat Widget and what it does on your website.

![image](https://cloud.githubusercontent.com/assets/20868078/24811185/50fa9214-1b9b-11e7-86e4-27e2b90dcf99.png)

- **Run only once for each visitor** - if enabled, it runs only once per a browser session, and then only after the client removes his data/clears the chat on his side, and then reloads the page.

- **Name** and **Description** are only visible to the Livechat managers and agents.

- **Condition** - you can choose the time (in seconds) after which the widget shows up on the website, or a certain URL indicating the page on which the widget is triggered to open right away.

## Custom Fields

This feature allows the admin to create custom fields using the Livechat API. The custom fields appear in the UI only on the agent's side, so only the agent can edit them. You can see an example of how to configure custom fields on the [Livechat API page](../../developer-guides/livechat-api/#set-custom-field).

**Note**: Custom fields only work if set through Livechat API as well, so be careful to enter the same names both in the **Admin UI** and the **API script**:

```s
RocketChat(function() {
    this.setCustomField('Weight', '0', false); // you can pass false as the third parameter to not overwrite an already set value
});
```

Place this API call before the </body> closing tag of the website page, right after the Livechat script.

The **Scope** field defines whether the custom field value applies to only one chat session with the same visitor, or only to the specified visitor. In other words:

- If scope set to `Visitor`, the value of the custom field saves once and then appears when the same customer opens a chat.

- If scope set to `Room`, the value of the custom field must be set every time when the same visitor comes, i.e. for each chat room with that visitor.

Depending on the scope, the custom field appears on different places in the room info. The picture below shows the custom field location if the scope is set to `Room`.

![image](administrator-guides\omnichannel-integrations\livechat-widget\livechat-configuration\scope-field.png)

## Installation

Go to **Livechat Manager > Installation**

![image](administrator-guides\omnichannel-integrations\livechat-widget\livechat-configuration\livechat-installation.png)

Then copy the code displayed into the source code of your website. You may modify it to meet your specific requirements.

![image](administrator-guides\omnichannel-integrations\livechat-widget\livechat-configuration\installation-script.png)

Add the script to a respective page. You can have multiple scripts on the same website, for example, if you want to set custom fields to a widget only on a specific page of the website.

**Note:** It is impossible to open multiple Livechat sessions from the same website. If you want your visitor to be able to submit another Livechat request from a different page, they need to send the current session first, and then start a new one on a respective page.

## Appearance

To customize the appearance of your Livechat widget go to **Livechat > Appearance**

![image](https://cloud.githubusercontent.com/assets/51996/20235293/a9c34ca8-a853-11e6-8042-9f742b91938e.png)