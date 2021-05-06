# Security fixes and updates

This page includes regular updates about recently patched security issues in Rocket.Chat.

Do you want to report a security issue yourself? Please have a look at our [Responsible Disclosure Policy](https://docs.rocket.chat/contributors/contributing/security#if-you-find-a-security-issue). We appreciate your reports.

New issues are listed below, at first without details to give administrators and users sufficient time to upgrade. Details to the issue are added in with the next version release, e.g.: fixes introduced in version x.1 will be added when version x.2 is available.

{% hint style="info" %}
Providing fixes for legacy versions of Rocket.Chat becomes increasingly difficult due to the code differences, which is why we focus on providing fixes for the most recent versions only. Please see our [support policy](https://docs.rocket.chat/getting-support), which outlines our supported versions.
{% endhint %}

Please make sure to follow new version updates by subscribing to our newsletters or activating the announcement feature for new releases directly in the Rocket.Chat server administration settings. We recommend updating to the newest version as soon as possible to always have the newest security fixes.

**Issues**

{% hint style="danger" %}
**0026 - Critical Severity issue** fixed at **2021-04-14.**

Rocket.Chat Server - affects **all,** fixed on **3.13.2, 3.12.4, 3.11.4**

_Details about this security fix will be provided later as per our responsible disclosure policy. \(reference:_ 3v299a\)
{% endhint %}

{% hint style="danger" %}
**0025 - Critical Severity issue** fixed at **2021-04-14.**

Rocket.Chat Server - affects **all,** fixed on **3.13.2, 3.12.4, 3.11.4**

_Details about this security fix will be provided later as per our responsible disclosure policy. \(reference:_ 3v29b6\)
{% endhint %}

{% hint style="danger" %}
**0024 - Critical Severity issue** fixed at **2021-04-14.**

Rocket.Chat Live.Chat - affects **all,** fixed on **3.13.2, 3.12.4, 3.11.4**

_Details about this security fix will be provided later as per our responsible disclosure policy. Variation of 0023. \(reference:_ 3h5cty\)
{% endhint %}

{% hint style="danger" %}
**0023 - High Severity issue** fixed at **2021-03-26.**

Rocket.Chat Live.Chat - affects **all,** fixed on **3.13, 3.12.2, 3.11.3**

_Details about this security fix will be provided later as per our responsible disclosure policy. \(reference:_ 3h5cty\)
{% endhint %}

{% hint style="info" %}
**0022 - Low Severity issue** fixed at **2021-03-26.**

Rocket.Chat Server - affects **all,** fixed on **3.13, 3.12.2, 3.11.3**

_\(**Self-XSS\)** An issue with SVG files not being sanitized allowed for potential self XSS. \(reference:_ 98bfae\)
{% endhint %}

{% hint style="info" %}
**0021 - Low Severity issue** fixed at **2021-03-26.**

Rocket.Chat Server - affects **all,** fixed on **3.13, 3.12.2, 3.11.3**

_\(**Email enumeration\)** An issue with an API method allowed for potential email enumeration. \(reference:_ 6tr8gn\)
{% endhint %}

{% hint style="warning" %}
**0020 - Medium Severity issue** fixed at **2021-03-26.**

Rocket.Chat Server - affects **all,** fixed on **3.13, 3.12.2, 3.11.3**

_\(**ReDOS\)** An issue with certain regular expressions could lead potentially to Denial of Service. \(reference:_ 2q6wxz\)
{% endhint %}

{% hint style="warning" %}
**0019 - Medium Severity issue** fixed at **2021-02-27.**

Rocket.Chat Server - affects **all,** fixed on **3.12, 3.11.2, 3.10.6**

_\(**Authentication\)** An authentication issue allowed adding users to rooms without proper authorization. \(reference:_ 330zt5_\)_
{% endhint %}

{% hint style="danger" %}
**0018 - Critical Severity issue** fixed at **2021-02-27.**

Rocket.Chat Server - affects **all,** fixed on **3.12, 3.11.2, 3.10.6**

**\(SAML\)** A race condition in the SAML implementation could be exploited by an attacker. An issue with the token syntax could be exploited. \(reference: 397ymy\)
{% endhint %}

{% hint style="info" %}
**0017 - Low Severity issue** fixed at **2021-02-27.**

Rocket.Chat Server - affects **all,** fixed on **3.12, 3.11.2, 3.10.6**

_\(**Self-XSS\)** A sanitization issue  could be exploited for a Self-XSS exploit._
{% endhint %}

{% hint style="warning" %}
**0016 - Medium Severity issue** fixed at **2021-01-26.**

Rocket.Chat Server / LiveChat - affects **all,** fixed on **3.11, 3.10.5, 3.9.7, 3.8.8.**

**\(Authentication\)** An issue with the Live Chat could potentially allow a user without the proper permission to modify a setting.
{% endhint %}

{% hint style="danger" %}
**0015 - Critical Severity issue** fixed at **2021-01-26.**

Rocket.Chat Server / LiveChat - affects **all,** fixed on **3.11, 3.10.5, 3.9.7, 3.8.8.**

**\(Authentication\)** An issue with the Live Chat accepting invalid parameters  could potentially allow unauthenticated access to messages and user tokens.
{% endhint %}

{% hint style="danger" %}
**0014 - High Severity issue** fixed at **2021-01-26.**

Rocket.Chat Server - affects **all,** fixed on **3.11, 3.10.5, 3.9.7, 3.8.8.**

**\(XSS\)** An issue with the message parser could potentially lead to XSS.
{% endhint %}

{% hint style="warning" %}
**0013 - Medium Severity issue** fixed at **2021-01-26.**

Rocket.Chat Server - affects **all,** fixed on **3.11, 3.10.5, 3.9.7, 3.8.8.**

**\(XSS\)** An issue with the rendering of the user profile could potentially lead to XSS.
{% endhint %}

{% hint style="info" %}
**0012 - Low Severity issue** fixed at **2021-01-26.**

Rocket.Chat Server - affects **all,** fixed on **3.11, 3.10.5, 3.9.7, 3.8.8.**

**\(System Information Disclosure\)** A method was removed, that could be called by unauthenticated users to potentially gather information about the target host.
{% endhint %}

{% hint style="info" %}
**0011 - Low Severity issue** fixed at **2021-01-26.**

Rocket.Chat Server - affects **all,** fixed on **3.11, 3.10.5, 3.9.7, 3.8.8.**

**\(User enumeration\)** A method could be called by unauthenticated users, potentially leading to user enumeration.
{% endhint %}

{% hint style="danger" %}
**0010 - High Severity issue** fixed at **2021-01-26.**

Rocket.Chat Server - affects **all,** fixed on **3.11, 3.10.5, 3.9.7, 3.8.8.**

**\(Authentication\)** An issue with invite-tokens could allow unauthenticated users to guess a valid invite token.
{% endhint %}

{% hint style="warning" %}
**0009 - Medium Severity issue** fixed at **2021-01-26**

Rocket.Chat Server - affects **all,** fixed on **3.11, 3.10.5, 3.9.7, 3.8.8.**

**\(Information Disclosure\)** An issue with a real time method could lead to leakage of message IDs.
{% endhint %}

{% hint style="danger" %}
**0008 - High Severity issue** fixed at **2021-01-26**

Rocket.Chat Server - affects **all,** fixed on **3.11, 3.10.5, 3.9.7, 3.8.8.**

**\(Information Disclosure\)** An issue with the return of a real time method could lead to unauthorized leaks of message content.
{% endhint %}

{% hint style="warning" %}
**0007 - Medium Severity issue** fixed at **2020-11-28**  
Rocket.Chat Server - affects **all,** fixed on **3.9.**  
\(**Self-XSS**\) An issue with the drag and drop functionality was fixed that - under certain circumstances - could be used as part of possible self-xss attack_._ 

Thanks a lot to Jorge Cardona for reporting this.

CVE-ID: CVE-2020-8292	__
{% endhint %}

{% hint style="danger" %}
**0006 - Critical Severity issue** fixed at **2020-12-18**  
Rocket.Chat Server - affects **1.x, 2.x**, **3.x,** fixed on **3.9.3 / 3.8.4 / 3.7.4 / 2.4.14 / 1.3.5**  
**\(XSS\)** A vulnerability in the message renderer was fixed that allowed for possible XSS attacks. More details [here](https://rocket.chat/xss-vulnerability-hotfix-available-for-all-affected-versions).

CVE-ID:  __CVE-2020-8288
{% endhint %}

{% hint style="danger" %}
**0005 - Critical Severity issue** fixed at **2020-12-05**  
Rocket.Chat Server - affects **0.x, 1.x, 2.x**, **3.x,** fixed on **3.9.1 / 3.8.3 / 3.7.3 / 2.4.13 / 1.3.4 / 0.74.4**  
**\(Authentication bypass\)** A SAML vulnerability was fixed that allowed adding custom SAML providers. More details [here](https://rocket.chat/saml-security-hotfix-available/).

CVE-ID: CVE-2020-29594
{% endhint %}

{% hint style="danger" %}
**0004 - High Severity issue** fixed at **2020-10-01**  
Rocket.Chat Desktop Client - affects **2.x**, ****fixed on **3.0**  
**\(RCE\)** Fixed via context isolation an issue where link preload could be used to execute code.
{% endhint %}

{% hint style="danger" %}
**0003 - High Severity issue** fixed at **2020-08-29**  
Rocket.Chat Server - affects **3.4.x**, ****fixed on **3.6**  
**\(RCE\)** Fixed an issue where discussion messages could be used to insert and execute code.
{% endhint %}

{% hint style="info" %}
**0002 - Low Severity issue** fixed at **2020-08-29**  
Rocket.Chat Server - affects **3.x**, ****fixed on **3.6**   
Added a missing X-Frame Options Header in the admin
{% endhint %}

{% hint style="danger" %}
**0001 - High Severity issue** fixed at **2020-07-25**  
Rocket.Chat Server - affects **3.4.x**, ****fixed on **3.5** and **3.4.2**  
**\(RCE\)** Fixed an issue where thread starting messages could be used to insert and execute code. Thanks to Pawel Wylecial of [REDTEAM](http://redteam.pl/)_.PL_
{% endhint %}



