# Logs

Here you have the interface to configure how server logs will be received.

Logs are a very useful way to monitor server activities in detail and they can start as a very helpful point for debugging in case of any failures or errors.

To access this section, go to **Administration** > **Settings** > **Logs**.

![](../../../.gitbook/assets/administration-nav.png)

![](<../../../.gitbook/assets/image (683).png>)

* **Log Level**: A dropdown to select the level of logs to receive
* **Log View Limit**: The limit of logs to view
* **Trace method calls**: When enabled, it gives the ability to trace every method call
* **Trace method filter**: The text here will be evaluated as RegExp (`new RegExp('text')`). Keep it empty to show a trace of every call.
* **Trace subscription calls**: If set to true, every subscription call will be traced.
* **Trace subscription filter**: The text here will be evaluated as RegExp (`new RegExp('text')`). Keep it empty to show a trace of every call.
* **Log Exceptions to Channel**: A channel that will receive all captured exceptions. Leave empty to ignore exceptions.

## Prometheus

[Prometheus](https://prometheus.io) is an open-source monitoring solution.

* **Enable**: When set to true, Prometheus monitoring will be active.
* **Port**; The port to listen to.
* **Reset Interval (ms)**: Takes in time in milliseconds which the connection will be reset.
* **Collect NodeJS GC**: When enabled. NodeJS garbage collector will be active.
* **API: Track User Agent**: If set to true, API calls user agent will be tracked.
