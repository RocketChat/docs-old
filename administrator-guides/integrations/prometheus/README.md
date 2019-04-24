# Prometheus

[Prometheus](https://prometheus.io/) is an open-source systems monitoring and alerting toolkit.
To integrate alerts from Prometheus' Alertmanager, you have two options, depending of your deployment strategy.

## Incoming WebHook Script

You can copy/paste a script, using the Rocket.Chat Incoming WebHook feature. Follow the install instructions here:

<https://github.com/pavel-kazhavets/AlertmanagerRocketChat>

## AlertManager WebHook Receiver

You can configure a standalone AlertManager WebHook receiver that can be deployed and updated independently from Rocket.Chat. Follow the install instructions here:

<https://github.com/FXinnovation/alertmanager-webhook-rocketchat>
