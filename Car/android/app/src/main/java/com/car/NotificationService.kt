package com.car

import android.app.*
import android.content.Context
import android.content.Intent
import android.content.res.Configuration
import android.graphics.BitmapFactory
import android.graphics.Color
import android.os.Build
import android.os.IBinder
import android.widget.RemoteViews
import com.car.Entities.Message
import com.car.Entities.User
import com.facebook.react.bridge.ReactMethod
import com.microsoft.signalr.HubConnection
import com.microsoft.signalr.HubConnectionBuilder


class NotificationService : Service() {

    lateinit var hubConnection: HubConnection
    lateinit var notificationManager : NotificationManager
    lateinit var notificationChannel: NotificationChannel
    lateinit var builder : Notification.Builder
    private val channelId = "com.car"
    private val description = "Test notification"

    override fun onBind(intent: Intent): IBinder? {
        return null
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        hubConnection = HubConnectionBuilder.create("https://car-project.azurewebsites.net/signalr/").build()
        hubConnection.start()
        hubConnection.on("RecieveMessage", { message ->
            sendNotification(message.id, "${message.sender.name} ${message.sender.surname}", message.text)
        }, Message::class.java)

        return super.onStartCommand(intent, flags, startId)
    }

    /**
     * Sends Push Notification
     */
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