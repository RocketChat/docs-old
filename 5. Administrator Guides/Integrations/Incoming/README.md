# Incoming WebHook Scripting

With *Scripts* you can point any WebHook to Rocket.Chat and process the request to print customized messages, define the username and avatar of the *user* of the message and change the channel where the message will be posted or you can cancel the request to prevent undesired messages.

## How to create a new Incoming WebHook
* Go to your admin page
* Create a new **Incoming WebHook**
* Select the channel were you will receive the alerts (you can override in messages)
* Set **Script Enabled** to **True**
* Paste your script inside the **Script** field
* Save the integration
* Use the generated **WebHook URL** to POST messages to Rocket.Chat

## Script Details
The script should be in **ES2015 / ECMAScript 6**

The script expects a global class called **Script**, this class will be instantiated just **one** time (on the first execution) and kept in memory

The class should have a method called **process_incoming_request**, this method will be called every time your server receive a new request, will be called with an Object as parameter containing the **request** property.

The **process_incoming_request** method should return an object with a property **content** containing a valid Rocket.Chat message or an object with a property **error** that will be returned as the response of the request in JSON format and status code **400**.

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
        //   "author_link": "https://demo.rocket.chat/direct/rocket.cat",
        //   "author_icon": "https://demo.rocket.chat/avatar/rocket.cat.jpg",
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
