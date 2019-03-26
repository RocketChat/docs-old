# Incoming WebHook Scripting

With *Scripts* you can point any WebHook to Rocket.Chat and process the request to print customized messages, define the username and avatar of the *user* of the message and change the channel where the message will be posted or you can cancel the request to prevent undesired messages.

## How to create a new Incoming WebHook

- Go to your admin page
- Go to Integrations
- Create a **New Integration** and select **Incoming WebHook**
- Select the channel where you will receive the alerts (you can override in messages)
- Set **Script Enabled** to **True**
- Paste your script inside the **Script** field
- Save the integration
- Use the generated **WebHook URL** to POST messages to Rocket.Chat

## Incoming Script Details

The script should be in **ES2015 / ECMAScript 6**

The script expects a global class called **Script**, this class will be instantiated just **one** time (on the first execution) and kept in memory

The class should have a method called **process_incoming_request**, this method will be called every time your server receives a new request, will be called with an Object as parameter containing the **request** property.

The **process_incoming_request** method should return an object with a property **content** containing a valid Rocket.Chat message or an object with a property **error** that will be returned as the response of the request in JSON format and status code **400**.

A valid Rocket.Chat message can contain a **text** field which will be the body of the message. If you want to redirect the message to a different channel to the one indicated by the webhook token, you can specify a **channel** field which accepts a room id or, if prefixed with a "#" or "@", a channel name or a user.

To help debug your script, you can use the **console** methods to log information.  More information about console can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/log). To view the logs go to Administration -> View Logs.

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

## Outgoing WebHook Scripting

With *Scripts* you can process all messages from a channel and change how Rocket.Chat will do the request or cancel the request. You can cancel the request and return a message or just do nothing. You can do another request inside the script using the global helper **HTTP**.

The response of the request will execute the script too, calling another method so you can process the response as you can do in **Incoming WebHooks**

### How to create a new Outgoing WebHook

- Go to your admin page
- Go to Integrations
- Create a **New Integration** and select **Outgoing WebHook**
- Select the channel where you will use the commands and receive the responses
- Put the url you want to call in **URLs**, you can modify this url inside the script
- Set **Script Enabled** to **True**
- Paste your script inside the **Script** field
- Save your integration

### Outgoing Script Details

The script should be in **ES2015 / ECMAScript 6**

The script expects a global class called **Script**, this class will be instantiated just **one** time (on the first execution) and kept in memory

The class can have a method called **prepare_outgoing_request**, this method will be called for every message in configured channel or can be filtered by the **Trigger Words**, will be called with an Object as parameter containing the **request** property.

The **prepare_outgoing_request** method should return an object with, at least, properties **url** and **method**, or you can change the request object and return it. You can return nothing to cancel the request or return a **message**.

The class can have a method called **process_outgoing_response**, this method will be called for every response of the request, will be called with an Object as parameter containing the **request** property (the object you returned in the previous method) and **response** property.

The **process_outgoing_response** method can return nothing to proceed the default processing, can return **false** to stop or an object with the property **content** containing a valid Rocket.Chat message.

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
