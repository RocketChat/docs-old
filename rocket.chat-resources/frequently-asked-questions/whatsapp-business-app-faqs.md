# Whatsapp Business App FAQs

## <mark style="color:red;">**New customers**</mark>

<details>

<summary>Can customers try WhatsApp free of charge? Is there any kind of free trial?</summary>

Not at the moment. We are working to provide a sandbox to be able to do so.

</details>

<details>

<summary>Is there a difference between Community Edition (CE) and Enterprise Edition (EE)?</summary>

No, there is no differentiation on WhatsApp for CE x EE. All charges incurred for CE will be applied the same way (App fee, number fee, and variable costs). CE users will only be able to do so through our self-service method.\\

</details>

<details>

<summary>Can customers who have CE open tickets about WhatsApp?</summary>

Community workspaces that purchase the app will have access to support for all matters related to WhatsApp. The process should be done normally by opening up a ticket [at Zoho desk](https://desk.rocket.chat/portal/en/signin).

</details>

<details>

<summary>What happens to actual customers using the old version of the App?</summary>

We have a few customers using the old versions. The payment of $59 will be the same for these customers until the end of the contract. After that, the current policy applies, and for 1 number the new price will be $78. This price already includes taxes.

</details>

<details>

<summary>What does a customer who has an old version of WhatsApp need to do to get the new one?</summary>

Existing customers should click on uninstall button on the Marketplace panel. Before that, please copy the API KEY and then paste it onto the app after installing it.\\

</details>

<details>

<summary>What is the oldest version of Rocket.chat that supports Whatsapp?</summary>

`3.14.0`

</details>

<details>

<summary>What do we do with air-gapped customers?</summary>

We won’t be able to serve air-gapped customers because the necessity to connect with the 360Dialog proxy is needed to have access to the WhatsApp Business API.

</details>

## <mark style="color:red;">**Pricing Details**</mark>

<details>

<summary>What costs will the customer have?</summary>

There will be 3 types of costs. App fee ($39/mo), 360dialog's monthly fee ($39/mobile number/mo) + Facebook costs per template message used (variable depending on volume). Rocket.Chat does not charge any mark-up on variable costs. This price already includes taxes.

<img src="https://lh6.googleusercontent.com/lkoBbHYszMzb__VE_NgGjQ6iqGG7ZJclm5h8_pmAp6CGBAnjAEdbYRQFLSRxS81wb7lDOZB3xjew-bc3aZMsvGN4sEb8Kh09TtITauPm9YX809Z6ae2c82gM1hjvsV1lZ_Dp1KEH" alt="" data-size="original">

**Understanding 360dialog's fixed monthly fee**

\
Our pricing is based on the monthly license fee per hosted number. Incoming & outgoing WhatsApp Session Messages are always free and unlimited - we never charge any extra cost per session message. The license fee can vary according to the available bandwidth since we have higher tier options for customers that exchange more than 10 messages per second and to partner deal size. If your account will need to process more than 10 messages per second, please reach out to our support team. We never charge any extra cost per Outgoing Template Messages, the WhatsApp fees are only passed through.

**Facebook Current Pricing (until January 31st, 2022) and New Facebook Pricing (starting February 1st, 2022): Conversation-based Pricing** [**can be found here**](https://docs.360dialog.com/useful/how-much-does-it-cost-to-have-a-whatsapp-business-api-account-with-360dialog)

\_\_

_Facebook Current Pricing (until January 31st, 2022)_

Template messages (business-initiated) sent through your WhatsApp Business Account are charged according to a tiered pricing model. If your customer initiates messaging with you, WhatsApp will not charge you for any messages (including Templated Messages) that you send to that customer for up to 24 hours following the last message that that customer sends to you ("Customer Care Window"). Any additional message you send to that customer beyond the Customer Care Window must be a Templated Message

**Facebook Pricing**

_The prices listed below are effective until February 1, 2022. After that, conversation-based pricing rates apply._

**Pricing Rules**

* “Message template” has the meaning detailed in our Documentation. “Templated message” means a message sent using a message template, in compliance with Facebook’s terms and policies.
* All prices are set forth in the List Price Schedule below and will apply to Templated Messages sent on or after the effective date indicated in the List Price Schedule.
* Facebook will determine the price of each delivered Templated Message based upon the country code of the message recipient and the volume of Templated Messages delivered in a calendar month to a given country or region. Templated Message volume will not be aggregated across countries or regions or different Whatsapp Business API’s.
* The price charged for each delivered Templated Message will be the price effective at the time you send the Templated Message.
* Charges are applicable for each Templated Message that is delivered within 30 days after being sent. Charges will not be applicable for Templated Messages that were delivered more than 30 days after it was sent. We determine that a message has been delivered when WhatsApp servers process a delivery receipt for the sent message\*\*.\*\*
* If your customer initiates messaging with you, we will not charge you for any messages (including Templated Messages) that you send to that customer for up to 24 hours following the last message that that customer sends to you ("Customer Care Window"). Any additional message you send to that customer beyond the Customer Care Window must be a Templated Message, for which we will charge you as set forth in our rate card.
* Facebook will have the right to update this rate card on a monthly basis, and changes will take effect the first day of the calendar month following such changes.
* The WhatsApp Business Solution may not be used to send messages to or from the following countries and regions: Crimea, Cuba, Iran, North Korea, and Syria.

**Cost per Message in USD**

To see the entire list of the countries and the complete pricing range, please visit this page.

New Facebook Pricing (starting February 1st, 2022): Conversation-based Pricing The main change going into effect on February 1st is that now instead of only paying for used template messages. Facebook will start charging for each and every conversation. Also, you can send as many messages as you want in a 24-hour session, even if the customer doesn't respond.

**How It Works**

In conversation-based Pricing, WhatsApp Business API conversations fall into two categories that are priced differently:

* User-initiated, like customer care and general support inquiries
* Business-initiated, like post-purchase notifications

All conversations are measured in 24-hour increments, or "sessions", that start whenever the first message is delivered by a business. The first message can be initiated by the business (business-initiated) or a business reply within 24 hours of a user message (user-initiated). A user is defined as the person or entity with whom the business is messaging.

Charges for conversations are based on the user’s phone number. Rates for business-initiated conversations and user-initiated conversations vary by market (country or region). See Rates below.

**Free Tier Conversations**

The first 1,000 conversations each month will be free, so your business can start to build experiences your customers will love before having to pay. Each WABA gets 1,000 free tier conversations. Free tier conversations can be business-initiated or user-initiated\*\*.\*\*

**Free Entry Points Conversations**

Conversations will not be charged when users message businesses using call-to-action buttons on Ads that click to WhatsApp or a Facebook Page CTA. Free entry point conversations can only be user-initiated. Only the first conversation that starts from the entry point is free of charge. Subsequent conversations with the user are charged.

Standard pricing will apply for Ads that Click to WhatsApp. The conversation that initiates from the ad is free, but not the ad itself.

**Detailed pricing and examples can be found** [**on this link**](https://developers.facebook.com/docs/whatsapp/pricing/conversationpricing?locale=en\_US)**.**

</details>

<details>

<summary>Is there any price differentiation for the government?</summary>

Government Agencies must get approval from Facebook before creating any WhatsApp Business accounts. Please note that this process can take up to 60 days and will generate extra costs. To start the Government WABA Application process, please send the information requested in the form below. Then, a member of our team will reach out to you with the next steps. Anybody involved (partner, business, or government agency) can fill out the form. If needed, extra information will be requested by the team member responsible for the process.

[**Form Link**](https://marketplace.360dialog.com/government-access-request-form)

</details>

<details>

<summary>Can I have more than one number registered? Is there a price difference?</summary>

Yes, you can have more than one number but there isn’t a difference based on the number of numbers bought.

</details>

<details>

<summary>Which taxes are applied on Whatsapp in Brazil?</summary>

The 78$ price already includes taxes<mark style="color:red;">**.**</mark>

</details>

## <mark style="color:red;">Billing Model</mark>

<details>

<summary>How <strong>are charges</strong> made?</summary>

Trying to provide a better experience to our customers, Rocket.Chat will be responsible for sending a single invoice with any other charges that may be due Rocket.Chat.

</details>

## <mark style="color:red;">**App installation**</mark>

<details>

<summary>What to register first? 360 Dialog / Facebook?</summary>

The process starts at Rocket.Chat, after installing the App, the user is guided through all the steps. The 360D account will be created, the phone number will be sent and if all goes well, the number will be set up and ready for production in less than 10 minutes. It is also important for the customer to have a Facebook Business Manager account in the company's name. Check the signup documentation for details on this link.

</details>

<details>

<summary>What are the minimum requirements to be able to register?</summary>

A Facebook Business Manager account and a valid phone number capable of receiving calls or SMS.

</details>

## <mark style="color:red;">**Messaging with Whatsapp**</mark>

<details>

<summary>How does Whatsapp Template Messaging work?</summary>

Template messages must be submitted to Facebook for review before they are available to use. It is Facebook that reviews each template and checks that each message complies with their WhatsApp API guidelines

</details>

<details>

<summary>When to use templates for WhatsApp messaging?</summary>

If a customer initiates messaging with you, Facebook will not charge you for any WhatsApp messages (including Templated Messages) that you send to that customer for up to 24 hours following the last message that the customer sends to you ("Customer Care Window"). Any message you send to your customers beyond the Customer Care Window must be a Template Message. WhatsApp does not charge for incoming messages from the customer side or outgoing messages from the company side as long as they are sent within the 24-hour time window. To use a message template, WhatsApp wants to approve each message template to avoid spam. Once WhatsApp has approved your template, you can use the message template to send notifications. Templates use placeholder values that can be replaced with dynamic content inside double curly braces when the message is sent. Think of template messages as a conversation starter in a two-way conversation<mark style="color:red;">**.**</mark>

**Cost of WhatsApp Template Messages**

Template messages are subject to a WhatsApp country-specific price list and will be charged 1:1 to the customer without surcharge.\
Examples and approval tips [can be found on this link](https://docs.360dialog.com/whatsapp-api/whatsapp-api/template-messaging).

</details>

<details>

<summary>Can I send active messages to the customer?</summary>

Yes, but be aware of the details. If a customer initiates messaging with you, Facebook will not charge you for any WhatsApp messages (including Templated Messages) that you send to that customer for up to 24 hours following the last message that the customer sends to you ("Customer Care Window"). Any message you send to your customers beyond the Customer Care Window must be a Template Message. WhatsApp does not charge for incoming messages from the customer side or outgoing messages from the company side as long as they are sent within the 24-hour time window. [More info here](https://docs.360dialog.com/whatsapp-api/whatsapp-api/template-messaging).

</details>

<details>

<summary>How do I send active messages to the customer?</summary>

You should do that through template messages as explained above.

</details>

<details>

<summary>How do my agents send active messages to the customer?</summary>

You should do that through template messages as explained above.

</details>

<details>

<summary>After the client replies to an active message, does he go to the agent who sent it?</summary>

It depends on your current Omnichannel setup as it can be redirected to a specific department or if it’s public. The message will go to the agent who sent it as long as the agent is active, if not it will be redirected to an active agent. See our documentation. [Link](https://developer.rocket.chat/reference/api/rest-api/endpoints/apps-endpoints/whatsapp-endpoints)

</details>

## <mark style="color:red;">**Technical Questions**</mark>

### **How to register a number?**

First, you need to copy your newly generated API key on 360Dialog. After that, come back to your Rocket.Chat workspace and click Connect WhatsApp Number.

![](https://lh4.googleusercontent.com/80y-QCgnInHMUybqmPGzzc-ioZxhBIYxjjW1dCh8J4BPDbor-TKxmjoGFtea4WWS3eU3\_kqcpXn9g5w78voaoPYrF4u1j9qnYfAsSF1a\_-K8\_94jzLkCaNzalLstoR6I-agqG7Hd)

1. Paste your API key in **API Key**,
2. Associate this WhatsApp number to a specific **Department** if you want,
3. Set a **Welcome Message** if you want,
4. Set a **Conversation Finished Message** if you want. It is a message sent to your customer when an agent closes the conversation,
5. Set a **Default message for offline service** if you want. It is a message sent to your customer when no agents are available online,
6. Click **Connect**,

as shown below:

![](<../../.gitbook/assets/image (662) (1) (1) (1) (1) (1).png>)

Your WhatsApp number is now connected to Rocket.Chat, as shown below:

![](<../../.gitbook/assets/image (644) (1) (1) (1) (1) (1) (1).png>)

**Our documentation** [**about that is here**](https://docs.rocket.chat/guides/app-guides/omnichannel-apps/whatsapp/whatsapp-configuration/whatsapp-omnichannel-setup/connect-whatsapp-number-to-your-workspace)**.**

<details>

<summary>Could it be a number that has already been used by an Individual? And a Corporation?</summary>

Yes, but the number submitted must be a new number that has never been used before as an API. If the customer wants to port their number from another broker, 360D provides this service but it doesn't work through the regular submission form available via the setup channel. It is important to remember that once a number is used as an API, it cannot be used again.

</details>

<details>

<summary>Can it be VOIP / 0800 / Landline?</summary>

Yes, all of them. You can choose whether you prefer to receive the code by call or SMS. So, in the case of a landline, you can choose the call. In general, those 0800 lines have an audible response unit (ARU) to distribute the service to the best sector. Also, we suggest disabling it when you receive the call or configuring it so that the call reaches a functional line.

</details>

<details>

<summary>After using this phone, can I change the number?</summary>

In fact, you can't exactly change the number. What you can do is register a new number and then delete the old one.

</details>

<details>

<summary>After using this phone, can I use it again?</summary>

A number can only be registered once in the API. If you need, you can migrate to another vendor. But if the number is excluded, it becomes infeasible.

</details>

<details>

<summary>Is there a chatbot for WhatsApp?</summary>

One of Rocket.Chat’s strength is its integration flexibility capabilities. Meaning that a variety of chatbot solutions can now be natively integrated into Rocket.Chat’s Omnichannel and offer automated service on the WhatsApp for Business channel. Bring the power of chatbot automation to Rocket.Chat and provide personalized experiences for your customers in the world's most popular instant messaging app.

</details>

## <mark style="color:red;">**Support**</mark>

<details>

<summary>How to receive support for WhatsApp?</summary>

All issues regarding WhatsApp should be dealt with directly with Rocket.Chat. Our support team will be responsible for any contact with 360Dialog or Facebook if needed.

</details>

<details>

<summary>360 Dialog and Facebook: Who supports it and how?</summary>

The customer will have an account with 360dialog, but Rocket.Chat is the one providing the service and billing so the first point of contact should always be us following the guidelines mentioned above.

</details>
