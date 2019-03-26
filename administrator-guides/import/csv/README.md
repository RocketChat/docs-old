# CSV Import

The CSV importer allows you to import your own plain text files, however it does require the zip file to be in a specific format for the importer to understand.

## The Zip File

The zip file must be a **flat zip**, which means there can **not** be a "root" or "sub" folder in which the items reside in the zip file. The importer looks for the files `channels.csv` and `users.csv` immediately inside the zip and not inside of any folder. If you have any questions about this, please ask in [#support channel on the Community server](https://open.rocket.chat/channel/support).

```
fileToImport.zip
├── channels.csv
├── users.csv
├── general
│   └── messages.csv
├── otherChannelName
│   ├── canBeAnyNameButHasToHave.csv
│   ├── theDotCSV.csv
│   └── asTheFileExt.csv
├── privateArea
│   └── messages.csv
└── random
   ├── dateTimeStamp1.csv
   ├── dateTimeStamp2.csv
   └── dateTimeStamp3.csv
```

## channels.csv Format

The `channels.csv` requires a **very** specific structure and layout. Each line contains information about one channel. Each line must include the channel name, the creator, whether it is private or public, and the members in the channel separated by a semicolon `;`. Quotes are **_required_**.

1. Channel name
2. Username of the channel creator
3. Whether the channel is public or private. If the last argument is not `private` it is assumed the channel is public.
4. List of users in the channel, separated by semicolons. If only the creator is in the channel, then there must be empty quotes.

```csv
"general","bradley.hilton","public",""
"otherChannelName","billy.bob","public",""
"random","bradley.hilton","public","billy.bob;graywolf336"
"privateArea","bradley.hilton","private","graywolf336"
```

## users.csv Format

The `users.csv` is a file which contains the user details, each line containing a new user and the user details is:

1. Username
2. Email
3. Name

```csv
bradley.hilton,bradley.hilton@example.com,Bradley Hilton
billy.bob, billy.bob@example.com, Billy Bob Jr.
graywolf336,graywolf336@example.com,GrayWolf336
```

## Message Files

The message csv files require a **very** specific format. Each line contains a new message, every piece of information is **requires** quotes to surround it, there cannot be any spaces between the commas. The details required are:

1. Username who sent the message
2. The timestamp in milliseconds
3. The message, quotes are highly recommended especially if the message text contains a comma.

```csv
"bradley.hilton","1479162481336","this is a test message"
"billy.bob","1479162481654","this is another message, a test message"
```

## Importing

Once you have that all set up and zipped, then you can start the import process.

1. Go to `https://[your_rocketchat]/admin/import/prepare/csv`
2. Choose your `.zip` file and wait until Rocket.Chat can read it (it can take a few minutes, depending on the size of the file)
3. Deselect any items you **don't** want to import
4. At the top of the page, click on Start Importing
