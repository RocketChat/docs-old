Server basic settings: 
1. INSTANCE_IP = This defines the server instance IP. Accepts Strings as data.
2. PORT = This sets the server's port. Accepts Strings as data, preferably numbers.
3. NODE_ENV
4. MONGO_OPTIONS
5. HOME, HOMEPATH, USERPROFILE = Used to set the path to stored uploaded files. Accepts Strings as data.
6. AVATARS_PATH = Use this to set the path to the avatar files storages. Accepts Strings as data.
7. DEPLOYMENT_ID
8. MAIL_URL 
9. BIND_IP
10. DEPLOY_PLATFORM
11. DEPLOY_METHOD

Initial Users setup:
12. ADMIN_PASS = Use this to create a admin user. This sets it's password. Use with the ADMIN_EMAIL and ADMIN_NAME. Accepts Strings as data.
13. ADMIN_NAME = Use this to create a admin user. This sets it's username. Use with the ADMIN_EMAIL and ADMIN_PASS. Accepts Strings as data.
14. ADMIN_EMAIL = Use this to create a admin user. This sets it's email. Use with the ADMIN_PASS and ADMIN_NAME. Accepts Strings as data.
15. INITIAL_USER = This takes a user object, will create a user if none is existent. Accepts a `user object` as data. 

Migrations packages: 

15. MIGRATE, MIGRATION_VERSION = Used to run migrations, set it to either 'latest' or the version number you want to migrate to. Optionally, append',exit' if you want the migrations to exit the meteor process

Mobile Setup

16. MOBILE_ROOT_URL
17. MOBILE_DDP_URL

Used in autoupdate package
18. AUTOUPDATE_VERSION = This stops the client from updating on html changes, meant to be used while developing. Accepts Strings as data.
19. APP_ID

Used only in rocketchat-version package:
20. TRAVIS_BUILD_NUMBER
21. TRAVIS_BRANCH
22. TRAVIS_TAG

Used only in rocketchat-tutum package:
23. DOCKERCLOUD_REDIS_HOST
24. DOCKERCLOUD_CLIENT_HOST
25. DOCKERCLOUD_CLIENT_NAME
26. DOCKERCLOUD_IP_ADDRESS

27. GITHUB_TOKEN
28. PWD
29. TEST_MODE = This starts the server in testing mode. This variable is required to run the tests. See [Testing](LINK-TO-TESTING-ARTICLES).
30. SANDSTORM