# Custom Fields

Custom fields can be added to receive additional information from visitors during registration before initiating a Live Chat conversation or used to set other properties of a visitor/room. They can be set upon a **Visitor** or **Room.**

To access this menu, go to **Administration > Omnichannel > Custom Fields**. Here, you can **View**, **Create New**, **Edit,** or **Delete** an existing field.

{% hint style="info" %}
The Live Chat registration form has the **Name**, **Email**, and **I need Help With…**(Department) fields by default.
{% endhint %}

## Create Omnichannel Custom Field

To create a new custom field:

* Click on **+New** from the custom field panel
* Fill in the required information and click **Save.**

### Omnichannel Custom Field Information

* **Field**: Enter the desired field that you want to add to your Live Chat registration form. E.g., last name.
* **Label:** The label of the field.
* **Scope:** A dropdown for you to set the scope of the custom field
  * **Visitor**: If the visitor option is selected, the field will be available as an Omnichannel visitor's property
  * **Room**: When selected, the field will be available against an Omnichannel room.
* **Visible:** Whether or not to make it visible
* **Searchable**: This lets you set if searching in the [Omnichannel Contact Center](../omnichannel-agents-guides/omnichannel-contact-center/) can be done with the custom field.

### Enterprise Edition Omnichannel Custom Fields![](../../.gitbook/assets/2022-01-23\_20-47-25.png)

{% hint style="warning" %}
The rest of the settings (mentioned below) are **Enterprise** only.
{% endhint %}

* **Validation**: This lets you set validation Validation.
* **Required**: When enabled, the field will be set as required.
* **Type**: Choose the input type (`Input/Select`) of the field
* **Default value**: Set the default value of the field
* **Options**: Comma-separated list used to select a pre-configured value. Spaces between elements are not accepted.
* **Public**: Set it Public this will be displayed in external applications, such as Live Chat

When a custom field is created and made public, any value supplied in that field is available on the [Live Chat agent's](agents.md) side.

## Edit Omnichannel Custom Field

To edit an Omnichannel Custom Field:

* Click on the field you want yo update.
* A section is opened with all the current details of that field which can be modified. Update the field and click **Save**.

## Delete Omnichannel Custom Field

To delete an Omnichannel Custom Field, click on the **delete icon** on the right of the field from the Custom Field list.
