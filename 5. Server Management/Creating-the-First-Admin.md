You can create the first admin account by defining the environment variables ADMIN_PASS and ADMIN_EMAIL once.

```
export ROOT_URL=http://your-host-name.com-as-accessed-from-internet:3000/
export MONGO_URL=mongodb://localhost:27017/rocketchat
export PORT=3000
export ADMIN_PASS=supersecret
export ADMIN_EMAIL=admin@example.com

node main.js
```