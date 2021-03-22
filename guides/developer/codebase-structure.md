# Basics stucture of Codebase

Rocket.Chat has a huge Codebase, anyone can get overwhelmed by going through it for the first time. This guide 

## Technologies we use at Rocket.Chat

Rocket.Chat is built on web framework MeteorJS. It integrates with MongoDB which we use as the database for storing all data. For front end we use ReactJS library for most part and BlazeJS along with MeteorJS for some parts.

## Basic overview of Codebase

Meteor is a full-stack framework for building JavaScript applications. This means Meteor applications differ from most applications in that they include code that runs on the client, inside a web browser , code that runs on the server, inside a Node.js container, and common code that runs in both environments. Our backend is managed by MeteorJS, all api calls and database queries are written in Meteor. As we use Meteor, we have all major code divided between server and client folders. The code in server folder runs on server side, and code in client folder runs on client side.

We are porting all of our Meteor's front end implementation to ReactJS. To provide a consistent UI/UX, we have created a npm package known as [Fuselage](https://github.com/RocketChat/Rocket.Chat.Fuselage), where we have implemented all basic components used by Rocket.Chat. In the codebase, the components from fuselage are the building blocks for more complex components and UI of Rocket.Chat. Refer [here for Fuselage docs](https://rocketchat.github.io/Rocket.Chat.Fuselage/fuselage/master/?path=/story/box-intro--page).

## Folder Structure

**app** folder contains all the major code for the Rocket.Chat, be it 3rd party integrations, features like custom Oauth and Omnichannel, BBB or Jitsi integration etc. This folder also contains all the models for MondoDB, in simple words, the backend structure and core functions to update the database along with all the API routes inside **api** folder.

**Client** folder contains code for front end implementation using react. It has perfectly named sub folders, one can easily identify what front end code is in which folder, i.e sidebar folder has all front-end implementation for sidebar, views/admin and view/omnichannel have front end implementations for the same.

**definition** contains Type Declarations for the Typescript files in the codebase.

**ee** contains all the enterprise features, like Omnichannel, LDAP authentication and usage.

**packages** folder contains the i18n language packs and other essential packages.

**public** folder contains all the fonts, icons, svgs and sound files.