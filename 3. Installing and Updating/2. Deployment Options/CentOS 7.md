# Deploying Rocket.Chat on Centos 7

The following was tested with Vultr and Digital Ocean.  Should work on Linode too. 

permissions issues with mongodb from the repository

`echo "selinux=disabled" > /etc/selinux/config && reboot`

add the epel repository, update everything and reboot

`yum -y install epel-release nano && yum -y update && reboot`

populate the yum repo with the mongodb repository (probably a faster way to automated this)

`nano /etc/yum.repos.d/mongodb.repo`

paste this into the new file

>     [mongodb]
>     name=MongoDB Repository
>     baseurl=http://downloads-distro.mongodb.org/repo/redhat/os/x86_64/
>     gpgcheck=0
>     enabled=1

write and save

`CTRL-O, CTRL-X`

install everything

`yum install -y nodejs curl GraphicsMagick npm mongodb-server mongodb`

`npm install -g inherits`

`npm install -g n`

Meteor needs at least this version of node to work.

`n 0.10.40`

Download and install Rocket.Chat

`cd /root`

`curl -L https://rocket.chat/releases/latest/download -o rocket.chat.tgz`

`tar zxvf rocket.chat.tgz`

`mv bundle Rocket.Chat`

`cd Rocket.Chat/programs/server`

`npm install`

`cd ../..`

you can change port 3000 to 80

port 80 is a registered port so you will need to run rocket.cat as root if using port 80

if you have not setup DNS then enter the IP in place of the hostname.  You can change it later in the admin menu. 

`export ROOT_URL=http://your-host-name.com-as-accessed-from-internet:3000/`

`export PORT=3000`

`export MONGO_URL=mongodb://localhost:27017/rocketchat`

start mongod server

`systemctl start mongod`

or  for CentOs 6.X


`/etc/init.d/mongod start`

`chkconfig mongod on`

need to flush iptables but you should customize your own firewall configuration before production

`iptables -F`

run manually first for testing

`node main.js`

browse to your new rocket-chat instance by opening your favorite web browser and entering the url

replace your-host-name.com-as-accessed-from-internet with the ip address or DNS hostname of your server

`http://your-host-name.com-as-accessed-from-internet:3000/`

* create your admin account
* click "register a new account"
* enter the admin's name, email and password twice.  For my instance I entered:
* name = Rocketchat Admin
* email = admin@<my domain>.com
* password = test1234
* Click SUBMIT
* You will be prompted to select a username.  I selected rocketchat.admin.  
* Click USE THIS USERNAME to continue.
* You should now be logged in as an administrator on your new rocketchat installation.

then press CTRL-C, re-launch with the & sign therefore shoving rocket.chat to the background

`node main.js &`

do not forget to fix your iptables firewall

### create service systemd
create file 

`vi /usr/lib/systemd/system/rocketchat.service`

into write : 

>     [Unit]
>     Description=The Rocket.Chat  server
>     After=network.target remote-fs.target nss-lookup.target nginx.target mongod.target
>     [Service]
>     ExecStart=/usr/local/bin/node /path/for/your/folder/Rocket.Chat/main.js
>     StandardOutput=syslog
>     StandardError=syslog
>     SyslogIdentifier=rocketchat
>     User=root  or user for your rocketchat
>     Environment=MONGO_URL=mongodb://localhost:27017/rocketchat ROOT_URL=http://rocketchat.yourdomain.com:3000/ PORT=3000
>     [Install]
>     WantedBy=multi-user.target
