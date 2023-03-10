# Scaling Rocket.Chat

As concurrent users on your workspace grow, you may experience system latency. Monitoring system performance is essential to determine if additional resources are needed. For example, you may see the Rocket.Chat mode process approaching 100% CPU (even if the host CPU load is low). This is due to the single-threaded nature of Node.js applications, as they can't take advantage of multiple cores natively.

You can use microservices or deploy multiple instances of Rocket.Chat to scale your environment while maintaining user performance.

****[**Microservices**](microservices-setup.md)**:**  Deploy Rocket.Chat using microservices or several smaller components, each focusing on a single feature of Rocket.Chat.

****[**Deploying multiple instances of Rocket.Chat:**  ](broken-reference)Running multiple instances of the Rocket.Chat application on a multi-core machine.
