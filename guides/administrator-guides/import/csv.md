# CSV

The CSV importer allows you to import your own plain text files, however it does require the zip file to be in a specific format for the importer to understand.

## The Zip File

The zip file must be a **flat zip**, which means there can **not** be a "root" or "sub" folder in which the items reside in the zip file. The importer looks for the files `channels.csv` and `users.csv` immediately inside the zip and not inside of any folder. If you have any questions about this, please ask in [\#support channel on the Community server](https://open.rocket.chat/channel/support).

The **directmessages** directory is a special directory name, check **Direct Messages** section below.

```text
fileToImport.zip
├── channels.csv
├── users.csv
├── directmessages
│   ├── messages1.csv
│   ├── messages2.csv
│   └── messages3.csv
├── general
│   └── messages.csv
├── otherChannelName
│   ├── canBeAnyNameButHasToHave.csv
│   ├── theDotCSV.csv
│   └── asTheFileExt.csv
├── privateArea
│   └── messages.csv
└── random
   ├── dateTimeStamp1.csv
   ├── dateTimeStamp2.csv
   └── dateTimeStamp3.csv
```

## channels.csv Format

> Channels between 2 users \(Direct Messages\) should not be included on this file. See section **Direct Messages** for more information.

The `channels.csv` requires a **very** specific structure and layout. Each line contains information about one channel. Each line must include the channel name, the creator, whether it is private or public, and the members in the channel separated by a semicolon `;`. Quotes are _**required**_.

1. Channel name
2. Username of the channel creator
3. Whether the channel is public or private. If the last argument is not `private` it is assumed the channel is public.
4. List of users in the channel, separated by semicolons. If only the creator is in the channel, then there must be empty quotes.

```text
"general","bradley.hilton","public",""
"otherChannelName","billy.bob","public",""
"random","bradley.hilton","public","billy.bob;graywolf336"
"privateArea","bradley.hilton","private","graywolf336"
```

## users.csv Format

The `users.csv` is a file which contains the user details, each line containing a new user and the user details is:

1. Username \(must not contain @ and some other special characters\)
2. Email
3. Name

```text
bradley.hilton,bradley.hilton@example.com,Bradley Hilton
billy.bob, billy.bob@example.com, Billy Bob Jr.
graywolf336,graywolf336@example.com,GrayWolf336
```

## Message Files

The message csv files require a **very** specific format. Each line contains a new message, every piece of information is **requires** quotes to surround it, there cannot be any spaces between the commas. The details required are:

1. Username who sent the message
2. The timestamp in milliseconds
3. The message, quotes are highly recommended especially if the message text contains a comma.

```text
"bradley.hilton","1479162481336","this is a test message"
"billy.bob","1479162481654","this is another message, a test message"
```

## Direct Messages / Direct Channels

Direct Channels / Direct Messages are imported from a special directory named **directmessages** with a specific format based on the **Message Files** format. The details required are:

1. Username who sent the message
2. Username who received the message
3. The timestamp in milliseconds
4. The message, quotes are highly recommended especially if the message text contains a comma.

It's **required** to keep conversations in **distinct files**, for example, a conversation between user A and B compose a file \(`messages1.csv`\), and the conversation between user B and C compose another file \(`messages2.csv`\).

```text
"bradley.hilton","billy.bob","1479162481336","this is a test message"
"billy.bob","bradley.hilton","1479162481654","this is another message, a test message"
```

## Importing

Once you have that all set up and zipped, then you can start the import process.

1. Go to `https://[your_rocketchat]/admin/import/prepare/csv`
2. Choose your `.zip` file and wait until Rocket.Chat can read it \(it can take a few minutes, depending on the size of the file\)
3. Deselect any items you **don't** want to import
4. At the top of the page, click on Start Importing

When you have problems during the Import, click on "View Logs" in the admin section to get the detailed error messages.

