Simple setup of a telegram Bot:

1.	Open telegram chat in your browser or mobile phone
2.	Add the user BotFather
3.	Click start
4.	Click /newbot
5.	Follow Instructions

![instructions](http://i.imgur.com/8y9SG49.jpg?1)

6.	Wait for the Token to be displayed referred to as [myauthorization-token]
7.	Generate Incoming Webhook in Rocket.Chat, follow instructions,  enable script, and paste the following
```javascript
class Script {

  process_incoming_request({ request }) {
    // request.content.message.from.first_name
    // request.content.message.text

    // console is a global helper to improve debug
    console.log(request.content);
  if('edited_message' in request.content) {
    request.content.message = request.content.edited_message;
  }
    return {
      content: {
        username: request.content.message.from.first_name,
        icon_url: '/avatar/' + request.content.message.from.first_name + '.jpg' ,
        text: request.content.message.text
       }
    };

     return {
       error: {
         success: false,
         message: 'Error example'
       }
     };
  }
}
```
8.	Copy incoming webhook URL from Rocket.Chat
9.	Change following URL with your token and Incoming webhookURL and excute in regular browser  
https://api.telegram.org/bot[myauthorization-token]/setwebhook?url=[Incoming_Webhook_Link_from_Rocket.Chat]
10.	Receive message  {"ok":true,"result":true,"description":"Webhook succsessfully set"} (or similar)
11.	Test your incoming Webhook by sending a telegram message to the bot, it should be posted in the chan-nel/user you specified in the incoming webhook, check Rocket.chat Console Log and write down Chat_id [chat-id]
12.	Create outgoing webhook and specify channel with the following url:
https://api.telegram.org/bot[myauthorization-token]/sendMessage?chat_id=[chat-id]
13.	Paste the script:
```javascript
class Script {
  prepare_outgoing_request({ request }) {
    
    let match;

    // Change the URL and method of the request
    match = request.data.user_name.match(/rocket.cat/);
    if (match) {
      return {
        // url: request.url + '&parse_mode=Markdown' + '&text=' + '*' + request.data.user_name+ '*: _' + request.data.text + '_',
        //no get method so nothing will happen avoid looping of messages
      }; 
    } else {
      return {
        url: request.url + '&parse_mode=HTML' + '&text=' + '<b>' + request.data.user_name+ '</b>: ' + request.data.text,
        method: 'GET'
      }; 
    }
  }
}
```
14.	Enable listening at the Bot with /privacy and to disable
![disableprivaceinbot](http://i.imgur.com/xSjdAAy.jpg?1)
15.	Add Bot to telegram group and utilize nice cross platform communication.


Cheers! 
(I am not a code wizard, which becomes apparent when reading the scripts, i am sure if someone digs into the telegram Bot API there are many more things possible) 

![final product](http://i.imgur.com/LqpqUC8.jpg?1)
