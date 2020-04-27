# Webinars

This is a guide on how to add a new webinar to the Rocket.Chat website.

To add a webinar to the site, you first need to create a markdown file for it.

Start by creating a file following this name model `YEAR-MONTH-DAY-YOUR-FILE-NAME` for example:

`2018-05-04-rocket-chat-android-2-1-released`

This file should be saved under [_posts](https://github.com/RocketChat/rocketchat.github.io/tree/master/_posts) on the corresponding folder for the year and month of the post.

After that you should set your file to look like this:

```yml
---
title: Rocket.Chat - iOS 3.2 release
description: On this webinar the mobile apps team talk about the new features and improvements of the version 3.2 of Rocket.Chat iOS App.
webinarID: 005
dateEvent: 2018-12-19 10:00:00
webinarURL: https://www.youtube.com/embed/PJwxVrQfgrM
bgSize: cover
bgColor: 030c1a
hosts:
  - Rafael Kellermann Streit
  - Matheus Cardoso
  - Filipe Alvarenga
language: USA
gmt: -3
cover: https://img.youtube.com/vi/PJwxVrQfgrM/maxresdefault.jpg
categories:
  - Webinars
---
```

Now we are going over relevant lines and see how to use them:

- **title:** This defines the title of the page and will be displayed on top of it;
- **description:**: This defines the description of the webinar, it is important to always add a good description on what the webinar is about. Does not have any restriction on size;
- **webinarID:** This defines the ID of the webinar, you **MUST** add a unique ID to the webinar that follows the order of the last webinar, for example if the last webinar was `007`, this one needs to be `008`. If a webinar have the same ID of an already existing one, the tests on the Pull Request will fail;
- **dateEvent:** The date that the webinar will occur, this will define if it is an upcoming or a past webinar. Uses `YEAR-MONTH-DAY HOUR:MINUTE:SECOND` format;
- **webinarURL:** If the webinar has already happened, add here the youtube embed URL. You can find this URL on the youtube video page "Share" section;
- **hosts:** This defines the speakers for the webinar, simply add the full name of the team member (according to [this members list]()) to the parameter. Webinars can have as many hosts as you want, but only the 3 first will show up on the thumbnail. If you need to add someone that is out of the team, you should use the `off-team-host` parameter:

```yml
off-team-host: HOST NAME
off-team-host-image: "URL-TO-HOST-IMAGE"
off-team-host-role: HOST ROLE
```

- **language:** This defines the language of the webinar, currently we only support either `Brazil` for Portuguese or `USA` for English;
- **gmt:** This defines the timezone that the webinar will be held on;
- **cover:** This defines the cover image of the webinar, it is suggested to use the youtube video's own thumbnail for webinars that has already happened. You can get this image by simply using the URL `https://img.youtube.com/vi/YOUR-VIDEO-ID/maxresdefault.jpg`
- **categories:** This must have the category `- Webinars` or else it will not show up as a webinar and only as a normal post.
