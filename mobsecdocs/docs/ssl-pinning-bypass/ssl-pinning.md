---
sidebar_position: 1
---

# SSL Pinning Introduction

## What is SSL Pinning?

- SSL pinning allows the application to only trust the valid or pre-defined certificate or Public
    Key.
- The application developer uses SSL pinning technique as an additional security layer for
    application traffic.
- As normally, application trusts custom certificate and allows application to
    intercept the traffic.
- But in the SSL Pinning implementation, application does not trust custom certificates and
    does not allow proxy tools to intercept the
    traffic..added to test!!!

### Why SSL Pinning?

SSL Pinning helps to create a secure environment for data communication between the client
machine and the server. But would technically fail, if the host gets compromised. SSL pinning
helps to safeguard the client system as well the server by preventing the traffic from being
snooped, figuring out the API and revealing the security bugs.

### Ways to implement SSL Pinning.

- **Certificate Pinning** :- In certificate pinning , the developer hardcodes some bytecode of SSL
    certificate into application code. When the application communicates with the server, it
    checks whether the same bytecode is present in a certificate or not. If it is present, the
    application sends a request to the server. If the bytecode does not match it will throw an SSL
    certificate error. This technique prevents an attacker to use his/her own self-signed
    certificate.
- **Public Key Pinning** :- In public key pinning when a customer visits a website, the server pins
    (by way of injecting it) its public key in client (customer’s) browser. When the client revisits
    the same website, the server identifies its public key to check the integrity of the
    connection. This technique also prevents an attacker from using his/her self-signed
    certificate.

## How to check whether SSL pinning is implemented or not?

An app that uses SSL certificate pinning or public key pinning should fail to communicate with
the server when you place a proxy in between the mobile device and the server it communicates
with (because it would receive ssl split's certificate instead of the server's in the certificate
chain).
