# Troubleshoot Livechat Widget Installation

If you face problems displaying the Livechat Widget it's useful to open the browser developer console and check the details of the errors you might be facing.

### Failed to read 'localStorage' properly from Window

![](<../../../.gitbook/assets/Clipboard - May 12, 2022 4\_21 PM.png>)

An error like this is related to your browser settings for third party cookies. You may want to try with another browser or review your browser settings to confirm it's not blocking third party cookies.&#x20;

### Trying to access localhost:3000

![](<../../../.gitbook/assets/Clipboard -2.png>)

You should review the Site URL setting under **Administration** > **General** > **Site URL**  variable and possibly also the server name setting on your reverse proxy if you have one to guarantee they are all aligned and corresponding to the same URL being used in your Livechat Widget installed script.&#x20;
