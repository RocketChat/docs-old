Every new build now includes version information.

For now, it can be accessed directly via :   `http://<your server name>/api/info`

A sample output of the version information:

```
{
  "version": "0.8.0",
  "compile": {
    "date": "2015-12-11T23:57:49.792Z",
    "nodeVersion": "v0.10.40",
    "arch": "x64",
    "platform": "linux",
    "osRelease": "3.13.0-52-generic",
    "totalMemmory": 8373084160,
    "freeMemmory": 241037312,
    "cpus": 4
  },
  "commit": {
    "hash": "b023db6f9321194dcb3db5128b62abbc3bafdc2f",
    "date": "Fri Dec 11 21:52:55 2015 -0200",
    "author": "Gabriel Engel",
    "subject": "Merge pull request #1627 from jgerle/develop"
  },
  "tag": "v0.8.0",
  "branch": "develop"
}
```
