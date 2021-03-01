---
description: Deploying Rocket.Chat on Vagrant with Ubuntu
---

# Vagrant

```bash
# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  config.vm.box = "ubuntu/trusty64"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network "private_network", ip: "192.168.33.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  config.vm.provider "virtualbox" do |vb|
  #   # Display the VirtualBox GUI when booting the machine
  #   vb.gui = true
  #
  #   # Customize the amount of memory on the VM:
    vb.memory = "2048"
  end
  #
  # View the documentation for the provider you are using for more
  # information on available options.

  # Define a Vagrant Push strategy for pushing to Atlas. Other push strategies
  # such as FTP and Heroku are also available. See the documentation at
  # https://docs.vagrantup.com/v2/push/atlas.html for more information.
  # config.push.define "atlas" do |push|
  #   push.app = "YOUR_ATLAS_USERNAME/YOUR_APPLICATION_NAME"
  # end

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
  config.vm.provision "shell", inline: <<-SHELL
    # SYSTEM CONFIGURATION
    apt-get update
    apt-get install -y nodejs npm mongodb unzip

    ln -s /usr/bin/nodejs /usr/bin/node
    ln -s /usr/bin/nodejs /usr/sbin/node

    npm install nave -g
    npm install pm2 -g
    nave usemain 12.14.0

    curl https://install.meteor.com/ | sh

    pm2 startup

    mkdir -p /var/www/
    mkdir -p /var/log/rocket.chat

    # DEPLOY
    HOST=http://your_hostname.com
    MONGO_URL=mongodb://localhost:27017/rocketchat
    MONGO_OPLOG_URL=mongodb://localhost:27017/local
    ROOT_URL=http://localhost:3000
    PORT=3000

    cd /var/www/
    wget https://github.com/RocketChat/Rocket.Chat/archive/master.zip
    unzip master.zip
    mv Rocket.Chat-master rocket.chat

    cd ./rocket.chat
    meteor build --server "$HOST" --directory .

    cd ./bundle/programs/server
    npm install

    cd ../..

    rm -f pm2-rocket-chat.json
    echo '{'                                                     > pm2-rocket-chat.json
    echo '  "apps": [{'                                         >> pm2-rocket-chat.json
    echo '    "name": "rocket.chat",'                           >> pm2-rocket-chat.json
    echo '    "script": "/var/www/rocket.chat/bundle/main.js",' >> pm2-rocket-chat.json
    echo '    "out_file": "/var/log/rocket.chat/app.log",'      >> pm2-rocket-chat.json
    echo '    "error_file": "/var/log/rocket.chat/err.log",'    >> pm2-rocket-chat.json
    echo "    \\"port\\": \\"$PORT\\","                         >> pm2-rocket-chat.json
    echo '    "env": {'                                         >> pm2-rocket-chat.json
    echo "      \\"MONGO_URL\\": \\"$MONGO_URL\\","             >> pm2-rocket-chat.json
    echo "      \\"MONGO_OPLOG_URL\\": \\"$MONGO_OPLOG_URL\\"," >> pm2-rocket-chat.json
    echo "      \\"ROOT_URL\\": \\"$ROOT_URL\\","               >> pm2-rocket-chat.json
    echo "      \\"PORT\\": \\"$PORT\\""                        >> pm2-rocket-chat.json
    echo '    }'                                                >> pm2-rocket-chat.json
    echo '  }]'                                                 >> pm2-rocket-chat.json
    echo '}'                                                    >> pm2-rocket-chat.json

    pm2 start pm2-rocket-chat.json
    pm2 save
  SHELL
end
```

