# Mitigations

- Rather than relying on hard-coded X509 certificate implement a self-created specific API
    created for client and server validation. The certificate information must be passed to-and-
    fro by API based calls. The API parameter value must be encoded with salted hash and
    verified on server-end.
- SafetyNet API calls proves to be a better alternative to conventional hard-coded X
    certificate with checkClientTrusted and checkServerTrusted./; ,
- Mostly implementation of Two-way SSL is complex, so if we can prevent the modification or
    reverse engineering of android application that would basically avoid the SSL Pinning bypass
    using reverse engineering or Hooking method.