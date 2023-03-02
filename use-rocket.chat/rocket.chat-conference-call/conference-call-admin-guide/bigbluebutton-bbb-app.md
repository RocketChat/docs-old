# BigBlueButton (BBB) app

**BigBlueButton** is an open-source web collaboration software utilized by education organizations for e-learning and training. According to user needs, the software provides a wide range of customization and integration options. **BigBlueButton** enables users to conduct web-conferencing and share documents, audio, and video files for online learning. The software’s “whiteboard” feature allows presenters to mark valuable topics in the presentation. In addition, its “polling” feature engages learners and helps the presenter to receive feedback. BigBlueButton’s “desktop sharing” feature extends beyond slides and allows moderators to share their screens with the audience enabling a better understanding of topics.

## Download BigBlueButton app

{% hint style="info" %}
**A BigBlueButton server is required for this integration.**
{% endhint %}

To download the BigBlueButton app,

* Go to **Administration > Apps > Marketplace.**
* Search for the **BigBlueButton** app.
* Click **Install**

## Set up the BBB app ****&#x20;

To set up the **BBB** app on your workspace,

* Confirm that the app is enabled.
* Run `sudo bbb-conf --secret` on the BBB server. It gives you a **URL** and a **Secret**.  See [ BBB's documentation](https://docs.bigbluebutton.org/admin/bbb-conf.html).
* Use this URL and Secret in the Settings tab of the app to connect to BBB
* Click **Save Changes**

## Configure conference call using the BBB **app**&#x20;

To configure the **BBB** video conference on your workspace,

* Go to **Administration > Settings > Conference Call**
* Select BigBlueButton as your **Default Provider**
* Select the options that meet your needs and click **Save changes.**

The BigBlueButton app is successfully configured on your server. Follow[conference-call-users-guide.md](../conference-call-users-guide.md "mention") to start using it.
