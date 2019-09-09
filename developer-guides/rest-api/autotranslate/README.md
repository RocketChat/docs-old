# Auto Translate Endpoints

To be able to use the auto translate feature, you must enable it on the admin panel under (`Admin -> Message -> Auto-Translate`) and the user must have the necessary permission (`auto-translate`) in addition to a valid Google Translate API token.

| Url                                           | Short Description                                  | Details Page                   |
| :-------------------------------------------- | :------------------------------------------------- | :----------------------------- |
| `/api/v1/autotranslate.getSupportedLanguages` | Get the supported languages by the autotranslate.  | [Link](getsupportedlanguages/) |
| `/api/v1/autotranslate.saveSetttings`         | Save some settings about autotranslate.            | [Link](savesettings/)          |
| `/api/v1/autotranslate.translateMessage`      | Translate the message.                             | [Link](translatemessage/)      |
