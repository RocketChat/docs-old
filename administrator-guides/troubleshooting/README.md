# Troubleshooting

Sometimes we get ourselves into a bit of trouble.  Here we will try to provide common problems and their solutions.

## Invalid Site URL Warning

If you receive an alert that you have an invalid Site URL.  This means that some how your Site URL and the URL you are accessing from don't match.  This causes assets in Rocket.Chat to not be able to load properly.

This usually happens when someone changes the setting.  To resolve this you will need to modify the site url.

Setting the following environment variables will correct this issue:

```
OVERWRITE_SETTING_Site_Url=https://the-address-you-use-to-access
ROOT_URL=https://the-address-you-use-to-access
```
