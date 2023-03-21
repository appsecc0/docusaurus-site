Static analysis involves analysing an application’s code, resources, and configuration files
without executing the application. This type of analysis is typically performed by analyzing
the application’s source code or its compiled binary file (APK) using tools like APKtool,
dex2jar. The goal of static analysis is to identify potential vulnerabilities in the code, such as
insecure coding practices, data leakage, or hard-coded credentials.

**Android Package (APK)**
The Android Package (APK) file is a compressed archive file that contains all the files
needed to run an Android application on an Android device. The APK file is essentially a ZIP
file that contains several components, including:

1. **AndroidManifest.xml:** This file contains information about the application, including
   its package name, version number, required permissions, and components such as
   activities, services, and broadcast receivers.
2. Classes.dex: This file contains the compiled Java bytecode for the application’s
   classes, which are executed by the Android Runtime (ART).
3. **Resources.arsc:** This file contains compiled resources such as strings, images, and
   layouts that are used by the application.
4. **lib/:** This folder contains compiled native code libraries for specific device
   architectures, such as ARM or x86.
5. **META-INF/:** This folder contains the manifest file, the certificate of the APK
   signature, and a list of all the files in the APK, along with their checksums.
6. **assets/:** This folder contains additional application data files, such as sound and video
   files, that are not compiled into the APK.
7. **res/:** This folder contains the application resources, such as layouts, strings, and
   images, in their original format before being compiled into the Resources.arsc file.
8. **Android System Files:** This folder contains system-level files such as the Android
   runtime, framework libraries, and system components that the application may use.