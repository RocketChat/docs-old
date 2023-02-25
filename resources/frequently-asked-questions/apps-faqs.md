# Apps FAQs

<details>

<summary>What should I do to extend my workspace’s functionality? Submit a pull request?Use integrations? Build a <a href="http://rocket.chat/">Rocket.Chat</a> App?</summary>

Each of those options has its strengths and weaknesses.

**Changing the source** code is the most powerful way of extending Rocket.Chat, but not the simplest - you need to learn the code base, understand the code pattern and rules, submit a PR, and follow up on any changes requested to get it merged.

[Integrations](../../use-rocket.chat/workspace-administration/integrations/), on the other hand, allow you to write simple scripts that will be executed either when a message is sent or received in a channel. They’re quick to learn and write, but their scope is very limited.

[Apps](../../extend-rocket.chat-capabilities/rocket.chat-marketplace) are the middle ground. They are much more powerful than integrations, allowing you to interact with the UI and execute custom routines on several triggers. They’re not as complex as learning the whole code base and can be distributed to our whole community via the Marketplace.

</details>

<details>

<summary>Do I need to host my app somewhere to make it available to Rocket.Chat?</summary>

Not at all! [Rocket.Chat](http://rocket.chat/) Apps are packaged and deployed to a workspace, and the system will take care of hooking the App up. Apps can be installed manually or via the Marketplace.

</details>

<details>

<summary>Can I build an app and use it even if it’s not published in the Marketplace?</summary>

Absolutely! It’s recommended you use our [Apps Engine CLI ](https://developer.rocket.chat/apps-engine/getting-started/rocket.chat-app-engine-cli)tool to develop your apps, and it makes it super easy to deploy your apps to your own [Rocket.Chat](http://rocket.chat/) workspace.

</details>

<details>

<summary>Does Rocket.Chat have a plugin framework?</summary>

We don't have a plugin framework.

</details>

<details>

<summary>What language should I use to write Apps?</summary>

Rocket.Chat uses typescript only.

</details>
