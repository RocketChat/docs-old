workflow "Lint and Check" {
  resolves = ["Markdown Linter and Link Checker"]
  on = "gollum"
}

action "Markdown Linter and Link Checker" {
  uses = "./actions/lint/"
  env = {
    NOKOGIRI_USE_SYSTEM_LIBRARIES = "true"
    LANG = "C.UTF-8"
  }
}
