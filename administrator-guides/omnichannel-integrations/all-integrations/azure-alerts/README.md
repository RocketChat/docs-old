# Azure Alerts

This integration allows you to add Azure Alert notifications via a new Webhook in Rocket.Chat.

1. In Rocket.Chat go to **Administration > Integrations** and create a **New Integration**.
2. Choose **Incoming Webhook**.
3. Follow the steps, enable it, give it a name, add link to channel etc. Set **Enable Script** to `true` and enter the javascript in the **Script** box.
4. Press **Save Changes** and copy the *Webhook URL* (added just below the script box).
5. Go to the **Azure Portal** and find the specific resource you want to enable Alerts for. Follow the [instructions to enable Alerts](<https://azure.microsoft.com/en-us/documentation/articles/insights-webhooks-alerts/>) and set the previously copied URL as the webhook URL for the Azure Alert.

Paste this in javascript in the **Script** text area of the Rocket.Chat webhook settings:

```javascript
class Script {
  process_incoming_request({ request }) {
    // console is a global helper to improve debug
    console.log(request.content);

    var alertColor = "warning";

    if(request.content.status === "Resolved"){ alertColor = "good"; }
    else if (request.content.status === "Activated") { alertColor = "danger"; }

    var condition = request.content.context.condition;

    return {
      content:{
       username: "Azure",
        text: "Azure Alert Notification",
        attachments: [{
          title: request.content.context.name,
          pretext: request.content.context.description,
          title_link: request.content.context.portalLink,
          text: condition.failureDetails,
          color: alertColor,
          fields: [
            {
              title: "Status",
              value: request.content.status + "   @ " + request.content.context.timestamp
            },
            {
              title: "Condition",
              value: condition.metricName + ": " + condition.metricValue + " " + condition.metricUnit + " for more than " + condition.windowSize + " min."
            },
            {
              title: "Threshold",
              value: condition.operator + " " + condition.threshold
            }
          ]
        }]
       }
    };

    return {
       error: {
         success: false,
         message: 'Error'
       }
    };
  }
}
```

This example shows the basic processing of Azure alerts to give you the necessary event and status information, along with a status color to get an idea of the message at a glance.

According to the official [Azure Alert Webhook Docs](https://azure.microsoft.com/en-us/documentation/articles/insights-webhooks-alerts/), the schema for the incoming message is:

```json
{
"status": "Activated",
"context": {
            "timestamp": "2015-08-14T22:26:41.9975398Z",
            "id": "/subscriptions/s1/resourceGroups/useast/providers/microsoft.insights/alertrules/ruleName1",
            "name": "ruleName1",
            "description": "some description",
            "conditionType": "Metric",
            "condition": {
                        "metricName": "Requests",
                        "metricUnit": "Count",
                        "metricValue": "10",
                        "threshold": "10",
                        "windowSize": "15",
                        "timeAggregation": "Average",
                        "operator": "GreaterThanOrEqual"
                },
            "subscriptionId": "s1",
            "resourceGroupName": "useast",
            "resourceName": "mysite1",
            "resourceType": "microsoft.foo/sites",
            "resourceId": "/subscriptions/s1/resourceGroups/useast/providers/microsoft.foo/sites/mysite1",
            "resourceRegion": "centralus",
            "portalLink": "https://portal.azure.com/#resource/subscriptions/s1/resourceGroups/useast/providers/microsoft.foo/sites/mysite1"
},
"properties": {
              "key1": "value1",
              "key2": "value2"
              }
}```
