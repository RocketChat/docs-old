# Themes

Rocket.Chat.Android comes with three built-in themes to choose from.
* App Theme (Default Light)
* Dark Theme
* Black Theme

![Built-in Themes](images/AppThemes.jpg?raw=true "Built-in Theme")

You can add custom themes from inside the app. In order to have greater control over themeing, you can also add your own theme library to Rocket.Chat.Android.

## Adding Themes to Rocket.Chat.Android

Understanding the codebase is not required prior to adding your own library. This guide details the steps required to add your own themes via xml.

### Setting up Development Environment

Set up your development environment as outlined in [this guide](https://github.com/RocketChat/Rocket.Chat.Android/blob/develop/README.md).

### Add a New Library Module

1. Go to **File > New > New Module.** 
2. In the **Create New Module** window that appears, click **Android Library**, then click **Next**.
3. Give your library a name e.g *pastelthemelibrary* and then click **Finish**.

### Add Resource Files

#### Custom Attributes
1. Right click on **pastelthemelibrary > res > values** and go to **New > Values resource file**.
2. Set File Name as *attrs* and click **OK**. This file will hold all the custom color attributes you can change in addition to android's styling attributes such as *colorPrimary*, *colorAccent* etc.
3. Empty the file created and copy paste the following code snippet:

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <attr name="colorDivider" format="color|reference"/>
    <attr name="colorBottomSheetFragmentHeading" format="color|reference"/>
    <attr name="colorBottomSheetFragmentText" format="color|reference"/>
    <attr name="colorAuthenticationButtonBorderAndDivider" format="color|reference"/>
    <attr name="colorButtonDisabled" format="color|reference"/>
    <attr name="colorControlText" format="color|reference"/>
    <attr name="colorChatComponentBackground" format="color|reference"/>
    <attr name="colorDescriptiveText" format="color|reference"/>
    <attr name="colorSubHeaderBackground" format="color|reference"/>
    <attr name="colorSubHeaderText" format="color|reference"/>
    <attr name="colorRadioButton" format="color|reference"/>
    <attr name="colorDim" format="color|reference"/>
    <attr name="colorIcon" format="color|reference"/>
    <attr name="colorSettingsSecondaryBackground" format="color|reference"/>
    <attr name="colorChannelTitle" format="color|reference"/>
    <attr name="colorTimestampText" format="color|reference"/>
    <attr name="colorStatusInvisible" format="color|reference"/>
    <attr name="colorPrimaryText" format="color|reference"/>
    <attr name="colorReactionBackground" format="color|reference"/>
    <attr name="colorReactionBorder" format="color|reference"/>
    <attr name="colorFloatingActionButtonBackground" format="color|reference"/>
    <attr name="colorFloatingActionButtonBorder" format="color|reference"/>
    <attr name="colorLoading" format="color|reference"/>
    <attr name="colorHeadings" format="color|reference"/>
    <attr name="appTheme" format="color|reference"/>
    <attr name="colorDrawableStrongTint" format="color|reference"/>
    <attr name="colorQuoteBar" format="color|reference"/>
    <attr name="colorSecondaryText" format="color|reference"/>
    <attr name="colorChatText" format="color|reference"/>
    <attr name="colorMessageText" format="color|reference"/>
    <attr name="colorBackgroundIsDark" format="string|reference"/>
    <attr name="colorTextHintEditText" format="string|reference"/>
    <attr name="appAccentStyle" format="string|reference"/>
</resources>
```
#### Light or Dark Attribute

You need a boolean custom attribute to indicate whether the background of the themes added is dark or light so that the theme engine can handle UI colors appropriately. The attribute ensures that status bar icons are always visible even when the status bar background is made invisible by this method:

https://github.com/NBAMIR/Rocket.Chat.Android/blob/4cf9bf16a136e51af04c938aedc3f475ea3e514c/app/src/main/java/chat/rocket/android/util/extensions/Ui.kt#L28-L41

The custom attribute added into attrs.xml for this purpose is *colorBackgroundIsDark*. Now we need a boolean value to assign to this custom attribute when we define our theme.

1. Right click on **pastelthemelibrary > res > values** and go to **New > Values resource file**.
2. Set File Name as *bools* and click **OK**. This file will hold a boolean value for every theme we want to define.
3. Suppose the theme we are going to define is called *DarkPastelTheme*. Add the following item inside the resource tag in bools.xml.

```xml
<bool name="darkPastelIsDark">true</bool>
```
The value *true* indicates that the theme has a dark background. Add a boolean item for every theme you want to define and set its value to true or false.
