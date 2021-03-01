---
description: Rocket.Chat Windows Installation Guide
---

# Windows Server

_Note: This is a community supported installation method. You can discuss about this in the_ [_forum thread_](https://forums.rocket.chat/t/broken-windows-server-2012-r2-installation-guide/413/2)_._

## How to install Rocket.Chat on Windows Server 2012 R2

The following guide will step through the various steps for installing Rocket.Chat on Windows Server 2012 R2.

**Important**: Production deployment using any client versions of Windows, such as Windows 7, 8, or 10 is not supported. However, beta deployment for Windows 10 Pro \(or Enterprise or Education\) version is available via Docker for Windows see [Installing on Windows 10 Pro 64bit with Docker for Windows](windows-10-pro.md).

Mobile clients \(iOS and Android\) are currently not supported using this method of deployment. However, [Windows 10 Pro 64bits with Docker for Windows](windows-10-pro.md) based deployment should support mobile clients.

**Note**: The steps will include all dependencies. If a particular dependency has already been installed, please skip to any relevant configuration section.

### Binary Dependencies

To start, go to `Control Panel -> Programs and Features` and uninstall each of the following \(if present\):

* Microsoft Visual C++ 2010 x64 Redistributable
* Microsoft Visual C++ 2010 x86 Redistributable

Then, download and install each of the following **in order**:

1. [Python 2.7.3](https://www.python.org/ftp/python/2.7.3/python-2.7.3.msi) \(if you have Python 3.x already installed, just leave it, both can coexist\)
2. [Visual C++ 2010 Express](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads) or Visual Studio 2010
3. [Windows SDK 7.1](http://www.microsoft.com/en-us/download/details.aspx?id=8279)
4. [Visual Studio 2010 SP1](https://www.microsoft.com/en-us/download/details.aspx?id=34677)
5. [Visual C++ 2010 SP1 Compiler Update for the Windows SDK 7.1](http://www.microsoft.com/en-us/download/details.aspx?id=4422)
6. [GraphicsMagick](http://www.graphicsmagick.org/INSTALL-windows.html#prerequisites)
7. [Ghostscript](http://ghostscript.com/download/gsdnld.html) \(Optional for PDF rendering\)

### MongoDB

* Download [MongoDB](https://www.mongodb.org/downloads#production). \(Note: This can be done on a separate computer\)
* Run the installer and choose `Custom`
* Click the `Browse` button to select desired install path, such as `C:\MongoDB`
* Continue through the rest of the installer.
* Now open NotePad and enter the following, replacing \[Data Path\] with where the database will be stored, such as `C:\MongoDB\data`

```text
systemLog:
    destination: file
    path: [Data Path]\logs\mongod.log
storage:
    dbPath: [Data Path]\data
replication:
    replSetName: rs1
```

* Save the file as `[Installation Path]\mongod.cfg` where \[Installation Path\] is the location you installed Mongo
* Open the Command Prompt by pressing `Windows Key + R` and then entering `cmd`, right click on Command Prompt and select `Run as administrator`
* Now enter the following:

```text
> mkdir [Data Path]
> cd [Data Path]
> mkdir [Data Path]\db
> mkdir [Data Path]\logs

> cd [Installation Path]\bin
> mongod.exe --config "[Installation Path]\mongod.cfg" --install
> net start MongoDB

> mongo.exe
> rs.initiate()
> exit
```

> _Note: Do not include the `>`_

### Rocket.Chat files

1. Download the latest Rocket.Chat **Windows Release** from the Rocket.Chat releases page \(not available anymore\)
2. Using an archive utility such as [7zip](http://www.7-zip.org/) or [tar for Windows](http://gnuwin32.sourceforge.net/packages/gtar.htm), extract the tar.gz file
3. Place the files in the desired install path, such as `C:\RocketChat`

### Node.js

Rocket.Chat is built on top of Node.js v8.9.3. So we need to install this first.

1. Download [Node.js v8.9.3](https://nodejs.org/dist/v8.9.3/node-v8.9.3-x86.msi)
2. Run the installer with all default option.

### Node Packages

1. Open the _Windows SDK 7.1 Command Prompt_ by pressing Start, typing its name, and clicking on it in the search results \(Note: It needs to be the SDK Command Prompt\)
2. Now enter the following, replacing:
   * \[Installation Path\] with the location you placed the Rocket.Chat files
   * \[Port to Use\] with the port for the Rocket.Chat server to use, such as `3000`
   * \[Rocket.Chat URL\] with the URL you will use for Rocket.Chat, such as `rocketchat.example.com`
   * \[Address to MongoDB\] with the IP Address of your MongoDB. \(NOTE: If you didn't install Mongo on another computer, use `localhost`\)
   * \[MongoDB Database\] with the name of the database you would like to use, such as `rocketchat`

```text
> SetEnv /x86
> cd [Installation Path]
> npm install nave -g
> npm install node-windows

> npm config set python /Python27/python.exe --global
> npm config set msvs_version 2010 --global

> set PORT=[Port to Use]
> set ROOT_URL=[Rocket.Chat URL]
> set MONGO_URL=mongodb://[Address to Mongo]:27017/[MongoDB Database]
> set MONGO_OPLOG_URL=mongodb://[Address to Mongo]:27017/local
> set SCRIPT_PATH=[Installation Path]\main.js

> cd programs\server
> npm install

> cd ../..
> node rocket.service.js install
> net start Rocket.Chat
```

> Note: If missing, rocket.service.js can be found [here](https://github.com/Sing-Li/bbug/blob/master/images/rocket.service.js) _Note: Do not include the `>`_

### Verifying the Install

1. View the installed services by pressing `Windows Key + R` and then entering `services.msc`
2. Find `Rocket.Chat` in the list. Its status should be `Running`
3. Open a browser and, in the address bar, enter `http://localhost:[Port Used]`
4. Rocket.Chat should load.

### Mobile Support

In order to use Rocket.Chat on mobile devices, you must also configure your installation to support SSL with a valid certificate.

### IIS Configuration \(Optional\)

The following steps will detail integrating Rocket.Chat with IIS.

#### Get UrlRewrite and ARR

1. Open IIS, click on your server, and then click on `Get New Web Platform Components` in the right hand menu
2. Install the Web Platform Installer if prompted
3. Once open, search for `Routing` in the upper right search box
4. Click on the `Add` button for Application Request Routing 3.0 and then `Install`
5. Once ARR and UrlRewrite are installed, close and reopen IIS

#### Adding the SSL Certificate

1. Click on your server in the left menu and then click on `Server Certificates`
2. In the right hand menu, click on `Import...`
3. Find your SSL Certificate and enter your password
4. Click `Ok`

#### Setting up the Rocket.Chat site

1. Create a new Web Site and bind it to the \[Rocket.Chat Url\] previously specified.

   **NOTE: If you plan on using the Rocket.Chat mobile apps, you must use HTTPS. HTTP is optional only for PCs**

2. For the physical path, point it to an empty folder in your webroot. \(Note: There will be no default document here, just the web.config.\)
3. Press `Ok`
4. Select the new Rocket.Chat site and click on `Url Rewrite`
5. In the upper right hand menu, select `Add Rule(s)...` and then `Reverse Proxy`
6. Enter `http://localhost:[Port Used]` in the top box and hit `Ok` \(Note: This must remain HTTP even if you are using HTTPS\)

#### Troubleshooting

* If the Rocket.Chat service isn't running, check the Event Viewer under `Windows Logs\Application` for errors from the Rocket.Chat service.
* If the page didn't load, check the log files in \[Data Path\]\logs for clues.
* If that doesn't help, or if you had any other problems during the process, try searching our [GitHub Issues](https://github.com/RocketChat/Rocket.Chat/issues)
* If you are still having problems, visit the [\#support](https://open.rocket.chat/channel/support) channel and we'll be happy to help.

