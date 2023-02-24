# Authorize and Connect with Google Drive App

After the Google Drive App has been[ installed and configured](google-drive-app-setup.md) by your workspace administrator, users can connect their Google accounts and have access to the files in Drive.

{% hint style="info" %}
As a user, to see if the Google Drive App has been installed on your workspace, try typing the slash command `/google-drive` and see if any information about it pops up.
{% endhint %}

To connect your Google account:

* Type the slash command `/google-drive connect`
* You receive a message from the `google-drive.bot`, click **Authorize** to authorize your account

<figure><img src="../../../../.gitbook/assets/Google Drive app bot authorize message" alt=""><figcaption><p>Google Drive app bot authorize message</p></figcaption></figure>

* Select the Google account you want to authorize then continue
* You receive a prompt asking for account permissions. **Allow** all to complete

<figure><img src="../../../../.gitbook/assets/Google Drive app connect account" alt=""><figcaption><p>Google Drive app connect account</p></figcaption></figure>

* After a successful connection, the `google-drive.bot` sends a message notifying you of a completed authentication.

With your account linked, you can now [view](google-drive-app-file-actions.md#list-google-drive-files), [create](google-drive-app-file-actions.md#create-a-new-google-drive-file) and [share files](google-drive-app-file-actions.md#share-google-drive-file) directly from Rocket.Chat.

{% hint style="info" %}
You may be required to re-authenticate after a while when the authentication token expires.
{% endhint %}
