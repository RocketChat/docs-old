---
order: 3
---

# Schema Definition

## Rooms

```js
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
  }
}
```

### Fields

Fields          | Type               | Description              
:-------------- | :----------------- | :------------------------
_id             | Random.id()        | Room Id                  
t               | String             | Room Type                
ts              | Date               | Room Creation Timestamp  
name            | String             | Room Name (t:d -> empty) 
lm              | Date               | Last Message Timestamp   
msgs            | Integer            | Messages Counter         
cl              | Boolean            | If users can leave room  
ro              | Boolean            | Read Only  
usernames       | Array[String]      | Room Users               
usernames.0     | String             | User Username            
u               | Object             | Owner User               
u._id           | Random.id()        | User Id                  
u.username      | String             | User Username            

### Indexes

Fields          | Options           
:-------------- | :-----------------
name            | unique, sparce    
u._id           |                   

## Subscriptions

```js
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
  }
}
```

### Fields

Fields          | Type               | Description                                                       
:-------------- | :----------------- | :-----------------------------------------------------------------
_id             | Random.id()        | Subscriptions Id                                                  
t               | String             | Subscription Type (copy from Room)                                
ts              | Date               | Subscription Creation Timestamp                                   
ls              | Date               | Last Seen Timestamp                                               
name            | String             | Subscription Name (t:d -> target username)                        
rid             | Random.id()        | Room Id                                                           
f               | Boolean            | Favorited                                                         
open            | Boolean            | Is Room Opened                                                    
alert           | Boolean            | Room has unread messages for this user                            
unread          | Integer            | Counter of unread messages with mentions or from direct messages  
u               | Object             | User                                                              
u._id           | Random.id()        | User Id                                                           
u.username      | String             | User Username                                                     
v               | Object             | Visitor                                                           
v._id           | Random.id()        | Visitor Id                                                        
v.username      | String             | Visitor Username                                                  

### Indexes

Fields          | Options           
:-------------- | :-----------------
rid, u._id      | unique            
u._id, name, t  | unique            
open            |                   
alert           |                   
unread          |                   

## Messages

```js
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

Fields          | Options           
:-------------- | :-----------------
rid, ts         |                   
expireAt        | expireAfterSeconds


## Visitors

```js
{
  "_id": "22nytdn4QqKvSk2Av",              // Random.id()
  "name": "John",                          // String           Name
  "email": "a@d.com",                      // String           Email
  "phone": "555 876333443",                // String           Phone
  "token": "token"                         // String           Token
}
```

### Indexes
