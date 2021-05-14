package com.car.SoftKeysModule;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


public class SoftKeysPackage implements ReactPackage {

    public SoftKeysPackage() {
    }

    @Override
    public List<NativeModule>
    createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<NativeModule>();
        modules.add(new SoftKeysModule(reactContext));
        return modules;
    }

    @Override
    public List<ViewManager>
    createViewManagers(ReactApplicationContext reactApplicationContext) {
        return Collections.emptyList();
    }
}