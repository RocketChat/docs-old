# livechat:registerGuest

## DDP message

```javascript
{"msg":"method","method":"livechat:registerGuest","params":[{"token":"TF5rZ7BZ9mZCSq3xN","name":"Guest Name","email":"guest@rocket.chat","department":"3jMKjTQJxCDxwxxtx"}],"id":"5"}
```

## Response

```javascript
{
    userId: 'G3DukvFBhDkDnw6uS',
    visitor: {
     name: 'Guest Name',
     token: 'TF5rZ7BZ9mZCSq3xN',
     username: 'guest-1',
     visitorEmails: [{
      address: 'guest@rocket.chat'
     }]
    }
}
```

