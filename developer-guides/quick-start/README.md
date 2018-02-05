# Quick start for code developers

## Installing Rocket.Chat for Developing

### On Windows

To install on Windows please follow [this](https://docs.rocket.chat/installation/manual-installation/windows-server/) guide.

### On Linux/Mac

To run Rocket.Chat for development on a Linux or a Mac you must first have the following programs installed:

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Meteor](https://www.meteor.com/install)

Once the above two pre-requisites are installed opened the terminal and run the following:

- `git clone https://github.com/RocketChat/Rocket.Chat.git` (if you wish to clone your own fork, replace "/RocketChat/" with /YOUR REPOSITORY NAME HERE/)
- `cd Rocket.Chat` (or the name of your repository)
- `meteor npm start` (Warning: It may take a while to build so please be patient)

When the server is ready, you will see a green box within the terminal with "Server Running" at the top.

This means that a Rocket.Chat server is running from your computer. To access the server navigate to `localhost:3000`

## Editing Rocket.Chat Files

Editing files is relatively simple. After you run `git clone`, the files from the repository are saved on
your computer. You can go to the cloned repository folder and edit or add files to Rocket.Chat.
When you make changes to Rocket.Chat the server will automatically rebuild.

Sometimes changes can shut down the server, if that happens just run `meteor npm start` again.

## See Also

- [Development Troubleshooting](../../developer-guides/troubleshooting/)
- [Deployment Methods](../../installation/paas-deployments/)
