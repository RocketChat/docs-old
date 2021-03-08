# Get Public Settings

This method is used to retrieve the public settings, such as Site Name. It accepts a timestamp as the first and only parameter which causes the results to be an object that contains the updated and removed settings after the provided time. If you want to retrieve all of the public settings, just omit the parameter.

## Example call to retrieve everything

```javascript
{
    "msg": "method",
    "method": "public-settings/get",
    "id": "42"
}
```

## Response

The `_id` value is id of the setting and is how it should be referenced. The `value` is exactly what the name describes, the value of the setting.

```javascript
{
    "msg": "result",
    "id": "42",
    "result": [
        {
            "_id": "uniqueID",
            "value": "z3cDS83TYjCfHatrf"
        }, {
            "_id": "Accounts_AllowDeleteOwnAccount",
            "value": false
        },
        ...
    ]
}
```

## Example call to retrieve the updated and removed ones since the provided date

```javascript
{
    "msg": "method",
    "method": "public-settings/get",
    "id": "42",
    "params": [ { "$date": 1480377601 } ]
}
```

## Response

The `_id` value is id of the setting and is how it should be referenced. The `value` is exactly what the name describes, the value of the setting.

```javascript
{
    "msg": "result",
    "id": "42",
    "result": {
        "update": [
            {
                "_id": "uniqueID",
                "value": "z3cDS83TYjCfHatrf"
            }, {
                "_id": "Accounts_AllowDeleteOwnAccount",
                "value": true
            },
            ...
        ],
        "remove": [
            {
                "_id": "somethingElse",
                "value": "valueRemoved"
            }, {
                "_id": "OldSomething",
                "value": false
            },
            ...
        ]
    }
}
```

