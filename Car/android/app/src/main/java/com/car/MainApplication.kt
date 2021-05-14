package com.car;

import android.app.*
import android.content.Context
import android.content.Intent
import android.content.res.Configuration
import android.graphics.BitmapFactory
import android.graphics.Color
import android.os.Build
import android.widget.RemoteViews
import com.car.Entities.User
import com.car.NotificationModule.NotificationPackage
import com.car.SoftKeysModule.SoftKeysPackage
import com.facebook.react.*
import com.facebook.soloader.SoLoader
import com.microsoft.signalr.HubConnection
import java.lang.reflect.InvocationTargetException
import com.rndetectnavbarandroid.RNDetectNavbarAndroidPackage;


class MainApplication : Application(), ReactApplication {

    lateinit var notificationManager : NotificationManager
    lateinit var notificationChannel: NotificationChannel
    lateinit var builder : Notification.Builder
    private val channelId = "com.car"
    private val description = "Test notification"

    private val mReactNativeHost: ReactNativeHost = object : ReactNativeHost(this) {
        override fun getUseDeveloperSupport(): Boolean {
            return BuildConfig.DEBUG
        }

        override fun getPackages(): List<ReactPackage> {
            var packages = PackageList(this).packages
            packages.add(NotificationPackage())
            packages.add(SoftKeysPackage())
            return packages
        }

        override fun getJSMainModuleName(): String {
            return "index"
        }
    }

    override fun getReactNativeHost(): ReactNativeHost {
        return mReactNativeHost
    }

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this,  /* native exopackage */false)
        initializeFlipper(this, reactNativeHost.reactInstanceManager)

        val intent = Intent(this, NotificationService::class.java)
        startService(intent)

        //sendNotification(1, "Roman Danylevych's ride", "Implementation of notifications is in progress!")
    }

    companion object {
        /**
         * Loads Flipper in React Native templates. Call this in the onCreate method with something like
         * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
         *
         * @param context
         * @param reactInstanceManager
         */
        private fun initializeFlipper(
                context: Context, reactInstanceManager: ReactInstanceManager) {
            if (BuildConfig.DEBUG) {
                try {
                    /**
                     * We use reflection here to pick up the class that initializes Flipper,
                     * since Flipper library is not available in release mode
                     */
                    val aClass = Class.forName("com.softservecarmobile.ReactNativeFlipper")
                    aClass
                            .getMethod("initializeFlipper", Context::class.java, ReactInstanceManager::class.java)
                            .invoke(null, context, reactInstanceManager)
                } catch (e: ClassNotFoundException) {
                    e.printStackTrace()
                } catch (e: NoSuchMethodException) {
                    e.printStackTrace()
                } catch (e: IllegalAccessException) {
                    e.printStackTrace()
                } catch (e: InvocationTargetException) {
                    e.printStackTrace()
                }
            }
        }
    }

    fun sendNotification(id: Int, title: String, text: String) {
        val intent = Intent(this, LauncherActivity::class.java)
        val pendingIntent = PendingIntent.getActivity(this, 0, intent, PendingIntent.FLAG_UPDATE_CURRENT)
        notificationManager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager

        var notificationColor = Color.BLACK

        when (resources.configuration.uiMode and Configuration.UI_MODE_NIGHT_MASK) {
            Configuration.UI_MODE_NIGHT_YES -> notificationColor = Color.WHITE
            Configuration.UI_MODE_NIGHT_NO -> notificationColor = Color.BLACK
        }

        val contentView = RemoteViews(packageName, R.layout.notification_layout).also {
            it.setTextViewText(R.id.tv_title, title)
            it.setTextViewText(R.id.tv_content, text)
            it.setTextColor(R.id.tv_content, notificationColor)
            it.setTextColor(R.id.tv_title, notificationColor)
        }

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            notificationChannel = NotificationChannel(channelId, description, NotificationManager.IMPORTANCE_HIGH)
            notificationChannel.enableLights(true)
            notificationChannel.lightColor = Color.CYAN
            notificationChannel.enableVibration(true)
            notificationManager.createNotificationChannel(notificationChannel)
            builder = Notification.Builder(this, channelId)
                    .setContent(contentView)
                    .setSmallIcon(R.mipmap.ic_launcher_round)
                    .setLargeIcon(BitmapFactory.decodeResource(this.resources, R.mipmap.ic_launcher_round))
                    .setContentIntent(pendingIntent)
        } else {
            builder = Notification.Builder(this)
                    .setContent(contentView)
                    .setSmallIcon(R.mipmap.ic_launcher_round)
                    .setLargeIcon(BitmapFactory.decodeResource(this.resources, R.mipmap.ic_launcher_round))
                    .setContentIntent(pendingIntent)
        }

        notificationManager.notify(id, builder.build())
    }
}