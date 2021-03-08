# Rocket.Chat and Zenvia API integration

**Added in version:**

3.1.0-develop

**Type of feature:**

SMS Integration

**Involved settings:**

SMS -> Zenvia -> API Token: Authentication Token for Zenvia API

SMS -> Zenvia -> Channel: Channel to be used with Zenvia API. Possible values are whatsapp, sms or facebook

SMS -> Zenvia -> From: Default "From" name for API calls

**Description:**

This feature is almost based on Twilio's integration, making it possible to integrate Omnichannel with Whatsapp, Facebook or SMS through Zenvia.

**How to use this feature:**

## Step 1

Ask access to the [Zenvia Sandbox](https://app.zenvia.com/home/sandbox).

## Step 2

Create a new Sandbox choosing **Whatsapp** channel.

## Step 3

Setup your whatsapp as asked to attach the sandbox.

## Step 4

In the final step, set **"Message Webhook URL"** to:

`https://<SERVER_URL>/api/v1/livechat/sms-incoming/zenvia`

## Step 5

Fill the settings of Rocket.Chat at SMS administration area, under Zenvia subsection.


That's it!
