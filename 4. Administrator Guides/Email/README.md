# Email

Use this env variable and formatting to set up your rocket.chat mail account:

```
export MAIL_URL=smtp://yourmail@yourdomain.com:Yourpass@smtp.yourmailserver.com:465/
```

This is also working in your docker file:
```
rocketchat:
  image: rocketchat/rocket.chat:develop
  environment:
    - PORT=3000
    - ROOT_URL=https://chat.yourdomain.com
    - MONGO_URL=mongodb://mongo:27017/rocketchat
    - MAIL_URL=smtp://yourmailbox@yourdomain.com:yourpassword@smtp.yourmailserver.com:465/
  links:
    - mongo:mongo
  ports:
    - 3000:3000
```

