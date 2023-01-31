---
description: Enable and configure SMS gateways on your workspace.
---

# SMS

This setting lets you configure various SMS gateways on your workspace.

To access this menu, navigate to **Administration** > **Workspace** > **Settings** > **SMS**.

* **Enabled**: This lets you enable or disable SMS service on your server.
* **Service**: Select the available SMS services e.g `Twilio`, `Mobex`, `Voxtelesys`
* **Omnichannel Department (Default)**: If set, all new incoming chats initiated by this integration are routed to this department.

## Mobex

Create a Mobex account at [https://mobex.biz/](https://mobex.biz) and get a plan with the needed credentials to configure your Mobex SMS integration.

* **Mobex SMS Gateway Address**: IP or Host of your Mobex service with the specified port. E.g. `http://192.168.1.1:1401` or `https://www.example.com:1401`
* **Mobex SMS REST API Address**: IP or Host of your Mobex REST API. E.g. `http://192.168.1.1:8080` or `https://www.example.com:8080`
* **Username**: Your username
* **Password**: Your Mobex password
* **From**: Originating address/phone number when sending a new SMS to Live Chat client
* **List of numbers to send SMS from**: Comma-separated list of numbers to use in sending brand new messages, eg. `123456789`, `123456788`, `123456888`

## Twilio

* **Account SID**: Your account's SID. It is provided by Twilio.
* **Auth Token**: Your Twilio auth token
* **File Uploads Enabled**: When enabled, file uploads will be active in SMS
* **Accepted Media Types**: Comma-separated list of media types. Leave it blank for accepting all media types.

## Voxtelesys <a href="#1t0nl2lpq6o" id="1t0nl2lpq6o"></a>

* **Auth Token**: Your Voxtelesys auth token
* **URL**: The Voxtelesys URL e.g `https://smsapi.voxtelesys.net/api/v1/sms`
* **File Uploads Enabled**: When enabled, file uploads are made available
* **Accepted Media Types**: Comma-separated list of media types. Leave it blank for accepting all media types.
