# Rate Limiter

To access this setting, go to **Administration** > **Settings** > **Rate Limiter**.

## API Rate Limiter <a href="#9f0duy7a3no" id="9f0duy7a3no"></a>

* **Enable Rate Limiter**: Lets you enable API  rate limiter.
* **Enable Rate Limiter in development**: When enabled, rate limiter will be enabled for development. Llimit the number of calls to the endpoints in the development environment?
* **Default number calls to the rate limiter**: Number of default calls for each endpoint of the REST API, allowed within the time range defined below
* **Default time limit for the rate limiter (in ms)**: Takes in time in seconds to limit the number of calls at each endpoint of the REST API (in ms).

## DDP Rate Limiter <a href="#ikikwb84ti" id="ikikwb84ti"></a>

Customize rate-limiting for methods and subscriptions to avoid a high load of WebSocket messages on your server.

* **Limit by IP: enabled**: Enables limit by IP.
* **Limit by IP: requests allowed**: Lets you set the number of requests allowed.
* **Limit by IP: interval time**: Takes in the interval for limiting IP.
* **Limit by User:**&#x20;

## Feature Limiting

* **Default number calls to the rate limiter for registering a user**: Number of default calls for user registering endpoints (REST and real-time API's), allowed within the time range defined in the API Rate Limiter section.
