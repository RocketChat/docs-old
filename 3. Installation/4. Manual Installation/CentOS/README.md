# Deploying Rocket.Chat on Centos 7

> If coming from Rocket.Chat 0.x.x to 0.40.0 please see our [update notes](/3.%20Installation/7.%20Updating/1.%20From%200.x.x%20to%200.40.0)

The following was tested with Vultr and Digital Ocean.  Should work on Linode too.

Add the epel repository and update everything.

```
yum -y install epel-release nano && yum -y update
```

Populate the yum repo with the mongodb repository

```
nano /etc/yum.repos.d/mongodb.repo
```

Paste this into the new file:

```
  [mongodb]
  name=MongoDB Repository
  baseurl=http://downloads-distro.mongodb.org/repo/redhat/os/x86_64/
  gpgcheck=0
  enabled=1
```

To write and save do:

```
CTRL-O, CTRL-X
```

Now we need to install our dependencies from yum:

```
yum install -y nodejs curl GraphicsMagick npm mongodb-org-server mongodb-org gcc-c++
```

Now that we have Node.js and npm installed, we need to install a few more dependencies:

```
npm install -g inherits n
```

Rocket.Chat needs Node.js version `4.5` using n we are going to install that version:

```
n 4.5
```

### Installing Rocket.Chat

Now we download and install Rocket.Chat

```
cd /opt

curl -L https://rocket.chat/releases/latest/download -o rocket.chat.tgz
tar zxvf rocket.chat.tgz

mv bundle Rocket.Chat
cd Rocket.Chat/programs/server

npm install

cd ../..
```

You can set PORT, ROOT_URL and MONGO_URL:

```
export PORT=3000
export ROOT_URL=http://your-host-name.com-as-accessed-from-internet:3000/
export MONGO_URL=mongodb://localhost:27017/rocketchat
```

Replace 3000, with the port of your choosing.

If you choose to use port 80 you will need to run Rocket.Chat as root.

If you don't have DNS configured use your IP in place of the hostname.  You can change it later in the admin menu.

### Mongo

First lets enable Mongodb to start with the host using:

```
chkconfig mongod on
```

Now we need to start mongo:

```
systemctl start mongod
```

or for CentOs 6.X

```
/etc/init.d/mongod start
```

### Try install out

Now lets do a quick test and see if everything is working before we continue:

```
node main.js
```

Browse to your new rocket-chat instance by opening your favorite web browser and entering the url

```
http://your-host-name.com-as-accessed-from-internet:3000/
```

Replace your-host-name.com-as-accessed-from-internet with the ip address or DNS hostname of your server you set above in the ROOT_URL

Now that you're connected:

* Click "register a new account"
* Enter the admin's name, email and password twice.  For my instance I entered:
  * name = Rocketchat Admin
  * email = admin@<my domain>.com
  * password = test1234
* Click SUBMIT
* You will be prompted to select a username.  I selected rocketchat.admin.
* Click USE THIS USERNAME to continue.
* You should now be logged in as an administrator on your new rocketchat installation.

Hit Ctrl + c in your terminal to stop rocket.chat.

### Auto Start Rocket.Chat

Now that we have all of the dependencies installed, and have verified that Rocket.Chat works.  We need to configure Rocket.Chat to start as a service.

First we create the service file:

```
nano /usr/lib/systemd/system/rocketchat.service
```

In it write:

```
  [Unit]
  Description=The Rocket.Chat  server
  After=network.target remote-fs.target nss-lookup.target nginx.target mongod.target
  [Service]
  ExecStart=/usr/local/bin/node /opt/Rocket.Chat/main.js
  StandardOutput=syslog
  StandardError=syslog
  SyslogIdentifier=rocketchat
  User=root
  Environment=MONGO_URL=mongodb://localhost:27017/rocketchat ROOT_URL=http://your-host-name.com-as-accessed-from-internet:3000/ PORT=3000
  [Install]
  WantedBy=multi-user.target
```

Note:  Replace the values in Environment with the values you used above.

Now you can enable this service by running:

```
systemctl enable rocketchat.service
```

And finally start it by running:

```
systemctl start rocketchat.service
```

### Upgrade

Upgrading is much the same as installing Rocket.Chat

1. Goto the installation folder in this case: `cd /opt/`
2. Remove or move the `Rocket.Chat` folder.
3. Follow the [installation section](#installing-rocket-chat)


