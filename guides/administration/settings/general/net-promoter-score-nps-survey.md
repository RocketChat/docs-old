# Net Promoter Score (NPS) survey

This feature aims to assess user satisfaction and make the Rocket.Chat experience even more pleasant for users. 

By allowing it to run on your workspace you are helping Rocket.Chat to: 

* Build a better product & better user experience
* Develop and prioritize features aligned with our users’ needs
* Get accurate user feedback on what needs fixing versus what needs improvements.

## **What users will see?**

A banner will be exhibited with the question: “**How likely are you to recommend us to a friend or colleague?**” and a scale from 0-10 to collect the answer.\
\
If the user clicks on a score, a modal will be exhibited to collect text feedback.

Both actions can be dismissed by the user.

![](https://lh6.googleusercontent.com/4BBASQyWUP1BM9x1Qouv-cxLUNY3TZBwobJV-N5LVzDZYxOjRmSOPDS9e2twv19d6D24UZhSjDwcwlK7H1U1em9OlWLaoueg0HcEUNcKIr6gSu0z6YGjAKovbj7E_YEA2aC3CmuW)

![](https://lh5.googleusercontent.com/fbYrzTYf-5ybS8kbgjM6QFf7q8hjrHBf2KRrpiwoF1\_D1wBpBS2QjBnskXWmjvFXK-MWQj0VhHytBJaq9bJ1mqo887nENWgxim4y6BD4aoql6LZGEbBuqzUJwgAnKc3JSIFcoEky)

## How does NPS work?

NPS surveys will be triggered every 6 months via Rocket.Chat cloud. The workspace needs to be registered in Rocket.Chat cloud, otherwise, the survey will never be triggered.

All users in the workspace will receive the survey on the same day.

Admins will get notified two months before the NPS is rolled out via in-app banner and alert via Rocket.Cat. That means admins can quickly turn off the NPS in case they prefer.

It’s possible to check more details directly in the code [here](https://github.com/RocketChat/Rocket.Chat/blob/3.17.0/server/services/nps/service.ts).\


## How is NPS data collected?

All feedback received through the NPS is anonymous. It does not collect any personal data. 

The following data elements are transmitted via statistics collector:

* Per-user who participates in the NPS
  * An anonymous, but unique hash value per user. The hash is created locally in form of a SHA256-hash of the combined user ID and NPS ID.
    * The user ID is a local server value per user and is not transmitted outside of the server for the NPS campaign.
    * The NPS ID is a string that identifies the NPS campaign to which the user is responding (as there are multiple campaigns over the years).
    * From the hash itself, user ID and NPS ID cannot be reversely identified.
  * The user role (e.g. guest, admin)
  * The numerical NPS score of the user (a number between 1-10)
  * An optional comment from the user (e.g. “I like the emojis a lot!”)
* A workspace ID, which is a unique string per server, but does not indicate who uses it

## How to turn it off NPS survey?

Our users have total freedom to disable the NPS survey. Simply follow the steps below to switch NPS off:

* Within Rocket.Chat, access **Administration > General **
* **NPS** > Uncheck “**Enable NPS Survey**”
* Once the setting is turned off, the NPS survey stays off indefinitely.

![](https://lh5.googleusercontent.com/dy4TrUEoeGsj3rFes4or0m5hZ-Jvxp1mtz_zrt2f-Diaox-CTttatqaVWLkSpQ2TJt6n9j3Zd-yCf_RQS1H1zeH4M8gYPpLm2Gpk_lp50NulU56arxdL5zyQTZRzGG6uKlEr7KMY)
