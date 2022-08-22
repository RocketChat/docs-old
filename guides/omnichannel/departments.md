# Departments

An Omnichannel Department is a collection of rooms that can be configured based on a category as needed. These departments can be related directly to the various departments in your company.

When set, [Live Chat](livechat-widget-installation.md)conversations can be directed to a specific department.

{% hint style="info" %}
A typical use case is when you have Live Chat conversations being initiated from different places or pages of your website and you need them to be handled by different departments or groups of knowledge experts.

See this section on how to [assign an agent to a department](agents.md#assign-omnichannel-agent-to-a-department).
{% endhint %}

To access this menu, go to **Avatar Menu  > Omnichannel > Departments**. Here, you can **View**, **Create New**,  **Edit** or **Delete** a department.

## **Create Omnichannel Department**

To create a new Omnichannel department:&#x20;

* Click +**New** on the top right of the screen
* A page for the department details is seen, fill these details and **Save**

![](../../.gitbook/assets/2022-01-01\_15-46-46.png)

1. **Enabled**: Enables your new department.
2. **Name:** Name of the new department.
3. **Description**. An optional field that lets you set the department description
4. **Show on registration page:** Allow your visitor to have the option to choose the department they want to talk to. The option will appear to your customer in the Live Chat widget, as shown below:&#x20;

![Live Chat widget select department](<../../.gitbook/assets/Live Chat widget select department>)

5\. **Email**: Forward your Omnichannel conversations to the email address of your choice, during the hours you are offline.

6\. **Show on offline page**: A radio button if you want your department to show offline during off business hours. If you enable it will appear in the widget, as shown below:

![](<../../.gitbook/assets/11 (1).png>)

7\. **Send this department's Live Chat offline messages to a channel:** Mention the name of the channel you want to direct the offline messages to.

8\. **Max. number of simultaneous chats:** Assign the maximum number of simultaneous chats you want your agent to attend.

9\. **How Long to Wait to Consider Visitor Abandonment?:** Mention the number of seconds you want to wait to consider visitor abandonment.

10\. **Custom message when room is automatically closed by visitor inactivity:** Mention the custom message you want to be displayed when the room is closed automatically by visitor inactivity.

11\. **Waiting queue message:** Mention the custom message you want to be displayed when the user is waiting in the queue.

12\. **List of departments allowed for forwarding:** List the name of departments you would like to forward your department's chat to.

13\. **Fallback department for forwarding:** You can configure fallback departments to receive conversations when the primary department (the one you are creating) is offline. If conversation is not answered due to unavailable agents, it's redirected to another department, thus reducing service response time and consequently increasing customer satisfaction in relation to the service provided.

14\. **Request tag(s) before closing conversation:** Request your agent to set tags for the conversation for later searching purposes if you want.

15\. **Conversation closing tags:** You as an administrator can add some conversation tags for this department.

16\. **Business Hour:** After your new department is created, their assigned business hour will be displayed here.

17\. **Agents:** Assign the agents to this department.

Successfully added agents would be listed, as shown below:

![](<../../.gitbook/assets/2022-01-01\_16-32-28 (1).png>)

18\. Hit **Save** and your newly created department is displayed in the list of departments

{% hint style="info" %}
You can have the following behavior depending on how many departments you have created:

* No departments: all Live Chat agents will receive incoming chats using a round-robin rule.
* One department: all incoming chats will be offered to agents **only** on that department using a round-robin rule.
* More than one department: the visitor will have to choose what department he wants to talk to at registration.
{% endhint %}

## Edit Omnichannel Department

To edit an Omnichannel department:&#x20;

* Click on the said department from the panel
* A panel is opened with all the current details of that department that can be modified

## Delete Omnichannel Department

To delete an Omnichannel department, click on the **delete icon** by the right of the department from the department panel.
