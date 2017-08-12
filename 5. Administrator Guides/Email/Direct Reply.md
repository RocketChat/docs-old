# Direct Reply [Email]

## Introduction
Enabling this feature will allow your users to reply to chat messages by directly replying to email notifications they receive.

## Setup credentials
Go to Administration settings -> Email -> Direct Reply.

Enter:
 - select email server's protocol (`IMAP` or `POP`)
 - your email server's host name (e.g. `imap.example.com` or `pop.example.com`)
 - the port (143 or 993 for IMAP and 110 or 995 for POP)
 - ignore TLS `true` if port 143 or 110
 - email check frequency if pop server (>=2)
 - your credentials (Username & password)

 Once filled, click "Save changes".

![IMAP server configuration.](imap-1.png)
![POP server configuration.](pop-1.png)

Now you can reply chat messages via email. It supports full formating like inline, multiline, bold, italics etc.
