# Extracting the APK from the device

Let’s now assume that the application is not available in the Google Play store. When an
application is already installed on the device:

1. The APK file of an installed application is stored in the directory
   **/data/app/\<package name\>-1/base.apk**.
2. To get the package name, use the command **`adb shell pm list packages | grep sampleapp`** since the app name is often part of the package name.
3. Once you have the package name, use the command **`adb shell pm path
   com.example.sampleapp`** to get the full path of the APK file.
4. Finally, retrieve the **base.apk** file using **`adb pull`**
   **/data/app/com.example.sampleapp-1/base.apk**.