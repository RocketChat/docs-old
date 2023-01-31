# Managing Settings Using Environmental Variables

You can set any settings value via an environment variable when starting your server. You will only have to know the setting id and what type of setting it is (boolean, string, integer, etc...).

### Basic Settings

| Name                          | Data Type                                                                                                                                                                                             |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \_id                          | `SettingId = string`                                                                                                                                                                                  |
| type                          | `\| 'boolean'\| 'timezone'\| 'string'\| 'relativeUrl'\| 'password'\| 'int'\| 'select'\| 'multiSelect'\| 'language'\| 'color'\| 'font'\| 'code'\| 'action'\| 'asset'\| 'roomPick'\| 'group'\| 'date';` |
| public                        | `boolean`                                                                                                                                                                                             |
| env                           | `boolean`                                                                                                                                                                                             |
| group(Optional)               | `GroupId = SettingId`                                                                                                                                                                                 |
| section(Optional)             | `SectionName = string`                                                                                                                                                                                |
| tab(Optional)                 | `TabId = SettingId`                                                                                                                                                                                   |
| i18nLabel                     | `string`                                                                                                                                                                                              |
| value                         | `SettingValue = string \| boolean \| number \| SettingValueMultiSelect \| Date \| AssetValue \| undefined;`                                                                                           |
| packageValue                  | `SettingValue = string \| boolean \| number \| SettingValueMultiSelect \| Date \| AssetValue \| undefined;`                                                                                           |
| blocked                       | `boolean`                                                                                                                                                                                             |
| enableQuery(Optional)         | `string`                                                                                                                                                                                              |
| displayQuery(Optional)        | `string`                                                                                                                                                                                              |
| sorter                        | `number`                                                                                                                                                                                              |
| properties(Optional)          | `unknown`                                                                                                                                                                                             |
| enterprise(Optional)          | `boolean`                                                                                                                                                                                             |
| requiredOnWizard(Optional)    | `boolean`                                                                                                                                                                                             |
| hidden(Optional)              | `boolean`                                                                                                                                                                                             |
| modules(Optional)             | `Array`                                                                                                                                                                                               |
| invalidValue(Optional)        | `SettingValue = string \| boolean \| number \| SettingValueMultiSelect \| Date \| AssetValue \| undefined;`                                                                                           |
| valueSource(Optional)         | `string`                                                                                                                                                                                              |
| secret(Optional)              | `boolean`                                                                                                                                                                                             |
| i18nDescription (Optional)    | `string`                                                                                                                                                                                              |
| autocomplete(Optional)        | `boolean`                                                                                                                                                                                             |
| processEnvValue(Optional)     | `SettingValue = string \| boolean \| number \| SettingValueMultiSelect \| Date \| AssetValue \| undefined;`                                                                                           |
| meteorSettingsValue(Optional) | `SettingValue = string \| boolean \| number \| SettingValueMultiSelect \| Date \| AssetValue \| undefined;`                                                                                           |
| ts                            | `Date`                                                                                                                                                                                                |
| createdAt                     | `Date`                                                                                                                                                                                                |
| \_updatedAt(Optional)         | `Date`                                                                                                                                                                                                |
| multiline(Optional)           | `boolean`                                                                                                                                                                                             |
| values(Optional)              | `Array`                                                                                                                                                                                               |
| placeholder(Optional)         | `string`                                                                                                                                                                                              |
| wizard(Optional)              | <p>step: <code>number</code>; </p><p>order: <code>number</code>;</p>                                                                                                                                  |
| persistent(Optional)          | `boolean`                                                                                                                                                                                             |
| readonly(Optional)            | `boolean`                                                                                                                                                                                             |
| alert(Optional)               | `string`                                                                                                                                                                                              |
| private (Optional)            | `boolean`                                                                                                                                                                                             |

### Group Settings

| Name            | Data Type   |
| --------------- | ----------- |
| \_id            | `string`    |
| hidden          | `boolean`   |
| blocked         | `boolean`   |
| ts              | `Date`      |
| sorter          | `number`    |
| i18nLabel       | `string`    |
| displayQuery    | `string`    |
| i18nDescription | `string`    |
| value           | `undefined` |
| type            | `group`     |
| alert           | `string`    |

### Enterprise Settings

| Name         | Data Type                                                                                                   |
| ------------ | ----------------------------------------------------------------------------------------------------------- |
| enterprise   | true                                                                                                        |
| invalidValue | `SettingValue = string \| boolean \| number \| SettingValueMultiSelect \| Date \| AssetValue \| undefined;` |

### Color Settings

