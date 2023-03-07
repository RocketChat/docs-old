---
description: Set up an Ansible environment for deploying Rocket.Chat to multiple servers.
---

# Ansible

{% hint style="info" %}
See the [Rocket.Chat official Ansible role](https://galaxy.ansible.com/RocketChat/Server#readme),
{% endhint %}

## Installation

Ansible works on a "push to clients" basis. Your control node pushes all the configuration/ad-hoc tasks out to your systems via SSH, with no client running on the systems you're deploying to! In order words, it's swift, efficient, secure, scalable, and highly portable. Therefore, to control remote systems, you only need to install Ansible on your control node (your desktop can be an excellent control node to deploy from). Ansible has&#x20;

{% hint style="info" %}
To learn more about Ansible installation on different operating systems, see the [official installation guide](https://docs.ansible.com/ansible/latest/installation\_guide/index.html).
{% endhint %}

### Installation via package manager

Ansible is likely available in your official package repositories if you're using a UNIX-like operating system, such as Linux or BSD. Use your package manager to see if it's available and install it.

### Installation via PIP

Ansible is written in Python, so it's only natural that it be available for installation via [`pip`](https://pypi.python.org/pypi). . If you have pip installed, run the following command:

&#x20;`sudo pip install ansible`

If you do not have pip, check  if you can install `pip` through your system's package manager (look out for Python 2.7 version). If you're on Mac OS X and you're not using [Homebrew](http://brew.sh) or [pkgsrc](https://github.com/cmacrae/saveosx), you should be able to install `pip` using `easy_install` with this command:

```
sudo easy_install pip 
sudo pip install ansible
```

## Simple Deployment Environment for Rocket.Chat

Now that you've installed Ansible, you can deploy Rocket.Chat.

### Prerequisites

* You must have SSH access to the system you want to deploy to, as the `root` user.
* The system you're deploying to must have Python installed and run one of the following operating systems:
  * EL 7 (RHEL/CentOS)
  * Debian 8 (Jessie) LTS
  * Ubuntu 18.04 LTS
  * Ubuntu 19.04

{% hint style="info" %}
Future releases of the [official Rocket.Chat Ansible role](https://galaxy.ansible.com/RocketChat/Server/#readme) will include other operating systems and Linux distributions/releases. If you'd like to see a particular OS supported, please [raise an issue](https://github.com/RocketChat/Rocket.Chat.Ansible/issues) to ask if it can be added.
{% endhint %}

### Inventory set-up

Create a directory anywhere on your system, possibly in your home directory or where you save your code or Git repositories. Give it a name and navigate to that directory.

```
mkdir ansible
cd ansible
ansible $
```

Next, create an inventory file in that directory. The inventory file is a simple formatted file containing a list of systems we want to connect to and control using Ansible. It can include single hosts, group hosts together, groups of groups, and set variables on a host or group basis.&#x20;

{% hint style="info" %}
&#x20;We recommend naming the directory `ansible` and the file `inventory` to maintain a proper naming convention.
{% endhint %}

```
touch inventory
```

Open the file and add the hostname or FQDN of the server(s) you want to deploy Rocket.Chat to.

```
chat.my.domain
```

The `[chat_servers]` denotes a group called "chat\_servers." Any hostnames/FQDNs/IP addresses under this will be members of the "chat\_servers" group. If you want to add another server, add it like this:

```
[chat_servers]
chat.my.domain
talk.my.domain
```

We recommend authenticating SSH connections to your server(s) using SSH key pairs. However, you can provide Ansible with the root user's password in the inventory file if you don't have SSH.&#x20;

{% hint style="danger" %}
This should only be temporary because it is an insecure practice.
{% endhint %}

Set the `root` user's password for the `chat.my.domain` host:

```
[chat_servers]
chat.my.domain ansible_ssh_pass=SuP3rseCre7pA$sw0rd
talk.my.domain
```

### Download the Rocket.Chat Ansible role

Ansible shares and uses other people's roles through [Galaxy](http://galaxy.ansible.com). You can download the roles you want using a command-line tool installed earlier when you installed Ansible.

```
 ansible-galaxy.
```

First, create a `roles` directory:

```
ansible $ mkdir roles
```

Then, create a `requirements.yml` file describing how we want to fetch the role to `ansible-galaxy`. Open the file `roles/requirements.yml`.The file's contents will vary based on which version of Ansible you're running.

{% hint style="info" %}
Run `ansible --version` to know your version of Ansible.
{% endhint %}

If you're running Ansible 1.9.4,  update `requirements.yml` with the following data:

```yaml
- src: RocketChat.Server
  version: master
```

If you're running Ansible 2.0, update  `requirements.yml` with the following data:

```yaml
  - src: RocketChat.Server
    version: v2.2.2
```

Next, fetch the Rocket.Chat Ansible role using the `ansible-galaxy` command:

```
ansible-galaxy install -p roles/ -r roles/requirements.yml
```

This command installs any roles defined `requirements.yml`. Now you have the `RocketChat.Server` role in your `roles` directory.

```
ls roles
RocketChat.Server
```

### Create a Playbook to "play" the Rocket.Chat Ansible Role

Ansible roles are built from a collection of "plays" - essentially, tasks/actions to take. To use a role, create a simple playbook that tells Ansible, "I want to run this role on these systems."

Let's call the playbook `rocket_chat.yml` .

{% hint style="info" %}
The `.yml` denotes a YAML document, which is what language you use to express most things in Ansible.
{% endhint %}

```
touch rocket_chat.yml
```

&#x20;Add the following information  to your `rocket_chat.yml` playbook:

```yaml
---

  - name: Apply the RocketChat.Server role to all chat_servers
    hosts: chat_servers

    roles:
      - RocketChat.Server
```

### Deploy Rocket.Chat using Ansible

To run the playbook, use the `ansible-playbook` command,&#x20;

```
ansible-playbook -i inventory rocket_chat.yml
```

This command can be expressed as "run the `rocket_chat.yml` playbook with the inventory file `inventory`." When the deployment is successful, visit  `https://chat.my.domain` and the Rocket.Chat login screen appears.

{% hint style="info" %}
See the [README](https://github.com/RocketChat/Rocket.Chat.Ansible/blob/master/README.md) to explore other Ansible role options.
{% endhint %}
