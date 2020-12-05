# Security fixes and updates

This page includes regular updates about recently patched security issues in Rocket.Chat.

Do you want to report a security issue yourself? Please have a look at our [Responsible Disclosure Policy](https://docs.rocket.chat/contributors/contributing/security#if-you-find-a-security-issue). We appreciate your reports.

New issues are listed below, at first without details to give administrators and users sufficient time to upgrade. Details to the issue are added in with the next version release, e.g.: fixes introduced in version x.1 will be added when version x.2 is available.

Please make sure to follow new version updates by subscribing to our newsletters or activating the announcement feature for new releases directly in the Rocket.Chat server administration settings. We recommend updating to the newest version as soon as possible to always have the newest security fixes.

**Issues**

\*\*\*\*

{% hint style="danger" %}
**2020-0005 - Critical Severity issue** fixed at **2020-12-05**  
Rocket.Chat Server - affects **0.x, 1.x, 2.x**, **3.x,** fixed on **3.9.11 / hotfix versions for prior major releases**  
_Details of the security issue will be added later as per the responsible disclosure policy._
{% endhint %}

{% hint style="danger" %}
**2020-0004 - High Severity issue** fixed at **2020-10-01**  
Rocket.Chat Desktop Client - affects **2.x**, ****fixed on **3.0**  
**\(RCE\)** Fixed via context isolation an issue where link preload could be used to execute code.
{% endhint %}

{% hint style="danger" %}
**RC-2020-0003 - High Severity issue** fixed at **2020-08-29**  
Rocket.Chat Server - affects **3.4.x**, ****fixed on **3.6**  
**\(RCE\)** Fixed an issue where discussion messages could be used to insert and execute code.
{% endhint %}

{% hint style="info" %}
**RC-2020-0002 - Low Severity issue** fixed at **2020-08-29**  
Rocket.Chat Server - affects **3.x**, ****fixed on **3.6**   
Added a missing X-Frame Options Header in the admin
{% endhint %}

{% hint style="danger" %}
**RC-2020-0001 - High Severity issue** fixed at **2020-07-25**  
Rocket.Chat Server - affects **3.4.x**, ****fixed on **3.5** and **3.4.2**  
**\(RCE\)** Fixed an issue where thread starting messages could be used to insert and execute code. Thanks to Pawel Wylecial of [REDTEAM](http://redteam.pl/)_.PL_
{% endhint %}



