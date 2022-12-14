# Cloud FAQs

## Trials

<details>

<summary>How long do trials last?</summary>

Currently, trials last 30 days.

</details>

<details>

<summary>How can I convert from a trial to a paid plan?</summary>

Our trials are fully featured. So if you enter your card information in the billing section of the [Cloud Console](https://cloud.rocket.chat) your trial will automatically convert to a paid plan at the end of the trial period.

</details>

<details>

<summary>How do I cancel my trial?</summary>

You can cancel your Rocket.Chat workplace directly within the Cloud Console.

</details>

## Data Export



<details>

<summary>How can I get a data export?</summary>

Send an email to cloud.support@rocket.chat with the address of your workspace. Note: The request will take some time to fulfill.

</details>

## Cloud Accounts

****

<details>

<summary><strong>How do I view the push usage for my workspace?</strong></summary>

To view the push usage for your workspace, you need to login to the Cloud Console ([cloud.rocket.chat](https://cloud.rocket.chat)): navigate to Workspaces and click on the workspace you'd like to see usage for.



<img src="../../.gitbook/assets/image (64).png" alt="" data-size="original">



</details>

<details>

<summary>I already canceled my workspace, but it is still in the “Cancelling” status and is accessible. Why?</summary>

Please note that in case you cancel your workspace in the middle of the billing period, it will be accessible and in the “Cancelling” status till the end of your billing period.

If, for example, you are charged on the 5th of every month and decide to cancel the subscription on the 20th of December or later - your workspace will be operational till the 5th of January (this way, we want to allow customers to use what they paid for). After this, it will stop running and switch to “Cancelled”.

</details>

<details>

<summary>How do I cancel my cloud subscription?</summary>

If you want to end your subscription, please note that it can be done only by the workspace administrator in your Cloud Console ([cloud.rocket.chat](https://cloud.rocket.chat)) : navigate to Workspaces -> click on the three dots at the end of the correspondent workspace line -> select **Cancel**.\
\
This will stop your subscription and hibernate your server (your server will still exist if you want to get back to Rocket.Chat later).

<img src="../../.gitbook/assets/cancel_cloud_subscription (1) (1) (1).png" alt="" data-size="original">

If you need a database dump or if you want to permanently delete your workspace and all the data associated with it - submit a ticket here on our Helpdesk or drop an email to [support@rocket.chat](mailto:support@rocket.chat) with the respective request.

</details>

<details>

<summary>How can I create one more workspace with the same Cloud account?</summary>

Please, note that this can only be done by our Cloud engineers. If you want to create an additional workspace - submit a ticket here on our Helpdesk or drop us a letter at [support@rocket.chat](mailto:support@rocket.chat) - include the workspace address you would like and the plan.\
\
**NOTE**: Additional workspaces are billed based on their usage. So if you have 5 users on one and 10 on the other, you will get billed for them both separately.

</details>

<details>

<summary>How can I change the ownership of the workspace?</summary>

If you need to grant the ownership of your workspace to another person or to change the primary email of your workspace - submit a ticket here on our Helpdesk or drop us an email to [support@rocket.chat](mailto:support@rocket.chat) with the respective request.

**NOTE**: ticket should be submitted from the admin email address (the email address the workspace is registered under) and should contain the email address the ownership should be granted to/the email address it (admin one) should be changed to.

</details>

<details>

<summary>I already canceled my subscription but was charged again. Why?</summary>

Please, note that we charge our customers afterward, not in advance. This means that on a particular day of each month you will be charged for the previous month of use.

If, for example, you started your trial on December 1st, it expired on December 15th and your subscription was automatically continued (you added the payment method before the trial expired) - on January 15th you will receive an invoice for the previous month (December 15th - January 15th).

</details>

<details>

<summary>How can I reactivate my workspace after the trial has expired?</summary>

If your trial has expired, and you didn’t manage to add your payment method to continue your subscription, navigate to Payment methods in your Cloud Console ([cloud.rocket.chat](https://cloud.rocket.chat)) -> click **Add payment method** (top right corner) to add your card (credit/debit card is the only payment method we accept at the moment).

<img src="../../.gitbook/assets/add_payment_method (1) (1) (1) (1).png" alt="" data-size="original">



<img src="../../.gitbook/assets/add_credit_card (1).png" alt="" data-size="original">

</details>

<details>

<summary>How to change workspace region?</summary>

The region is defined upon creation. Please, note that customers can not migrate their instances between regions independently. This process involves manual work required by Rocket.Chat Cloud team. If you need to switch regions - submit a ticket or drop an email to [support@rocket.chat](mailto:support@rocket.chat).

</details>

<details>

<summary>How can I change or remove my credit card data?</summary>

Please, note that you can not delete the card that is the only one (default one) linked to your workspace as well as you can not delete the card that was charged last - in both cases, you will see the error message “Can't delete last payment option”.

If you need to change the card - add it as a new payment method and make it the default one (after that, you will be able to delete all other cards).

If you want to remove the card information before canceling your subscription, please note that your payment data can only be deleted and all the other data associated with your workspace. To request that, submit a ticket here on our Helpdesk or drop an email to [support@rocket.chat](mailto:support@rocket.chat).

</details>

<details>

<summary>Can I use another payment method rather than a credit/debit card?</summary>

A credit/debit card is the only payment method we accept at the moment.

For companies paying up-front for a specific period, we provide invoices to pay by wire transfer.

</details>

<details>

<summary>How can I have more than one Cloud workspace under the same Cloud account?</summary>

Adding more instances to your Cloud account can only be done by our engineers. Reach out to us at support@rocket.chat and specify the following data for the new workspace you want to add:

* workspace name
* SaaS plan and billing period (monthly or annual payment)
* number of seats
* region of the deployment (US or EU)

</details>

<details>

<summary>How to change your Cloud account email?</summary>

Cloud account email can be changed at cloud.rocket.chat on the Profile page. If you have difficulties changing the email of the account owner, contact us at support@rocket.chat. The request must be sent from the original account owner's email.

</details>

<details>

<summary>How to request a custom domain?</summary>

To request a custom domain, set up a CNAME DNS record for the domain name you want to have pointing to "**cdns.use1.cloud.rocket.chat**" (for US region) and to "**cdns.euc1.cloud.rocket.chat**" (for EU region). Afterward, please send us an email to support@rocket.chat so we can make respective changes to your workspace.

Please note that the ability to set a custom domain is available only in the Enterprise Edition offereing.

</details>

