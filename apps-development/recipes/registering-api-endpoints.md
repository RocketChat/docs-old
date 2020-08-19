# Registering API endpoints

## Introduction

An API endpoint is a location from which APIs can access the resources they need to carry out their function or can post data to it.

In this recipe, we will register a public API endpoint that receives data from external HTTP requests. We will try to forward the data received from the endpoint to the `#general` channel.

## Register an API endpoint

First of all, let's create a new Rocket.Chat app from scratch using `rc-apps create.` \(If `rc-apps` is an unrecognized command, please check out the [Getting Started](https://docs.rocket.chat/apps-development/getting-started) section to make initial preparations first\).

In the main App class, we need to implement the `extendConfiguration` method, within which we use `configuration.api.provideApi` to register a new API endpoint `new Endpoint(this)`.

```typescript
// Main App Class
import { IAppAccessors, IConfigurationExtend, ILogger } from '@rocket.chat/apps-engine/definition/accessors';
import { ApiSecurity, ApiVisibility } from '@rocket.chat/apps-engine/definition/api';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';

import { Endpoint } from './endpoint';

export class RocketChatTester extends App {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    public async extendConfiguration(configuration: IConfigurationExtend) {
        // Register API endpoints
        configuration.api.provideApi({
            visibility: ApiVisibility.PUBLIC,
            security: ApiSecurity.UNSECURE,
            endpoints: [new Endpoint(this)],
        });
    }
}
```

Notice that we imported an `Endpoint` class from another file. Now let's create a new file named `endpoint.ts` and implement the class Endpoint we used above.

```typescript
// endpoint.ts
import { HttpStatusCode, IHttp, IModify, IPersistence, IRead } from '@rocket.chat/apps-engine/definition/accessors';
import { ApiEndpoint, IApiEndpointInfo, IApiRequest, IApiResponse } from '@rocket.chat/apps-engine/definition/api';

export class Endpoint extends ApiEndpoint {
    public path = 'api';

    public async post(
        request: IApiRequest, endpoint: IApiEndpointInfo, read: IRead, modify: IModify, http: IHttp, persis: IPersistence,
    ): Promise<IApiResponse> {
        const body = Object.entries(request.content)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n');
        const room = await read.getRoomReader().getByName('general');

        if (!room) {
            return {
                status: HttpStatusCode.NOT_FOUND,
                content: `Room "#general" could not be found`,
            };
        }

        const messageBuilder = modify.getCreator().startMessage()
            .setText(body)
            .setRoom(room);
        const messageId = await modify.getCreator().finish(messageBuilder);

        return this.success(JSON.stringify({ messageId }));
    }
}

```

In the file `endpoint.ts`, we created a class that extends the base class `ApiEndpoint`.  We defined the path of the API endpoint by assigning the value `'api'`  to the public property `path`. 

Then, let's implement the method `post`**, which will be executed every time once the API endpoint receives an HTTP POST request from an external service.** Following our original idea - forwarding any data received to the \#general channel, we obtain the request content by `request.content` and create a message containing the request content, then send it to the channel `#general`.

## Test the result

Using the CLI command `rc-apps deploy` to deploy the app to your Rocket.Chat server first. Navigate to _Rocket.Chat Admin -&gt; Apps -&gt; Apps Detailed Page_ to check the full endpoint URL you registered for the App.

![](../../.gitbook/assets/image%20%2821%29.png)

Open the terminal and use curl post some data to the endpoint. The result should be like below:

```typescript
> curl --data 'Jack=Hello :)&Lucy=Hi!' -X POST http://localhost:3000/api/apps/public/bc4dd4a1-bf9b-408e-83a4-aba7eba0bf02/api
{"messageId":"dREmKaR7qHyN98rtZ"}
```

![](../../.gitbook/assets/image%20%2820%29.png)

