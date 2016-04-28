# Running in a sub folder

If you want to run your server in a sub folder like `https://your.domain.com/chat/` you should read this guide.

## Running the application
To run in a sub folder you should pass the evironment variable `ROOT_URL` to the process.
For example:

```shell
ROOT_URL=https://your.domain.com/chat/ node main.js
```

## Configuring the application
Set the `Site URL` under `Admin > General` to your **domain only** like `https://your.domain.com/`
