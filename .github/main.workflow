workflow "Lint and Check" {
  on = "push"
  resolves = ["md lint & site files chk"]
}

action "md lint & site files chk" {
  uses = "./actions/lint/"
  env = {
    NOKOGIRI_USE_SYSTEM_LIBRARIES = "true"
    LANG = "C.UTF-8"
  }
}
