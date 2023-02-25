---
description: >-
  Control the rate of requests sent or received by your workspace to prevent
  cyber attacks and scraping.
---

# Rate Limiter

Rocket.Chat Rate Limiter is used to control the rate of requests sent or received by your Rocket.Chat workspace. It can be used to prevent cyber attacks like DoS (Denial of Service) attacks and limit web scraping.

To access this setting, go to **Administration** > **Workspace** > **Settings** > **Rate Limiter**.

## API Rate Limiter <a href="#9f0duy7a3no" id="9f0duy7a3no"></a>

* **Enable Rate Limiter**: This lets you enable API rate limiter.
* **Enable Rate Limiter in development**: When Rate Limiter is set to`True`, the rate limiter is enabled for development. It limits the number of calls to the endpoints in the development environment.
* **Default number calls to the rate limiter**: Number of default calls for each endpoint of the REST API, allowed within the time range defined below.
* **Default time limit for the rate limiter (in ms)**: Takes time in seconds to limit the number of calls at each endpoint of the REST API (in ms).

## DDP Rate Limiter <a href="#ikikwb84ti" id="ikikwb84ti"></a>

Customize rate-limiting for methods and subscriptions to avoid a high load of WebSocket(A communication protocol that allows for simultaneous data transmission in one channel) messages on your workspace.

* **Limit by IP: enabled**: Enables limit by IP.
  * **Limit by IP: requests allowed**: This lets you set the number of requests allowed.
  * **Limit by IP: interval time**: Takes in the interval for limiting IP.
* **Limit by User:** This lets you enable DDP rate-limiting by user
  * **Limit by User: requests allowed**: The number of requests allowed
  * **Limit by User: interval time**: The time interval in seconds for limiting the user
* **Limit by User per Method**: When set to true, it enables limiting user's rate per method
  * **Limit by User per Method: requests allowed**: The number of requests allowed
  * **Limit by User per Method: interval time**: The interval for limiting user per method
* **Limit by Connection per Method**: Lets you set connection limit by method
  * **Limit by Connection per Method: requests allowed**: The number of request requests allowed
  * **Limit by Connection per Method: interval time**: Interval for limiting connection per method

## Feature Limiting

Setting this up gets your sever full protection from email and username enumeration by brute force attack.

* **Default number calls to the rate limiter for registering a user**: Number of default calls for user registering endpoints (REST and real-time API's), allowed within the time range defined in the API Rate Limiter section.
