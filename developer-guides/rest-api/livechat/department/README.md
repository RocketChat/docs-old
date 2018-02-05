# List departments

Get a list of departments.

| URL                           | Requires Auth | HTTP Method |
| :---------------------------- | :------------ | :---------- |
| `/api/v1/livechat/department` | `yes`         | `GET`       |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/livechat/department
```

## Example Result

```json
{
  "departments": [
    {
      "_id": "4swtja84kmn5WCdwL",
      "enabled": true,
      "name": "My Department",
      "description": "I have no description for this department",
      "numAgents": 1,
      "showOnRegistration": true,
      "_updatedAt": "2016-12-06T17:19:18.138Z"
    }
  ],
  "success": true
}
```

## Change Log

| Version | Description |
| :------ | :---------- |
| 0.42.0  | Added       |

## Register a new department

| URL                           | Requires Auth | HTTP Method |
| :---------------------------- | :------------ | :---------- |
| `/api/v1/livechat/department` | `yes`         | `POST`      |

## Example payload

```json
{
  "department": {
    "enabled": false,
    "showOnRegistration": true,
    "name": "new from api",
    "description": "created from api"
  },
  "agents": [{
    "agentId": "SQafHvoFPuB57NmBD",
    "username": "john.doe",
    "count": 0,
    "order": 0
  }]
}
```

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -X POST \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/livechat/department \
    -d '{"department": {"enabled": false, "showOnRegistration": true, "name": "new from api" }, "agents": [{ "agentId": "SQafHvoFPuB57NmBD", "username": "john.doe" }] }'
```

## Example Result

```json
{
  "department": {
    "enabled": false,
    "name": "new from api",
    "numAgents": 1,
    "showOnRegistration": true,
    "_updatedAt": "2016-12-13T17:22:19.109Z",
    "_id": "iTfLCX3qqwKgf5uqg"
  },
  "agents": [
    {
      "_id": "DDjZbhTF74n3NBuWK",
      "agentId": "SQafHvoFPuB57NmBD",
      "departmentId": "iTfLCX3qqwKgf5uqg",
      "username": "john.doe",
      "count": 0,
      "order": 0,
      "_updatedAt": "2016-12-13T17:22:19.169Z"
    }
  ],
  "success": true
}
```

## Change Log

| Version | Description |
| :------ | :---------- |
| 0.42.0  | Added       |

## Get info about a department

| URL                                | Requires Auth | HTTP Method |
| :--------------------------------- | :------------ | :---------- |
| `/api/v1/livechat/department/:_id` | `yes`         | `GET`       |

## Payload

| Argument | Example             | Required | Description           |
| :------- | :------------------ | :------- | :-------------------- |
| `_id`    | `SQafHvoFPuB57NmBD` | Required | The department `_id`. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/livechat/department/iTfLCX3qqwKgf5uqg
```

## Example Result

```json
{
  "department": {
    "_id": "iTfLCX3qqwKgf5uqg",
    "enabled": false,
    "name": "new from api",
    "description": null,
    "numAgents": 1,
    "showOnRegistration": true,
    "_updatedAt": "2016-12-13T17:22:19.109Z"
  },
  "agents": [
    {
      "_id": "DDjZbhTF74n3NBuWK",
      "agentId": "SQafHvoFPuB57NmBD",
      "departmentId": "iTfLCX3qqwKgf5uqg",
      "username": "john.doe",
      "count": 0,
      "order": 0,
      "_updatedAt": "2016-12-13T17:22:19.169Z"
    }
  ],
  "success": true
}
```

## Change Log

| Version | Description |
| :------ | :---------- |
| 0.42.0  | Added       |

## Update a department

| URL                                | Requires Auth | HTTP Method |
| :--------------------------------- | :------------ | :---------- |
| `/api/v1/livechat/department/:_id` | `yes`         | `PUT`       |

## Payload

| Argument | Example             | Required | Description       |
| :------- | :------------------ | :------- | :---------------- |
| `_id`    | `iTfLCX3qqwKgf5uqg` | Required | Department `_id`. |

## Example payload

```json
{
  "department": {
    "enabled": true,
    "showOnRegistration": true,
    "name": "new from api - live"
  },
  "agents": [{
    "agentId": "SQafHvoFPuB57NmBD",
    "username": "john.doe",
    "count": 0,
    "order": 0
  }]
}
```

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -X PUT \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/livechat/department/iTfLCX3qqwKgf5uqg \
    -d '{"department": {"enabled": true, "name": "new from api - live", "showOnRegistration": true}, "agents": [{"agentId": "SQafHvoFPuB57NmBD", "username": "john.doe"}] }'
```

## Example Result

```json
{
  "department": {
    "_id": "iTfLCX3qqwKgf5uqg",
    "enabled": true,
    "name": "new from api - live",
    "description": null,
    "numAgents": 1,
    "showOnRegistration": true,
    "_updatedAt": "2016-12-13T17:30:02.643Z"
  },
  "agents": [
    {
      "_id": "DDjZbhTF74n3NBuWK",
      "agentId": "SQafHvoFPuB57NmBD",
      "departmentId": "iTfLCX3qqwKgf5uqg",
      "username": "john.doe",
      "count": 0,
      "order": 0,
      "_updatedAt": "2016-12-13T17:30:02.656Z"
    }
  ],
  "success": true
}
```

## Change Log

| Version | Description |
| :------ | :---------- |
| 0.42.0  | Added       |

## Removes a department

| URL                                | Requires Auth | HTTP Method |
| :--------------------------------- | :------------ | :---------- |
| `/api/v1/livechat/department/:_id` | `yes`         | `DELETE`    |

## Payload

| Argument | Example             | Required | Description           |
| :------- | :------------------ | :------- | :-------------------- |
| `_id`    | `iTfLCX3qqwKgf5uqg` | Required | The department `_id`. |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -X DELETE \
     http://localhost:3000/api/v1/livechat/department/iTfLCX3qqwKgf5uqg
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
| 0.42.0  | Added       |
