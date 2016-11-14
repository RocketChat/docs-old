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
└── random
    ├── dateTimeStamp1.csv
    ├── dateTimeStamp2.csv
    └── dateTimeStamp3.csv
```

## channels.csv Format
The `channels.csv` is a file which contains the channel names, each additional channel is on a new line.
```csv
general
random
```

## users.csv Format
The `users.csv` is a file which contains the user details, each line containing a new user and the user details is:

1. Username
2. Email
3. Name
4. Temporary Password (will only apply if the username or email doesn't have an account already)
```csv
bradley.hilton,bradley.hilton@example.com,Bradley Hilton
billy.bob, billy.bob@example.com, Billy Bob Jr., t@mp1
```

## Message Files
The message csv files require a specific format, each line containing a new message and the message details as:

1. Username who sent the message
2. The timestamp, in either milliseconds or seconds (epoch time)
3. The message
```csv
bradley.hilton,1479162481336,"this is a test message"
billy.bob, 1479162481654, "this is a test message"
```

## Importing
Once you have that all set up and zipped, then you can start the import process.

1. Go to https://[your_rocketchat]/admin/import/prepare/csv
2. Choose your `.zip` file and wait until Rocket.Chat can read it (it can take a few minutes, depending on the size of the file)
3. Deselect any items you **don't** want to import
4. At the top of the page, click on Start Importing
