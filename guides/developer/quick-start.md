# Quick Start on Linux

You can run Rocket.Chat for development on a Linux machine or VM. The following instruction has been tested on a new Ubuntu 18.04 LTS installation. Try to find and use a _NEW Ubuntu server installation_ with no other un-necessary software installed, not a "Desktop" or "Client" installation.

_DO NOT_ use a system where you already have nodeJS installed to avoid problems.

During the build, memory usage will be nearly 8G, this is the minimum level of RAM recommended for development workstations. \(If you are not doing any development, and just deploying a Rocket.Chat server - the RAM required can be as low as 1G.\)

IMPORTANT: Note that there is no need to install mongo, nodejs, or npm on the base operating system. If you have any of these already installed; start over, or use another CLEAN system.

Development should be performed under a regular user account \(not `root`\) on Linux. There should be no need to run `sudo` at all. Running `sudo`, even once, during the installation -- may mess up file permissions in irreversable manner.

You may notice build WARNINGs related to _peer dependencies_ or other transitive dependencies. They are typically safe to ignore unless you are coding the feature or modules that require them.

1. Install tools required

   `sudo apt install g++ build-essential git curl python-minimal`

2. Install meteor

   `curl https://install.meteor.com/ | sh`

   \(Under some circumstances, you may need to install a specific \(older\) release of Meteor instead of the latest, always check the `.meteor/release` file of the Github code repository to determine if you need to do this before you install meteor\)

   There is no need to install `node` or `npm`, as meteor already includes them. Verify by:

   `meteor node -v`

   `meteor npm -v`

3. Get rocket.chat code 

   `git clone https://github.com/RocketChat/Rocket.Chat.git`

    \(you may want to fork the code on Github first, and then clone your fork\)

4. Install modules

   `cd Rocket.Chat`

   `meteor npm install`

5. Start building \(the first build can _take 10 or more minutes_, and you may see various warnings or minor errors -- please be patient; subsequent dev builds after the first will be 5 minutes or less\)

   `meteor npm start`

When the server is ready, you will see a box with "Server Running" title:

![](../../.gitbook/assets/image%20%285%29.png)

This means that a Rocket.Chat server is running from your computer. To access the server, navigate to

`http://localhost:3000`

Other references:

* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Meteor](https://www.meteor.com/install)

### Editing Rocket.Chat Files

Editing files is relatively simple. After you run `git clone`, the files from the repository are saved on your computer. You can go to the cloned repository folder and edit or add files to Rocket.Chat. When you make changes to Rocket.Chat the server will automatically rebuild.

Sometimes changes can shut down the server, if that happens just run `meteor npm start` again.  
  
The Rocket.Chat code base is very large.  You may need to increase this [system parameter ](https://github.com/meteor/docs/blob/master/long-form/file-change-watcher-efficiency.md)on your operating system for the files-change watcher to operate efficiently.

## On Windows

Using Windows to develop is not recommended at this time, instead is better to create a Linux virtual machine and follow the steps mentioned above, but if for some reason you really need to build Rocket.Chat on Windows you can find a community supported guide over [here](../../installation/community-supported-installation/windows-server.md).  
  
We look forward to the official release of Windows Subsystem for Linux 2 \(WSL 2\) when Rocket.Chat development on Linux may finally become viable.

## See Also

* [Supporting SSL for Mobile Apps](mobile-apps/supporting-ssl.md)
* [Development Troubleshooting](troubleshooting.md)
* [Deployment Methods](../../installation/paas-deployments/)

