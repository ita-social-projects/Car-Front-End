package com.softservecarmobile;

import com.facebook.react.ReactActivity;
import com.microsoft.appcenter.AppCenter;
import com.microsoft.appcenter.analytics.Analytics;
import com.microsoft.appcenter.crashes.Crashes;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "SoftServeCarMobile";
  }
     @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
      AppCenter.start(getApplication(), "d3c9af38-f643-4fb9-8283-3a971925b31d",
                  Analytics.class, Crashes.class);
    }

}
