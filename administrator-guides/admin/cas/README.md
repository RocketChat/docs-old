# CAS

### SSO Base URL

_FILL HERE_

> The base URL of your external SSO service e.g: https://sso.example.undef/sso/


### Enabled

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### SSO Login URL

_FILL HERE_

> The login URL of your external SSO service e.g: https://sso.example.undef/sso/login


### CAS Version

- **1.0**: _FILL HERE_
- **2.0**: _FILL HERE_

> Only use a supported CAS version supported by your CAS SSO service.


## Attribute handling


### Always Sync User Data

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_

> Always synchronize external CAS User data into available attributes upon login. Note: Attributes are always synced upon account creation anyway.


### Attribute Map

_FILL HERE_

> Use this JSON input to build internal attributes (key) from external attributes (value). External attribute names enclosed with '%' will interpolated in value strings.<br/>Example, `{"email":"%email%", "name":"%firstname%, %lastname%"}`<br/><br/>The attribute map is always interpolated. In CAS 1.0 only the `username` attribute is available. Available internal attributes are: username, name, email, rooms; rooms is a comma separated list of rooms to join upon user creation e.g: {"rooms": "%team%,%department%"} would join CAS users on creation to their team and department channel.


## CAS Login Layout


### Autoclose Login Popup

- **Yes**: _FILL HERE_
- **No**: _FILL HERE_


### Login Button Background Color

_FILL HERE_


### Login Button Text Color

_FILL HERE_


### Login Button Label

_FILL HERE_


### Login Popup Height

_FILL HERE_


### Login Popup Width

_FILL HERE_

