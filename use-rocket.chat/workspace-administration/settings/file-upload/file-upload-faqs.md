# File Upload FAQs

<details>

<summary>Why am I getting the "Request Entity Too Large" error on file upload?</summary>

The error shown below is when the upload limit is less than the size of the file in rocket.chat.

<img src="../../../../.gitbook/assets/image (286).png" alt="" data-size="original">

If you are using nginx as your load balancer, it could be nginx limit that is throwing the following error not your rocket.chat limit.

<img src="../../../../.gitbook/assets/image (289) (1).png" alt="" data-size="original">

Please follow the nginx instructions [here](https://www.cyberciti.biz/faq/linux-unix-bsd-nginx-413-request-entity-too-large/) to resolve this issue.

</details>
