# Getting Started

Here you will find how to use some basic commands of the cli, as well as adding a description file to it.

## Recent webinar on Getting Started with Rocket.Chat Apps Development

<iframe width="560" height="315" src="https://www.youtube.com/embed/PaFPeD6QG9k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Rocket.Chat App Engine CLI

It all starts with the apps engine [Command Line Interface (CLI)](https://github.com/RocketChat/Rocket.Chat.Apps-cli). This is the tool that will be used to create, run and publish your app.

### Installing the Apps CLI

You can use [npm](https://www.npmjs.com/) to install the CLI, simply run on your console:

`npm install -g @rocket.chat/apps-cli`

> Note: You need [Node.js](https://nodejs.org/en/) installed do use npm and the Apps CLI

### Creating an Example App

The development tools provide a command to quickly scaffold a new Rocket.Chat App, simply run `rc-apps create` and a new folder will be created inside the current working directory with a basic App which does nothing but will compile and be packaged in the dist folder.

After that you will need to create a file with your app information, this file is called `app.json`.

You can check the [app-schema.json](https://github.com/RocketChat/Rocket.Chat.Apps-cli) file for all the detailed information and fields allowed in the app description file, the basic structure is similar to this:

```json
{
    "id": "5cb9a329-0613-4d39-b20f-cc2cc9175df5",
    "name": "App Name",
    "nameSlug": "app-name",
    "version": "0.0.1",
    "requiredApiVersion": "^1.3.2",
    "description": "App which provides something very useful for Rocket.Chat users.",
    "author": {
        "name": "Author Name <author@email.com>",
        "support": "Support Url or Email"
    },
    "classFile": "main.ts",
    "iconFile": "beautiful-app-icon.jpg"
}
```

### Testing the App

Now that you have your App ready, you can test it before submitting it.

To test your app, you need a Rocket.Chat server running locally on your machine and an admin user in it.

See [Installing Rocket.Chat for Developing](../../quick-start/) to run Rocket.Chat in develop mode or run it in preview mode with docker using the command:

```
docker run -it --rm -p 3000:3000 -v `pwd`/rocketdb:/var/lib/mongodb rocketchat/rocket.chat.preview
```

 Having the server running, simply run:

`rc-apps deploy --url http://localhost:3000 --username user_username --password user_password`

Where:

`http://localhost:3000` is your local server URL (if you are running in another port, change the `3000` to the appropriate port)

`user_username` is the username of your admin user.

`user_password` is the password of your admin user.

After deploying for the first time, when updating the deployment you will need to run:

`rc-apps deploy --url http://localhost:3000 --username user_username --password user_password --update`

### Packaging the app

Currently the Rocket.Chat servers and Marketplace allow submission of zip files, these files can be created by running `rc-apps package`  which packages your app and creates the zip file under `dist` folder.

### Submitting Your App to the Marketplace

So, you just finished writing your first Rocket.Chat App, and you have successfully tested it locally which means you are ready to submit it to the Marketplace for others to use. You can now submit your App to the Marketplace.

To submit your App simply run:

`rc-apps submit`

#### Review process

When you submit an App, there is a three-step process that takes places. The first step, you submit the App to the Marketplace (explained below). Secondly, you will receive an email that asks for you to approve or reject the App submission (more on this later as well). Finally, after you approve the entry, then our staff will review it and determine whether it is approved or not.

## Start Developing

The basic creation of an App is based on extending the App class from the Rocket.Chat Apps definition library. Your class also has to implement the constructor and optionally the initialize function, for more details on those check the [App definition documentation](https://rocketchat.github.io/Rocket.Chat.Apps-engine/classes/app.html).

Most of your app functionality comes from the `{YOUR APP NAME}.ts` file, in the example down below the file is called `TodoListApp.ts`

```javascript
import {
    IConfigurationExtend,
    IConfigurationModify,
    IEnvironmentRead,
    ILogger,
} from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';

export class TodoListApp extends App {
    constructor(info: IAppInfo, logger: ILogger) {
        super(info, logger);
    }

    public async initialize(configurationExtend: IConfigurationExtend, environmentRead: IEnvironmentRead): Promise<void> {
        await this.extendConfiguration(configurationExtend, environmentRead);
        this.getLogger().log('Hello world from my app');
    }
}
```
