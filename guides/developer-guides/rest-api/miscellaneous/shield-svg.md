# Shield SVG

A simple method, requires no authentication, that returns the shield svg\(badge\) to add in your website. It must have `API_Enable_Shields` enabled.

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- |
| `/api/v1/shield.svg` | `no` | `GET` |

## Query Parameters

| Argument | Example | Required | Description |
| :--- | :--- | :--- | :--- |
| `type` | `online` | Optional | Can be one of `online`, `user`, `channel` |
| `icon` | `false` | Optional |  |
| `channel` | `general` | Optional | Name of the channel |
| `name` | `Rocket.Chat` | Optional | Name to show |

## Example Call

```bash
curl http://localhost:3000/api/v1/shield.svg
```

## Example Result

### Headers

`Content-Type`: `image/svg+xml;charset=utf-8`

### Body

```text
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="141" height="20">
    <linearGradient id="b" x2="0" y2="100%">
        <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
        <stop offset="1" stop-opacity=".1"/>
    </linearGradient>
    <mask id="a">
        <rect width="141" height="20" rx="3" fill="#fff"/>
    </mask>
    <g mask="url(#a)">
        <path fill="#555" d="M0 0h67v20H0z"/>
        <path fill="#4c1" d="M67 0h74v20H67z"/>
        <path fill="url(#b)" d="M0 0h141v20H0z"/>
    </g>
    <image x="5" y="3" width="14" height="14" xlink:href="/assets/favicon.svg"/>
        <g fill="#fff" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
            <text x="24" y="15" fill="#010101" fill-opacity=".3">Rocket</text>
            <text x="24" y="14">Rocket</text>
            <text x="74" y="15" fill="#010101" fill-opacity=".3">JOIN CHAT</text>
            <text x="74" y="14">JOIN CHAT</text>
        </g>
</svg>
```

## Change Log

| Version | Description |
| :--- | :--- |
| 0.55.0 | Added |

