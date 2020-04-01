# Monitors

The monitor role is designed for a person assigned to supervise the specified department or departments, without receiving permissions to manage the omnichannel itself, which makes the role different from the livechat manager.

The Monitor role is assigned by an admin or a livechat manager (this is defined by the permissions) either:

- through **Livechat Settings**:
[image]administrator-guides\omnichannel-integrations\livechat-widget\livechat-enterprise\monitor-role\edit-monitor.png]

- or through editing a user under **Administration > Users > Edit**:
[image](administrator-guides\omnichannel-integrations\livechat-widget\livechat-enterprise\monitor-role\edit-monitor.png)

## Units

Unit is a selection of departments (or a single department) to be monitored by specific monitors.

This is the best alternative for scenarios when there are several departments running and you want a head of a department to be able to monitor the Livechat activity for their relevant department.

This way the monitor is able to see the chat list, agents, analytics, add or remove agents, but not to see all the irrelevant Livechat settings or manage  other chats.

[image](administrator-guides\omnichannel-integrations\livechat-widget\livechat-enterprise\monitor-role\edit-units.png])

- **Visibility** allows you to select the unit to be public or private. Note that when public, monitors from other units can see the chat rooms of your unit in their list of chat rooms. If you want the list of chat rooms to be only visible to the monitor assigned to this unit, make it private.

For example, we created two units named after the relevant departments: _Support_ and _Customer Success_.

This is how the chat list look likes if our units (_Customer Success and Support)) are both public, to one of the monitors who is only assigned to one unit:

[image](administrator-guides\omnichannel-integrations\livechat-widget\livechat-enterprise\monitor-role\public-unit.png)

And this is how the chat list looks like when one unit (_Customer Success_) is set private, to the sumonitor who  assigned only to the _Support_ unit:

[image](administrator-guides\omnichannel-integrations\livechat-widget\livechat-enterprise\monitors-units\private-unit.png)

- **Monitors** allows you to add any valid user to be a monitor with access to Livechat rooms, department settings, working hours. Monitors can manage Livechat and agents. Unless the users have admin rights or specific permissions granted, they cannot manage the appearance, routing rules and other omnichannel configurations.

- **Selected Monitors** shows the monitors assigned to this unit.

- **Selected Departments** show the  departments added to this unit and assigned to the specified supervisors. To  add more departments, select from the list of **Available Departments**.
