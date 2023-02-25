---
description: Creating your first admin user and user group.
---

# Admin Account Creation

After deploying the server, the first user to register becomes the administrator, with the power to set other users as administrators.&#x20;

Following the [**Setup Wizard**](../../use-rocket.chat/workspace-administration/settings/setup-wizard.md) allows you to create the first admin user of your workspace. Alternatively, you can configure an admin user during deployment by specifying it in the configuration files.

In case your server has no administrators, you can create the first admin account by defining the environment variables `INITIAL_USER, ADMIN_PASS,` and `ADMIN_EMAIL` once. Open your terminal and specify these variables line by line.

```bash
export ROOT_URL=http://your-host-name.com-as-accessed-from-internet:3000/
export MONGO_URL=mongodb://localhost:27017/rocketchat
export PORT=3000
export ADMIN_USERNAME=admin
export ADMIN_PASS=supersecret
export ADMIN_EMAIL=admin@example.com
node main.js
```

If you are hosting your own MongoDB instance, such as MongoDB Atlas, change the MONGO\_URL variable to your MongoDB connection string.

Installing Rocket.Chat server with the `docker compose file`, you can also specify the `INITIAL_USER`, `ADMIN_USERNAME,` and `ADMIN_PASSWORD` directly.

```
    environment:
      - PORT=3000
      - ROOT_URL=http://localhost:3000
      - MONGO_URL=mongodb://mongo:27017/rocketchat
      - MONGO_OPLOG_URL=mongodb://mongo:27017/local
      - INITIAL_USER=yes
      - ADMIN_USERNAME=admin
      - ADMIN_NAME=Admin
      - ADMIN_EMAIL=rodriq@localhost.com
      - ADMIN_PASS=supersecret
      - OVERWRITE_SETTING_Show_Setup_Wizard=completed
      - REG_TOKEN=${REG_TOKEN}
#       - MAIL_URL=smtp://smtp.email
```
