# Integrations WebHooks

Rocket.Chat supports WebHooks to integrate tools and services you like into the platform. WebHooks are simple event-notifications via HTTP POST. This way any application implementing a WebHook is able to POST a message to a Rocket.Chat instance and much more.

With Scripts you can point any WebHook to Rocket.Chat and process the request to print customized messages, define the username and avatar of the user of the message and change the channel where the message will be posted or you can cancel the request to prevent undesired messages.

Available integrations:

* Incoming WebHook → Let an external service send a request to Rocket.Chat to be processed.
* Outgoing WebHook → Let Rocket.Chat trigger and optionally send a request to an external service and process the response.

By default the WebHooks is designed to post a message only. The _message_ is part of a JSON structure, which has the same format as described in the API documentation on how to [“Post a chat message”](https://github.com/RocketChat/docs/tree/b7618ca0d2caba0b7cf23266d2704d2f7f55cce4/postMessage.md).

If you would like more power and control over various features of Rocket.Chat, aside from sending and receiving messages, take a look at [Rocket.Chat Apps](../../../apps-development/getting-started.md).

## Incoming WebHook Script

WebHooks can be handled by _ES2015 / ECMAScript 6_ scripts to process the request, to print a customized messages or cancel the request to prevent undesired messages.

### Create a new Incoming WebHook

* Go to your **Admin Panel**
* Go to **Integrations**
* Create a **New Integration** and select **Incoming WebHook**
* Select the channel where you prefer to receive the alerts; it is possible to override in messages.
* Set **Script Enabled** to `true`
* Paste your script inside the **Script** field
* Save the integration
* Use the generated **WebHook URL** to POST messages to Rocket.Chat

### Script Details

The script should be in **ES2015 / ECMAScript 6**.

The script expects a global class called `Script`. This class is instantiated once, only on the first execution, and kept in memory.

The class has a method called `process_incoming_request`, your server calls this method every time is receives a new request. It is called with an Object as a parameter with the `request`property.

The `process_incoming_request`method returns an object with a `content`property that contains valid Rocket.Chat message, or an object with an `error` property that returns as the response to the request in JSON format and Code 400 status.

A valid Rocket.Chat message can contain a `text` field that is the body of the message. When you redirect the message to a channel other than the one indicated by the Webhook token, you can specify a `channel` field, which accepts room id or, if prefixed with "\#" or "@", channel name or user.

You can use the `console` methods to log information to help debug your script. Find more information about the console [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/log). To view the logs, go to `Administration > View Logs`.

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
    // request.url.hash
    // request.url.search
    // request.url.query
    // request.url.pathname
    // request.url.path
    // request.url_raw
    // request.url_params
    // request.headers
    // request.user._id
    // request.user.name
    // request.user.username
    // request.content_raw
    // request.content

    // console is a global helper to improve debug
    console.log(request.content);

    return {
      content:{
        text: request.content.text
        // "attachments": [{
        //   "color": "#FF0000",
        //   "author_name": "Rocket.Cat",
        //   "author_link": "https://open.rocket.chat/direct/rocket.cat",
        //   "author_icon": "https://open.rocket.chat/avatar/rocket.cat.jpg",
        //   "title": "Rocket.Chat",
        //   "title_link": "https://rocket.chat",
        //   "text": "Rocket.Chat, the best open source chat",
        //   "fields": [{
        //     "title": "Priority",
        //     "value": "High",
        //     "short": false
        //   }],
        //   "image_url": "https://rocket.chat/images/mockup.png",
        //   "thumb_url": "https://rocket.chat/images/mockup.png"
        // }]
       }
    };

    // return {
    //   error: {
    //     success: false,
    //     message: 'Error example'
    //   }
    // };
  }
}
```

## Outgoing WebHook Script

Use Scripts to process all messages from a channel, and change how Rocket.Chat makes or cancels the request. You can cancel the request and return a message, or just do nothing. Also, you can make another request inside the script by using the **HTTP** global helper.

The response of the request also executes the script, calling another method so you can process the response, just like in **Incoming WebHooks**

### Create a new Outgoing WebHook

* Go to your **Admin Panel**
* Go to **Integrations**
* Create a **New Integration** and select **Outgoing WebHook**
* Select the channel where you prefer to use the commands and receive the responses
* Enter the URL you want to call in **URLs**, you can modify this URL inside the script
* Set **Script Enabled** to `true`
* Paste your script inside the **Script** field
* Save your integration

### Script Details

The script should be in **ES2015 / ECMAScript 6**.

The script expects a global class called **Script**. This class is instantiated once, only on the first execution, and kept in memory.

The class has a method called `prepare_outgoing_request`, this method is called for every message in the configured channel, or it can be filtered by **Trigger Words**. It is called with an Object as parameter a that contains the `request` property.

The `prepare_outgoing_request`method returns an object with, at least, `url`and `method` properties. You can also change the request object, and return it. It is possible even to return nothing and cancel the request, or return a message.

This class has a method named `process_outgoing_response`. It is called for every response of the request, with an Object as a parameter that contains the `request` property, i.e. the object you returned in the previous method, and a `response` property.

The `process_outgoing_response` method can return nothing to proceed the default processing, return `false` to stop it, or an object with the `content` property that contains a valid Rocket.Chat message.

```javascript
/* exported Script */
/* globals console, _, s, HTTP */

