# Dealing with Livechat realtime visitors

## Update visitor page count

| URL                               | Requires Auth | HTTP Method |
| :-------------------------------- | :------------ | :---------- |
| `/api/v1/livechat/session.updateVisitCount/:token` | `no`          | `POST`       |

## Payload

| Argument | Example             | Required | Description           |
| :------- | :------------------ | :------- | :-------------------- |
| `token`  | `mf32mhxtejtby4rf05gd` | Required | The visitor `token`.  |

## Example Call

```bash
curl -X POST http://localhost:3000/api/v1/livechat/session.updateVisitCount/mf32mhxtejtby4rf05gd
```

## Example Result

```json
{
  "updatedCount": 6,
  "success": true
}
```

## Change Log

| Version | Description |
| :------ | :---------- |
| 2.0.0  | Added       |

## Get visitor session Information

| URL                                  | Requires Auth | HTTP Method |
| :----------------------------------- | :------------ | :---------- |
| `/api/v1/livechat/session.visitorInfo/:token`           | `no`          | `GET`      |

## Payload

| Argument | Example             | Required | Description           |
| :------- | :------------------ | :------- | :-------------------- |
| `token`  | `mf32mhxtejtby4rf05gd` | Required | The visitor `token`.  |

## Example Call

```bash
curl http://localhost:3000/api/v1/livechat/session.visitorInfo/mf32mhxtejtby4rf05gd
```

## Example Result

```json
{
  "_id": "C4poFh5JMzDB59fpE",
  "token": "mf32mhxtejtby4rf05gd",
  "location": {
    "countryName": "India",
    "countryCode": "in",
    "city": "Bhubaneswar Municipal Corporation",
    "latitude": 20.295619066346568,
    "longitude": 85.74337739242868,
    "completLocation": "India, Odisha, Bhubaneswar Municipal Corporation"
  },
  "deviceInfo": {
    "os": "Macintosh",
    "osVersion": 10.14,
    "browserName": "Firefox",
    "browserVersion": 68
  },
  "createdAt": "2019-08-18T04:29:19.802Z",
  "count": 7,
  "_updatedAt": "2019-08-18T05:30:27.138Z",
  "chatStatus": "Closed",
  "status": "offline",
  "visitorInfo": {
    "name": "knrt10",
    "email": "areyouacop987@gmail.com"
  },
  "chatStart": false,
  "chatStartTime": "2019-08-18T04:29:47.967Z",
  "sentimentScore": 0,
  "offlineTime": "2019-08-18T04:29:52.571Z",
  "success": true
}
```

## Change Log

| Version | Description |
| :------ | :---------- |
| 2.0.0  | Added       |

## Add user location data

| URL                             | Requires Auth | HTTP Method |
| :------------------------------ | :------------ | :---------- |
| `/api/v1/livechat/session.addLocationData` | `no`          | `POST`      |

## Example payload

```json
{
  "token": "mf32mhxtejtby4rf05gd",
  "location": {
    "city": "Bhubanwswar",
    "countryCode": "IN", 
    "countryName": "India", 
    "latitude": 55.1232134, 
    "longitude": 77.2213 
  },
  "deviceInfo": {
    "os": "MacOS", 
    "osVersion": 10.54, 
    "browserName": "Mozila Firefox", 
    "browserVersion": 55.1232134 
  }
}
```

## Example Call

```bash
curl -X POST \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/livechat/session.addLocationData \
     -d '{"token": "mf32mhxtejtby4rf05gd", "location": {"city": "Bhubanwswar", "countryCode": "IN", "countryName": "India", "latitude": 55.1232134, "longitude": 77.2213 }, "deviceInfo": {"os": "MacOS", "osVersion": 10.54, "browserName": "Mozila Firefox", "browserVersion": 55.1232134 }}'
```

## Example Result

```json
{
  "success": true
}
```

## Change Log

| Version | Description |
| :------ | :---------- |
| 2.0.0  | Added       |

## Update visitor session information on register

| URL                             | Requires Auth | HTTP Method |
| :------------------------------ | :------------ | :---------- |
| `/api/v1/livechat/session.updateVisitorSessionOnRegister` | `no`          | `POST`      |

## Example payload

```json
{
  "visitor": {
    "name": "Livechat Visitor",
    "email": "visitor@rocket.chat",
    "token": "mf32mhxtejtby4rf05gd",
    "phone": "55 51 5555-5555",
    "customFields": [{
      "key": "address",
      "value": "Rocket.Chat street",
      "overwrite": true
    }]
  }
}
```

## Example Call

```bash
curl -X POST \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/livechat/session.updateVisitorSessionOnRegister \
     -d '{"visitor": {"name": "Livechat Visitor", "email": "visitor@rocket.chat", "token": "mf32mhxtejtby4rf05gd", "phone": "55 51 5555-5555", "customFields": [{ "key": "address", "value": "Rocket.Chat street", "overwrite": true }] }}'
```

## Example Result

```json
{
  "success": true
}
```

## Change Log

| Version | Description |
| :------ | :---------- |
| 2.0.0  | Added       |

## Update session status

| URL                             | Requires Auth | HTTP Method |
| :------------------------------ | :------------ | :---------- |
| `/api/v1/livechat/session.updateSessionStatus` | `no`          | `POST`      |

## Example payload

```json
{
  "token": "mf32mhxtejtby4rf05gd",
  "status": "online || away"
}
```

## Example Call

```bash
curl -X POST \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/livechat/session.updateVisitorSessionOnRegister \
     -d '{"token": "mf32mhxtejtby4rf05gd", "status": "online"}'
```

## Example Result

```json
{
  "token": "mf32mhxtejtby4rf05gd",
  "status": "online",
  "success": true
}
```

## Change Log

| Version | Description |
| :------ | :---------- |
| 2.0.0  | Added       |
