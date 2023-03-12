# Poll Plus

To install the **Poll Plus** App,&#x20;

* Go to **Administration > Marketplace.**
* Search for the **Poll Plus** app and click on it.
* Click on the **Install** button.

## Quickstart

To create a Poll with Poll Plus,

* Enter the slash command _**/poll**_** ** in the message box of the channel you want to create the poll.
* Then, click **Enter** to execute**.** A pop-up form is triggered for you to create the poll. The form details include the following:
  * **Insert your question:** The poll question.
  * **Insert your options**: The reply options for the poll.
  * **Add a choice**: Add more reply options for the poll.
  * **Choice type**: Select if the poll will be multiple choice ,single choice, or [template based](poll-plus-features.md#template-based-poll).
  * **Vote visibility**: Select if the poll will have Open Vote, Conidential Vote or Mixed Visibility Vote.&#x20;
  * **User-defined options:** Allow/disallow the user from adding their options to the poll.
  * **Word Cloud:** Enable/disable the wordcloud feature on poll finish.&#x20;
* After creating the poll, it is available in the room for the users to vote.

To finish the poll,&#x20;

* Select the ![](<../../../../.gitbook/assets/three-dot-icon (1).png>)**three-dot icon at the** top of the poll.
* Then, click **Finish poll**.

## Configuration Settings

The Poll Plus App offers some customization settings on the App settings screen.

* Go to **Administration > Apps > Poll Plus**.
* Select the **Settings** tab**.**
* Update the settings. Then click **Save Changes.**

### Use Name Attribute

The Poll Plus App provides you with an option to display the voter identity as either the full name or the username of the voter.

### Timezone

Since Rocket.Chat is used globally, everyone may not be comfortable with Coordinated Universal Time (UTC). The Poll Plus App allows you to choose which timezone to display the poll finish time. The default value for this setting is the UTC timezone.

### Word Cloud API

The word cloud feature uses an API link to fetch word clouds from. The free version of [Quickchart word cloud API](http://quickchart.io/documentation/word-cloud-api/) can be used for small servers . Moreover, it is also the default value for this setting. Quickchart comes with the following restrictions:

* Requires Internet access.
* Enforces rate-limiting of 60 requests per minute per IP.

In the case, you are hosting your own Rocket.Chat **on-premise** or need **more customization** than Quickchart, we've open-sourced an [internal developed word cloud API](https://github.com/RonLek/wordcloud-api). It comes with the following features:

* No Internet access is required.
* No rate-limiting.
* It is free.

{% hint style="info" %}
If the **Wordcloud API endpoin**t is blank and **Word Cloud** is enabled on the poll, the poll summary is displayed when the poll is finished.
{% endhint %}

## Template Based Poll

The Poll Plus App provides some pre-filled template polls. These are some of the most commonly used polls, and pre-filling them saves you from manually typing all the options.

#### Overrated/Underrated Poll

This poll provides options including **Overrated/Underrated**, Approprately Rated, Never Tried , Underrated. For example, you can use it to get feedback about the publicity of a particular feature in your company.

#### 1-to-5 Poll

This poll allows users to rate a particular subject between the numbers 1-5.

#### 1-to-10 Poll

This poll allows users to rate a particular subject between the numbers 1-10.



![](../../../../.gitbook/assets/poll\_template\_based.gif)

## &#x20;

