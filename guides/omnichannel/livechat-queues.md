# Omnichannel Queue Types

There are three types of queue types on Rocket.Chat:

* [Auto Selection \[default\]](livechat-queues.md#auto-selection)
* [Manual Selection](livechat-queues.md#manual-selection)
* [External Service](livechat-queues.md#external-service)

## Auto Selection

Each new chat will be routed to the agent that are accepting chats with the lower count. If there are more then one available agent with the same count the chat will get the first in order.

Consider the following department configuration:

When a new chat comes, it'll be routed to `agent-1`, because he has `0` count and is the first in order, and the `agent-1`'s count will be increased to `1`:

A new incoming chat will be routed to `agent-2` and so on until all agents have one chat each. So the next round comes, starting with `agent-1`.

## Manual Selection

With this queue method active, agents will have a new `Incoming Livechats` section:

![image](https://cloud.githubusercontent.com/assets/8620042/15939957/a10bb994-2e3f-11e6-81ff-9b5c96046137.png)

Each new chat will be available on the `Incoming Livechats` section to **all** agents. So any agent can take a new incoming chat.

When the agent clicks on the incoming Livechat, the system will show the preview of the chat cotaining the messages sent by the visitor, so the agent can decide if he will take the chat or not. If the agent decides to take it, the incoming chat will be removed from the incoming chats list of the other agents.

## External Service

You can use an `External Service` to integrate your own agent routing rule into Livechat.

Once you set up the `External Service` as the Livechat routing method, you must define the `External Queue Service URL` and `Secret Token` settings in Livechat admin panel.

The Rocket.Chat will send a GET request to the `External Queue Service URL` and the setting `Secret Token` is sent as a header `X-RocketChat-Secret-Token`, so you can validate if the request became from the Rocket.Chat.

If your endpoint returns a response status other than 200, Rocket.Chat will try 10 times until it receives a valid response.

Here is an example of the JSON data format that Livechat will wait for after submitting the get request:

```javascript
{
    "_id": "CbbQkRAifP6HtDLSr",
    "username": "valid.username"
}
```

After receiving the return from the endpoint in the format described above, Livechat will check that the `username` field represents a valid Livechat agent and then follow the normal process flow.

