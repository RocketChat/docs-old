# Livechat Queue Types

There two types of queue types on Rocket.Chat:

- [Round robin [default]](#round-robin)
- [Guest Pool (coming soon)](#guest-pool)

## Round robin

Each new chat will be routed to the agent that are accepting chats with the lower count.
If there are more then one available agent with the same count the chat will get the first in order.

Consider the following department configuration:

![image](image1.png)

When a new chat comes, it'll be routed to `agent-1`, because he has `0` count and is the first in order,
and the `agent-1`'s count will be increased to `1`:

![image](image2.png)

A new incoming chat will be routed to `agent-2` and so on until all agents have one chat each.
So the next round comes, starting with `agent-1`.

## Guest Pool

With this queue method active, agents will have a new `Incoming Livechats` section:

![image](https://cloud.githubusercontent.com/assets/8620042/15939957/a10bb994-2e3f-11e6-81ff-9b5c96046137.png)

Each new chat will be available on the `Incoming Livechats` section to **all** agents. So any agent can
take a new incoming chat.

When the agent clicks on the incoming livechat, the system will show the first messages sent by the visitor, so the
agent can decide if he will take the chat or not:

![image](https://cloud.githubusercontent.com/assets/8620042/15939960/a31a5b64-2e3f-11e6-9a99-f375b66e6a9d.png)

If the agent decides to take it, the incoming chat will be removed from the incoming chats list of the other agents.
