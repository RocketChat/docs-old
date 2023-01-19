# Import from HipChat

There are currently two different HipChat importers. One for HipChat Cloud and another for HipChat Enterprise.

## HipChat Cloud

To start importing values from HipChat you first need to have an instance of Rocket.Chat running. You can do that on [your own](https://docs.rocket.chat/developer-guides/quick-start/).

If you already have an instance running and administration privileges, you can follow these steps:

1. Export data from HipChat
2. Wait until your download is ready and download it (it will be a .zip file)
3. Go to `https://[your_rocket_chat].rocket.chat/admin/import` and click the "Start" button on the "HipChat" item
4. Choose your downloaded .zip file and wait until Rocket.Chat can read it (it can take a few minutes, depending on the size of your HipChat export)
5. Deselect any items you **don't** want to import
6. At the top of the page, click **Start Importing**

## HipChat Server / Data Center

To import your current data from HipChat Server / Data Center into Rocket.Chat, please do the following.

### Export from HipChat Server / Data Center

This is a copy from the HipChat Server / Data Center Documentation:

1. Browse to the fully qualified domain name you've configured for your HipChat Server, for example `https://hipchat.yourcompany.com/`
2. Log in to the web user interface (UI) using your administrator email and password
3. Click **Server admin > Export**
4. To include files and one-to-one chat history in the export, select the checkboxes
5. Create a password to protect your archive file in the **Password** and **Confirm Password** fields. You're required to provide this password when you import your data into HipChat Server. We don't store this password, so be sure to remember it
6. Click **Export**. Depending on how much data you have, it may take a few hours to export the data. When it's finished, you'll receive an email with a link to download the file
7. When you receive the email, click the link in the email to download the archive file

### Import into Rocket.Chat

1. Decrypt the exported file: `openssl aes-256-cbc -d -in path_to_encrypted_file.tar.gz.aes -out path_to_decrypted_file.tar.gz -pass pass:your_password` See the table below for descriptions of the command line arguments
2. Ensure the file generated is a `tar.gz` file, otherwise Rocket.Chat won't accept it
3. Go to `https://[your_rocketchat]/admin/import/prepare/hipchatenterprise`
4. Choose your decrypted `tar.gz` file and wait until Rocket.Chat can read it (it can take a few minutes, depending on the size of your export)
5. Deselect any items you **don't** want to import
6. At the top of the page, click on **Start Importing**

#### OpenSSL Command Arguments

| Argument      | Notes                                                                     |
| ------------- | ------------------------------------------------------------------------- |
| `aes-256-cbc` | This is the cipher to use to decrypt the file.                            |
| `-d`          | This argument is the command to decrypt the file.                         |
| `-in`         | Use this to specify the path to the archive file you're about to decrypt. |
| `-out`        | Use this to specify the path where you want to output the decrypted file. |
| `-pass pass:` | Enter the password you created when you **exported** the archive file.    |

### Troubleshooting

1. In case you get `digital envelope routines:EVP_DecryptFinal_ex:bad decrypt:../crypto/evp/evp_enc.c:541:` while decrypting, add the parameter `-md md5` see [https://www.openssl.org/docs/faq.html#USER3](https://www.openssl.org/docs/faq.html#USER3)
2. If the import fails for large HipChat exports, it may help not to export file attachments. see [https://github.com/RocketChat/Rocket.Chat/issues/11693](https://github.com/RocketChat/Rocket.Chat/issues/11693)
3. If you still have problems contact us at support@rocket.chat and provide your server logs if available
