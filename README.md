# Android Mobile Automation

## Prerequisites

- Node.js 22, 24, or 26+ with npm.
- JDK with `JAVA_HOME` set, Android SDK with `ANDROID_HOME` set, and `adb` on PATH.
- An unlocked Android emulator or USB device with USB debugging enabled.
- Appium 2.19.0 with the UiAutomator2 4.2.5 driver. The sample app APK is included in this folder.

## How to run

From this project folder, install and start Appium:

```powershell
npm install --global appium@2.19.0
appium driver install uiautomator2@4.2.5
adb devices -l
appium --address 127.0.0.1 --port 4723
```

Keep Appium running. In a second terminal, run:

```powershell
npm ci
npm run check
npm test
```

## Generate report

After a test run, generate and open the Allure report:

```powershell
npm run report:generate
npm run report:open
```
