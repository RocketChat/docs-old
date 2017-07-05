Add Nixstats notifications via a new WebHook in Rocket.Chat

1. In Rocket.Chat go to "Administration"->"Integrations" and create "New Integration"
2. Choose Incoming WebHook
3. Follow all instructions like Enable, give it a name, link to channel etc. Set "Enable Script" to true and enter the javascript in the "Script" box
4. Press Save changes and copy the *Webhook URL* (added just below the script box)
5. Go to nixstats.com -> Settings -> Notification Contacts -> Add (or Edit a contact) contact
6. Paste the Rocket.Chat url you've copied in step 4

Paste this in javascript in the "Script" textarea on Rocket.Chat webhook settings

```/* exported Script */
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
    var url;
    var url_title;
    if(request.content.domain_id)
    {
      url = 'https://nixstats.com/domains/'+request.content.domain_id;
      url_title = request.content.name+" @ nixstats.com";
    }
    else
    {
      url = 'https://nixstats.com/server/'+request.content.server_id;  
      url_title = request.content.server_name+" @ nixstats.com";
    }
    return {
     content:{
        text: request.content.subject,
        "attachments": [
          {
            "author_name": url_title,
            "author_link": url,
            "author_icon": "https://nixstats.com/images/favicon.png"
          }
          ]
       }
    };
  }
}
```
