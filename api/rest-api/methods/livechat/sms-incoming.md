# SMS Incoming

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/livechat/sms-incoming/:service` | `no` | `POST` |

## Payload

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `service` | `twilio` | Required | Only the server `twilio` is accepted at moment. |

## Twilio payload

```javascript
{
  "From": "5551123456789",
  "To": "5551987654321",
  "Body": "SMS message",
  "ToCountry": "Brazil",
  "ToState": "RS",
  "ToCity": "Porto Alegre",
  "ToZip": "",
  "FromCountry": "Brazil",
  "FromState": "RS",
  "FromCity": "Porto Alegre",
  "FromZip": ""
}
```

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -X POST \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/livechat/sms-incoming/twilio \
    -d '{"From": "5551123456789", "To": "5551987654321", "Body": "SMS message", "ToCountry": "Brazil", "ToState": "RS", "ToCity": "Porto Alegre", "ToZip": "", "FromCountry": "Brazil", "FromState": "RS", "FromCity": "Porto Alegre", "FromZip": ""}'
```

## Result to Twilio

```markup
<Response></Response>
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.42.0 | Added |

