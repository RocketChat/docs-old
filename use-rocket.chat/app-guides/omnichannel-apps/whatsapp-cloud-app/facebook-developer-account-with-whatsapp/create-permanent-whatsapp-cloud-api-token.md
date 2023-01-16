# Create Permanent WhatsApp Cloud API Token

We have seen how to [create a Facebook developer account and add WhatsApp](./).

The _WhatsApp Cloud API token_ is uniquely provided by Facebook along with the  _Phone Number ID_, and _WhatsApp Business Account ID_. These credentials are needed by every business when using WhatsApp Cloud services.

The token provided by Facebook initially is temporal. Follow this guide to get a permanent WhatsApp Cloud API token.

* Open up the app panel on your [Facebook Developers portal](https://developers.facebook.com/apps)
* Click to open the business page linked to the app

<figure><img src="../../../../../.gitbook/assets/Meta for Developers apps page.png" alt=""><figcaption><p>Meta for Developers apps page</p></figcaption></figure>

* The Facebook business setting page opens up. Click on **System user** on the side panel
* A list of existing users on that app is seen if any. Click **Add** to add a user then **Accept** the terms and conditions

<figure><img src="../../../../../.gitbook/assets/Meta business system users.png" alt=""><figcaption><p>Meta business system users</p></figcaption></figure>

* Fill in the System username then set the System User Role to **Admin** and **Create System User**

<figure><img src="../../../../../.gitbook/assets/new Meta for business admin system user.png" alt=""><figcaption><p>Creating new Meta for business admin system user </p></figcaption></figure>

* Click on **Add Assets** across the newly created user to add assets to use

<figure><img src="../../../../../.gitbook/assets/Add assets to Meta business user.png" alt=""><figcaption><p>Add assets to Meta business user</p></figcaption></figure>

* A modal opens up, Navigate to **Apps**, select the app use and enable **Manage App** then **Save changes**

<figure><img src="../../../../../.gitbook/assets/Assign Meta for business asset.png" alt=""><figcaption><p>Assign Meta for business asset</p></figcaption></figure>

* The asset gets added to the system user and **Done**
* Click on **Generate New Token** against the user to generate a new access token

<figure><img src="../../../../../.gitbook/assets/Generate new token Meta for Business.png" alt=""><figcaption><p>Generate new token Meta for Business</p></figcaption></figure>

* Select the **App** from the dropdown and check the `whatsapp_business_messaging`  and `whatsapp_business_management` permissions and **Generate Token**

<figure><img src="../../../../../.gitbook/assets/Add permissions to Meta business system user.png" alt=""><figcaption><p>Add permissions to Meta business system user</p></figcaption></figure>

* The permanent token gets generated and presented to you. Copy this token and use it in your integrations.

<figure><img src="../../../../../.gitbook/assets/Generated WhatsApp Cloud API permanent token.png" alt=""><figcaption><p>Generated WhatsApp Cloud API permanent token</p></figcaption></figure>
