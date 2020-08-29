# Security fixes and updates

This page includes regular updates about recently patched security issues in Rocket.Chat.

Do you want to report a security issue yourself? Please have a look at our [Responsible Disclosure Policy](https://docs.rocket.chat/contributors/contributing/security#if-you-find-a-security-issue). We appreciate your reports.

New issues are listed below, at first without details to give administrators and users sufficient time to upgrade. Details to the issue are added in with the next version release, e.g.: fixes introduced in version x.1 will be added when version x.2 is available.

Please make sure to follow new version updates by subscribing to our newsletters or activating the announcement feature for new releases directly in the Rocket.Chat server administration settings. We recommend updating to the newest version as soon as possible to always have the newest security fixes.

**Issues**

<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>ID</b>
      </th>
      <th style="text-align:left"><b>Severity</b>
      </th>
      <th style="text-align:left"><b>Affected Versions</b>
      </th>
      <th style="text-align:left"><b>Fix Release Date</b>
      </th>
      <th style="text-align:left"><b>Fix Versions</b>
      </th>
      <th style="text-align:left"><b>Issue Details</b>
      </th>
      <th style="text-align:left"><b>Issue Platform</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">RC-2020-0001</td>
      <td style="text-align:left">High</td>
      <td style="text-align:left">v3.4.x</td>
      <td style="text-align:left">2020-07-25</td>
      <td style="text-align:left">
        <p>v.3.5</p>
        <p>v.3.4.2</p>
      </td>
      <td style="text-align:left"><b>(RCE) </b>Fixed an issue where thread starting messages could be used
        to insert and execute code. Thanks to Pawel Wylecial of REDTEAM.PL</td>
      <td
      style="text-align:left">Rocket.Chat server</td>
    </tr>
  </tbody>
</table>

