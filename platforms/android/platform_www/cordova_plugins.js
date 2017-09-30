cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "ionic-plugin-keyboard.keyboard",
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "id": "cordova-plugin-appavailability.AppAvailability",
        "file": "plugins/cordova-plugin-appavailability/www/AppAvailability.js",
        "pluginId": "cordova-plugin-appavailability",
        "clobbers": [
            "appAvailability"
        ]
    },
    {
        "id": "onesignal-cordova-plugin.OneSignal",
        "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
        "pluginId": "onesignal-cordova-plugin",
        "clobbers": [
            "OneSignal"
        ]
    },
    {
        "id": "cordova-plugin-admobpro.AdMob",
        "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
        "pluginId": "cordova-plugin-admobpro",
        "clobbers": [
            "window.AdMob"
        ]
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "cordova-plugin-facebookads.FacebookAds",
        "file": "plugins/cordova-plugin-facebookads/www/FacebookAds.js",
        "pluginId": "cordova-plugin-facebookads",
        "clobbers": [
            "window.FacebookAds"
        ]
    },
    {
        "id": "cordova-plugin-flurry.FlurryAds",
        "file": "plugins/cordova-plugin-flurry/www/Flurry.js",
        "pluginId": "cordova-plugin-flurry",
        "clobbers": [
            "window.FlurryAds"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-statusbar": "2.2.3",
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-plugin-console": "1.0.7",
    "cordova-plugin-device": "1.1.6",
    "ionic-plugin-keyboard": "2.2.1",
    "cordova-plugin-appavailability": "0.4.2",
    "onesignal-cordova-plugin": "2.2.0",
    "cordova-plugin-admob-facebook": "4.23.0",
    "cordova-plugin-admob-flurry": "5.4.4",
    "cordova-plugin-admobpro": "2.29.23",
    "cordova-plugin-inappbrowser": "1.7.1",
    "cordova-plugin-extension": "1.5.2",
    "cordova-facebook-audnet-sdk": "4.26.0",
    "cordova-plugin-facebookads": "4.23.2",
    "cordova-plugin-flurry": "5.3.3"
};
// BOTTOM OF METADATA
});