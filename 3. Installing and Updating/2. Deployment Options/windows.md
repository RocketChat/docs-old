# Deploying Rocket.Chat on Windows

#### Download/Install Dependencies ####

node: https://nodejs.org/en/download/

mongo: https://www.mongodb.org/downloads#production

graphicsmagick: http://www.graphicsmagick.org/INSTALL-windows.html#prerequisites

---

ghostscript(Optional for PDF render): http://ghostscript.com/download/

---

7zip Unarchiver: http://www.7-zip.org/

OR

tar for windows: http://gnuwin32.sourceforge.net/packages/gtar.htm

---

Download either the latest development executable of Rocket.Chat server:

https://rocket.chat/releases/develop/download

OR the last stable release:

https://rocket.chat/releases/latest/download

---
 

#### Steps ####
Open PowerShell

1. install above software packages
2. ideally place all packages in your environment path
3. install node dependencies:

```
npm install nave -g

```

If you need your server to survive reboot, you will need to craft your own restart powershell scripts or use a working process manager.

```
...\AppData\Roaming\npm\node_modules\pm2\lib\CLI.js:601
  if (process.getuid() != 0) {
              ^

TypeError: process.getuid is not a function
```
4. get acquainted with https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/
5. change directory to mongo root install folder (probably C:\Program Files\MongoDB)
6. create an ini file at top level, mongo.ini

```
replSet=001-rs
logpath = C:\Program Files\MongoDB\data\log\mongod.log
dbpath = C:\Program Files\MongoDB\data\db\
```

7. create those directories (not the log file itself though)
8. type cmd to enter command prompt itself, then Control+Shift+Enter to use cmd as Admin
9. install mongod as a service with config options

```
"C:\Program Files\MongoDB\server\3.0\bin\mongod.exe" --config "C:\Program Files\MongoDB\mongo.ini" --install
```

10. type powershell to head back to PS
11. ```net start mongodb```
12. ```cd '.\Program Files\MongoDB\Server\3.0\bin'``` or place bin into your path first
13. ```.\mongo.exe``` to enter mongo CLI
14. ```rs.initiate()```
15. then ```exit``` to exit mongo CLI
16. Install IIS with url-rewrite/application request routing/redirect/SSL support
17. Open IIS and edit default website, add https binding and choose ssl cert
18. Add url-rewrite rule, Reverse Proxy, you'll be prompted to install ARR
19. Enable SSL offloading, forward requests to ```localhost:3000```
20. Under SSL settings: Require SSL, ignore client certs
21. cd in PS back to C:
22. Set the environment variables:
```
ROOT_URL="http:// your-host-name-.com-as-accessed-from-internet/"
MONGO_URL=mongodb://localhost:27017/rocketchat
MONGO_OPLOG_URL=mongodb://localhost:27017/local
```
23. Unarchive the downloaded tgz -  Use 7zip or ```tar zxvf rocket.chat.tgz```23. ```cd bundle/programs/server```
24. ```npm install```
25. ```cd ../..```
26. ```node main.js```

This starts the server running.

TODO: get LDAP working, proper mail setup working, both currently crash server

TODO: run in a proper release mode, not debug mode

TODO: test other features

TODO: get  process management working for rocket.chat to survive reboot

