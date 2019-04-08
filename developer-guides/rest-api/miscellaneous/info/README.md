# Info

A simple method, requires no authentication, that returns information about the server including version information.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- | :--- |
| `/api/v1/info` | `no` | `GET` |

## Example Call

```bash
curl http://localhost:3000/api/v1/info
```

## Example Result

```json
{
  "info": {
    "version": "1.0.0-develop"
  },
  "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 1.0.0 | Update the example result |
| 0.13.0 | Added |
