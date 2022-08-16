---
description: >-
  This document describes the design and technological scheme for introducing
  Voice and Video as a native channel in Rocket.Chat's OmniChannel platform.
---

# Rocket.Chat VoIP architecture

Here we try to describe in detail the technical and architectural aspects of bringing in a telephony protocol ÃÂ¢ÃÂÃÂ**SIP**ÃÂ¢ÃÂÃÂ on the client-side in order to enable Voice call on the platform. We also describe **Automatic Call Distribution**, by which the calls will be distributed to different agents.

### Introduction

In a contact center environment, voice is an important and powerful channel. Agents using Omnichannel should be able to make and receive audio/video calls from external PSTN networks, cellphone networks, and VoIP endpoints supporting SIP protocol.

{% hint style="info" %}
SIP is an application protocol used to carry all forms of digital media, including voice messagesÃÂ¢ÃÂÃÂso SIP is a specific technology that supports VoIP calls.
{% endhint %}

Web clients are built using browser-based WebRTC technology. This technology does not enforce any signaling protocol. SIP is chosen for the signaling because there are existing systems that support WebRTC over SIP and hence there is no need to define any custom signaling protocol. Also enabling SIP on the agent side would allow us to connect to enterprise telephony infrastructure.

{% hint style="info" %}
**Asterisk** is the first PBX provider implemented. We have plans to add new providers as we go.
{% endhint %}

### Architecture

* The agent connects to **Opensource SIP PBX** [**Asterisk**](https://www.asterisk.org). Using the agent configuration, an agent registers to partnerÃÂ¢ÃÂÃÂs/customerÃÂ¢ÃÂÃÂs SIP Server. Agent endpoint operates as any SIP endpoint and is able to receive or make a call via customer PBX.
* To achieve this, there is an association made between the Rocket.chat agent and the SIP identity.
* ACD (Automatic Call Distribution) queues, wait-treatment, etc are managed by the customerÃÂ¢ÃÂÃÂs/PartnerÃÂ¢ÃÂÃÂs PBX. Reaching out to external networks (PSTN/Mobile Network/Another SIP Server, is handled at customerÃÂ¢ÃÂÃÂs/PartnerÃÂ¢ÃÂÃÂs PBX.

![VoIP Architecture](<../../../.gitbook/assets/image (678) (1) (1).png>)

**ACD Queues:**

When Omnichannel endpoints login as SIP agents, the problem of call distribution has to be handled. You can not expect the customer to know the agentÃÂ¢ÃÂÃÂs identity. If they happen to know the agent's identity, there is a possibility of multiple customers trying to reach the same agent. This can increase the abandonment rate (As a particular agent will remain busy serving). Which can reduce the overall effectiveness of the agents in the organization (As some agents will always be busy, some will be relatively free). This overwhelms the agents because of the activity on their console. A typical call center solves this problem by using ACD (Automatic Call Distribution queues).

Agents are partitioned into different queues on the PBX. These queues represent different departments in the organization. Customer does not dial the agentÃÂ¢ÃÂÃÂs number. They dial the ACD number and ACD forwards the call to the available agent based on the algorithm being used.

**PBX Connectors:**

Admins and managers use Rocket.chat's UI to configure and monitor the customer-managed PBX. To receive the real-time PBX events, Rocket.chatÃÂ¢ÃÂÃÂs backend has to connect to the PBX manager interface. The customer is responsible for creating the configuration on PBX so that the management APIs/interface is accessible from Rocket.chatÃÂ¢ÃÂÃÂs backend.

![Connector Architecture](<../../../.gitbook/assets/image (644) (1) (1).png>)
