# BigBlueButton (BBB) app

BigBlueButton is an open-source web collaboration software utilized by education organizations for e-learning and training. The software offers numerous options for customization and integration as per requirements of the users.

BigBlueButton enables users to conduct web-conferencing and share documents, audio, and video files for online learning. The softwareÃÂ¢ÃÂÃÂs ÃÂ¢ÃÂÃÂwhiteboardÃÂ¢ÃÂÃÂ feature allows presenters to mark valuable topics in the presentation. In addition, its ÃÂ¢ÃÂÃÂpollingÃÂ¢ÃÂÃÂ feature engages learners and helps the presenter to receive feedback. BigBlueButtonÃÂ¢ÃÂÃÂs ÃÂ¢ÃÂÃÂdesktop sharingÃÂ¢ÃÂÃÂ feature extends beyond slides and allows moderators to share their screens with the audience enabling a better understanding of topics.

{% hint style="info" %}
**A BigBlueButton server is required for this integration.**
{% endhint %}

To start using BigBlueButton video conferencing on your Rocket.Chat Instance:

## 1. Download BigBlueButton app

To download the BigBlueButton app:

1. Navigate to **Avatar Menu > Administration > Apps > Marketplace** tab.
2. Search **BigBlueButton** app
3. Hit **Install**

## 2. Set up BBB app ****&#x20;

To set up the BBB app on your Rocket.Chat instance:

1. Enable the BigBlueButton app on your Rocket.Chat instance
2. Run `sudo bbb-conf --secret` on the BBB server. It gives you a **URL** and a **Secret**. (Find BBB's [documentation](https://docs.bigbluebutton.org/admin/bbb-conf.html) here.)
3. Use this URL and Secret in the Settings on Rocket.Chat to connect to BBB, as shown below:

![BBB app settings](../../../.gitbook/assets/BBBappSettings.png)

4\. Hit **Save Changes**

## 3. Configure conference call using BigBlueButton **app**&#x20;

To configure video conference on your Rocket.Chat instance:

1. Go to **Avatar Menu > Administration > Settings >  Conference call**
2. Select BigBlueButton app as your **Default Provider**

****

as shown below:

![Video conference admin settings](../../../.gitbook/assets/VideoConferenceAdminSettingsBBB.png)

Select the options that meet your needs and hit **Save changes** in the top right corner. BigBlueButton app is successfully configured on your server. Follow the conference call user's guide to start using it.

{% content-ref url="../conference-call-users-guide.md" %}
[conference-call-users-guide.md](../conference-call-users-guide.md)
{% endcontent-ref %}
