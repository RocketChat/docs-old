# Rate Limiter

The rate limiter is set by default on all api endpoints, with an amount set in the `Administration -> General -> REST API` for time interval (in milliseconds).
To disable the rate limiter you can add the `api-bypass-rate-limit` permission for your user group role in the `Administration -> Permission`.

To disable programmatically or change the rate limiter, such as the number of calls and the time interval,
simply provide for the API function `.addRoute`, within the existing options object that already defines `authRequired: true/false`,
a property `rateLimiterOptions`, providing `false` if you want disable the RateLimiter for this endpoint,
or by providing a valid configuration object with the desired configuration, in the following format `{numRequestsAllowed: 10, intervalTimeInMS: 60000}`.

The rate limiter is set by default in the development environment and can be disabled in the admin panel in the `Administration -> General -> REST API`.
