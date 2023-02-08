---
description: >-
  This app enables forwarding uploaded files to an open-source antivirus
  (ClamAV) application and prevents the upload from completing in Rocket.Chat in
  case of virus.
---

# Antivirus ClamAV App

The ClamAV app is a simple integration with the ClamAV server, which is the antivirus. You have to install and run the ClamAV server, and then the ClamAV app connects to it.

Please visit the ClamAV [documentation](https://www.clamav.net/documents/clam-antivirus-user-manual) for details on installing and running the server.

This app enables forwarding uploaded files to an open-source antivirus (ClamAV) application and prevents the upload from completing in Rocket.Chat if a virus is detected. It works across web browsers, desktop apps, and mobile apps Use it to prevent users from spreading viruses and malware via Rocket.Chat ClamAV is an open-source (GPL) antivirus engine used in various situations, including email scanning, web scanning, and endpoint security. It provides several utilities, including a flexible and scalable multi-threaded daemon, a command-line scanner, and an advanced tool for automatic database updates.

## Installing the ClamAV Integration

To use the ClamAV app, it needs to be installed by the administrator of your workspace.\
This can be done by

* Open up your Rocket.Chat workspace
* Navigate to **Administration** > **Workspace** > **Apps**
* Search for ClamAV Integration
* Click and open the result, this shows you details about the app
* Hit **Install** to install the app
* Hit **Install** to install the app

## Configure ClamAV Integration

After installing the app, follow these instructions to set it up.

* Open the ClamAV Integration app details page
* Switch to the **Settings** tab
* Configure the following settings as needed
  * **ClamAV Server Host**: The ClamAV Server Host (where your ClamAV server is hosted)&#x20;
  * **ClamAV Server Port**: The port for your ClamAV server.
