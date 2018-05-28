# Ansible

## Quick Links

- [Rocket.Chat official Ansible role](https://galaxy.ansible.com/RocketChat/Server/#readme)
- [Ansible official install guide](http://docs.ansible.com/ansible/intro_installation.html)

## About

This document will explain, to those unfamiliar with Ansible, how they can get an Ansible environment set-up quickly, with the end goal of deploying Rocket.Chat to a (or multiple) server(s).

It is a quick, dirty HowTo format, not intended to teach you Ansible's full capabilities.
Ansible is an incredible tool, with great documentation, a welcoming community, and it's all very easy to pick up - not to mention extremely powerful and suited for just about any situation.

## Operational Overview

Ansible works on a "push to clients" basis. You have your control node, which pushes all the configuration/ad-hoc tasks out to your systems via SSH, with no client running on the systems you're deploying to! This model means it's very fast, efficient, secure, scalable, and extremely portable.

So, to control remote systems, you only need to install Ansible on your control node - your own desktop would make a great control node to deploy from :)

## Getting Ansible

It's recommended that you check out [Ansible's official documentation on installing](http://docs.ansible.com/ansible/intro_installation.html) (it's really easy!), but here's a quick rundown of installation methods:

### Package manager

If you're running a UNIX-like system, like Linux or BSD, Ansible is likely available in your official package repositories.
Use your package manager to see if it's available, and if so, install it!
[Ansible's installation documentation has a section on this](http://docs.ansible.com/ansible/intro_installation.html#latest-release-via-yum) - just scroll down until you see your OS.

### Via Pip

Ansible is written in Python, so, it's only natural that it be available for install via [`pip`](https://pypi.python.org/pypi).
If you have `pip` installed, it's as easy as:
`$ sudo pip install ansible`

If not, check to see if you can install `pip` via your system's package manager (you want the Python 2.7 version!).

Or, if you're on Mac OS X, and you're not using [Homebrew](http://brew.sh) or [pkgsrc](https://github.com/cmacrae/saveosx), you should be able to install `pip` using `easy_install`, like so:
`$ sudo easy_install pip`
then

```
$ sudo pip install ansible
```

For any other systems, please refer to [Ansible's official documentation on installing](http://docs.ansible.com/ansible/intro_installation.html).

### Simple Deployment Environment for Rocket.Chat

So, now you've got Ansible installed, you can get ready to deploy Rocket.Chat!

### Prerequisites

- You must have SSH access to the system you want to deploy to as the `root` user.
- The system you're deploying to must have Python installed (pretty much comes with most operating systems nowadays, easy to install if not).
- The system you're deploying to must run one of the following operating systems:
    - EL 7 (RHEL/CentOS)
    - Debian 8 (Jessie) LTS
    - Ubuntu 14.04 LTS
    - Ubuntu 15.04

  Future releases of the [official Rocket.Chat Ansible role](https://galaxy.ansible.com/RocketChat/Server/#readme) will include other Linux distributions/releases and other operating systems. If you'd like to see your OS of choice supported, feel free to [raise an issue](https://github.com/RocketChat/Rocket.Chat.Ansible/issues) to ask if it can be added.

### Inventory set-up

Make a directory somewhere, perhaps in your home directory, or somewhere you keep Git repositories or code. It doesn't really matter what it's called, but for example's sake, we'll call ours `ansible`:

```
~/ $ mkdir ansible
~/ $ cd ansible
~/ansible $
```

Now we're in our `ansible` directory, we're going to make an inventory file.
This is a simple ini formatted file that contains a list of systems that we want to connect to and control using Ansible. It can contain single hosts, group hosts together, groups of groups, set variables on a host or group basis... there are lots of things you can do with the inventory, but that's outside the scope of this document's intended teachings.

Make the inventory file `inventory`, for simplicity's sake:
`~/ansible $ touch inventory`

Now, with your favorite editor, open the file and add the hostname or FQDN of the server(s) you want to deploy Rocket.Chat to, like so:

``` ini
[chat_servers]
chat.my.domain
```

Notice the `[chat_servers]` line? This denotes a group, simply called "chat_servers".
Any hostnames/FQDNs/IP addresses under this will be members of the "chat_servers" group.
If you want to add another server, just drop it in like so:

``` ini
[chat_servers]
chat.my.domain
talk.my.domain
```

We're pretty much done with the inventory, just one last thing whilst we're on the subject: if you are not using SSH keypairs for authenticating your SSH connections to your server(s)... you should be... but if you're not, you can tell Ansible the `root` user's password here in the inventory file.
This is, of course, insecure, and is considered bad practice - so should only be temporary.
Let's set the `root` user's password for the `chat.my.domain` host:

``` ini
[chat_servers]
chat.my.domain ansible_ssh_pass=SuP3rseCre7pA$sw0rd
talk.my.domain
```

Simple as that! Alright, we're almost ready to deploy Rocket.Chat, just two more things to sort out.

### Download the Rocket.Chat Ansible role

Ansible has a nice and easy way to share and use other people's roles: [Galaxy](http://galaxy.ansible.com).
You can download roles you want to use by using a command line tool that was installed earlier when you installed Ansible, `ansible-galaxy`.

First off, our roles need somewhere to live, so, let's make a `roles` directory:

```
~/ansible $ mkdir roles
```

Then, we need to create a `requirements.yml` file that will describe to `ansible-galaxy` how we want to fetch the role. So, create and open the file `roles/requirements.yml` using your favorite editor.
The contents of `requirements.yml` will vary based on which version of Ansible you're running.
Run `ansible --version` to find out.

If you're running Ansible 1.9.4, paste the following into your `requirements.yml`:

``` yaml
- src: RocketChat.Server
  version: master
```

If you're running Ansible 2.0, paste the following into your `requirements.yml`:

``` yaml
  - src: RocketChat.Server
    version: v2.2.2
```

Next, let's fetch the Rocket.Chat Ansible role using the `ansible-galaxy` command:
`~/ansible $ ansible-galaxy install -p roles/ -r roles/requirements.yml`
This command says "Hey, I want to install any roles I have defined in `requirements.yml`".
Hopefully, after a couple seconds, you should have the `RocketChat.Server` role in your `roles` directory:

```
~/ansible $ ls roles
RocketChat.Server
```

Great! One last thing to prepare!

### Create a Playbook to "play" the Rocket.Chat Ansible Role

Ansible roles are built out of a collection of "plays" - which are essentially tasks/actions to take.
To use a role, we need to create a very simple little playbook which tells Ansible "I want to run this role, on these systems.".

Let's call the playbook `rocket_chat.yml` (the `.yml` denotes a YAML document, which is what language you use to express most things in Ansible):
`~/ansible $ touch rocket_chat.yml`

Now, again, with your favorite editor, add the following to your `rocket_chat.yml` playbook:

``` yaml
---

  - name: Apply the RocketChat.Server role to all chat_servers
    hosts: chat_servers

    roles:
      - RocketChat.Server
```

That's it! You're ready to go!

### Deploy Rocket.Chat using Ansible

To run the playbook, use the `ansible-playbook` command, like so:
`~/ansible $ ansible-playbook -i inventory rocket_chat.yml`

This command could be expressed as "Run the `rocket_chat.yml` playbook with the inventory file `inventory`.".

Now we just sit back and watch the magic happen ;)

When it's all done, provided all went well and no parameters were changed, you should be able to visit `https://chat.my.domain` and be greeted by a wonderful Rocket.Chat logo and login screen!

There are _lots_ of options you can set with this role, just take a look at the [README](https://github.com/RocketChat/Rocket.Chat.Ansible/blob/master/README.md) to find out more.
