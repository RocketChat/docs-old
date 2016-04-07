# Deploying Rocket.Chat on Nitrous.io

While Nitrous.io is not straightly a 'cloud provider' in the conventional sense, depending on the type of account you have - it can certainly used to deploy Rocket.Chat for development or experimentation.

Deploying to nitrous.io is extremely easy, because it supports 'boxes' with Meteor pre-installed, as well as automatically checking out a git repository when the box starts.

## Creating a Meteor box

Create a box, and select Meteor.  512 MB is fine, but you need at least 2 GB of storage to start Rocket.Chat.  Make sure that you enter   `https://github.com/RocketChat/Rocket.Chat`  in the *Download a Github repo* field.


![Create a Rocket.Chat Meteor box](https://raw.githubusercontent.com/Sing-Li/bbug/master/images/nitrousio.png)


Then just hit the `Create Box` button to create the box.

## Start Rocket.Chat

The box will be created and you will be at the console. First, change directory to Rocket.Chat:

~~~
cd workspace/Rocket.Chat
~~~

Now, remove the git repository to save 12 MB.

~~~
rm -rf .git
~~~

Next, remove the android platform to save some more space. This platform removal can take a long time on most free or low cost boxes.

~~~
meteor remove-platform android
~~~

Then, start meteor. This can take a very long time on most free or low cost boxes (5 to 10 minutes).

~~~
meteor
~~~

Once Rocket.Chat is running, you can select Preview -> Port 3000 to access Rocket.Chat on a new browser tab.


## Note the Rocket.Chat external access URL


If you look at the browser URL, you can also note the external access URL for access to your Rocket.Chat instance.

For example:

~~~
http://orange-white-harbor-74-233260.use1-2.nitrousbox.com/
~~~

You can send this URL to anyone on the Internet to share your Rocket.Chat instance - as long as you keep the Nitrous box running.

