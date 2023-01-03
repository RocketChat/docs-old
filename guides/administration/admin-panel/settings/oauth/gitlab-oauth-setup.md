# GitLab OAuth Setup

To use GitLab OAuth on your Rocket.Chat server, you are required to have a GitLab `URL`, `Id` and `Secret` gotten from the GitLab application.

Follow these steps to enable GitLab OAuth on your server.

* First, go to [Gitlab Application](https://gitlab.com/-/profile/applications)
* You are presented with fields to complete. Fill in the Application name, redirect URI and other details then hit **Save application**

![](<../../../../../.gitbook/assets/image (661) (1) (1).png>)

* After creating, you see a page with all the details of your newly created app

![](<../../../../../.gitbook/assets/image (681) (1) (1) (1).png>)

* Copy these details and go to the GitLab OAuth section on your Rocket.Chat server by navigating to **Administration** > **Workspace** > **Settings** > **OAuth**
* Fill in the information and hit **Save changes** to commit

![](<../../../../../.gitbook/assets/image (670) (1) (1) (1).png>)

* After saving, you will now have the GitLab OAuth button on you login and register pages

![](<../../../../../.gitbook/assets/image (641) (1) (1) (1).png>)

When used for authentication, a prompt is gotten for users to accept access

![](<../../../../../.gitbook/assets/image (684) (1) (1).png>)
