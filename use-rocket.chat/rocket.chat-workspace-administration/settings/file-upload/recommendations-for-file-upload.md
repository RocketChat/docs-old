# Recommendations for File Upload

## GridFS

GridFS is the MongoDB specification for storing and retrieving large files such as images, audio files, video files, etc. It is a kind of a file system to store files but its data is stored within MongoDB collections. GridFS has the capability to store files even greater than its document size limit of 16MB.

GridFS divides a file into chunks and stores each chunk of data in a separate document, each of maximum size 255k.

GridFS by default uses two collections **fs.files** and **fs.chunks** to store the file's metadata and the chunks. Each chunk is identified by its unique \_id ObjectId field. The fs.files serves as a parent document. The **files\_id** field in the fs.chunks document links the chunk to its parent.

Though GridFS is used in rocket.chat for file storage because MongoDB offers this functionality with zero configuration but GridFS is not recommended for day to day file storage needs in a production environment because it puts an immense amount of load on the database.

{% hint style="info" %}
**GridFS** is only sustainable if you are using Retention Policy and only storing a small number of files per week which are not hefty but it is not recommended by us because it is not scalable.
{% endhint %}

## FileSystem

It stores the files on the FileSystem of the server where your rocket.chat instance is running. It is a good option but the problem arises when you start to scale. Because if you decide to have multiple rocket.chat servers to support a larger number of users, the FileSystem needs to be shared between all the rocket.chat servers.

If you want to have two separate virtual/physical servers you will somehow have to share the folder too where your files are stored using for example NFS. It will require a lot of configurations.

{% hint style="info" %}
We suggest **FileSystem** only when you are running a single rocket.chat instance.
{% endhint %}

{% hint style="info" %}
What we recommend as the best option for the file upload system are **Amazon** **S3** and **Google Cloud Storage**.
{% endhint %}
