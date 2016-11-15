# CSV Import

The CSV importer allows you to import your own plain text files, however it does require the zip file to be in a specific format for the importer to understand.

## The Zip File
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
The `channels.csv` is a file which contains the channel names, each additional channel is on a new line and the username of the channel owner.

1. Channel name
2. Username of the channel creator
3. Whether the channel is public or private. If the last argument is not `private` it is assumed the channel is public.
```csv
general,bradley.hilton,public
otherChannelName,billy.bob,public
random, bradley.hilton, public
privateArea, bradley.hilton,private
```

## users.csv Format
The `users.csv` is a file which contains the user details, each line containing a new user and the user details is:

1. Username
2. Email
3. Name
```csv
bradley.hilton,bradley.hilton@example.com,Bradley Hilton
billy.bob, billy.bob@example.com, Billy Bob Jr.
```

## Message Files
The message csv files require a **very** specific format. Each line contains a new message, every piece of information must be surrounded by quotes, there can not be any spaces between the commas. The details required are:

1. Username who sent the message
2. The timestamp in milliseconds
3. The message, quotes are highly recommended especially if the message text contains a comma.
```csv
"bradley.hilton","1479162481336","this is a test message"
"billy.bob","1479162481654","this is a another message, a test message"
```

## Importing
Once you have that all set up and zipped, then you can start the import process.

1. Go to https://[your_rocketchat]/admin/import/prepare/csv
2. Choose your `.zip` file and wait until Rocket.Chat can read it (it can take a few minutes, depending on the size of the file)
3. Deselect any items you **don't** want to import
4. At the top of the page, click on Start Importing
