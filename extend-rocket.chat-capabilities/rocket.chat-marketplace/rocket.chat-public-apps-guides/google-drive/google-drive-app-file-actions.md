# Google Drive App File Actions

With the Google Drive app [installed](google-drive-app-setup.md) and [authorized](authorize-and-connect-with-google-drive-app.md), you can now

* [See a list of files you have in Drive](google-drive-app-file-actions.md#list-google-drive-files)
* [Open up files in the browser](google-drive-app-file-actions.md#open-google-drive-files)
* [Create files](google-drive-app-file-actions.md#create-a-new-google-drive-file)
* [Share files in rooms](google-drive-app-file-actions.md#undefined)
* [View file details and edit permissions](google-drive-app-file-actions.md#google-drive-file-details-and-permissions)

## List Google Drive Files

To see a list of files on the account connected to the Google Drive app you can do in either of the two ways

* Opening **Google Drive** from the contextual bar
* Using the slash command `/google-drive files`

<figure><img src="../../../../.gitbook/assets/Google Drive App List all files.png" alt=""><figcaption><p>Google Drive App List all files</p></figcaption></figure>

1. A list of all the files in your Drive is displayed here including those you created and the ones shared with you. Files are listed with their respective `file name`, `file type, Last modified date` and `Owner`
2. You can search for a specific file using the search bar.
3. This dropdown lets you filter what type of files are shown. You can select between the most common file types or any other file type.
4. Sorts the list of files in ascending or descending order.
5. Click **+New** to create a new file. See more [here](google-drive-app-file-actions.md#create-a-new-google-drive-file).

## Create a New Google Drive File

* You can create a new file directly within Rocket.Chat by any of the two means:&#x20;
  1. Open the Google Drive contextual bar then Click on **+New**&#x20;
  2. Using the slash command `/google-drive create`

This opens up a modal, fill in the **File name** and select the **File type** then **Create**

<figure><img src="../../../../.gitbook/assets/Create new Google Drive file " alt=""><figcaption><p>Create new Google Drive file </p></figcaption></figure>

* The `google-drive.bot` sends you a message with a link to the new file you just created

## Open Google Drive Files

You have the ability to open up files in your browser directly from Rocket.Chat. Take for example before sharing a file, you may want to open the file first to view and verify its content.

To open a file in the browser, click the **Kebab menu** across the file then select **Open in browser.** This opens the file on your browser's tab

<figure><img src="../../../../.gitbook/assets/Google Drive app open file in browser.png" alt=""><figcaption><p>Google Drive app open file in browser</p></figcaption></figure>

## Share Google Drive File

You have the ability to share files in your Google Drive within any [Rocket.Chat room](../../../../use-rocket.chat/user-guides/rooms/#types-of-rooms-in-rocket.chat).

To share a file,

* Open Google Drive from the contextual bar or use the slash command `/google-drive files` in the room you want the file to be shared.
* Search using the search bar or navigate to the file to share
* Click the **Kebab menu** across the file then select **Share in room.** This shares a link to the file in the room.

<figure><img src="../../../../.gitbook/assets/Google Drive share file in room.png" alt=""><figcaption><p>Google Drive share file in room</p></figcaption></figure>

{% hint style="info" %}
Clicking on **Details and sharing** opens up a modal to edit the sharing permissions of the file. Learn more about file [details](google-drive-app-file-actions.md#google-drive-file-details-and-permissions) and [permissions](google-drive-app-file-actions.md#file-permissions) below.
{% endhint %}

## Google Drive File Details and permissions

### View File Information

To view file details,

* Open Google Drive from the contextual bar or using the slash command `/google-drive files`&#x20;
* Search for the file name using the search bar or navigate and locate the file
* Click the **Kebab menu** across the file then select **File information**

<figure><img src="../../../../.gitbook/assets/Google Drive app file information.png" alt=""><figcaption><p>Google Drive app file information</p></figcaption></figure>

* The following details about the file are seen
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
  * **Share to room members and allow them to view**: This restricts viewing of the file only by the member(s) of the room
  * **Share to room members and allow them to comment**: This gives all the member(s) of the room access to view and comment on the file
  * **Share to room members and allow them to edit**: Gives access to the member(s) of the room to be able to edit the file
  * **Share to anyone at Organization and allow them to view**: Anyone in your organization can view the file
  * **Share to anyone at Organization and allow them to comment**: Anyone in the organization can view and comment on the file
  * **Share to anyone at Organization and allow them to edit**: Anyone in the organization can edit the file
  * **Share to anyone with the link and allow them to view**: This makes anyone with the link to be able to view
  * **Share to anyone with the link and allow them to comment**: Anyone having the link can comment on the file
  * **Share to anyone with the link and allow them to edit**: Anyone having the link can edit the file

## Delete Google Drive File

{% hint style="info" %}
You can only delete files you created.
{% endhint %}

To delete a file:

* Open Google Drive from the contextual bar or using the slash command `/google-drive files`&#x20;
* Click the **Kebab menu** across the file you want to delete
* Select **Delete file,** then **Delete forever**

<figure><img src="../../../../.gitbook/assets/Google Drive App delete file.png" alt=""><figcaption><p>Google Drive App delete file</p></figcaption></figure>
