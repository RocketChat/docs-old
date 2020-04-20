# Configure Livechat

The **Livechat Manager** provides the following configuration options:

## User Management

You can add new LiveChat manager users and agents.

To start receiving incoming LiveChat sessions, add LiveChat agents.

## Departments

Configure the following behavior depending on how many departments you create. Note that agents in environments with a single or no department receive calls that are equally distributed, using the [round robin rule](https://digitalcrm.com/lead-assignment-using-round-robin-in-crm-software/):

* **No departments**: agents with the least number of active LiveChat sessions receive the incoming chats.

* **One department**: only agents in the specified department receive the incoming chats.

* **More than one department**: upon registration, visitors choose the department with which they want to chat.

## Triggers

You can configure triggers for your LiveChat widget to enable the following settings on your website:

![image](https://cloud.githubusercontent.com/assets/20868078/24811185/50fa9214-1b9b-11e7-86e4-27e2b90dcf99.png)

* **Run only once for each visitor** where the widget runs only once per browser session, and then only after clients remove their data or clear the chat on their side, and then reload the page.

* **Name** and **Description** are only visible to the LiveChat managers and agents.

* **Condition** where you can choose the time (in seconds) after which the widget shows up on the website or specify a URL to immediately open the page on which the widget is triggered.

## Custom Fields

With this feature, administrators can create custom fields using the LiveChat API.

Custom fields appear in the UI only on the agent's side, so only agents can edit them.

For an example of how to configure custom fields, see the [Livechat API page](../../developer-guides/livechat-api/#set-custom-field).

**Note**: Custom fields only work if set through LiveChat API as well, so be careful to enter the same names both in the **Admin UI** and the **API script**:

```s
RocketChat(function() {
    this.setCustomField('Weight', '0', false); // you can pass false as the third parameter to not overwrite an already set value
});
```

Place this API call before the </body> closing tag of the website page, right after the Livechat script.

The **Scope** field defines whether the custom field value applies to only one chat session with the same visitor, or only to the specified visitor. In other words:

* If scope set to `Visitor`, the value of the custom field saves once and then appears when the same customer opens a chat.

* If scope set to `Room`, the value of the custom field must be set every time when the same visitor comes, i.e. for each chat room with that visitor.

Depending on the scope, the custom field appears on different places in the room info. The picture below shows the custom field location if the scope is set to `Room`.

![image](administrator-guides\omnichannel-integrations\livechat-widget\livechat-configuration\scope-field.png)

## Installation

Go to **Livechat Manager > Installation**.

![image](administrator-guides\omnichannel-integrations\livechat-widget\livechat-configuration\livechat-installation.png)

Then, copy the code displayed into your website's source code. Modify it to meet your specific requirements.

![image](administrator-guides\omnichannel-integrations\livechat-widget\livechat-configuration\installation-script.png)

Add the script to a respective page. You can have multiple scripts on the same website, for example, if you want to set custom fields to a widget only on a specific page of the website.

**Note:** You cannot open multiple LiveChat sessions from the same website. If you want your visitor to submit another LiveChat request from a different page, they need to send the current session first, and then start a new one on a respective page.

## Appearance

To customize the appearance of your LiveChat widget, go to **Livechat > Appearance**. Complete the fields on the **Appearance** page. Click **Save** to apply your customizations.

![image](https://cloud.githubusercontent.com/assets/51996/20235293/a9c34ca8-a853-11e6-8042-9f742b91938e.png)