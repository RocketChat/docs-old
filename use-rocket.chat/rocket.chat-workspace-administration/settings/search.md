---
description: Select workspace search provider and configure search related settings
---

# Search

Here you can configure how searches work on your Rocket.Chat server. This gives you the option to select a search provider.

To access this setting, navigate to **Administration** > **Workspace** > **Settings** > **Search**.

* **Search Provider**: A dropdown that lets you select which search provider you wish to use. Can be `Default provider` or `Chatpal Provider`.

## Chatpal Provider <a href="#buyfmnjsg2h" id="buyfmnjsg2h"></a>

* **Backend Type**: Lets you choose the backend type for your Chatpal provider. Select if you want to use Chatpal as a Service or as On-Site Installation.
* **API Key**: Your Chatpal API key. Find some descriptions on how to run a local instance [on GitHub](https://github.com/chatpal/chatpal-search-standalone). The URL must be absolute and point to the Chatpal core, e.g. [`http://localhost:8983/solr/chatpal`](http://localhost:8983/solr/chatpal)\`\`
* **HTTP Headers**: List of HTTP Headers, one header per line. Format: name:value
* **Main Language**: The language that is used most in conversations.
* **Default Result Type**: Defines which result type is shown by the result.
* **Page size**: Lets you set the page size.
* **Suggestions enabled**: When enabled, suggestions are shown while searching.
* **Include All Public Channels**: When set to true, it searches in all public channels, even if you haven't joined them yet.
* **Index Batch Size**: The batch size of index documents (on bootstrapping)
* **Index Timeout**: The time between 2 index windows in ms (on bootstrapping)
* **Index Window Size**: The size of index windows in hours (on bootstrapping)

## Default Provider

* **Global search**: When enabled, the search is done globally.
* **Page Size**: The page size.

{% hint style="warning" %}
**The global search feature is currently in Beta and may not function as expected.**&#x20;
{% endhint %}
