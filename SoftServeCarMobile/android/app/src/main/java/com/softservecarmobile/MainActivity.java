package com.softservecarmobile;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /*private ReactInstanceManager mReactInstanceManager;
  private ReactRootView mReactRootView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mReactRootView = new ReactRootView(this);

        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index")
                //.addPackage(new MainReactPackage())
                .addPackage(new RCTMGLPackage())
                .setCurrentActivity(this)
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();

        mReactRootView.startReactApplication(mReactInstanceManager, "AroundMe", null);

        setContentView(mReactRootView);
    }*/

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "SoftServeCarMobile";
  }
}
