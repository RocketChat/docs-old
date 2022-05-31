# Departments

If you want the omnichannel conversations to be directed to different departments, you can set the departments up in your enterprise Rocket.Chat workspace. For example, you may have livechats coming from various pages of your website, and you might want them to be handled by respective departments.

To access **Departments** settings:

1. Go to the dots menu and hit **Omnichannel**. Omnichannel settings will open up.

![](../../.gitbook/assets/2022-01-01\_14-31-40.png)

2\. Hit **Departments.**

![](../../.gitbook/assets/2022-01-01\_14-46-42.png)

### **Add a new Department**:

Click +**New** on the top right of the screen.

The new department's settings page will appear, as shown below:

![](<../../.gitbook/assets/2022-01-01\_15-46-46 (4).png>)

1. **Enable** your new department.
2. **Name** your new department.
3. Type in the **Description**. It's optional.
4. **Show on registration page:** Allow your visitor to have the option to choose the department they want to talk to. The option will appear to your customer in the livechat widget, as shown below:

![](<../../.gitbook/assets/8 (1).png>)

5\. Forward your omnichannel conversations to the **Email** address of your choice, during the hours you are offline.

6\. Enable the **Show on offline page** radio button if you want your department to show offline during off business hours. If you enable it will appear in the widget, as shown below:

![](<../../.gitbook/assets/11 (1).png>)

7\. **Send this department's Livechat offline messages to a channel:** Mention the name of the channel you want to direct the offline messages to.

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

![](../../.gitbook/assets/2022-01-01\_16-32-28.png)

18\. Hit **Save**.

Your newly created department is displayed in the list of departments, as shown below:

![](<../../.gitbook/assets/2022-01-01\_16-34-21 (3) (1).png>)

You can have the following behavior depending on how many departments you have created:

* No departments: all Livechat agents will receive incoming chats using a round-robin rule.
* One department: all incoming chats will be offered to agents **only** on that department using a round-robin rule.
* More than one department: the visitor will have to choose what department he wants to talk to at registration.
