package com.car.NotificationModule

import android.widget.Toast
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class NotificationModule : ReactContextBaseJavaModule() {
    override fun getName(): String {
        return "NotificationModule"
    }

    @ReactMethod()
    fun Toastshow(message: String, duration: Int) {
        Toast.makeText(reactApplicationContext, message, duration).show()
    }
}