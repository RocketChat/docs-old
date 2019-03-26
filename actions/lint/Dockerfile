FROM singli/rubylint

LABEL "com.github.actions.name"="Lint markdown and check Jekyll files"
LABEL "com.github.actions.description"="Lint markdown and check jekyill files integrity recursively - via ruby gems"
LABEL "com.github.actions.icon"="mic"
LABEL "com.github.actions.color"="red"
LABEL "repository"="http://github.com/rocketchat/docs"
LABEL "homepage"="http://github.com/rocketchat/docs"
LABEL "maintainer"="Sing Li <sing.li@rocket.chat>"

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]