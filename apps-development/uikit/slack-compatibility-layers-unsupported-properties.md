---
description: Properties that do not translate from Slack's Block Kit to Rocket.Chat's UIKit
---

# Slack Compatibility Layer's unsupported properties

## Text object - Markdown

* verbatim \(string\)

## Option object

* url \(string\)
* description \(PlainTextElement\)

## Button element

* confirm \(confirm\)

## From the "select" menus, only multistatic and static works

## Multistatic select

* option\_groups
* max\_selected\_items
* confirm

## Static select

* option\_groups
* confirm

## Overflow menu

* confirm

## Plain text input

* min\_length
* max\_length

## Input block

* hind \(added\)

## Section block

* fields

