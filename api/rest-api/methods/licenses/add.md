# Add

Adds a new license.

| URL | Requires Auth | Required Permission | HTTP Method |
| :--- | :--- |:--- | :--- |
| `/api/v1/licenses.add` | `yes` | `edit-privileged-setting` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `license` | `k0HVkh8Fs...` | Required | The value of a valid license. |

## Example Call

```bash
curl -H "Content-type:application/json" \
     -H "X-Auth-Token: xytlUWJtCuxuDiwBfnoJpPR3qI7FWIB6LZbOKFeiIEu" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/licenses.get
     -d '{"license": "k0HVkh8Fs..."}'
```

## Example Result

```javascript
{
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 3.10 | Added |

