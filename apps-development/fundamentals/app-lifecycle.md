# App Lifecycle

## Introduction

Rocket.Chat Apps are fundamentally different from what you may be used to on other platforms, and that is because they actually run _inside a Rocket.Chat server_. This makes it possible for Rocket.Chat users to keep all their data inside their own structure, as the server does not need to send data to an externally hosted service that provides extra functionalities.

For an App to be added to a Rocket.Chat workspace, it needs to be installed in the server either by downloading the package via our [Marketplace](http://marketplace.rocket.chat) or by manually uploading the package to said workspace.

These are the steps the Apps-Engine takes to load a Rocket.Chat App:

* Unpackage the App \(zip file\) and compile the TypeScript code;
* Create a sandbox which will provide context for the App's code;
* Instantiate the App's main class;
* Initialize the App - `App.initialize`
* Enable the App - `App.onEnable`

## Lifecycle Methods

The `App` class has some methods that can be extended in order to provide some control over various aspects of the App's lifecycle.

{% hint style="warning" %}
Each one of the methods listed below is executed _for every instance of the App_. This means that they will be executed more than once if Rocket.Chat is running in HA mode \(once per instance in the cluster\)
{% endhint %}

### `initialize`

```typescript
public async initialize(configurationExtend: IConfigurationExtend, environmentRead: IEnvironmentRead): Promise<void> {
    //
}
```

This method allows the App to control its internal initialization process, overriding the default one.

### `extendConfiguration`

```typescript
protected async extendConfiguration(configuration: IConfigurationExtend, environment: IEnvironmentRead): Promise<void> {
    //
}
```

This method is executed as part of the default initialization process of the App. It enables the App to provide robust functionalities such as API Endpoints or Slash Commands using the [configuration accessor](https://rocketchat.github.io/Rocket.Chat.Apps-engine/interfaces/iconfigurationextend.html).

### `onEnable`

```typescript
public async onEnable(environment: IEnvironmentRead, configurationModify: IConfigurationModify): Promise<boolean> {
    //
}
```

This method is executed during the enabling process of the App. If it returns `false`, the Apps-Engine halts the enabling process and unloads the App's resources configured during initialization.

### `onDisable`

```typescript
public async onDisable(configurationModify: IConfigurationModify): Promise<void> {
    //
}
```

This method is executed during the disabling process of the App. It doesn't allow the App to prevent the disabling from happening.

### `onSettingUpdated`

```typescript
public async onSettingUpdated(setting: ISetting, configurationModify: IConfigurationModify, read: IRead, http: IHttp): Promise<void> {
    //
}
```

This method is executed _after_ a setting provided by the App is updated by an admin in the _App Administration Page_. See **Settings \(coming soon\)** for more information on how to manage App settings.

