# Avatars

Avatars are fetched from the server for each room and user, and gives the client control over the size and format of the image that is returned.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/avatar/{subject}` | `no` | `GET` |

## Parameters

| Argument | Example | Type | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `subject` | `alice`, `@general` | URL component | Required | Name of user or channel. Channels are always preceded by an @ symbol. Rooms that are DMs are always represented by the other participant's user avatar. |
| `format` | `png` | Query String | Optional | Format of the image requested. Can be one of: `jpg`, `jpeg`, `png`. |
| `size` | `50` | Query String | Optional | Width and height of the image. Default: 200 |
| `rc_uid` | `aobEdbYhXfu5hkeqG` | Query String | Optional | User ID for authenticating, only required if `Accounts_AvatarBlockUnauthenticatedAccess` is enabled |
| `rc_token` | `9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq` | Query String | Optional | User auth token for authenticating, only required if `Accounts_AvatarBlockUnauthenticatedAccess` is enabled |

## Notes

* Whilst this is a RESTful endpoint, this sits separately from the [REST API](./) in the server codebase, and behaves slightly differently.
* The `rc_uid` and `rc_token` can alternately be provided as cookies \(already present in the web interface\), but not as auth headers.
* When requesting the avatar of a user, if they have a custom avatar set, this will override user choices of format or size
* If no uploaded avatar exists for a user, a default one will be generated for them based on the initial of their username in a randomly coloured square
  * If `UI_Use_Name_Avatar` is set AND the user has a real name set, the generated avatar will be based on their actual name instead of the username.
* If no format is requested, or the format requested isn't supported, the format returned will be SVG.

## Example Call

```bash
curl http://localhost:3000/avatar/alice?size=50
```

