# Livechat

Rocket.Chat had Livechat integration as a feature for a long time.

Recently, the demand for production-grade Livechat has increased, and we started a completely rewrite of the package.

This document is instructions on setting up the new Livechat  _work-in-progress_ version.

**_IMPORTANT Warning: this new Livechat package is still under heavy development, it's not recommended for production._**

**Livechat package is only on develop builds at the moment**

# Introduction

Livechat package adds the ability to embed a pop-up support chat to your website.

# Activation and Configuration

## Enable Livechat feature

First, you have enable the Livechat feature on your Rocket.Chat instance. Go to `Administration > Settings > Livechat` and enable it.

![image](https://cloud.githubusercontent.com/assets/8591547/14460567/97c6609c-0094-11e6-8f7e-da9a7c08ba51.png)

Now the admin will have access to *Livechat manager* through a new menu called `Livechat` at the top left corner drop down menu.

![image](https://cloud.githubusercontent.com/assets/8591547/14460616/d8213bbc-0094-11e6-85cd-cc061ab1fb1d.png)

## Configure Livechat feature

At *Livechat manager* you'll have the following configuration options:

### User Management

You can add new livechat manager users and agents.

In order to start receiving incoming live chats you need to add livechat agents.

### Departments

You can have the following behavior according on how many department you have created:

* No departments: all Livechat agents will receive incoming chats using a round robin rule;
* One department: all incoming chats will be offered to agents **only** on that department using a round robin rule;
* More than one department: the visitor will have to choose with what department he wants to talk to at registration.

### Triggers

You can configure how your Livechat widget will be triggered on your website.

Fill in the condition field and the action field.

### Custom Fields

You can configure custom fields to be sent by the client.

To set a custom field of a visitor, use the following code after the loading script:

```
<script type="text/javascript">
    RocketChat(function() {
        this.setCustomField('fieldName1', 'Any value you want to store');
        this.setCustomField('fieldName2', 'Any value you want to store');
    });
</script>
```

### Installation

Use this JavaScript code to add the Livechat widget to your website. You may modifying it to your specific requirements.

### Appearance

Customize the appearance of your Livechat widget
