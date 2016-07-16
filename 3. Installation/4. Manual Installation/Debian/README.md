# Deploying Rocket.Chat on Debian

This guide explains how to deploy your own Rocket.Chat instance to a Debian Wheezy or Jessie Linux machine using the command line.

## 1. Install Dependencies

- `Node.js`
- `MongoDB`
- `curl`
- `graphicsmagick`

```shell
# SYSTEM CONFIGURATION
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
# Here use wheezy even if you are installing it on Jessie. 
# since Jessie repository of Mongodb does NOT includes mongodb 3.2
echo "deb http://repo.mongodb.org/apt/debian wheezy/mongodb-org/3.2 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
sudo apt-get update
sudo apt-get install -y mongodb-org curl graphicsmagick

# We have to also install `npm`, which is the Node.js package manager. You can do this by typing:
sudo apt-get install npm

# If you encountered some errors when trying to install npm
# try to install nodejs in the first place.
# The nodejs package contains the nodejs binary as well as npm, so you don't need to install npm separately.
sudo apt-get install nodejs

# OR
# An alternative that can get you a more recent version of Node.js is to add a PPA maintained by NodeSource
curl -sL https://deb.nodesource.com/setup | sudo bash -
# After running the setup script from nodesource, you can install the Node.js package
# in the same way that you did above
sudo apt-get install nodejs
# In order for some npm packages to work (such as those that require building from source)
# you will need to install the build-essentials package:
sudo apt-get install build-essential
# for more please view the link below.





# Install a tool to let us change the node version.
sudo npm install -g n

# Meteor needs at least this version of node to work.
sudo n 0.10.40
```

More on [nodejs installation](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server)


## 2. Install Rocket.Chat

From here you can follow [the documentation for Ubuntu install, from step 2](/3.%20Installation/4.%20Manual%20Installation/Ubuntu#2-install-rocketchat)

