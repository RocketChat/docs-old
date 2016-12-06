# Server Information
A simple method, requires no authentication, that returns information about the server including version information.

## Details
| URL | Requires Auth | HTTP Method | Payload |
| --- | --- | --- | --- |
| `/api/info` | `no` | `get` | _n/a_ | 

### Example Call
```bash
curl http://localhost:3000/api/v1/info
```

### Example Result
```json
{
  "version": "0.47.0-develop",
  "build": {
    "nodeVersion": "v4.6.2",
    "arch": "x64",
    "platform": "linux",
    "cpus": 4
  },
  "commit": {
    "hash": "5901cc7270e3587101631ee222def950d705c611",
    "date": "Thu Dec 1 19:08:01 2016 -0200",
    "author": "Gabriel Engel",
    "subject": "Merge branch 'develop' into experimental",
    "tag": "0.46.0",
    "branch": "experimental"
  }
}
```
