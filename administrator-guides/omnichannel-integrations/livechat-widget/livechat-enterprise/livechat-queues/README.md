# Livechat Queues

There are three queue types on Rocket.Chat:

- [Auto Selection [default]](#auto-selection)
- [Manual Selection](#manual-selection)
- [External Service](#external-service)

## Auto Selection

LiveChat routes each new chat to the agent with currently the lowest chat count. If there are several agents available with the same count, the chat goes to the first agent in order.

Consider the following department configuration:

<!-- ![image](image1.png) -->

When a new chat comes, it routes to `agent-1`, because they have a `0` count and are the first in order. `agent-1`'s count increases to `1`:

<!-- ![image](image2.png) -->

A new incoming chat routes to `agent-2`, and so on, until all agents have one chat each. So the next round of chats begins with `agent-1`.

## Manual Selection

With this queue method active, agents have a new `Incoming Livechats` section:

![image](https://cloud.githubusercontent.com/assets/8620042/15939957/a10bb994-2e3f-11e6-81ff-9b5c96046137.png)

Each new chat on the `Incoming Livechats` section is available to **all** agents. So any agent can
take a new incoming chat.

When the agent clicks the incoming LiveChat, the system show the preview of the chat containing the messages sent by the visitor. The agent can then decide if they wish to take the chat or not.

If the agent decides to take it, the system removes the  incoming chat from the incoming chats list seen by the other agents.

## External Service

You can use an `External Service` to integrate your own agent routing rule into LiveChat.

Once you set up the `External Service` as the LiveChat routing method, you must define the `External Queue Service URL` and `Secret Token` settings in the LiveChat admin panel.

Rocket.Chat sends a GET request to the `External Queue Service URL` and sending the `Secret Token`setting as a header `X-RocketChat-Secret-Token`, so you can validate whether Rocket.Chat sent the request.

If your endpoint returns a response status other than 200, Rocket.Chat tries 10 times until it receives a valid response.

See this example of the JSON data format that LiveChat waits upon after submitting the `GET` request:

```json
{
    "_id": "CbbQkRAifP6HtDLSr",
    "username": "valid.username"
}
```

After receiving the return from the endpoint in the format described above, LiveChat checks that the `username` field represents a valid LiveChat agent. The system then follows the normal process flow.

## Agent Utilization Limit

With the Agent Utilization Limit feature, you control how many chats a LiveChat agent attends simultaneously. 

Where there are more incoming LiveChat sessions than the  specified number, they fall into a waiting queue, and visitors receive a Waiting Queue message.

![**Administration > Livechat > Routing**](livechat-queues\agent-limit.png)

You can also specify the number of previous chats used, for calculating the average waiting time in the queue, as show above.

![If all agents reach the limit of current open chat rooms, this is what the visitor sees when placed in the waiting queue](administrator-guides\omnichannel-integrations\livechat-widget\livechat-enterprise\livechat-queues\queue-message.png)

If agents try to take a chat when they reach their limit of open chat rooms, they receive a message informing them that "the maximum number of simultaneous chats per agent has been reached".

You can also set the agent utilization limit and waiting queue message per department, under **LiveChat > Departments > Select department** and edit it:

![image](administrator-guides\omnichannel-integrations\livechat-widget\livechat-enterprise\livechat-queues\department-limit.png)
