# Admin Account Creation

After you deploy your server, the first user to register becomes the administrator, with power to set other users as administrators.

In case your server has no administrators, you can create the first admin account by defining the environment variables ADMIN\_PASS and ADMIN\_EMAIL once.

```bash
export ROOT_URL=http://your-host-name.com-as-accessed-from-internet:3000/
export MONGO_URL=mongodb://localhost:27017/rocketchat
export PORT=3000
export ADMIN_USERNAME=admin
export ADMIN_PASS=supersecret
export ADMIN_EMAIL=admin@example.com

node main.js
```

Installing with the `docker compose file`, you can also specify the admin user and password directly.

```
    environment:
      - PORT=3000
      - ROOT_URL=http://localhost:3000
      - MONGO_URL=mongodb://mongo:27017/rocketchat
      - MONGO_OPLOG_URL=mongodb://mongo:27017/local
      - ADMIN_USERNAME=admin
      - ADMIN_NAME=Admin
      - ADMIN_EMAIL=rodriq@localhost.com
      - ADMIN_PASS=supersecret
      - OVERWRITE_SETTING_Show_Setup_Wizard=completed
      - REG_TOKEN=${REG_TOKEN}
#       - MAIL_URL=smtp://smtp.emai
```
