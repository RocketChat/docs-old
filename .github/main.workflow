workflow "Lint and Check" {
  on = "push"
  resolves = ["Markdown Linter and Link Checker"]
}

action "Markdown Linter and Link Checker" {
  uses = "./actions/lint/"
  env = {
    NOKOGIRI_USE_SYSTEM_LIBRARIES = "true"
    LANG = "C.UTF-8"
  }
}
