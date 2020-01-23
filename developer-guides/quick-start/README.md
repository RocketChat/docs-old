# Quick start for code developers

## On Linux/Mac

You can run Rocket.Chat for development on a Linux or a Mac. The following instruction has been tested on a new Ubuntu 18.04 LTS installation.    Try to find and use a *NEW Ubuntu server installation* with no other un-necessary software installed, not a "Desktop" or "Client" installation.

*DO NOT* use a system where you already have nodeJS installed to avoid problems.

During the build, memory usage will be nearly 8G, this is the minimum level of RAM recommended for development workstations.  (If you are not doing any development, and just deploying a Rocket.Chat server - the RAM required can be as low as 1G.)

IMPORTANT:  Note that there is no need to install mongo, nodejs, or npm on the base operating system.  If you have any of these already installed; start over, or use another CLEAN system.

Development should be performed under a regular user account (not `root`) on Linux.  There should be no need to run `sudo` at all.   Running `sudo`, even once,  during the installation -- may mess up file permissions in irreversable manner.

You may notice build WARNINGs related to _peer dependencies_  or other transitive dependencies.  They are typically safe to ignore unless you are coding the feature or modules that require them.

1. Install tools required

    `sudo apt install g++ build-essential git curl python-minimal`

2. Install meteor

    `curl https://install.meteor.com/ | sh`

   (Under some circumstances, you may need to install a specific (older) release of Meteor instead of the latest, always check the `.meteor/release` file of the Github code repository to determine if you need to do this before you intall meteor)

    There is no need to install `node` or `npm`, as meteor already includes them.  Verify by:

    `meteor node -v`

    `meteor npm -v`

3. Get rocket.chat code

    `git clone https://github.com/RocketChat/Rocket.Chat.git`

4. Install modules

    `cd Rocket.Chat`

    `meteor npm install`

5. Start building (the first build can *take 30 or more minutes*, and you may see various warnings or minor errors --  please be patient;  subsequent dev builds after the first will be 5 minutes or less)

    `meteor npm start`

When the server is ready, you will see a box with "Server Running" title:

```
I20181122-12:33:53.282(0)? ➔ +-----------------------------------------------+
I20181122-12:33:53.282(0)? ➔ |                 SERVER RUNNING                |
I20181122-12:33:53.282(0)? ➔ +-----------------------------------------------+
I20181122-12:33:53.283(0)? ➔ |                                               |
I20181122-12:33:53.283(0)? ➔ |  Rocket.Chat Version: 1.0.0.2          |
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

This means that a Rocket.Chat server is running from your computer. To access the server, navigate to

`http://localhost:3000`

Other references:

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Meteor](https://www.meteor.com/install)

### Editing Rocket.Chat Files

Editing files is relatively simple. After you run `git clone`, the files from the repository are saved on
your computer. You can go to the cloned repository folder and edit or add files to Rocket.Chat.
When you make changes to Rocket.Chat the server will automatically rebuild.

Sometimes changes can shut down the server, if that happens just run `meteor npm start` again.

## On Windows

Using Windows to develop is not recommended, instead is better to create a Linux virtual machine and follow the steps mentioned above, but if for some reason you really need to build Rocket.Chat on Windows you can find a community supported guide over [here](../../installation/community-supported-installation/windows-server/).

## See Also

- [Supporting SSL for Mobile Apps](../mobile-apps/supporting-ssl/)
- [Development Troubleshooting](../../developer-guides/troubleshooting/)
- [Deployment Methods](../../installation/paas-deployments/)
