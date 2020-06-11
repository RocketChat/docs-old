# Fetch My Keys

This method returns the user's private and public keys stored on the server.

## Requirements

| Logged In | Permission | Setting |
| :--- | :--- | :--- |
| Yes | _none_ | _none_ |

## Example Call

```javascript
{
    "msg": "method",
    "method": "e2e.fetchMyKeys",
    "id": "8",
    "params": []
}
```

## Example Response

```javascript
{
    "msg": "result",
    "id": "8",
    "result": {
        "public_key": "{\"alg\":\"RSA-OAEP-256\",\"e\":\"AQAB\",\"ext\":true,\"key_ops\":[\"encrypt\"],\"kty\":\"RSA\",\"n\":\"ykbtB7JiIQHReyeYlPIbpelHVhKCHDruzfPb4FF0n_NNDMBMjxJQr4lplfNroxHvhZYoWdvfRIjdR183vmperTrClvyS2oR1_mh7jjLsvAyqfl9Bw3SaHbIL8eIBRqD1A_7VDR3PNbRIafoYHPHooqqLw-VVUml53UZdKnY5cZXnlWGOI0FZk_XZgZqTmlVBPeLOuMuGDCiSjpVd2G19A3MBH7zs80jTelWiSRgjE5qmRIKUYP8i0F65BWi6gDNyQgPneALVLZ6b-c32_4u09mwyDfq3Jus_WVyG3bkuPMShIvyQo-KvzQDSJXp7xZ3tLUhI3VbuYuozQSl8WCv6GQ\"}",
        "private_key": "{\"$binary\":\"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\"}"
    }
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.70.0 | Added |

