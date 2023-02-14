# HashDurableChoreography

HashDurableChoreography code is an example of hash table distributed-based. It is used as a service to compute hashes and MD5 of any password using HTTP POST requests.

\*\* Note that a while loop has been added to make the computation spends more time. It is for educational proposes only: in the example we use the top 10 more-used password.

## Dependencies

- Needs Azurite or Azure Storage configuration to works
- Needs Azure Core Tools to be running locally

## How to use: HTTP POST

```sh
curl --location --request POST 'http://localhost:7071/api/orchestrators/hash-orchestrator' \
--header 'Content-Type: application/json' \
--data-raw '[
    "123456",
    "123456789",
    "qwerty",
    "password",
    "12345",
    "qwerty123",
    "1q2w3e",
    "12345678",
    "111111",
    "1234567890"
]'
```

## Expected response

```sh
{
    "name": "hash-orchestrator",
    "instanceId": "7e34b009333549f6b702dde97e74a2c5",
    "runtimeStatus": "Completed",
    "input": ["123456","123456789","qwerty","password","12345","qwerty123","1q2w3e","12345678","111111","1234567890"],
    "customStatus": null,
    "output": [
        {"text":"123456","sha1":"d380168c4904d4fd73ba5579ed96c236bd332580","md5":"FMj2apQbAa7A+BYFZZtFCg=="},
        {"text":"123456789","sha1":"6b1d734b41163d21437d745ddcc455774871912e","md5":"hWxCcrzP5aLuTWwr3uT55g=="},
        {"text":"qwerty","sha1":"0e87eaad76f3ef1dc19b2ae7b885ea7dc1c9f256","md5":"KXuqt2q6OJ0KwIJQrl7yTw=="},
        {"text":"password","sha1":"135be41b841c9ed446b0bf4ec1a7a2ee29ebd7f4","md5":"kvXgechIJt4KnCQdbMVrzw=="},
        {"text":"12345","sha1":"24d16f92cbfb5e813cff1f3d980b0ca13c23a066","md5":"LGEs/nroylkSkPALsVhpVg=="},
        {"text":"qwerty123","sha1":"dea893bb9ad952bc66e5bb7b82358cd79d89f8d4","md5":"zQRCWMTGxiKJRF9qphCYQw=="},
        {"text":"1q2w3e","sha1":"0352c60cefff828b6dbd13b0628f6fac8a12dc62","md5":"M6Rx/avkN0sXTA7Gr0c4IQ=="},
        {"text":"12345678","sha1":"07710ba7ff7fdcc7c052369c89408887d7a8f909","md5":"j5HaC0zr0fnJq5NZPJOUxQ=="},
        {"text":"111111","sha1":"74a9ba52fcc5d17d5ab366fdc68a8b62bd0004b5","md5":"c4zHmhUld9J225thELZC5g=="},
        {"text":"1234567890","sha1":"2ca54e49897ca54b49c7d6bef4793d209b285dd5","md5":"wO5/WiFFnqsAC1Mn+TTYLg=="}
    ],
    "createdTime": "2023-02-14T15:22:02Z",
    "lastUpdatedTime": "2023-02-14T15:23:43Z"
}
```
