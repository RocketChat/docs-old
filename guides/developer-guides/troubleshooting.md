# Troubleshooting

1. **babel-runtime**:

If you are having the following error:

```bash
(STDERR) Error: The babel-runtime npm package could not be found in your node_modules
(STDERR) directory. Please run the following command to install it:
(STDERR)
(STDERR)   meteor npm install --save babel-runtime
(STDERR)
(...)
=> Exited with code: 1
=> Your application is crashing. Waiting for file change.
```

Just install the mentioned package with the following command:

```bash
meteor npm install --save babel-runtime
```

1. **bcrypt**:

If you see the following warning in the `meteor` logs:

```bash
(STDERR) Note: you are using a pure-JavaScript implementation of bcrypt.
(STDERR) While this implementation will work correctly, it is known to be
(STDERR) approximately three times slower than the native implementation.
(STDERR) In order to use the native implementation instead, run
(STDERR)
(STDERR)   meteor npm install --save bcrypt
(STDERR)
```

Don't panic =\) It means that the `bcrypt` library is not installed on your system and `meteor` will use a javascript alternative that is about three times slower.

If you want to install the library to make it faster, use the following command:

```bash
meteor npm install --save bcrypt
```

If the version of the `python` interpreter on your system is **greater than** v2.5.0 or **less than** 3.0.0, it should work fine, but, if you see a message like this:

```bash
gyp ERR! configure error
gyp ERR! stack Error: Python executable "/usr/local/bin/python3" is v3.5.2, which is not supported by gyp.
gyp ERR! stack You can pass the --python switch to point to Python >= v2.5.0 & < 3.0.0.
```

After you are sure that you have a `python` interpreter that matches the above requirements, use the following command to fix the error:

```bash
meteor npm config set python python2.7
```

Build it again:

```bash
meteor npm install --save bcrypt
```

If everything works, you should see a message like this:

```bash
> node-gyp rebuild

  CXX(target) Release/obj.target/bcrypt_lib/src/blowfish.o
  CXX(target) Release/obj.target/bcrypt_lib/src/bcrypt.o
  CXX(target) Release/obj.target/bcrypt_lib/src/bcrypt_node.o
  SOLINK_MODULE(target) Release/bcrypt_lib.node
clang: warning: libstdc++ is deprecated; move to libc++ with a minimum deployment target of OS X 10.9
Rocket.Chat@0.46.0-develop /Users/douglas/work/github/Rocket.Chat
└─┬ bcrypt@0.8.7
  ├── bindings@1.2.1
  └── nan@2.3.5
```

