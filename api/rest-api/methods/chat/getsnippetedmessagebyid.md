# Get Snippeted Message By Id

Retrieve snippeted message by Id.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/chat.getSnippetedMessageById` | `yes` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `messageId` | `ByehQjC44FwMeiLbX` | Required | The message id |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/chat.getSnippetedMessageById?messageId=ByehQjC44FwMeiLbX
```

## Example Result

```javascript
{
    "message": {
        "_id": "48sifqi7ezh4ifKaK",
        "rid": "GENERAL",
        "msg": "```dsfsdfsdf```",
        "ts": "2019-10-25T23:26:31.550Z",
        "u": {
            "_id": "CaevAPDbXN252kyXa",
            "username": "marcos.defendi",
            "name": "Marcos Defendi"
        },
        "_updatedAt": "2019-10-25T23:27:51.300Z",
        "mentions": [],
        "channels": [],
        "snippetName": "rr",
        "snippeted": true,
        "snippetedBy": {
            "_id": "CaevAPDbXN252kyXa",
            "username": "marcos.defendi"
        }
    },
    "success": true
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 2.3.0 | Added |

