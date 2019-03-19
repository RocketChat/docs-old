# Quick start for code developers

## On Linux/Mac

To run Rocket.Chat for development on a Linux or a Mac, you must first have the following programs installed.
 The following instruction has been tested on a new Ubuntu 18.04 LTS installation.

During the build, memory usage will be nearly 8G, this is the minimum level of RAM recommended for development workstations.

Note that there is no need to install mongo, nodejs, or npm on the base operating system.

Development should be performed under a regular user account (not `root`) on Linux.  There should be no need to run `sudo` at all.

You may notice build WARNINGs related to _peer dependencies_  or other transitive dependencies.  They are typically safe to ignore unless you are coding the feature or modules that require them.

1. Install tools required

    `sudo apt install g++ build-essential git curl python-minimal`

2. Install meteor

    `curl https://install.meteor.com/ | sh`
    There is no need to install `node` or `npm`, as meteor already includes them.  Verify by:
    `meteor node -v`
    `meteor npm -v`

3. Get rocket.chat code
- `git clone https://github.com/RocketChat/Rocket.Chat.git` (if you wish to clone your own fork, replace with your repo link which may look like __*https://github.com/your-user-name/Rocket.Chat.git*__).
- `cd Rocket.Chat` (or as per the name of your cloned repository).

4. Install modules
    `meteor npm install`

5. Start building (can take 5 minutes, please be patient)
- `meteor npm start` (Warning: It may take a while to build so please be patient).
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

Using Windows to develop is not recommended. Instead it is better to create a Linux virtual machine and follow the steps mentioned above, but if for some reason you really need to build Rocket.Chat on Windows, you can find a community supported guide over [here](../../installation/community-supported-installation/windows-server/).

## See Also

- [Supporting SSL for Mobile Apps](../mobile-apps/supporting-ssl/)
- [Development Troubleshooting](../../developer-guides/troubleshooting/)
- [Deployment Methods](../../installation/paas-deployments/)
