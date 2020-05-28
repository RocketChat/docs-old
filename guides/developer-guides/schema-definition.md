# Schema Definition

## Rooms

```javascript
{
  "_id": "22nytdn4QqKvSk2Av",              // Random.id()
  "t": "p",                                // String           Room Type: c = chanel, d = direct, p (change to g) = group, v = visitor
  "ts": new Date(1432937851208),           // Date             Room Creation Timestamp
  "name": "general",                       // String           Room Name (t:d -> empty)
  "lm": new Date(1432937851208),           // Date             Last Message Timestamp
  "msgs": 2345,                            // Integer          Messages Counter
  "cl": true,                              // Boolean          If users can leave room
  "ro": false,                             // Boolean          Read Only
  "usernames": [                           // Array(String)    Room Users
      "username1",                         // String           User Username
      "username2",
      "username3"
  ],
  "u": {                                   // Object           Owner User
    "_id": "CABrXSHpDqbZXGkYR",            // Random.id()      User Id
    "username": "john"                     // String           User Username
  },
  "customFields": {                        // Object           User defined custom fields (for t:c and t:p only)
     "userDefinedField": "userValue",      //                  User defined field example
     "userDefinedField2": true,            //                  User defined field example
     "userObject3": {                      //                  User defined field example
        "a": "hello",
        "b": "lalala"
     }
  }
}
```

### Fields

| Fields | Type | Description |
| :--- | :--- | :--- |
| \_id | Random.id\(\) | Room Id |
| t | String | Room Type |
| ts | Date | Room Creation Timestamp |
| name | String | Room Name \(t:d -&gt; empty\) |
| lm | Date | Last Message Timestamp |
| msgs | Integer | Messages Counter |
| cl | Boolean | If users can leave room |
| ro | Boolean | Read Only |
| usernames | Array\[String\] | Room Users |
| usernames.0 | String | User Username |
| u | Object | Owner User |
| u.\_id | Random.id\(\) | User Id |
| u.username | String | User Username |
| customFields | Object | User custom fields \(for t:c and t:p only\) |

### Indexes

| Fields | Options |
| :--- | :--- |
| name | unique, sparce |
| u.\_id |  |

## Subscriptions

```javascript
{
  "_id": "22nytdn4QqKvSk2Av",              // Random.id()
  "t": "p",                                // String           Subscription Type (copy from Room)
  "ts": new Date(1432937851208),           // Date             Subscription Creation Timestamp
  "ls": new Date(1432937851208),           // Date             Last Seen Timestamp
  "name": "my-cool-friends",               // String           Subscription Name (t:d -> target username)
  "rid": "25fkmHMDeFp57ZqYg",              // Random.id()      Room Id
  "f": true,                               // Boolean          Favorited
  "open": true,                            // Boolean          Is Room Opened
  "alert": true,                           // Boolean          Room has unread messages for this user
  "unread": 5,                             // Integer          Counter of unread messages with mentions or from direct messages
  "u": {                                   // Object           User
    "_id": "CABrXSHpDqbZXGkYR",            // Random.id()      User Id
    "username": "liam"                     // String           User Username
  },
  "v": {                                   // Object           Visitor
    "_id": "CABrXSHpDqbZXGkYR",            // Random.id()      Visitor Id
    "username": "anonymous"                // String           Visitor Username
  },
  "customFields": {                        // Object           User defined custom fields
     "userDefinedField": "userValue",      //                  User defined field example
     "userDefinedField2": true,            //                  User defined field example
     "userObject3": {                      //                  User defined field example
        "a": "hello",
        "b": "lalala"
     }
  }
}
```

### Fields

| Fields | Type | Description |
| :--- | :--- | :--- |
| \_id | Random.id\(\) | Subscriptions Id |
| t | String | Subscription Type \(copy from Room\) |
| ts | Date | Subscription Creation Timestamp |
| ls | Date | Last Seen Timestamp |
| name | String | Subscription Name \(t:d -&gt; target username\) |
| rid | Random.id\(\) | Room Id |
| f | Boolean | Favorited |
| open | Boolean | Is Room Opened |
| alert | Boolean | Room has unread messages for this user |
| unread | Integer | Counter of unread messages with mentions or from direct messages |
| u | Object | User |
| u.\_id | Random.id\(\) | User Id |
| u.username | String | User Username |
| v | Object | Visitor |
| v.\_id | Random.id\(\) | Visitor Id |
| v.username | String | Visitor Username |
| customFields | Object | User custom fields |

Notes about customFields:

* customFields inherits from room's customFields for channels \(Room Type: c = chanel\) and groups \(Room Type: p = group\) and changes with room's customFields
* customFields inherits from user's customFields for Direct Messages \(Room Type: d = direct\) and changes with user's customFields. Note that users of Direct Messages room will have own customFields.

### Indexes

| Fields | Options |
| :--- | :--- |
| rid, u.\_id | unique |
| u.\_id, name, t | unique |
| open |  |
| alert |  |
| unread |  |

## Messages

```javascript
{
  "_id": "22nytdn4QqKvSk2Av",              // Random.id()
  "t": "p",                                // String           Message Type
  "ts": new Date(1432937851208),           // Date             Message Creation Timestamp
  "rid": "25fkmHMDeFp57ZqYg",              // Random.id()      Room Id
  "msg": "Yeah, doesn't seem to like it",  // String           Message Body
  "url": [                                 // Array(String)    Message URLs
    "http://google.com/"
  ],
  "expireAt": new Date(1432937951208),     // Date             Message auto-delete trigger
  "mentions": [                            // Array(String)    Mentioned Usernames
    "username1"
  ],
  "u": {                                   // Object           User
    "_id": "CABrXSHpDqbZXGkYR",            // Random.id()      User Id
    "username": "john"                     // String           User Username
  },
  "v": {                                   // Object           Visitor
    "_id": "CABrXSHpDqbZXGkYR",            // Random.id()      Visitor Id
    "username": "anonymous"                // String           Visitor Username
  }
}
```

### Indexes

| Fields | Options |
| :--- | :--- |
| rid, ts |  |
| expireAt | expireAfterSeconds |

## Visitors

```javascript
{
  "_id": "22nytdn4QqKvSk2Av",              // Random.id()
  "name": "John",                          // String           Name
  "email": "a@d.com",                      // String           Email
  "phone": "555 876333443",                // String           Phone
  "token": "token"                         // String           Token
}
```

### Indexes

