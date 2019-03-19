# Talking to users from another server

Once you have [added your server to the Federated Network](../../administrator-guides/federation) you can talk to users from server who have done the same.

## Using Rocket.Chat Federation

After enabling federation, you should be able to start chatting with other servers.

## Inviting users from a different server

To do so, you should go to the `Directory` section, `Users` tab, and pick `Every Workspace` from the dropdown menu.

![Directory Search Users](./directory.png)

Then, you should be able to look for users on remote servers, called peers. You can search using a combination of a username and a domain or an e-mail address, like:

- Username: `myfriendsusername@anotherdomain.com`
- E-mail address: `joseph@remotedomain.com`

If the remote server is within Rocket.Chat Federated Network, you will be able to see the users:

![Directory Search Result](./directory-result.png)

## Inviting remote users and chatting

If you click on one of those listed users, you will invite them to your server without login access. Also, you and everyone else on your server will be able to chat with that new remote user.

![Chat](./chat.png)

From now on, you can invite that user to any other room, public or private. Those channels are going to be replicated to the remote server, without the messages history.

As a reminder, if you invite a remote user to a public channel, this channel will be created as private on the remote server, so you can be sure only invited users will be able to see that channel content.
