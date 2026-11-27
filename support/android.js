import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { remote } from 'webdriverio';

export async function startAndroidSession() {
  const apk = process.env.APP_APK
    ? resolve(process.env.APP_APK)
    : fileURLToPath(new URL('../Android.SauceLabs.Mobile.Sample.app.2.5.0.apk', import.meta.url));
  assert.ok(existsSync(apk), `APK not found at ${apk}. Download v2.5.0 or set APP_APK (see README).`);

  return remote({
    hostname: '127.0.0.1',
    port: 4723,
    path: '/',
    logLevel: 'error',
    connectionRetryCount: 0,
    connectionRetryTimeout: 120000,
    capabilities: {
      platformName: 'Android',
      'appium:automationName': 'UiAutomator2',
      'appium:app': apk,
      'appium:appWaitActivity': 'com.swaglabsmobileapp.MainActivity',
      'appium:appWaitDuration': 60000,
      'appium:adbExecTimeout': 60000,
      'appium:noReset': false,
      'appium:enforceAppInstall': true,
      'appium:language': 'en',
      'appium:locale': 'US',
      ...(process.env.ANDROID_SERIAL ? { 'appium:udid': process.env.ANDROID_SERIAL } : {}),
    },
  });
}
