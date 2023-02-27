# Troubleshooting

Occasionally, you may encounter some issues with your server. Common troubleshooting problems and solutions are outlined in this guide.&#x20;

## Invalid Site URL Warning

If you receive an alert that you have an invalid Site URL. This means your Site URL and the URL you are accessing don't match. It can cause assets in Rocket.Chat not to load correctly. Most times, it happens when someone changes the setting.&#x20;

To resolve it, you will need to modify the site URL by setting the following environment variables:

```
OVERWRITE_SETTING_Site_Url=https://the-address-you-use-to-access
ROOT_URL=https://the-address-you-use-to-access
```