/** Global Helpers
 *
 * console - A normal console instance
 * _       - An underscore instance
 * s       - An underscore string instance
 * HTTP    - The Meteor HTTP object to do sync http calls
 */

class Script {
  /**
   * @params {object} request
   */
  prepare_outgoing_request({ request }) {
    // request.params            {object}
    // request.method            {string}
    // request.url               {string}
    // request.auth              {string}
    // request.headers           {object}
    // request.data.token        {string}
    // request.data.channel_id   {string}
    // request.data.channel_name {string}
    // request.data.timestamp    {date}
    // request.data.user_id      {string}
    // request.data.user_name    {string}
    // request.data.text         {string}
    // request.data.trigger_word {string}

    let match;

    // Change the URL and method of the request
    match = request.data.text.match(/^pr\s(ls|list)/);
    if (match) {
      return {
        url: request.url + '/pulls',
        headers: request.headers,
        method: 'GET'
      };
    }

    // Prevent the request and return a new message
    match = request.data.text.match(/^help$/);
    if (match) {
      return {
        message: {
          text: [
            '**commands**',
            '```',
              '  pr ls [open|closed|all]  List Pull Requests',
            '```'
          ].join('\n')
          // "channel": "#name-of-channel",
          // "attachments": [{
          //   "color": "#FF0000",
          //   "author_name": "Rocket.Cat",
          //   "author_link": "https://open.rocket.chat/direct/rocket.cat",
          //   "author_icon": "https://open.rocket.chat/avatar/rocket.cat.jpg",
          //   "title": "Rocket.Chat",
          //   "title_link": "https://rocket.chat",
          //   "text": "Rocket.Chat, the best open source chat",
          //   "fields": [{
          //     "title": "Priority",
          //     "value": "High",
          //     "short": false
          //   }],
          //   "image_url": "https://rocket.chat/images/mockup.png",
          //   "thumb_url": "https://rocket.chat/images/mockup.png"
          // }]
        }
      };
    }
  }

  /**
   * @params {object} request, response
   */
  process_outgoing_response({ request, response }) {
    // request              {object} - the object returned by prepare_outgoing_request

    // response.error       {object}
    // response.status_code {integer}
    // response.content     {object}
    // response.content_raw {string/object}
    // response.headers     {object}

    var text = [];
    response.content.forEach(function(pr) {
      text.push('> '+pr.state+' [#'+pr.number+']('+pr.html_url+') - '+pr.title);
    });

    // Return false will abort the response
    // return false;

    // Return empty will proceed with the default response process
    // return;

    return {
      content: {
        text: text.join('\n'),
        parseUrls: false
        // "attachments": [{
        //   "color": "#FF0000",
        //   "author_name": "Rocket.Cat",
        //   "author_link": "https://open.rocket.chat/direct/rocket.cat",
        //   "author_icon": "https://open.rocket.chat/avatar/rocket.cat.jpg",
        //   "title": "Rocket.Chat",
        //   "title_link": "https://rocket.chat",
        //   "text": "Rocket.Chat, the best open source chat",
        //   "fields": [{
        //     "title": "Priority",
        //     "value": "High",
        //     "short": false
        //   }],
        //   "image_url": "https://rocket.chat/images/mockup.png",
        //   "thumb_url": "https://rocket.chat/images/mockup.png"
        // }]
      }
    };
  }
}
```

