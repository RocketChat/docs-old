# Set User Public and Private Keys

This method changes the user private and public keys on the server.

## Requirements

| Logged In | Permission | Setting |
| :--- | :--- | :--- |
| Yes | _none_ | _none_ |

## Payload

1. Object - An object containing the `private_key` and `public_key` attributes, both of them Strings.

## Example Call

```javascript
{
    "msg": "method",
    "method": "e2e.setUserPublicAndPivateKeys",
    "id": "8",
    "params": [{
        "public_key":"{\"alg\":\"RSA-OAEP-256\",\"e\":\"AQAB\",\"ext\":true,\"key_ops\":[\"encrypt\"],\"kty\":\"RSA\",\"n\":\"i6MWRdJU2Kh2NhNP5Ori3SlIlfEQL9h-dopNkMC_B84GsEINZv1LLrue7WxMaH72qq-y7mkX7DiwEFVEx6expJK1xrrSZ1XKr3CKnrJZxJmnPiegaE_0bYkRAH6uS_QM6wVv4Bt-Wl9JaKl9U2jSIpXz1rbDaT0STAc3ods4sBtIPcpNLFpvab_j0tBiRVWJxkCRU4MOYdsGGrdTj86uut1AOuPdfzfHdisHIum_CHdRrjFVWTQAjZ7lzOa9oknc-7gWBdpEq09x1L_zianJO7iLtf6VcyFH6xJNKrt99r6c6bpi9I-MVoT4zQskcmGIFX7lqclZHk03gwGqXw5nyQ\"}",
        "private_key":"{\"$binary\":\"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\"}"
    }]
}
```

## Example Response

```javascript
{
    "msg": "result",
    "id": "8"
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.70.0 | Added |

