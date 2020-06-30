# Updating from 0.x.x to 0.40.0

With the release of Rocket.Chat 0.40.0 we are moving from requiring Node.js v0.10.44 to Node.js v4.8.4 LTS

If you used docker or one of our cloud installation methods: nothing to do, carry on!

## Update procedure

First stop Rocket.Chat

The guides suggest the usage of `n` to manage Node.js version. Assuming that is what you used run:

```text
sudo n 4.8.4
```

