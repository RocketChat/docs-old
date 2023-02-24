# Poll Plus Features

## Template Based Poll

The Poll Plus App provides some pre-filled template polls. These are some of the most commonly used polls, and pre-filling them saves you from manually typing all the options.

### Overrated/Underrated Poll

This poll provides options including **Overrated/Underrated**, Approprately Rated, Never Tried , Underrated. For example, you can use it to get feedback about the publicity of a particular feature in your company.

### 1-to-5 Poll

This poll allows users to rate a particular subject between the numbers 1-5.

### 1-to-10 Poll

This poll allows users to rate a particular subject between the numbers 1-10.

![](../../../../.gitbook/assets/poll\_template\_based.gif)

## User Defined Options

The Poll Plus App provides the option to allow or disallow users from adding options to an already created poll. When creating a poll, select the option to allow or disallow users from adding options to the poll.&#x20;

If you allow users to add choices, an **Add Choice** button is displayed below during the poll.&#x20;

To add a new choice,

* Click the **Add Choice** button. A modal form is displayed.&#x20;
* Enter the new option and click **Add**. The new option is now added to the poll.

## Word Cloud

In addition to the generated bar graph, the Poll Plus App provides users with the option to summarize the poll results in a word cloud. The word cloud feature uses a word cloud API for fetching these.&#x20;

{% hint style="info" %}
Learn more about setting up a word cloud API from the [configuration settings  ](./#configuration-settings)guide.
{% endhint %}

## Mixed Visibility Polls

The Poll Plus App allows one to set some reply options as confidential while others are open. This means that the users that select the anonymous option will have thier identities hidden.

To enable Mixed Visibility,&#x20;

* Set the visibility to **"Mixed Visibility Vote"**  when creating the poll.
* On clicking **Create**, the Mixed Visibility modal pops open. Select the options you would like to be "Anonymous".
* Once the poll is created, options that were selected to be "Anonymous" will conceal the voter identities with the "**Anonymous**" label .

{% hint style="info" %}
Votes casted on the options marked as "Anonymous" **would still** be counted within the total votes.
{% endhint %}

## Live Poll

Live Polls are an array of regular polls. A Live Poll is a **multi-question, timed** poll.

Live Polls can be triggered with the `/poll live <number of polls>` command. Here `<number of polls>` denotes the number of polls you want to be included within the Live Poll.

Each poll within a Live Poll has a time limit to vote upon after which the current Poll ends and the next one is posted. Poll creators can also click on the **“Next Poll”** button to trigger a pre-scheduled finish of the current Poll.

The **"Time limit to vote"** each poll is set as the number of seconds you want that poll to be active.

Some excellent use-cases for the Live Poll are stand-up and retro meetings. An additional use case is by teachers wanting to conduct timed quizzes on Rocket.Chat.

Here is how the Live Poll looks in action. The time at which the Poll will end is shown in the below figure.

If you're outside of the UTC timezone, you can configure the Poll Plus App to use your timezone. Refer the [configuration doc](https://github.com/RocketChat/docs/tree/5b094b49dc67c76d97a30a786a914ee16d5772b0/guides/app-guides/poll-plus/poll-plus-app-configuration/settings.md) for more information.

#### Late Retrieval

Live Polls include an additional feature called **Late Retrieval**. This allows Live Polls to be posted at a later time in the future.

To use the Late Retrieval feature make use of the `save` subcommand in the format: `/poll live save <number of polls>` where `<number of polls>` denote the number of polls you want to be included within the Live Poll.

Post-creation of the Live Poll, a message along with the **poll id** to retrieve it will be visible only to the poll creator.

Make use of the `/poll live load <id>` command to "play" the Live Poll. Here `<id>` is the poll id that was visible to the poll creator.

In case the user enters a wrong or non-existent Live Poll ID a notification message, only visible to the user, is sent within the room.

Speaking of teachers using Rocket.Chat for exams, the Live Poll Late Retrieval features proves an excellent tool for teachers to create quizzes even weeks before and then schedule the quiz on D-day with ease. All this while having control over the time limit to answer each question.

****
