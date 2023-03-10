# Authorize and Connect with Google Calendar App

After the Google Calendar app has been [installed ](google-calendar-app-setup.md#installing-google-calendar-app)and [configured ](google-calendar-app-setup.md#setting-up-google-calendar-app)by your workspace administrator, users can connect their Google accounts and have access to the Google Calendar app features.

{% hint style="info" %}
As a user, you can request the Google Calendar app at **Administration > Marketplace.**

To see if the Google Calendar App is installed on your workspace, try typing the slash command `/google-calendar` and see if any information about it pops up.
{% endhint %}

To connect your Google account:

* Type the slash command `/google-calendar auth`
* You receive a message from the `google-calendar.bot`, click **Authorize** to authorize your account
* Select the Google account you want to authorize then continue
* You receive a prompt asking for account permissions. **Allow** all to complete

<figure><img src="../../../../.gitbook/assets/Google Calendar app connect account" alt=""><figcaption><p>Google Calendar app connect account</p></figcaption></figure>

* After a successful connection, the `google-calendar.bot` sends a message notifying you of a completed authentication.

<figure><img src="../../../../.gitbook/assets/Google Calendar app successful authorization" alt=""><figcaption><p>Google Calendar app successful authorization</p></figcaption></figure>

With your account linked, you can now change the settings, list your events, and get notifications on meeting hours.

{% hint style="info" %}
You are required to re-authenticate after a while when the authentication token expires.
{% endhint %}
