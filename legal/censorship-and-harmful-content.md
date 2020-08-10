# Censorship and Harmful Content

Last updated: May 6th 2020

## Our stance on harmful content and censorship in Rocket.Chat

Our position:

Rocket.Chat is built to be an open and free communication platform. We want everyone to be able to run it and use our platform freely and to improve people's lives. Today, our platform is used for myriads of different purposes, according to how our users deem it fit for their purposes.

We also do not want to be the judges on what constitutes the “right” way to use Rocket.Chat. Moral values differ from person to person and laws often collide over highly debated issues such as free speech. We believe the users of Rocket.Chat know best how to use our platform to their benefit.

### How does Rocket.Chat deal with reports of illegal content?

Sometimes, our organization receives a request from a law enforcement body with the aim to produce a certain set of user data to aid in a criminal investigation. Or there might be a request to take down content that has been deemed illegal. We treat these requests very carefully and - where we are able and obliged to help - bring this to the attention of the administrator of the instance. Oftentimes, we cannot do anything though.

That is because we have no way to access or control Rocket.Chat servers. Our platform is open source and has no backdoors or whatsoever to allow us to remotely access your installations. In case of instances hoste by us for others, we forward them to the respective administrator. Where the request is about content on a server directly under our control, such as our Open Server, you can contact us directly under legal@rocket.chat.\).

### Resources for Administrators Be Notified About Harmful Content

On the same side, we also see that many organizations using our platform are subject to strict content moderation requirements. For these organizations, we already are providing various features to administer their instance. For example, notifications for keywords can help to quickly identify potential abuse. Administrators that want to use these features can use them, but are not forced by us to use them. Ultimately, the administrator is the one responsible for what content is being processed within their Rocket.Chat instance.

With this being the current situation, we wanted to share our stance on how we are planning to deal with addressing harmful content in the near future.

### Our principles

**Our policy principles in this matter are:**

* We do not endorse illegal or unethical usage of Rocket.Chat in any way. We understand these terms to be relative and to be interpreted in their local context.
* We want Rocket.Chat to be a platform that allows for free and unrestricted communication. We do not plan or want to build any kind of backdoor, censorship tool or hidden remote control mechanism into Rocket.Chat.
* Administrators are the ones in control over their installation. Administrators are responsible for their decisions on configuration and content moderation within their instance.
* We comply with valid local or international law enforcement requests to produce user data and inform our users affected by these requests.
* On our Open Server run by us, we want to provide users a positive and fun environment to test our platform and get in touch with us.

**While none of these principles are absolute, they are guiding our actions.**

## What can you do when dealing with harmful content in Rocket.Chat?

**For users:** On our [Open Server](https://open.rocket.chat/), you can report harmful content as per our [code of conduct](https://rocket.chat/code-of-conduct) and we will look into removing it. We want you to be able to use our open.server hassle free.

If you encounter another Rocket.Chat instance that is not hosted by us and which you think contains illegal or otherwise harmful content, we recommend you reach out to the administrator of that instance to moderate the related content.

If you do not know who is your administrator, you can check the DNS records for contact information. For instances that are hosted by us, we can contact the administrator on behalf of you. We have published a tool where you can find out if a Rocket.Chat instance is hosted by us \([server lookup](https://rocket.chat/server-lookup)\). This is not always clear because no one is obliged to use the Rocket.Chat logo or name.

As an ultimate resort, you may want to reach out to the law enforcement body in charge of investigating the potential offense in question. They will tell you the legal remedies available and the potential next steps to take.

**For administrators:** If you are an administrator, you might have an interest in moderating the content in your instance. Notable features that can help you with that are:

* Making use of the “moderator”-permission in channels to appoint individuals to purge or modify inappropriate messages
* Notification feature for the use of specified words of phrases
* Blacklisting certain words or phrases
* Notifying your users of applicable policies via e.g. pinning messages or adding an announcement to the room
* Requiring confirmation of user registration by an administrator, to prevent unvetted users from posting messages
* Enabling end-to-end encryption: with end-to-end encryption enabled, only an encrypted string of the message is stored on the server. This however prevents content auditing via administrators and moves responsibility for content moderation to users.
* Turning on GoogleVision integration for image uploads, which has options to block images containing graphic or adult content

All of these features are optional to choose, so you have the total flexibility in what to apply in your specific case. Let us know which kind of features you are currently missing - but would find useful - by opening feature requests in our Github repository \(link\).

**For law enforcement:** We sometimes receive requests from law enforcement to remove content from certain Rocket.Chat instances. We have published guidelines for law enforcement \(link\), how we deal with requests and what to consider before submitting a request to us as the legal entity behind Rocket.Chat.

**In summary:** In most cases, we cannot remove the majority of content, because it is outside of our control on servers we do not have \(and do not want\) access to. If the content in question is on our Open Server, we remove it if it is a breach of our code of conduct or if we are compelled by a law enforcement request. For servers hosted by us and under control of our customers, we remove content after notifying and in collaboration with the instance owner. For questions or contact, please use [legal@rocket.chat](mailto:legal@rocket.chat)

**For reporters and media requests:** Are you researching for an article about Rocket.Chat or where Rocket.Chat plays a role?

We would love to explain to you our stance in detail or get a chance to comment before you publish your article. Please reach out to [contact@rocket.chat](mailto:contact@rocket.chat) to get a comment from us on the topic in question.

