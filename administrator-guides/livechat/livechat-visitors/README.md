# Livechat Real-Time Visitors

This feature helps you monitor visitor on your website in real time. Some of the features are provided below

- [Location of Visitor](#location-of-visitor)
- [Daily Real time Statistics](#daily-real-time-statistics)
- [Filtering](#filtering)
- [Information shown in Table](#information-shown-in-table)
- [Contextual tab information](#contextual-tab-information)

## Location of Visitor

User is asked for their location access when the page is loaded where livechat script is added. If they choose to disalow it then the user session info is shown on dashboard without their location. We only store `city, country, latitude, longitude` of user to display on Real time Dashboard. This is done so that agent can have some context from where the user is and they can help accordingly.

## Daily Real time Statistics

In this feature, you will get daily stats of following

- Status of chats on a pie chat.
- How many users are currently active
- What is the busiest time of the day
- Average time on site of chats
- Most visitors from which location

![Daily activity](https://user-images.githubusercontent.com/24803604/63223057-9bed7e00-c1cd-11e9-80ca-4332af496425.png)

## Filtering

With this you can easily filter users as per your use case. Currently we support 4 types of filters

- Filtering by visitor `Name`
- Status of visitor i.e `Online`, `Away` or `Offline`

![Status of user](https://user-images.githubusercontent.com/24803604/63223126-87f64c00-c1ce-11e9-8e75-8d3d57b004aa.png)

- Status of chats i.e `Chatting`, `Not Started` or `Closed`

![Status of chats](https://user-images.githubusercontent.com/24803604/63223133-a52b1a80-c1ce-11e9-97a1-31fa5bc6c9cf.png)


- Time/Date filter.

![Time/Date filter](https://user-images.githubusercontent.com/24803604/63223117-6f863180-c1ce-11e9-8833-7651606a69eb.png)

## Information shown in Table

Some of the important information that can use useful for the agent is shown in the table. Some of them are

- Name of visitor
- Status of visitor i.e `Online`, `Away` or `Offline`
- Location of visitor. If they have denied access then, nothing is shown
- Visits they have made to website
- Device information, i.e from which device they are accessing the website
- Session Start time i.e the time when user first came to website
- Time on Site i.e how long user has been on website
- Chat Status i.e `Chatting`, `Not Started` or `Closed`
- Agent Info i.e which agent is currently serving the chat
- Sentimental Analsis score.

![Table information](https://user-images.githubusercontent.com/24803604/63223198-9729c980-c1cf-11e9-8415-4f0cd2bc4882.png)

## Contextual tab information

It is not possible to show all the information in a single table, so if an agent clicks on any visitor row, a contextual tab is opened with additional information like

- Navigation History of visitor even before starting the chat.
- Location of user on map. But for this to show, google maps has to enabled from settings.

![Contextual Bar](https://user-images.githubusercontent.com/24803604/63223223-f25bbc00-c1cf-11e9-9e1d-2d095eaaffcf.png)
