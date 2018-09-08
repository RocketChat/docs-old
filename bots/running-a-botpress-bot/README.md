# Running a Botpress Bot

Our work on supporting Botpress is in active development.

## How to setup Rocket.Chat livechat + botpress 

The following instructions are to have rocket.chat livechat work with 2 botpress bots in a live-agent role. There is some good work done on [botpress-channel-rocketchat](https://github.com/RocketChat/botpress-channel-rocketchat). This setup includes setting up Rocket.Chat livechat and botpress with botpress-channel-rocketchat.

*Required components - rocket.chat 0.69, botpress 10.35, botpress-channel-rocketchat 0.11

----
## Setup Rocket.Chat

### Add Bot users
On the rocket.chat server, add a bot user  
Administration-> Users -> +  
```
    name: bot one 
    username: bot1 <<or preferred>> 
    password: bot1 <<or preferred>> 

```  
Turn on *Verified*  
Turn off *Require password change*  
Add roles: *live-agent, bot*  
*Save*

Repeat above for bot2 with username: bot2, password: bot2

### Enable livechat
#### Administration->Livechat-> Livechat enabled = True; Save changes  
#### Livechat->User Management  

add livechat agents by "search by username" and add bot1 and bot2
#### Livechat->Departments
Add New Department
```
    Name: support, Enabled: Yes, Available agents:bot1, bot2 and save
````

On the rocket.chat home page, enable **livechat**

----
## Install Botpress

Install botpress  
`npm install -g botpress`  
`botpress --version`  
10.35.0  

----

## Setup Bots

Setup a directory for bot

```
    mkdir bot1
    cd bot1
```

Generate a new bot  

`botpress init`


Install botpress-channel-rocketchat  

`npm install botpress-channel-rocketchat --save`  

Install bot dependencies by running npm install ...  

`npm install`  

Update botfile port to 3001 ( or a port that is available)  
edit botfile.js and change port from 3000 to 3001  
+const port = process.env.BOTPRESS_PORT || process.env.PORT || **3001**  

`botpress start`  

(bot may start with errors. Kill the bot and follow the below instructions)  

`cd config`  
 check if `channel-rocketchat.json` exists. If not make a file or update the file with below entries  
```
{
    "ROCKETCHAT_USER": "bot1" //"<<botname>>",
    "ROCKETCHAT_PASSWORD":"bot2" // "<<botpassword>>",
    "ROCKETCHAT_URL": "<<rocket.chat host url>>",
    "ROCKETCHAT_USE_SSL": "false",
    "ROCKETCHAT_ROOM": "GENERAL",
    "scope": ""
}
```  

Start the bot again  

`botpress start`  

### Setting up bot2  
```
    e.g
    /bot1
    /bot2

mkdir bot2
cd bot2
```  
Repeat the bot setup steps for bot2, with the below changes  

change botfile.js port to **3002**  
change `config/channel-rocketchat.json`  
```
    ROCKETCHAT_USER = "bot2"  
    ROCKETCHAT_PASSWORD = "bot2"  

```  
## Test livechat  
yourserver:port/livechat  

----
## Troubleshooting  

If there is an error in starting the bot, such as port address in use, remove the `.data` folder in the bot directory  
 `rm -rf .data` (from the bot folder)  
 
 
For updates on progress or to make a contribution, please see [issue #5772](https://github.com/RocketChat/Rocket.Chat/issues/5772)

