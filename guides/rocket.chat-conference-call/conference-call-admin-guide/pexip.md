# Pexip

[Pexip](https://www.pexip.com/) is a purpose-built video communication platform that empowers large organizations to transform their operations with video. Pexip’s unique technology provides customized solutions for innovative and fully bespoke applications of video, data privacy, and business continuity for secure spaces and frictionless collaboration for connected spaces.

The integration between Rocket.Chat and Pexip as video conferencing communication platform enables secure and compliant government-to-citizen communication as well as internal and cross-agencies collaboration, making it ideal for government organizations looking for an on-premise collaboration solution.&#x20;

To start using Pexip video conferencing on your Rocket.Chat Instance:

## 1. Download the Pexip app

To Download the Pexip app:

1. Please go to **Avatar Menu > Administration > Apps > Marketplace** tab.
2. Search **Pexip**
3. Hit **Install**

![Pexip app install](../../../.gitbook/assets/PexipAppInstall.png)

## 2. Set up the app&#x20;

To set up the Pexip app on your Rocket.Chat instance:

1. Enable the Pexip app on your Rocket.Chat instance
2. Please [configure the Pexip server ](https://docs.pexip.com/admin/integrate\_policy.htm)to connect to Rocket.Chat
3. You need to enter the below-shown part of the URL from the **App Details** page on Rocket.Chat as  **Policy server URL** on the Pexip side

![Pexip app details](../../../.gitbook/assets/PexipAppDetails.png)

4\. Enter the URL where Pexip is running in the **Base URL** under **Settings** on Rocket.Chat side.

5\. Hit **Save Changes**

## 3. Configure conference call using Pexip&#x20;

To configure the Pexip video conference on your Rocket.Chat instance:

1. Go to **Avatar Menu > Administration > Settings > Conference Call**
2. Select Pexip as your **Default Provider**

****

as shown below:

![ Conference call admin settings](../../../.gitbook/assets/VideoConferenceAdminSettingsForPexip.png)

Select the options that meet your needs and hit **Save changes** in the top right corner. Pexip is successfully configured on your server. Please follow the conference call user's guide to start using it.

{% content-ref url="../conference-call-users-guide.md" %}
[conference-call-users-guide.md](../conference-call-users-guide.md)
{% endcontent-ref %}
