package com.softserveinc.car.NotificationModule

import android.widget.Toast
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class NotificationModule : ReactContextBaseJavaModule() {

    /**
     * Returns Native Module Name *
     */
    override fun getName(): String {
        return "NotificationModule"
    }

    /**
     * Native module Method
     * Use
     *
     * import { NativeModules } from 'react-native'
     * const notificationModule = NativeModules.NotificationModule
     * notificationModule.toastShow("Message", 1000);
     */
    @ReactMethod
    fun toastShow(message: String, duration: Int) {
        Toast.makeText(reactApplicationContext, message, duration).show()
    }
}