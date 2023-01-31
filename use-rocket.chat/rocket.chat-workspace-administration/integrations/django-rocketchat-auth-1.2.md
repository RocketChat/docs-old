---
description: Authenticate Rocket.Chat user with Django Framework
---

# django-rocketchat-auth 1.2

Authenticate the users with Django Web Framework. This application implements the API used by Rocket.Chat IFrame authentication. Also, it handles logout by wiring up a method on Django signals.

{% hint style="info" %}
Tested with Django 2.0.4 and Rocket.Chat 0.62.2. If you have any problems, please open an issue.
{% endhint %}

### Configuration

1.  Install this app in your project:

    ```
    pip install django-rocketchat-auth
    ```
2.  Add “rocketchat\_auth” to your INSTALLED\_APPS setting like this:

    ```
    INSTALLED_APPS = (
        ...
        'rocketchat_auth',
    )
    ```
3. Get a [Rocket.Chat authentication token](https://docs.rocket.chat/guides/user-guides/user-panel/managing-your-account/personal-access-token#creating-a-personal-access-token), so we can use the API.
4.  Update your _settings.py_:

    ```
    MONGO_DB = 'localhost:27017'
    # or more verbose (e.g. for Heroku)
    # MONGO_DB = '<dbuser>:<dbpassword>@<dbhost>:<dbport>/<dbname>?authSource=<dbname>'

    ROCKETCHAT_URL = 'http://localhost:3000'

    ROCKETCHAT_AUTH_TOKEN = '<YOUR AUTH TOKEN FROM STEP 3>'
    ROCKETCHAT_USER_ID = '<YOUR USER ID>'

    CORS_ORIGIN_WHITELIST = (
        'localhost:8000',
        'localhost:3000',
    )
    ```
5.  Include the rocketchat\_auth URLconf in your project urls.py like this:

    ```
    urlpatterns += [url(r'^rocketchat/', include('rocketchat_auth.urls'))]
    ```
6. Since we will put your Django app into an iframe, we have to set up some security measures that would prevent it from happening.
   * Install [django-cors-headers](https://github.com/ottoyiu/django-cors-headers) and set your Rocket.Chat domain in CORS\_ORIGIN\_WHITELIST.
   * Configure Django's XFrameOptionsMiddleware to exempt your login page for Rocket.Chat requests or disable it (dangerous).
   * Configure Django's CsrfViewMiddleware to exempt your login page for Rocket.Chat requests or disable it (dangerous).
7. To access this settings, go to: **Administration** > **Workspace** > **Settings** > **Accounts**
   * **Enabled:** Enable this option to authenticate users using your own login page in place of the Rocket. Chat's login page via the iframe integration. Please check the [Iframe integration](https://developer.rocket.chat/rocket.chat/iframe-integration) page for more information.
   * **Iframe URL**: Enter \*\*\*\* the URL (http://localhost:8000/login/?next=/rocketchat/redirect)of the page you want to show as the login page of your Rocket.Chat instance.
   * **API URL:** Enter the URL (http://localhost:8000/rocketchat/api), which refers to the endpoint on the third-party system. This will check if the user is already logged in to that system.
   * **API Method:** Specify the API (POST) method that Rocket.Chat will use to submit information to the `API URL.`
