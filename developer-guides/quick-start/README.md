# Quick start for code developers

## Installing Rocket.Chat for Developing

### On Linux/Mac

To run Rocket.Chat for development on a Linux or a Mac you must first have the following programs installed.

These will require root privileges:

Install `g++ build-essential git mongodb`

Install Meteor:

`curl https://install.meteor.com/ | sh`

Notes here:

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Meteor](https://www.meteor.com/install)

Install latest npm:

`npm i npm@latest -g`

Add 'n' so you can easily swap node versions:

n 8.11.4 (use one similar to the official builds)

Once the above pre-requisites are installed open a terminal as a standard user and run the following:

- `git clone https://github.com/RocketChat/Rocket.Chat.git` (if you wish to clone your own fork, replace "/RocketChat/" with /YOUR REPOSITORY NAME HERE/)
- `cd Rocket.Chat` (or the name of your repository)

You may need to do the following to avoid module errors:

`npm run postinstall`

`npm install sharp chai webpack postcss postcss-syntax fibers`

`npm audit fix` (just to help) or `npm audit fix --force`

Now start the build:

- `meteor npm start` (Warning: It may take a while to build so please be patient)

When the server is ready, you will see a green box within the terminal with "Server Running" at the top.

```
I20181122-12:33:53.282(0)? ➔ +-----------------------------------------------+
I20181122-12:33:53.282(0)? ➔ |                 SERVER RUNNING                |
I20181122-12:33:53.282(0)? ➔ +-----------------------------------------------+
I20181122-12:33:53.283(0)? ➔ |                                               |
I20181122-12:33:53.283(0)? ➔ |  Rocket.Chat Version: 0.72.0-develop          |
I20181122-12:33:53.283(0)? ➔ |       NodeJS Version: 8.11.4 - x64            |
I20181122-12:33:53.284(0)? ➔ |             Platform: linux                   |
I20181122-12:33:53.284(0)? ➔ |         Process Port: 28349                   |
I20181122-12:33:53.285(0)? ➔ |             Site URL: http://localhost:3000/  |
I20181122-12:33:53.285(0)? ➔ |     ReplicaSet OpLog: Enabled                 |
I20181122-12:33:53.285(0)? ➔ |          Commit Hash: f8a5b8f09a              |
I20181122-12:33:53.286(0)? ➔ |        Commit Branch: develop                 |
I20181122-12:33:53.286(0)? ➔ |                                               |
I20181122-12:33:53.287(0)? ➔ +-----------------------------------------------+
```

This means that a Rocket.Chat server is running from your computer. To access the server, navigate to `localhost:3000`

## Editing Rocket.Chat Files

Editing files is relatively simple. After you run `git clone`, the files from the repository are saved on
your computer. You can go to the cloned repository folder and edit or add files to Rocket.Chat.
When you make changes to Rocket.Chat the server will automatically rebuild.

Sometimes changes can shut down the server, if that happens just run `meteor npm start` again.

### On Windows

Using Windows to develop is not recommended, instead is better to create a Linux virtual machine and follow the steps mentioned above, but if for some reason you really need to build Rocket.Chat on Windows you can find a community supported guide over [here](../../installation/community-supported-installation/windows-server/).

## See Also

- [Supporting SSL for Mobile Apps](../mobile-apps/supporting-ssl/)
- [Development Troubleshooting](../../developer-guides/troubleshooting/)
- [Deployment Methods](../../installation/paas-deployments/)
