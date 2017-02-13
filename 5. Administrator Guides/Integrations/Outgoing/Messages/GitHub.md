### Send commands to GitHub

```
This script only works for public repositories
```

* Create a new **Outgoing WebHook**
* Select the channel where you will use the commands and receive the responses
* Set **URLs** as `https://api.github.com/repos/User-Or-Org-Name/Repo-Name` like `https://api.github.com/repos/RocketChat/Rocket.Chat`
* Enable Scripts
* Use this **Script** to listen for commands `pr ls`, `pr list` and `help`

```javascript
/* exported Script */
/* globals Store */

class Script {
  prepare_outgoing_request({ request }) {
    let match;

    console.log('lastCmd', Store.get('lastCmd'));

    match = request.data.text.match(/^pr last$/);
    if (match && Store.get('lastCmd')) {
      request.data.text = Store.get('lastCmd');
    }

    match = request.data.text.match(/^pr\s(ls|list)\s*(open|closed|all)?$/);
    if (match) {
      Store.set('lastCmd', request.data.text);
      let u = request.url + '/pulls';
      if (match[2]) {
        u += '?state='+match[2];
      }
      return {
        url: u,
        headers: request.headers,
        method: 'GET'
      };
    }

    match = request.data.text.match(/^help$/);
    if (match) {
      Store.set('lastCmd', request.data.text);
      return {
        message: {
          text: [
            '**GitHub commands**',
            '```',
              '  pr ls|list [open|closed|all]  List Pull Requests',
            '```'
          ].join('\n')
        }
      };
    }
  }

  process_outgoing_response({ request, response }) {
    var text = [];
    response.content.forEach(function(pr) {
      text.push('> '+pr.state+' [#'+pr.number+']('+pr.html_url+') - '+pr.title);
    });

    return {
      content: {
        text: text.join('\n'),
        parseUrls: false
      }
    };
  }
}
```

* Save your integration
