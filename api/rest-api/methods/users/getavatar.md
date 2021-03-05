# Get Avatar

Gets the URL for a user’s avatar.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/users.getAvatar` | `no` | `GET` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `userId` or `username` | `BsNr28znDkG8aeo7W` | Required | The id or username of the user. |

## Example Call - Via userId

```bash
curl http://localhost:3000/api/v1/users.getAvatar?userId=BsNr28znDkG8aeo7W
```

## Example Result

```text
http://localhost:3000/avatar/bobsmith
```

## Example Call - Via username

```bash
curl http://localhost:3000/api/v1/users.getAvatar?username=bobsmith
```

## Example Result

```text
http://localhost:3000/avatar/bobsmith
```

_N.B. the response is a 307 temporary redirect_

## Change Log

| Version | Description |
| :--- | :--- |
| 0.50.0 | Added |

