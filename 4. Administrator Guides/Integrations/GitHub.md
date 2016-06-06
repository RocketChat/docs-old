We can do 2 types of integrations with GitHub:

1. Receive alerts from GitHub (**Incoming WebHook**)
2. Send commands to GitHub and optionally receive a response (**Outgoing WebHook**)

### Receive alerts
* Create a new **incoming webhook**
* Select the channel were you will receive the alerts
* Enable Scripts
* Use this script to receive alerts from new issues, closed issues and comments
```javascript
/* exported Script */

const getLabelsField = (labels) => {
  let labelsArray = [];
  labels.forEach(function(label) {
    labelsArray.push(label.name);
  });
  labelsArray = labelsArray.join(', ');
  return {
    title: 'Labels',
    value: labelsArray,
    short: labelsArray.length <= 40
  };
};

const githubEvents = {
  ping(request) {
    return {
      content: {
        text: ':thumbsup: ' + request.content.zen
      }
    };
  },

  issues(request) {
    const user = request.content.sender;
    const attachment = {
      author_icon: 'https://cloud.githubusercontent.com/assets/51996/13893698/c047133c-ed2e-11e5-9233-13622bcb9b7b.png',
      author_name: '#' + request.content.issue.number + ' - ' + request.content.issue.title,
      author_link: request.content.issue.html_url,
      fields: []
    };

    if (request.content.issue.labels) {
      attachment.fields.push(getLabelsField(request.content.issue.labels));
    }

    if (request.content.issue.assignee) {
      attachment.fields.push({
        title: 'Assignee',
        value: request.content.issue.assignee.login,
        short: true
      });
    }

    const actions = {
      'assigned': ':inbox_tray:',
      'unassigned': ':outbox_tray:',
      'opened': ':triangular_flag_on_post:',
      'closed': ':white_check_mark:',
      'reopened': ':triangular_flag_on_post:',
      'labeled': ':label:',
      'unlabeled': ':label:',
      'edited': ':pencil:'
    };

    const text = actions[request.content.action] + ' issue';

    return {
      content: {
        icon_url: user.avatar_url,
        alias: user.login,
        text: text,
        attachments: [attachment]
      }
    };
  },

  issue_comment(request) {
    const user = request.content.comment.user;
    var attachment = {
      author_icon: 'https://cloud.githubusercontent.com/assets/51996/13893698/c047133c-ed2e-11e5-9233-13622bcb9b7b.png',
      author_name: '#' + request.content.issue.number + ' - ' + request.content.issue.title,
      author_link: request.content.comment.html_url,
      fields: []
    };

    if (request.content.issue.labels) {
      attachment.fields.push(getLabelsField(request.content.issue.labels));
    }

    if (request.content.issue.assignee) {
      attachment.fields.push({
        title: 'Assignee',
        value: request.content.issue.assignee.login,
        short: true
      });
    }

    const text = ':speech_balloon: ' + request.content.comment.body;

    return {
      content: {
        icon_url: user.avatar_url,
        alias: user.login,
        text: text,
        attachments: [attachment]
      }
    };
  },

  pull_request(request) {
    const user = request.content.sender;
    const attachment = {
      author_icon: 'https://cloud.githubusercontent.com/assets/51996/13893698/c047133c-ed2e-11e5-9233-13622bcb9b7b.png',
      author_name: '#' + request.content.pull_request.number + ' - ' + request.content.pull_request.title,
      author_link: request.content.pull_request.html_url
    };

    let text = 'Pull request';
    switch (request.content.action) {
      case 'assigned':
        text += ' assigned to: ' + request.content.assignee.login;
        break;
      case 'unassigned':
        text += ' unassigned of ' + request.content.assignee.login;
        break;
      case 'opened':
        text += ' opened';
        break;
      case 'closed':
        if (request.content.pull_request.merged) {
          text += ' merged';
        } else {
          text += ' closed';
        }
        break;
      case 'reopened':
        text += ' reopened';
        break;
      case 'labeled':
        text += ' added label: "' + request.content.label.name + '" ';
        break;
      case 'unlabeled':
        text += ' removed label: "' + request.content.label.name + '" ';
        break;
      case 'synchronize':
        text += ' synchronized';
    }

    return {
      content: {
        icon_url: user.avatar_url,
        alias: user.login,
        text: text,
        attachments: [attachment]
      }
    };
  },

  //// Github push event
  push(request) {
    var commits = request.content.commits;
    var multi_commit = ""
    var is_short = true;
    var changeset = 'Changeset';
    if ( commits.length > 1 ) {
      var multi_commit = " [Multiple Commits]";
      var is_short = false;
      var changeset = changeset + 's';
      var output = [];
    }
    const user = request.content.sender;
    const attachment = {
      author_icon: 'https://cloud.githubusercontent.com/assets/51996/13893698/c047133c-ed2e-11e5-9233-13622bcb9b7b.png',
      author_name: "Message: " + request.content.head_commit.message + multi_commit,
      author_link: request.content.compare,
      fields: []
    };

    if (request.content.repository.full_name) {
      attachment.fields.push({
        title: 'Repo',
        value: "["+request.content.repository.full_name+"]("+request.content.repository.url+")",
        short: is_short
      });
    }

    for (var i = 0; i < commits.length; i++) {
      var commit = commits[i];
      var shortID = commit.id.substring(0,7);
      if ( commits.length > 1 ) {
        a = '[' + shortID + '](' + commit.url + ') - ' + commit.message;
        output.push( a );
      } else {
        var output = "["+shortID+"]("+commit.url+")";
      }
    }
    if (commits.length > 1) {
      attachment.fields.push({
        title: changeset,
        value: output.reverse().join('<br />'),
        short: is_short
      });
    } else {
      attachment.fields.push({
        title: changeset,
        value: output,
        short: is_short
      });
    }

    const text = ':ballot_box_with_check: Pushed to ' + "["+request.content.ref.split('/').pop()+"]";

    return {
      content: {
        icon_url: user.avatar_url,
        alias: user.login,
        text: text,
        attachments: [attachment]
      }
	};
  },  // End Github Push
};

class Script {
  process_incoming_request({ request }) {
    const header = request.headers['x-github-event'];
    if (githubEvents[header]) {
      return githubEvents[header](request);
    }

    return {
      error: {
        success: false,
        message: 'Unsupported method'
      }
    };
  }
}
```
* Save the integration
* Go to your repository `settings -> webhooks & services -> add webhook`
* Paste your **Webhook URL** from Rocket.Chat into **Payload URL**
* Keep **Contenty type** as `application/json`
* Leave **Secret** empty and save


### Send commands to GitHub
```
This script only works for public repositories
```

* Create a new **outgoing webhook**
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