| Name                    | Data Type       |
| ----------------------- | --------------- |
| type                    | `color`         |
| editor                  | `SettingEditor` |
| packageEditor(Optional) | `SettingEditor` |

### Action Settings

| Name                 | Data Type |
| -------------------- | --------- |
| type                 | `action`  |
| value                | `string`  |
| actionText(Optional) | `string`  |

### Code Settings &#x20;

| Name                 | Data Type |
| -------------------- | --------- |
| type                 | `action`  |
| value                | `string`  |
| actionText(Optional) | `string`  |

### Asset Settings

| Name            | Data Type                    |
| --------------- | ---------------------------- |
| type            | `asset`                      |
| value           | `AssetValue`                 |
| fileConstraints | `IRocketChatAssetConstraint` |
| asset           | `string`                     |

### SelectOption Settings

| Name      | Data Type           |
| --------- | ------------------- |
| key       | `string \| number;` |
| i18nLabel | `string`            |

### Editor Settings

| Name       | Data Type    |
| ---------- | ------------ |
| COLOR      | `color`      |
| EXPRESSION | `expression` |

### Date Settings

| Name  | Data Type |
| ----- | --------- |
| type  | `date`    |
| value | `Date`    |

### Statistics Settings

| Name                                    | Data Type |
| --------------------------------------- | --------- |
| account2fa(Optional)                    | `boolean` |
| cannedResponsesEnabled (Optional)       | `boolean` |
| e2e (Optional)                          | `boolean` |
| e2eDefaultDirectRoom(Optional)          | `boolean` |
| e2eDefaultPrivateRoom(Optional)         | `boolean` |
| smtpHost(Optional)                      | `string`  |
| smtpPort(Optional)                      | `string`  |
| fromEmail(Optional)                     | `string`  |
| fileUploadEnable(Optional)              | `boolean` |
| frameworkDevMode(Optional)              | `boolean` |
| frameworkEnable(Optional)               | `boolean` |
| surveyEnabled(Optional)                 | `boolean` |
| updateChecker(Optional)                 | `boolean` |
| liveStream(Optional)                    | `boolean` |
| broadcasting(Optional)                  | `boolean` |
| allowEditing(Optional)                  | `boolean` |
| allowDeleting(Optional)                 | `boolean` |
| allowUnrecognizedSlashCommand(Optional) | `boolean` |
| allowBadWordsFilter(Optional)           | `boolean` |
| readReceiptEnabled(Optional)            | `boolean` |
| readReceiptStoreUsers(Optional)         | `boolean` |
| otrEnable(Optional)                     | `boolean` |
| pushEnable(Optional)                    | `boolean` |
| globalSearchEnabled(Optional)           | `boolean` |
| threadsEnabled(Optional)                | `boolean` |
| bigBlueButton(Optional)                 | `boolean` |
| jitsiEnabled(Optional)                  | `boolean` |
| webRTCEnableChannel(Optional)           | `boolean` |
| webRTCEnablePrivate(Optional)           | `boolean` |
| webRTCEnableDirect(Optional)            | `boolean` |

## Set Setting

To set a setting for the first time you need only to add the env var `SETTING_ID=VALUE` when starting the server.

Example:

```
FileUpload_Storage_Type=GoogleCloudStorage
```

**Note: This only works if the setting isn't already set. So this is most useful for setting on initial start. If the setting already has a value you will need to use the syntax below**

## Overwrite Setting

You can overwrite any setting by setting an environment variable prefixed with: `OVERWRITE_SETTING_`

Example:

```
OVERWRITE_SETTING_FileUpload_Storage_Type=GoogleCloudStorage
```

## Block Settings

You can block a setting from being changed by specifying the `SETTINGS_BLOCKED` environment variable. This is a comma separated list. Any setting you want to block you need to add to this list.

Example:

```
SETTINGS_BLOCKED=FileUpload_Storage_Type,FileUpload_GoogleStorage_AccessId,FileUpload_GoogleStorage_Secret
```

**Even you as an admin will not be able to change this via the UI. If you want to change the setting you will need to remove it from the list and reboot the server**

## Hide Settings

Example:

You can hide settings from the client by using the `SETTINGS_HIDDEN` environment variable

```
SETTINGS_HIDDEN=FileUpload_GoogleStorage_AccessId,FileUpload_GoogleStorage_Secret
```

**Be careful with this setting some settings like `FileUpload_Storage_Type` are needed by the client so cannot be hidden**

## **Wizard Required** Settings

Example:

You can force settings to be required on wizard pages by using the `SETTINGS_REQUIRED_ON_WIZARD` environment variable

```
SETTINGS_REQUIRED_ON_WIZARD=Organization_Type,Organization_Name
```
