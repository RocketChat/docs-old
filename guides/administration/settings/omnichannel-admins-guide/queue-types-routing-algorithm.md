# Queue Types (Routing Algorithm)

There are the following types of queues in Rocket.Chat omnichannel solutions:

* [Auto Selection \[default\]](queue-types-routing-algorithm.md#auto-selection)
* [Manual Selection](queue-types-routing-algorithm.md#manual-selection)
* [External Service](queue-types-routing-algorithm.md#external-service)
* [Load Balancing](queue-types-routing-algorithm.md#load-balancing)![](<../../../../.gitbook/assets/2021-06-10\_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (6).jpg>)
* [Load Rotation](queue-types-routing-algorithm.md#load-rotation)![](<../../../../.gitbook/assets/2021-06-10\_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (7).jpg>)

## Auto Selection

Each new chat will be routed to the agent that are accepting chats with the lower count. If there is more than one available agent with the same count, the chat will get the first in order.

Consider the following department configuration:

When a new chat comes, it'll be routed to `agent-1`, because he has `0` count and is the first in order, and the `agent-1`'s count will be increased to `1`:

A new incoming chat will be routed to `agent-2` and so on until all agents have one chat each. So the next round comes, starting with `agent-1`.

## Manual Selection

With this queue method active, agents will have a new `Incoming Livechats` section:

Each new chat will be available on the `Incoming Livechats` section to **all** agents. So any agent can take a new incoming chat.

When the agent clicks on the incoming Livechat, the system will show the preview of the chat containing the messages sent by the visitor, so the agent can decide if he will take the chat or not. If the agent decides to take it, the incoming chat will be removed from the incoming chats list of the other agents.

## External Service

You can use an `External Service` to integrate your own agent routing rule into Livechat.

Once you set up the `External Service` as the Livechat routing method, you must define the `External Queue Service URL` and `Secret Token` settings in the omnichannel admin panel.

Rocket.Chat will send a GET request to the `External Queue Service URL` and the setting `Secret Token` is sent as a header `X-RocketChat-Secret-Token`, so you can validate if the request came from the Rocket.Chat.

If your endpoint returns a response status other than 200, Rocket.Chat will try 10 times until it receives a valid response.

Here is an example of the JSON data format that Livechat will wait for after submitting the get request:

```javascript
{
    "_id": "CbbQkRAifP6HtDLSr",
    "username": "valid.username"
}
```

After receiving the return from the endpoint in the format described above, Livechat will check that the `username` the field represents a valid Livechat agent and then follows the normal process flow.

## Load Balancing![](<../../../../.gitbook/assets/2021-06-10\_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (8).jpg>)

Load Balancing is an enterprise-only feature. It is also an auto-assignment algorithm, but it will consider the agent's online status and the time they have been chatting, contrary to auto-selection, which only considers the agent's online status. For instance, an agent was away on a short break; once he comes back, he will be assigned more chats than his fellow agent. So in this way, the algorithm will maintain a chat load balance between agents.

## Load Rotation![](<../../../../.gitbook/assets/2021-06-10\_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (9).jpg>)

Agent queues for service between online agents, without considering the previous chat's history attended or the number of open rooms in attendance. It's a mix between the Load Balancing and Auto Selection algorithms.
