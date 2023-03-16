# Using the Google Drive App

When the Google Drive App is installed, you can perform various actions, including creating files, sharing files, editing file permissions, etc.&#x20;

## List Google Drive Files

To see a list of files on your connected Google Drive account, open **Google Drive** from the room kebab menu or use the slash command `/google-drive files`.

* A list of all the files in your Drive is displayed, including those you created and shared with you. These files are listed with their respective `file name`, `file type, Last modified date` and `Owner.`
* You can search for a specific file using the search bar.
* You can filter the type of files displayed by selecting the file type.
* The list of files can be sorted in ascending or descending manner.

## Create a New Google Drive File

To create a new file on your connected Google Drive account, open **Google Drive** from the room kebab menu and click **+New** or use the slash command `/google-drive create`.

* Fill in the **File name,** select the **File type,** and click **Create.**
* The `google-drive.bot` sends you a message with a link to the new file you just created

## Open Google Drive Files

Before sharing a file, you can open it to view and verify its content.

To open a file in the browser,&#x20;

* From the list of files, click the **Kebab menu** across the file, and select **Open in browser.** It opens the file on your browser's tab.

## Share Google Drive File

You can share files in your Google Drive within any[ room](../../../../use-rocket.chat/user-guides/rooms/#types-of-rooms-in-rocket.chat) in your workspace.

To share a file,

* From the list of files, click the **Kebab menu** across the file, and **Share in room.** This shares a link to the file in that room.

{% hint style="info" %}
Clicking on **Details and sharing** opens up a modal to edit the [sharing permissions](google-drive-app-file-actions.md#file-permissions) of the file.&#x20;
{% endhint %}

## View File Information

To view file details,

* From the list of files, click the **Kebab menu** across the file, and select **File Information.** This shares a link to the file in that room.
* It returns the following details of the file:
  * **File name:** The name of the file
  * **Manage Access**: Where to set the [file-sharing permissions](google-drive-app-file-actions.md#file-permissions).
  * **Type**: The file type.
  * **Size**: The size occupied by the file in Google Drive.
  * **Location**: The location of the file in Drive.
  * **Owner(s)**: List of people owning the file.
  * **Modified**: The last modified date of the file.
  * **Created**: When the file was created.

### File Permissions

Managing file permissions allows you to restrict the action anyone can perform on a file. A file's permission can be set when [sharing the file](google-drive-app-file-actions.md#share-google-drive-file) or viewing the [File information](google-drive-app-file-actions.md#view-file-information).

* The various permissions you can set to a file include the following:
  * **Share to room members and allow them to view**: Restricts viewing of the file only by the member(s) of the room.
  * **Share to room members and allow them to comment**: All room members can view and comment on the file.
  * **Share to room members and allow them to edit**: Gives edit access to the member(s) of the room.
  * **Share to anyone at Organization and allow them to view**: Allows anyone in your organization to view the file.
  * **Share to anyone at Organization and allow them to comment**: Allows anyone in your organization to view and comment on the file.
  * **Share to anyone at Organization and allow them to edit**: Allows anyone in the organization to edit the file.
  * **Share to anyone with the link and allow them to view**: Allows anyone having the link to view the file.
  * **Share to anyone with the link and allow them to comment**: Allows anyone having the link to comment on the file.
  * **Share to anyone with the link and allow them to edit**: Allows anyone having the link to edit the file.

## Delete Google Drive File

{% hint style="info" %}
You can only delete files you created.
{% endhint %}

To delete a file,&#x20;

* From the list of files, click the **Kebab menu** across the file you want to delete.
* Select **Delete file,** then **** click **Delete forever.**
