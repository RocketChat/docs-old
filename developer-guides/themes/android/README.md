# Themes

Rocket.Chat.Android comes with three built-in themes to choose from.
* App Theme (Default Light)
* Dark Theme
* Black Theme

![Built-in Themes](images/AppThemes.jpg?raw=true "Built-in Theme")

You can add custom themes from inside the app. In order to have greater control over theming, you can also add your own theme library to Rocket.Chat.Android.

# Adding Themes to Rocket.Chat.Android

Understanding the codebase is not required prior to adding your own library. This guide details the steps required to add your own themes via xml.

## Setting up Development Environment

Set up your development environment as outlined in [this guide](https://github.com/RocketChat/Rocket.Chat.Android/blob/develop/README.md).

## Add a New Library Module

1. Go to **File > New > New Module.** 
2. In the **Create New Module** window that appears, click **Android Library**, then click **Next**.
3. Give your library a name e.g *pastelthemelibrary* and then click **Finish**.

## Add Resource Files

### Custom Attributes
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
### Light or Dark Attribute

You need a boolean custom attribute to indicate whether the background of the themes added is dark or light so that the theme engine can handle UI colors appropriately. The attribute ensures that status bar icons are always visible even when the status bar background is made invisible by this method:

https://github.com/NBAMIR/Rocket.Chat.Android/blob/4cf9bf16a136e51af04c938aedc3f475ea3e514c/app/src/main/java/chat/rocket/android/util/extensions/Ui.kt#L28-L41

The custom attribute added into attrs.xml for this purpose is *colorBackgroundIsDark*. Now you need a boolean value to assign to this custom attribute when you define your theme.

1. Right click on **pastelthemelibrary > res > values** and go to **New > Values resource file**.
2. Set File Name as *bools* and click **OK**. This file will hold a boolean value for every theme you want to define.
3. Suppose the theme you are going to define is called *DarkPastelTheme*. Add the following item inside the resource tag in bools.xml.

```xml
<bool name="darkPastelIsDark">true</bool>
```
The value *true* indicates that the theme has a dark background. Add a boolean item for every theme you want to define and set its value to true or false.

### Theme Colors

Before defining colors for your theme, pick a base theme from the built-in themes. You will extend the base theme and override certain attributes to change them. You can change as many attributes as you like and leave the rest. Suppose for *DarkPastelTheme*, you select DarkTheme as your base theme. The next step is to define the colors. The following colors can be defined:

1. colorBodyText
2. colorPrimary
3. colorPrimaryDark
4. colorSubHeaderBackground
5. colorSettingsSecondaryBackground
6. colorTextHint
7. colorDescriptiveText
8. colorBottomSheetFragmentText
9. colorQuoteBar
10. colorAuthenticationSecondaryText
11. colorSubHeaderText
12. colorSecondaryText
13. colorMutedAccent
14. colorDivider
15. colorAuthenticationButtonBorderAndDivider
16. colorStatusInvisible
17. colorTitleText
18. colorPrimaryText
19. colorBottomSheetFragmentHeading
20. colorChannelTitle
21. colorTimestampText
22. colorChatText
23. colorChatComponentBackground
24. colorReactionBackground
25. colorReactionBorder
26. colorFloatingActionButtonBackground
27. colorFloatingActionButtonBorder
28. colorAuthenticationButtonDisabled
29. colorAccent
30. colorBackground
31. colorDim
32. colorControlText
33. colorAuxiliaryTint

Some of these colors will be the same but it is good practice to define them all so it is easier to check what color is assigned to any item. The recommended convention for color names is *theme name + color* in camel case. For example, *colorAccent* for *darkPastelTheme* will be defined as *darkPastelColorAccent*.
