# Custom Themes

Theming for Rocket.Chat is an incomplete feature and we encourage developers to contribute to [this issue](https://github.com/RocketChat/Rocket.Chat/issues/277). We'd love to hear from anyone working on themes in the [\#skins-and-theming](https://open.rocket.chat/channel/skins-and-theming) group channel.

To customize the Rocket.Chat UI you can either modify the `rocketchat-theme` or `rocketchat-ui` packages directly, but if you're keeping in sync with active development it would be easier to avoid conflicts by creating your own theme package.

## Creating a Theme

You can add theme customisations to Rocket.Chat by just creating a Meteor package with your code, then adding it to the packages file.

Private themes would need to be maintained on your own fork of Rocket.Chat, but public themes could be published as a Meteor package outside the Rocket.Chat repo.

The minimum contents for a theme package would be a `package.js` file containing the description, e.g:

```javascript
Package.describe({
    name: 'author:mytheme',
    version: '0.0.1',
    summary: 'My theme customisations.',
    git: 'https://github.com/author/my-rocket.chat-theme'
});
```

Then include dependent packages and your custom theme files. e.g:

```javascript
Package.onUse(function(api) {
    api.versionsFrom('1.2');
    api.use([
        'templating',
        'rocketchat:lib',
        'rocketchat:theme'
    ]);
    api.use('templating', 'client');
```

## Adding Stylesheets

The `rocketchat-theme` package has methods for including [Less](http://lesscss.org/) asset files in the build. Less files \(and the a server.coffee or .js file to load them\) must first be included in the `package.js` manifest \(within the `Package.onUse` function\), e.g.:

```javascript
    api.addAssets([
        'assets/theme.less'
    ], 'server');
    api.addFiles([
        'server.coffee'
    ], 'server');
```

Then in `server.coffee`...

```javascript
RocketChat.theme.addPackageAsset -> Assets.getText 'assets/theme.less'
```

That will read in any styles and variables from your custom less file and compile it with the rest of the css.

## Adding and Modifying Templates

A suggested approach for including custom templates and helpers is to use the `'aldeed:template-extension'` package \(include it in your main packages file\). In your package manifest, declare use of the `template-extension` package, then add your template files to Meteor `api.addFiles([myfiles], 'client')`.

Here's an example replacing the unauthorized page template:

**In `package.js`**

```javascript
    api.addFiles(['views/notAuthorized.html', 'client.coffee'], 'client');
```

**In `views/notAuthorized.html`**

```markup
<template name="myNotAuthorized">
    <h2>My Custom Not Authorized Page</h2>
</template>
```

**In `client.coffee`**

```coffeescript
Template.myNotAuthorized.replaces 'notAuthorized'
```

See the [docs for that package](https://github.com/aldeed/meteor-template-extension) for more info on inheriting and overwriting templates and helpers.

