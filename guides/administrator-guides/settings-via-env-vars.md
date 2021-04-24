# Managing Settings Using Environment Variables

You can set any settings value via an environment variable when starting your server. You will only have to know the setting id and what type of setting it is \(boolean, string, integer, etc...\).

## Set Setting

To set a setting for the first time you need only to add the env var `SETTING_ID=VALUE` when starting the server.

Example:

```text
FileUpload_Storage_Type=GoogleCloudStorage
```

**Note: This only works if the setting isn't already set. So this is most useful for setting on initial start. If the setting already has a value you will need to use the syntax below.**

## Overwrite Setting

You can overwrite any setting by setting an environment variable prefixed with: `OVERWRITE_SETTING_`.

Example:

```text
OVERWRITE_SETTING_FileUpload_Storage_Type=GoogleCloudStorage
```

## Block Settings

You can block a setting from being changed by specifying the `SETTINGS_BLOCKED` environment variable. This is a comma separated list. Any setting you want to block you need to add to this list.

Example:

```text
SETTINGS_BLOCKED=FileUpload_Storage_Type,FileUpload_GoogleStorage_AccessId,FileUpload_GoogleStorage_Secret
```

**Even you as an admin will not be able to change this via the UI. If you want to change the setting you will need to remove it from the list and reboot the server.**

## Hide Settings

You can hide settings from the client by using the `SETTINGS_HIDDEN` environment variable.

Example:

```text
SETTINGS_HIDDEN=FileUpload_GoogleStorage_AccessId,FileUpload_GoogleStorage_Secret
```

**Be careful with this setting some settings like `FileUpload_Storage_Type` are needed by the client so cannot be hidden.**

## **Wizard Required** Settings

You can force settings to be required on wizard pages by using the `SETTINGS_REQUIRED_ON_WIZARD` environment variable.

Example:

```text
SETTINGS_REQUIRED_ON_WIZARD=Organization_Type,Organization_Name
```

