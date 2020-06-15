# sendMessageLivechat

## DDP message

```javascript
{"msg":"method","method":"sendMessageLivechat","params":[{"_id":"XqEEHhQHvhFmK3Zoz","rid":"TT9iMmzusfcLq8sv2","msg":"test","token":"7T4jzes7rX3Fr6cQ2"}],"id":"11"}
```

The property `_id` should be generated randomly before sending the message.

## Response

```javascript
{
    "_id":"XqEEHhQHvhFmK3Zoz",
    "rid":"TT9iMmzusfcLq8sv2",
    "msg":"test",
    "token":"7T4jzes7rX3Fr6cQ2",
    "alias":"poqiqwp1o2",
    "ts":{
     "$date" :1494874057495
    },
    "u":{
     "_id":"4Zo8JcXynkMrXbFMN",
     "username":"guest-82"
    },
    "_updatedAt":{
     "$date":1494874057498
    },
    "newRoom":true,
    "showConnecting":false
}
```

