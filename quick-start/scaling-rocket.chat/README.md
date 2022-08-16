---
description: Enterprise Features
---

# Scaling Rocket.Chat

As your number of concurrent users grows you may begin to experience some system latency and itÃÂ¢ÃÂÃÂs important to monitor system performance in order to determine if additional resources are needed. For example, you may see the Rocket.Chat mode process approaching 100% CPU (even if the host CPU load is low). This is due to the single-threaded nature of Node.js applications; they can't take advantage of multiple cores natively.

You have two options to scale your environment in order to maintain performance for your users:

1. [Microservices](microservices-setup.md)
2. [Scale by deploying multiple instances of Rocket.Chat ](running-multiple-instances.md)
