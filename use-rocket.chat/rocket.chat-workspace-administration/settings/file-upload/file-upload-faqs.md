# File Upload FAQs

## Why am I getting the "**Request Entity Too Large"** error on file upload?

The error shown below is when the upload limit is less than the size of the file in rocket.chat.

![](<../../../../.gitbook/assets/image (286).png>)

If you are using nginx as your load balancer, it could be nginx limit that is throwing the following error not your rocket.chat limit.

![](<../../../../.gitbook/assets/image (289) (1) (1).png>)

Please follow the nginx instructions [here](https://www.cyberciti.biz/faq/linux-unix-bsd-nginx-413-request-entity-too-large/) to resolve this issue.
