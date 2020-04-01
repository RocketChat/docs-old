# Livechat Queues

There are three queue types on Rocket.Chat:

- [Auto Selection [default]](#auto-selection)
- [Manual Selection](#manual-selection)
- [External Service](#external-service)

## Auto Selection

Each new chat routes to the agent who is currently the lower count. If there are more than one agent available with the same count. the chat goes to the first in order.

Consider the following department configuration:

<!-- ![image](image1.png) -->

When a new chat comes, it routes to `agent-1`, because they have a `0` count and is the first in order,
and the `agent-1`'s count increases to `1`:

<!-- ![image](image2.png) -->

A new incoming chat routes to `agent-2`, and so on, until all agents have one chat each. So the next round comes starting with `agent-1`.

## Manual Selection

With this queue method active, agents will have a new `Incoming Livechats` section:

![image](https://cloud.githubusercontent.com/assets/8620042/15939957/a10bb994-2e3f-11e6-81ff-9b5c96046137.png)

Each new chat will be available on the `Incoming Livechats` section to **all** agents. So any agent can
take a new incoming chat.

When the agent clicks on the incoming Livechat, the system will show the preview of the chat cotaining the messages sent by the visitor, so the agent can decide if they wish to take the chat or not.
If the agent decides to take it, the incoming chat will be removed from the incoming chats list of the other agents.

## External Service

You can use an `External Service` to integrate your own agent routing rule into Livechat.

Once you set up the `External Service` as the Livechat routing method, you must define the `External Queue Service URL` and `Secret Token` settings in Livechat admin panel.

The Rocket.Chat will send a GET request to the `External Queue Service URL` and the setting `Secret Token` is sent as a header `X-RocketChat-Secret-Token`, so you can validate if the request became from the Rocket.Chat.

If your endpoint returns a response status other than 200, Rocket.Chat will try 10 times until it receives a valid response.

Here is an example of the JSON data format that Livechat waits until after submitting the `GET` request:

```json
{
    "_id": "CbbQkRAifP6HtDLSr",
    "username": "valid.username"
}
```

After receiving the return from the endpoint in the format described above, Livechat checks that the `username` field represents a valid Livechat agent and then follow the normal process flow.

## Agent Utilization Limit

This is a feature to control how many chats can be attended by a livechat agent simultaneously. Incoming Livechat sessions over the specified value fall in a waiting queue, and visitors receive a Waiting Queue message.

![**Administration > Livechat > Routing**](livechat-queues\agent-limit.png)

You can also specify the number of previous chats used for calculating the average waiting time in the queue. As show above.

![If all agents reach the limit of current open chat rooms, this is what the visitor sees when placed in the waiting queue](administrator-guides\omnichannel-integrations\livechat-widget\livechat-enterprise\livechat-queues\queue-message.png)

If agents try to take a chat when they reach their limit of open chat rooms, they receive a message informing that "the maximum number of simultaneous chats per agent has been reached".

You can also set the agent utilization limit and waiting queue message per department, under **Livechat > Departments > Select department** and edit it:

![image](administrator-guides\omnichannel-integrations\livechat-widget\livechat-enterprise\livechat-queues\department-limit.png)

