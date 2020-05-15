
// redirect people to rocket.chat/docs if they try and browse the GitHub pages version
if(location.hostname == "rocketchat.github.io" || location.hostname == "rocket.chat") {
  location="https://docs.rocket.chat" + location.pathname.replace('/docs','')
}
ß