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
 - email check frequency (in minutes) if pop server (>=2)
 - your credentials (Username & password)

 Once filled, click "Save changes".

## Example Settings

### IMAP Settings
![IMAP server configuration.](imap-1.png)

### POP3 Settings
![POP server configuration.](pop-1.png)

Make sure your **POP3** server **doesn't** keep **copy** of the emails, otherwise it would be treated as new message every time.

Now you can reply chat messages via email. It supports full formating like inline, multiline, bold, italics etc.

## Note
- As par now, emails only in **English** language are supported or atleast quote `On <date>, <author> wrote:` is in English.
Email body in languages **other than English** may also work until and unless `On <date>, <author> wrote:` is in English or copy of **older email** is **removed** manually.
- Only **text** messages will be supported, attachments are not supported.
