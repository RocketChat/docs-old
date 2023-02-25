---
description: Configure server logs
---

# Logs

Here you have the interface to configure how server logs are received.

Logs are a very useful way to monitor workspace activities in detail, and they can start as a very helpful point for debugging in case of any failures or errors.

To access this section, navigate to **Administration** > **Workspace** > **Settings** > **Logs**.

* **Log Level**: A dropdown to select the level of logs to receive
* **Log View Limit**: The limit of logs to view
* **Trace method calls**: When enabled, it gives the ability to trace every method call
* **Trace method filter**: The text here is evaluated as RegExp (`new RegExp('text')`). Keep it empty to show a trace of every call.
* **Trace subscription calls**: If enabled, every subscription call will be traced.
* **Trace subscription filter**: The text here is evaluated as RegExp (`new RegExp('text')`). Keep it empty to show a trace of every call.
* **Log Exceptions to Channel**: A channel that receives all captured exceptions. Leave empty to ignore exceptions.

## Prometheus

[Prometheus](https://prometheus.io) is an open-source monitoring solution.

* **Enable**: When enabled, Prometheus monitoring is activated.
* **Port**; The port to listen to.
* **Reset Interval (ms)**: Takes in time in milliseconds when the connection should be reset.
* **Collect NodeJS GC**: When enabled, NodeJS garbage collector is activated.
* **API: Track User Agent**: If set to true, API calls user agent are tracked.
