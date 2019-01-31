<!-- # Google Drive

Features such as file transfer to/from Google Drive and creating Google docs, slides and sheets in a room can be made available by enabling Google Drive under `Google` in the `OAuth` section in the administration settings and providing the required credentials in the input boxes below.

## Activation Steps

`Google Drive API` and `Google Picker API` need to be activated for the project. This can be done from `Google API Console`.

### Google Drive API

1. Visit the [Google API Console](https://console.developers.google.com) and create a new project by clicking on the project button in the menubar and selecting `NEW PROJECT` in the modal that opens. In case of an already existing project, simply open it.

2. In case of a new project, enter the project details such as name and location and click on `CREATE` button. This will take you to the dashboard from where we will enable the required APIs.

3. Click on `ENABLE APIS AND SERVICES` and select `Google Drive API`. Click on `ENABLE`.

4. Select `CREATE CREDENTIALS` to generate the required credentials.

5. Enter the API details and click on `What credentials do I need?`.

6. Enter the details for the OAuth 2.0 client ID such as Name, Authorized origins and Authorized redirect URIs. Click on `Create OAuth client ID`.

7. Enter the product name for the consent screen that will be displayed while requesting user permission for Rocket.Chat to access Google Drive. Click on `Continue` followed by `Done`.

8. Copy the Client ID and the API key and paste it in the admin settings for Google Drive.

### Google Picker API

Google Picker API is needed to generate the GUI to browse through and select Google Drive content.

1. Navigate to the project in the [Google API Console](https://console.developers.google.com) and select `Google Picker API`.

2. Click on `ENABLE`.

3. Select `CREATE CREDENTIALS` to generate the Google Picker key.

4. Copy and paste it in the corresponding admin setting. -->
