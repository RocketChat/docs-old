# Managing Settings Using Environment Variables

You can set any settings value via an environment variable when starting your server. You will only have to know the setting id and what type of setting it is (boolean, string, integer, etc...).

## Set Setting

To set a setting you need only to add the env var `SETTING_ID=VALUE` when starting the server.

Example:

```
FileUpload_Storage_Type=GoogleCloudStorage
```

## Overwrite Setting

You can overwrite any setting by setting an environment variable prefixed with: `OVERWRITE_SETTING_`

Example:

```
OVERWRITE_SETTING_FileUpload_Storage_Type=GoogleCloudStorage
```

## Block Settings

You can block a setting from being changed by specifying the `SETTINGS_BLOCKED` environment variable.  This is a comma separated list. Any setting you want to block you need to add to this list.

Example:

```
SETTINGS_BLOCKED=FileUpload_Storage_Type,FileUpload_GoogleStorage_AccessId,FileUpload_GoogleStorage_Secret
```

**Even you as an admin will not be able to change this via the UI.  If you want to change the setting you will need to remove it from the list and reboot the server**

## Hide Settings

Example:

You can hide settings from the client by using the `SETTINGS_HIDDEN` environment variable

```
SETTINGS_HIDDEN=FileUpload_GoogleStorage_AccessId,FileUpload_GoogleStorage_Secret
```

**Be careful with this setting some settings like `FileUpload_Storage_Type` are needed by the client so cannot be hidden**
