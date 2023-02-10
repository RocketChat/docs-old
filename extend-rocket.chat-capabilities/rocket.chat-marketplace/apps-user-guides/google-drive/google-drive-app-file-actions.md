# Google Drive App File Actions

With the Google Drive app [installed](google-drive-app-setup.md) and [authorized](authorize-and-connect-with-google-drive-app.md), you can now

* [See a list of files you have in Drive](google-drive-app-file-actions.md#list-google-drive-files)
* [Open up files in the browser](google-drive-app-file-actions.md#open-google-drive-files)
* [Create files](google-drive-app-file-actions.md#create-a-new-google-drive-file)
* [Share files in rooms](google-drive-app-file-actions.md#undefined)
* [View file details and edit permissions](google-drive-app-file-actions.md#google-drive-file-details-and-permissions)

## List Google Drive Files

To see a list of files on the account connected to the Google Drive app you can do that in either of the two ways

1. Opening **Google Drive** from the contextual bar
2. Using the slash command `/google-drive files`

<figure><img src="../../../../.gitbook/assets/Google Drive App List files" alt=""><figcaption><p>Google Drive App List files</p></figcaption></figure>

A list of all the files in your Drive is displayed here including those you created and the ones shared with you.

Files are listed with their respective `file name`, `Owner`, `file type` and `Last modified date`

You can search files using the search bar or filter what type of files should be shown.

## Open Google Drive Files

You have the ability to open up files in your browser directly from Rocket.Chat. Take for example before sharing a file, you may want to open the file first to view and verify its content.

To open a file in the browser, click the **Kebab menu** across the file then select **Open in browser.** This will open the file on your browser's tab

<figure><img src="../../../../.gitbook/assets/Google Drive App Open file in browser" alt=""><figcaption><p>Google Drive App Open file in browser</p></figcaption></figure>

## Create a New Google Drive File

* You can create a new file directly within Rocket.Chat by any of the two means:&#x20;
  1. Clicking on **+New** from the opened contextual bar
  2. Using the slash command `/google-drive create`

This opens up a modal, fill in the **File name** and select the **File type** then **Create**

<figure><img src="../../../../.gitbook/assets/Create new Google Drive file " alt=""><figcaption><p>Create new Google Drive file </p></figcaption></figure>

* The `google-drive.bot` sends you a message with a link to the new file you just created

<figure><img src="../../../../.gitbook/assets/Google Drive new file link" alt="Google Drive new file link"><figcaption><p>Google Drive new file link</p></figcaption></figure>

## Share Google Drive File

You have the ability to share files in your Google Drive within any [Rocket.Chat room](../../../../use-rocket.chat/user-guides/rooms/#types-of-rooms-in-rocket.chat).

To share a file,

* Open Google Drive from the contextual bar or using the slash command `/google-drive files` in the room you want the file to be shared.
* Search using the search bar or navigate to the file to share
* Click the **Kebab menu** across the file then select **Share in room**

<figure><img src="../../../../.gitbook/assets/Google Drive share file in room" alt=""><figcaption><p>Google Drive share file in room</p></figcaption></figure>

* A link to the file is sent. Clicking on **Details and sharing** opens up a modal to edit the sharing permissions of the file

<figure><img src="../../../../.gitbook/assets/Google Drive shared file link" alt=""><figcaption><p>Google Drive shared file link</p></figcaption></figure>

Learn more about file details and permissions below.

## Google Drive File Details and permissions

### View File Information

To view file details,

* Open Google Drive from the contextual bar or using the slash command `/google-drive files`&#x20;
* Search for the file name using the search bar or navigate and locate the file
* Click the **Kebab menu** across the file then select **File information**

<figure><img src="../../../../.gitbook/assets/Google Drive file information.png" alt=""><figcaption><p>Google Drive file information</p></figcaption></figure>

* Information about the files can be seen

<figure><img src="../../../../.gitbook/assets/Google Drive see file information.png" alt=""><figcaption><p>Google Drive see file information</p></figcaption></figure>

* You see the following details about the file
  * **File name:** The name of the file
  * **Manage Access**: Where to set the file sharing permissions, [see this section](google-drive-app-file-actions.md#file-permissions)
  * **Type**: The file type
  * **Size**: The size occupied by the file in Google Drive
  * **Location**: The file location in Drive
  * **Owner(s)**: List of people owning the file
  * **Modified**: The last modified date of the file
  * **Created**: When the file was created

### File Permissions

Managing file permissions lets you set restrictions on the action anyone can perform on a file.

A file's permission can be set when [sharing the file](google-drive-app-file-actions.md#share-google-drive-file) or viewing the [File information](google-drive-app-file-actions.md#view-file-information)

These are the various permissions you can set to a file

<figure><img src="../../../../.gitbook/assets/Google Drive file set permissions.png" alt=""><figcaption><p>Google Drive file set permissions</p></figcaption></figure>

* These are the various permissions you can set:
  * **Share to room members and allow them to view**: This will restrict viewing of the file only by member(s) of the room
  * **Share to room members and allow them to comment**: This will give all the member(s) of the room access to view and comment on the file
  * **Share to room members and allow them to edit**: Gives access to the member(s) of the room to be able to edit the file
  * **Share to anyone at Organization and allow them to view**: Anyone in your organization can view the file
  * **Share to anyone at Organization and allow them to comment**: Anyone in the organization can view and comment on the file
  * **Share to anyone at Organization and allow them to edit**: Anyone in the organization can edit the file
  * **Share to anyone with the link and allow them to view**: This will make anyone with the link to be able to view
  * **Share to anyone with the link and allow them to comment**: Anyone having the link can comment on the file
  * **Share to anyone with the link and allow them to edit**: Anyone having the link can edit the file
