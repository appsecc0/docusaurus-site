---
sidebar_position: 3
---

# Manifest File Analysis

Open **`AndroidManifest.xml`** using any text editor

Here we check for:-

- **Permissions:** Check if the application requests any sensitive permissions like camera,
  microphone, location, SMS, or call logs. If the app is requesting unnecessary
  permissions, it could be a red flag for privacy violations or potential security risks.
- **Components:** Android components like activities, services, receivers, and providers
  can be exploited by attackers to gain unauthorized access or to launch attacks. Check
  if any of the components are exposed to other applications or if they are exported with
  overly permissive access.
  android:exported: The default value of the attribute is true. (should be set to false)
- **Intents:** Intents are messages used by different Android components to communicate
  with each other. They can be used to launch activities, services, or broadcast
  messages. Check if the app is using any implicit intents that could be intercepted or
  manipulated by attackers.
- **Allow debugable: true** — Without a rooted phone it is possible to extract the data or
  run an arbitrary code using application permission (Should be false) The default value
  is “false”
- **Allow backup: true** — The default value of this attribute is true. This setting defines
  whether application data can be backed up and restored by a user who has enabled usb
  debugging.(Should be false)
- **Application information:** Check if the application has any hard-coded credentials,
  sensitive information, or debugging features that could be exploited by attackers.
- **Malware signatures:** Check if the application has any malware signatures that could
  indicate that the app is malicious or potentially harmful.
- **Target SDK version:** Check if the app is targeting an older version of the Android
  SDK. If the app is not targeting the latest version, it could be vulnerable to known
  security vulnerabilities.

**NOTE: All the permissions that the application requests should be reviewed to ensure that they don’t introduce a security risk.**