# Import from Slack

To import your current Slack data into Rocket.Chat:

1. Go to `https://[your_app].slack.com/services/export`
2. Click on **Start Export**
3. Wait until your download is ready and download it (it will be a .zip file)
4. Go to `https://[your_rocketchat]/admin/import/new/slack`
5. Select "**Slack**" as Import Type
6. Choose your downloaded .zip file and wait until Rocket.Chat can read it (it can take a few minutes, depending on the size of your Slack export)
7. Click on Import
8. Deselect any items you don't want to import
9. At the top of the page, click on Start Importing

{% hint style="info" %}
* If your Slack workspace is currently set up to hide emails, they'll also be excluded from exports. You can update your workspace settings temporarily and re-run the export in order to include emails as well.
* It can be helpful to export time ranges from Slack such that the size of each import file is less than 15MB.
* If facing difficulties during the upload phase of the import process, try copying the archive directly to the uploads folder using other means such as scp. Then select Server File Path as the File Type.
{% endhint %}
