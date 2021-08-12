# Azure Alerts

Add Azure Alert notifications via a new WebHook in Rocket.Chat

1. In Rocket.Chat go to "Administration"-&gt;"Integrations" and create "New Integration"
2. Choose Incoming WebHook
3. Follow all instructions like Enable, give it a name, link to channel etc. Set "Enable Script" to true and enter the javascript in the "Script" box
4. Press Save changes and copy the _Webhook URL_ \(added just below the script box\)
5. Go to the azure portal and on the specific resource you want to enable Alerts for follow the steps for enabling Alerts and set the previously copied URL as the webhook URL for the Azure Alert. You can follow the steps shown here: [https://azure.microsoft.com/en-us/documentation/articles/insights-webhooks-alerts/](https://azure.microsoft.com/en-us/documentation/articles/insights-webhooks-alerts/)

Paste this in javascript in the "Script" textarea on Rocket.Chat webhook settings

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

This example shows basic processing of azure alerts that will give you the necessary information as to what happened and what is the current status, along with a status color to get an idea at a quick glimpse of the message.

For newer created alerts the azure webhooks can be process by the following script:

```javascript
class Script {
    // this script was tested with AzureMonitorMetricAlert version 2.0 and should work for
    // "conditionType": "MultipleResourceMultipleMetricCriteria"
    process_incoming_request({ request }) {
        // console is a global helper to improve debug
        console.log(JSON.stringify(request.content, null, 4));

        var alertColor = "warning";
        var condition = request.content.data.context.condition;
        var conditionFields = [];

        if(request.content.data.status === "Deactivated"){ alertColor = "good"; }
        else if (request.content.data.status === "Activated") {
            alertColor = "danger";
            console.log(condition.allOf);
            for (const cond of condition.allOf) {
                console.log(cond);
                conditionFields.push({
                    title: "Condition: " + cond.metricName,
                    value: cond.metricValue + " " + cond.operator + " " + cond.threshold + " ("
                        + (cond.metricUnit ? cond.metricUnit + ", " : "")
                        + cond.timeAggregation + ")"
                        + " for more than " + condition.windowSize,
                });
            }
        }

        return {
            content:{
                username: "Azure",
                text: "Azure Alert Notification",
                attachments: [{
                    title: request.content.data.context.name,
                    pretext: request.content.data.context.description,
                    title_link: request.content.data.context.portalLink,
                    text: request.content.data.context.resourceGroupName + ": " + request.content.data.context.resourceName,
                    color: alertColor,
                    fields: [
                        {
                            title: "Status",
                            value: request.content.data.status + "   @ " + request.content.data.context.timestamp
                        },
                        {
                            title: "Severity",
                            value: request.content.data.context.severity,
                        },
                        ...conditionFields,
                    ]
                }]
            }
        };
    }
}
```

The schema of the incoming message as of the official [Azure Alert Webhook Docs](https://azure.microsoft.com/en-us/documentation/articles/insights-webhooks-alerts/) is:

```javascript
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
}
```

