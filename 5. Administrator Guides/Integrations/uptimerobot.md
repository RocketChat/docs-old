Add UptimeRobot notifications via a new WebHook in RocketChat
1. In Rocket.Chat go to "Administration"->"Integrations" and create "New Integration"
2. Choose Incoming WebHook
3. Follow all instructions like Enable, give it a name, link to channel etc. Set "Enable Script" to true and enter the javascript in the "Script" box
4. Press Save changes and copy the *Webhook URL* (added just below the script box)
5. Go to UptimeRobot.com -> MySettings -> Add Alert Contact -> Select Alert contact type: "Web-Hook"
6. Paste the Rocket.Chat url you've copied in step 4, and add an "?" at the end of the URL in the "URL to Notify" field
7. Paste the following in the "POST Value (JSON Format)" field:

```
{
"url": "*monitorURL*",
"status": "*alertType*"
}
```

Paste this in javascript in the "Script" textarea on Rocket.Chat webhook settings
```javascript
/* exported Script */
/* globals console, _, s */

/** Global Helpers
 *
 * console - A normal console instance
 * _       - An underscore instance
 * s       - An underscore string instance
 */

class Script {
  /**
   * @params {object} request
   */
  process_incoming_request({ request }) {
    var status;
    var color;
      
    if (request.content.status === '2') {
      color="green";
      status="Up.";
    } else {
      color="red";
      status="Down.";
    }
    return {

      content:{
        text: request.content.url + " is " + status,
        "attachments": [{
         "color": color,
         "author_name": "Uptime",
         "author_link": "https://uptimerobot.com",
         "author_icon": "https://lh6.ggpht.com/rQtmJiBO7YiKQfBnbwJRyi_Vr1j1Qlzt9oHuO-w0-STVJCZkIOdyTYYj-AU4Z6-D6RI=w300"
         }]
       }
    };

  }
}
```
