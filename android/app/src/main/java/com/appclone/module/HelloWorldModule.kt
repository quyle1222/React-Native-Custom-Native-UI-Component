package com.appclone.module

import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class HelloWorldModule(reactContext:ReactApplicationContext):ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "HelloWorldModule"
    }

    @ReactMethod
    fun simpleMethodWithParams(text:String,callback: Callback){
        callback(text)
        return
    }
}