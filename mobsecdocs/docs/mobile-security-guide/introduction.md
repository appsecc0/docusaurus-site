---
sidebar_position: 1
---

# Introduction

Android pentesting is the process of evaluating the security of an Android application by
identifying its vulnerabilities and weaknesses. It involves analysing the application’s source
code, binary files, and network traffic to find security flaws. There are mainly 2 parts Static
and Dynamic analysis.

Static analysis involves examining an application’s code and configuration files without
executing it, while dynamic analysis involves testing the application in a running state to
observe its behaviour and interactions. Both approaches are important for testing the security
of an Android application.

Table of contents

1. **Setting up the testing environment**
   **a. Emulators**
   **b. How to install and access the application**
   **c. Useful adb commands**
   **d. Extracting the APK from the device**
2. **Static Analysis**
   **a. Reverse Engineering**
   **i. DEX → JAR → JAVA**
   **ii. APK → JAVA**
   **iii. What to check in the code**
   **b. Decompiling and Recompiling**
   **i. APK Tool**
   **c. Manifest file analysis**
3. **Dynamic Analysis**
   **a. Setting up the proxy**
   **i. Configure the Burp Proxy listener**
   **ii. Configure your device to use the proxy**
   **iii. Install a CA certificate on your Android device**
   **iv. Test the configuration / Intercept the traffic.**
4. **Local Data Storage Enumeration**
5. **Open-Source Frameworks**
6. **References**