#Updating old (Nov 2015) Docker deployments without losing data
If you have been using Docker or Docker Compose for deployment, and have problem with maintaining data across Rocket.Chat updates - this may apply to you.

Mid November, we have made a change in the mongodb database name in the Docker image. From _meteor_ to _rocketchat_.

###Recovery of old existing data

If you connect to your mongodb container you'll see two databases (show dbs): meteor (the old one with your whole data) and rocketchat (the new one).

To recover your data you should do (warning: you'll lose all your new data):

    stop rocketchat container
    connect to your mongo with mongoshell and execute this commands:
        use rocketchat
        db.dropDatabase();
        db.copyDatabase('meteor', 'rocketchat');

now you can start rocketchat container again and see if the data has been restored, if so you can drop the old database:

    connect to your mongo with mongoshell and execute this commands:
        use meteor
        db.dropDatabase();
