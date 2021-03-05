# Get Users of Room Without Key

This method returns all users of an encrypted room that don't yet have the E2E key on their subscription.

## Requirements

| Logged In | Permission | Setting |
| :--- | :--- | :--- |
| Yes | _none_ | _none_ |

## Payload

1. String - the id of the room to get the users from.

## Example Call

```javascript
{
    "msg": "method",
    "method": "e2e.getUsersOfRoomWithoutKey",
    "id": "8",
    "params": [
        "rid"
    ]
}
```

## Example Response

```javascript
{
    "msg": "result",
    "id": "8",
    "result": {
        "users":[{
            "_id":"AAoQ7b25AAXcJQryY",
            "e2e":{
                "public_key":"{\"alg\":\"RSA-OAEP-256\",\"e\":\"AQAB\",\"ext\":true,\"key_ops\":[\"encrypt\"],\"kty\":\"RSA\",\"n\":\"i6MWRdJU2Kh2NhNP5Ori3SlIlfEQL9h-dopNkMC_B84GsEINZv1LLrue7WxMaH72qq-y7mkX7DiwEFVEx6expJK1xrrSZ1XKr3CKnrJZxJmnPiegaE_0bYkRAH6uS_QM6wVv4Bt-Wl9JaKl9U2jSIpXz1rbDaT0STAc3ods4sBtIPcpNLFpvab_j0tBiRVWJxkCRU4MOYdsGGrdTj86uut1AOuPdfzfHdisHIum_CHdRrjFVWTQAjZ7lzOa9oknc-7gWBdpEq09x1L_zianJO7iLtf6VcyFH6xJNKrt99r6c6bpi9I-MVoT4zQskcmGIFX7lqclZHk03gwGqXw5nyQ\"}"
            }
        },{
            "_id":"wAdMMfMhp7KBiKjuz",
            "e2e":{
                "public_key":"{\"alg\":\"RSA-OAEP-256\",\"e\":\"AQAB\",\"ext\":true,\"key_ops\":[\"encrypt\"],\"kty\":\"RSA\",\"n\":\"ykbtB7JiIQHReyeYlPIbpelHVhKCHDruzfPb4FF0n_NNDMBMjxJQr4lplfNroxHvhZYoWdvfRIjdR183vmperTrClvyS2oR1_mh7jjLsvAyqfl9Bw3SaHbIL8eIBRqD1A_7VDR3PNbRIafoYHPHooqqLw-VVUml53UZdKnY5cZXnlWGOI0FZk_XZgZqTmlVBPeLOuMuGDCiSjpVd2G19A3MBH7zs80jTelWiSRgjE5qmRIKUYP8i0F65BWi6gDNyQgPneALVLZ6b-c32_4u09mwyDfq3Jus_WVyG3bkuPMShIvyQo-KvzQDSJXp7xZ3tLUhI3VbuYuozQSl8WCv6GQ\"}"
            }
        }]
    }
}
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.70.0 | Added |

