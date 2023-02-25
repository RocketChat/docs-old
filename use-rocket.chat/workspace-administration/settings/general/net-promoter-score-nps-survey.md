# Net Promoter Score (NPS) survey

NPS aims to assess user satisfaction and make the Rocket.Chat experience even more pleasant for users.

By allowing it to run on your workspace, you are helping Rocket.Chat to:

* Build a better product & better user experience
* Develop and prioritize features aligned with our users’ needs
* Get accurate user feedback on what needs fixing versus what needs improvements.

## **What do the users see?**

A banner is exhibited with the question: “**How likely are you to recommend us to a friend or colleague?**” and a scale from 0-10 to collect the answer.\
\
If the user clicks on a score, a modal is exhibited to collect text feedback.

Both actions can be dismissed by the user.

## How does NPS work?

NPS surveys are triggered every 6 months via Rocket.Chat cloud. The workspace needs to be registered in Rocket.Chat cloud. Otherwise, the survey is never triggered.

All users in the workspace receive the survey on the same day.

Admins get notified one month before the NPS is rolled out via an in-app banner and alert via Rocket.Cat. That means admins can quickly turn off the NPS in case they prefer.

## How is NPS data collected?

All feedback received through the NPS is anonymous. It does not collect any personal data.

The following data elements are transmitted via statistics collector:

* Per-user who participates in the NPS
  * An anonymous but unique hash value per user. The hash is created locally in form of a SHA256-hash of the combined user ID and NPS ID.
    * The user ID is a local workspace value per user and is not transmitted outside of the workspace
    * &#x20;for the NPS campaign.
    * The NPS ID is a string that identifies the NPS campaign to which the user is responding&#x20;
    * From the hash itself, the user ID and NPS ID cannot be reversely identified.
  * The user role (e.g. guest, admin)
  * The numerical NPS score of the user (a number between 1-10)
  * An optional comment from the user (e.g. “I like the emojis a lot!”)
* A workspace ID, which is a unique string per workspace but does not indicate who uses it

## How to turn off NPS survey?

Our users have total freedom to disable the NPS survey. Simply follow the steps below to switch NPS off:

* Within your Rocket.Chat workspace, navigate to  **Administration > Workspace >  Settings > General > NPS**&#x20;
* Uncheck “**Enable NPS Survey**”

Once the setting is turned off, the NPS survey stays off indefinitely.
