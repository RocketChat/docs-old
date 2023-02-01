---
description: Let your users log in via Facebook, Google, LinkedIn, GitHub, and many others.
---

# OAuth

Rocket.Chat supports several different ways to authenticate beyond the basic username/password authentication. Most authentication providers require a client ID and a secret.

To set up your desired provider:

* Navigate to **Administration > Workspace > Settings> OAuth**

## Add Custom OAuth

To add a custom OAuth:

* Click **Add custom oAuth**
* Give a unique name for your custom OAuth
* Click **Add**
*   When setting up your OAuth Provider, you'll have to inform a Callback URL. Use&#x20;

    ```
    https://yourcompany.rocket.chat/_oauth/customoauth
    ```

## Refresh OAuth Services

Click Refresh OAuth Services to refresh the options that are displayed on the login screen based on the settings you saved.

## OAuth Methods

{% content-ref url="nextcloud-oauth-setup.md" %}
[nextcloud-oauth-setup.md](nextcloud-oauth-setup.md)
{% endcontent-ref %}

{% content-ref url="google-oauth-setup.md" %}
[google-oauth-setup.md](google-oauth-setup.md)
{% endcontent-ref %}

{% content-ref url="facebook-oauth-setup.md" %}
[facebook-oauth-setup.md](facebook-oauth-setup.md)
{% endcontent-ref %}

{% content-ref url="gitlab-oauth-setup.md" %}
[gitlab-oauth-setup.md](gitlab-oauth-setup.md)
{% endcontent-ref %}

{% content-ref url="github-oauth-setup.md" %}
[github-oauth-setup.md](github-oauth-setup.md)
{% endcontent-ref %}

{% content-ref url="wordpress.md" %}
[wordpress.md](wordpress.md)
{% endcontent-ref %}

