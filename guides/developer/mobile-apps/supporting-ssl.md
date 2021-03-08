# Supporting SSL for development on Rocket.Chat

If you are working with mobile apps, it is required that your server supports SSL.

Rocket.Chat is a "middle-tier application server", by itself it does not handle SSL. However, Rocket.Chat works well with several industrial grade, battle-tested, reverse proxy servers that you can configure to handle SSL.

**You should find yourself in one of the two situations:**

* The Rocket.Chat server is publicly accessible on the internet.
* The Rocket.Chat server is not accessible on the internet.

This doc has been broken down into two separate sections, walking you through either of the camps you might find yourself in.

## The Rocket.Chat server is publicly accessible on the internet

If your server is publicly accessible, it is recommended that you use a service like [Let's Encrypt](https://letsencrypt.org/) to obtain your SSL certificates. A detailed guide for configuring your choice of SSL Reverse proxy servers is provided here: [Configuring SSL Reverse Proxy](https://docs.rocket.chat/installation/manual-installation/configuring-ssl-reverse-proxy/)

**If you are using Ubuntu**, this can be configured automatically with the help of Snaps. A guide for which is provided here: [Installing Rocket.Chat on Ubuntu with Snaps](https://docs.rocket.chat/installation/manual-installation/ubuntu/snaps/)

## The Rocket.Chat server is not accessible on the internet

If your server is not accessible on the internet, you will need to provide self signed certificates to configure SSL on the server.

In this doc, we will be creating a self signed root certificate and using it to generate our SSL certificates. The steps written below have been adapted from [Self Signed Certificate with Custom Root CA](https://gist.github.com/fntlnz/cf14feb5a46b2eda428e000157447309)

## Step 1: Create Root CA

### Create Root Key

**Attention**: This is the key used to sign the certificate requests, anyone holding this can sign certificates on your behalf. So keep it in a safe place!

```text
openssl genrsa -des3 -out Rocket.Chat-root.key 4096
```

If you want a non password protected key just remove the `-des3` option

### Create and self sign the Root Certificate

```text
openssl req -x509 -new -nodes -key Rocket.Chat-root.key -sha256 -days 1024 -out Rocket.Chat-root.crt
```

Here we used our root key to create the root certificate that needs to be distributed in all the computers that have to trust us.

**NOTE:** It is **not recommended** that you distribute this root certificate in production. A breach of the above-generated key will open every device that trusts your root certificate to _**potential security threats**_.

## Step 2: Create an SSL certificate

### Create the certificate key

```text
openssl genrsa -out mydomain.com.key 2048
```

Here, mydomain.com should be replaced with your IP address \([Bonjour](https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/NetServices/Articles/about.html#//apple_ref/doc/uid/TP40002458-SW1) local domains work as well!\)

### Create the certificate signing request

**Important:** Please mind that while creating the certificate signing request is important to specify the `Common Name` providing the IP address or URL for the service, otherwise the certificate cannot be verified.

```text
openssl req -new -key mydomain.com.key -out mydomain.com.csr
```

### Generate the SSL certificate

Here, we are using the `mydomain.com` CSR along with the `Rocket.Chat-root` CA.

```text
openssl x509 -req -in mydomain.com.csr -CA Rocket.Chat-root.crt -CAkey Rocket.Chat-root.key -CAcreateserial -out mydomain.com.crt -days 365 -sha256
```

## Step 3: Configuring SSL for Rocket.Chat

The `mydomain.com.crt` and `mydomain.com.key` files generated above will be used as the certificate and the private key to configure SSL.

A detailed guide for configuring your choice of SSL Reverse proxy servers is provided here: [Configuring SSL Reverse Proxy](https://docs.rocket.chat/installation/manual-installation/configuring-ssl-reverse-proxy/)

## Step 4: Trusting Certificate Authority

All the devices that need to communicate with the server during development, need to trust the root certificate we generated in `Step 1` \(`Rocket.Chat-root.crt`\)

* For Apple devices follow the instructions here: [HTTPS and Test Servers](https://developer.apple.com/library/content/qa/qa1948/_index.html#//apple_ref/doc/uid/DTS40017603-CH1-SECINSTALLING)
* For Android devices follow the link [Add & remove certificates](https://support.google.com/nexus/answer/2844832?hl=en), and scroll down to "Work with CA certificates \(trusted credentials\)".

_Installation instructions for other operating systems can be easily found online._

On successful installation of the root certificate, the device should be able to access Rocket.Chat over SSL.

## Troubleshooting

If your device is not able to connect over SSL, please make sure that the URL has `https://` explicitly typed out before it.

