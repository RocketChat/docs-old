# Nixstats notification

Add Nixstats notifications via a new WebHook in Rocket.Chat

1. In Rocket.Chat go to "Administration"-&gt;"Integrations" and create "New Integration"
2. Choose Incoming WebHook
3. Follow all instructions like Enable, give it a name, link to channel etc. Set "Enable Script" to true and enter the javascript in the "Script" box
4. Press Save changes and copy the _Webhook URL_ \(added just below the script box\)
5. Go to [https://nixstats.com](https://nixstats.com) -&gt; Settings -&gt; Notification Contacts -&gt; Add \(or Edit a contact\) contact
6. Paste the Rocket.Chat url you've copied in step 4

Paste this javascript in the "Script" textarea on Rocket.Chat webhook settings

```text
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

## Render nixstats graphs in Rocket.Chat

Add Nixstats notifications via a new WebHook in Rocket.Chat

1. In Rocket.Chat go to "Administration"-&gt;"Integrations" and create "New Integration"
2. Choose Outgoing WebHook
3. Select **Message Sent** as Event trigger
4. Enter **ns** as trigger word
5. Enter `<https://api.eu.nixstats.com/v1/>` as URLs
6. Avatar URL `<https://nixstats.com/images/favicon.png>`
7. **Token**, this is your nixstats API token, [create an API key](https://nixstats.com/settings/api).
8. Script Enabled set to **True**

Paste this javascript in the "Script" textarea on Rocket.Chat webhook settings

```text
/* exported Script */
/* globals Store */

class Script {
  prepare_outgoing_request({ request }) {
    let match;

    match = request.data.text.match(/^ns servers\s(ls|list)\s*(.*)?$/);
    if (match) {
      let u = request.url + 'servers?perpage=99&token='+request.data.token;
      return {
        url: u,
        headers: request.headers,
        method: 'GET'
      };
    }

    match = request.data.text.match(/^ns graphs\s(.*)?$/);
    if (match) {
      var matched = false;
      var options;
      var serverrequest = HTTP('GET', request.url + 'servers?perpage=99&token='+request.data.token, options);
      var serverlist = []
      JSON.parse(serverrequest.result.content).servers.forEach(function(pr) {
        serverlist.push({'name': pr.name, 'id': pr.id});
      });

      serverlist.forEach(function(serv) {
        if(serv.id == match[1])
        {
          matched = serv.id;
        }
        if(serv.name == match[1])
        {
          matched = serv.id;
        }
      });

      if(!matched){
        return {
          message: {
            text: 'Server not found.'
          }
        };
      }
      else
      {
        let u = request.url + 'server/'+matched+'?charts=yes&token='+request.data.token;
        return {
          url: u,
          headers: request.headers,
          method: 'GET'
        };
      }
    }

    match = request.data.text.match(/^help$/);
    if (match) {
      return {
        message: {
          text: [
            '**Nixstats commands**',
            '```',
              '  ns servers ls|list',
              '  ns graphs serverid|servername',
            '```'
          ].join('\n')
        }
      };
    }
  }

  process_outgoing_response({ request, response }) {
    var text = [];
    var attach = [];
    if(response.content.charts)
    {
      response.content.charts.forEach(function(pr) {
        attach.push({
           "color": "#000000",
           "text": pr.title+" on "+response.content.name,
           "image_url": pr.url,
         });
      });
        text.push('Performance of '+response.content.name);
    }
    else
    {
      text.push('```');
      response.content.servers.forEach(function(pr) {
        text.push(''+pr.id+"\t "+pr.last_data.load.replace(",",",\t")+"\t"+pr.name+'');
      });
      text.push('```');
    }
    return {
      content: {
        text: text.join('\n'),
        attachments: attach,
        parseUrls: false
      }
    };
  }
}
```

After saving the data you can use the following commands to retrieve data.

`ns servers list` to list your servers with their IDs and load average.

![](https://github.com/NIXStats/Nixstats-integrations/blob/master/rocketchat/serverlist.png)

`ns graphs [serverid]` to retrieve a graph of Memory, Network, Load average and Disk usage of the specified server.

![](https://github.com/NIXStats/Nixstats-integrations/blob/master/rocketchat/graphs.png)

