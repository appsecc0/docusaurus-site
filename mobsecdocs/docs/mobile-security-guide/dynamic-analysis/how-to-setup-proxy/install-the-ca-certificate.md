# Install a CA certificate on your Android device

In order to interact with HTTPS traffic, you need to install a CA certificate from Burp Suite
Professional on your Android device.

**To download the CA certificate**

1. In your Android device, Open any browser and Enter [http://burp](http://burp)
2. Click on the CA certificate
3. cacert.der is available for download
4. rename the file as cacert.cer
5. Click on Download

![](../../img/beginners-guide-for-android-testing/20.jpg)
![](../../img/beginners-guide-for-android-testing/21.jpg)

**To install the CA certificate**

1. In your Android device, go to **Settings > Network & internet**.
2. Click on the 3 dots in the upper right corner and select Advanced
3. Select Install Certificates from Advanced Wi-Fi
4. Select the downloaded cacert.cer file
5. Enter a name to the certificate and click on OK
6. Certificate installed successfully

![](../../img/beginners-guide-for-android-testing/22.jpg)
![](../../img/beginners-guide-for-android-testing/23.jpg)
![](../../img/beginners-guide-for-android-testing/24.jpg)

Depending upon the android version and device version there are multiple methods to install
the CA certificate. Please refer the below links if this method not worked for your version.

- [External link: Installing a CA certificate on your Android device.](https://blog.ropnop.com/configuring-burp-suite-with-android-nougat)
- [https://blog.yarsalabs.com/setting-up-burp-for-android-application-testing/](https://blog.yarsalabs.com/setting-up-burp-for-android-application-testing/)
- [External link: Configuration for a Chrome browser at version 99 or above.](https://httptoolkit.tech/blog/chrome-android-certificate-transparency)