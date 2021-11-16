---
description: >-
  This app enables forwarding uploaded files to an open-source antivirus
  (ClamAV) application and prevents the upload from completing in Rocket.Chat in
  case of virus.
---

# Antivirus ClamAV App

ClamAV app is a simple integration with the ClamAV server which is the antivirus. You have to install and run the ClamAV server and then the ClamAV app connects to it.

Please visit the ClamAV [documentation](https://www.clamav.net/documents/clam-antivirus-user-manual) to find details on installing and running the server.

This app enables forwarding uploaded files to an open-source antivirus (ClamAV) application and prevents the upload from completing in Rocket.Chat if a virus is detected. It works across web browsers, desktop apps and mobile apps Use it to prevent users from spreading viruses and malware via Rocket.Chat ClamAV is an open-source (GPL) antivirus engine used in a variety of situations, including email scanning, web scanning, and endpoint security. It provides a number of utilities including a flexible and scalable multi-threaded daemon, a command-line scanner, and an advanced tool for automatic database updates.

You can find/install it under Apps in the Administration menu, as shown below:

![](<../../../.gitbook/assets/image (391).png>)

If you install/open the app, there are only two settings that you need for the integration to work.

You need to enter the ClamAV Server Host (where your ClamAV server is hosted) and the port for your ClamAV server.

![](<../../../.gitbook/assets/image (344) (2).png>)

## **View Logs**

To view logs:

![](<../../../.gitbook/assets/image (408).png>)

![](<../../../.gitbook/assets/image (409) (1) (1).png>)
