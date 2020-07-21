# Slack Compatibility

{% hint style="warning" %}
This is still a draft and doesn't cover all subjects about Slack Compatibility yet
{% endhint %}

Would you like to have your app listed in [Rocket.Chat's Marketplace](https://rocket.chat/marketplace) but don't want to rewrite all the backend for your Slack listing?

Look no further!

This "compatibility layer" will help you make your Rocket.Chat App talk to your backend in no time :\)

Initialize your Rocket.Chat App with bindings that make it compatible with your Slack App implementation.

## Installation

First of all, you're gonna need to scaffold out a Rocket.Chat App directory, so make sure you follow our [Getting Started](getting-started.md) guide \(it's really quick\).

We're gonna build upon the example in our Getting Started guide with the LiftOff app. After you've created the new app with our [CLI](https://github.com/RocketChat/Rocket.Chat.Apps-cli), you should have the following folder structure:

```text
liftoff/
| .vscode/
| node_modules/
| .editorconfig
| .gitignore
| LiftoffApp.ts
| app.json
| icon.png
| package-lock.json
| package.json
| tsconfig.json
| tslint.json
```

Now, in your app's directory, you can install the Slack Compatibility Layer:

```bash
$ npm install RocketChat/slack-compatibility-for-apps
```

{% hint style="info" %}
This will install the package directly from our [repository on GitHub](https://github.com/RocketChat/slack-compatibility-for-apps). We will publish it to NPM when it gets a bit more feature complete and battle tested.
{% endhint %}

That's almost it! Rocket.Chat Apps cannot include npm packages yet, so this package will copy itself to a `vendor` folder in your app so that you can use it. Your folder structure should be like this now:

```bash
liftoff/
| .vscode/
| node_modules/
| vendor/
| | slack-compatible-layer/
| | | src/
| | | vendor/
| | | SlackCompatibleApp.ts
| .editorconfig
| .gitignore
| LiftoffApp.ts
| app.json
| icon.png
| package-lock.json
| package.json
| tsconfig.json
| tslint.json
```

Now you just have to extend the `SlackCompatibleApp`class instead of the default `App` class from the Apps-Engine - this will make your Rocket.Chat App understand "Slack language". The only thing left to do is config the main class of your app with the features you have:

```typescript
import {
    IAppAccessors,
    ILogger,
} from '@rocket.chat/apps-engine/definition/accessors';
// import { App } from '@rocket.chat/apps-engine/definition/App';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';

import { SlackCompatibleApp as App } from './vendor/slack-compatible-layer/SlackCompatibleApp';

export class LiftOffApp extends App {
    public config = {
        interactiveEndpoint: 'https://my.example.app/interaction',
        slashCommands: [
            {
                command: 'liftoff',
                requestURL: 'https://my.example.app/liftoff.command',
                shortDescription: 'Tells the user if it is time to liftoff'
            }
        ],
    }
    
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }
}
```

That's it!

