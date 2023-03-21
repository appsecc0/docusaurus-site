---
sidebar_position: 3
---

# What to check in the code?

1. Cryptography: Look for any use of encryption algorithms and verify that they are
   implemented correctly. Check for any hardcoded keys, weak encryption methods, or
   use of insecure cryptographic algorithms.
2. Code Obfuscation: Check for obfuscation techniques used to hide the code and make
   it difficult to understand. Obfuscation techniques make it harder for reverse
   engineering, but it can also hide any malicious code.
3. API Usage: Verify that the application does not use any insecure APIs or APIs with
   known vulnerabilities. Look for any APIs that allow unauthorized access or data
   leakage.
4. Reflection: Check for reflection, a feature that allows dynamic code execution. Verify
   that reflection is not used in a way that can allow an attacker to inject malicious code.
5. Dynamic Code Loading: Check for dynamic code loading, a feature that allows an
   application to load code at runtime. Verify that the application does not load code
   from untrusted sources or execute any code that is not verified.
6. Access Control: Verify that the application has implemented proper access control to
   sensitive functionality and data. Look for any hardcoded credentials or access tokens.
7. Hardcoded sensitive information: Check for any insecure storage of sensitive data
   such as passwords, user credentials, or personal information. Search for hardcoded
   database (SQL queries), password, keys, sensitive information, URLs.
8. External Libraries: Verify that the application does not use any insecure third-party
   libraries or libraries with known vulnerabilities.
9. Integrity Checks: Look for any integrity checks that the application performs to
   ensure that the code has not been tampered with.
10. Native Code: If the application uses native code, verify that the native code is
    compiled securely and does not contain any vulnerabilities.
11. Web view related checks:
    **setJavaScriptEnabled()** : This method enables or disables the use of JavaScript in
    a web view. If this method is set to true, the web view can execute JavaScript code,
    which can be used to manipulate the web page or to communicate with the native
    Android code. However, if the application does not properly validate the input data
    sent to the web view, it could allow an attacker to inject malicious JavaScript code.
    **setAllowFileAccess()** : This method allows or denies access to local files in the
    device file system from the web view. If this method is set to true, the web view can
    access local files, which can be useful for displaying local HTML files or accessing
    data stored in the device file system. However, if the application does not properly
    validate the input data sent to the web view, it could allow an attacker to access or
    modify local files.
    **addJavascriptInterface()** : This method allows JavaScript code in the web view
    to access the native Android code by exposing a Java object to JavaScript. This
    feature can be used to provide additional functionality or to interact with the native
    Android code. However, if the application does not properly validate the input data
    sent to the web view, it could allow an attacker to execute arbitrary Java code.
    **runtime.exec()** : This method is used to execute shell commands on the device. If an
    attacker can inject malicious input data into a web view and exploit an application
    vulnerability, it could allow the attacker to execute arbitrary shell commands on the
    device.
12. Root Detection Implementation details
13. SSL Pinning Implementation details