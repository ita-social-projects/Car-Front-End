import PushNotification from "react-native-push-notification";
import * as navigation from "../navigation/Navigation";
import messaging from "@react-native-firebase/messaging";

const ConfigPushNotifications = () => {
    PushNotification.createChannel({
        channelId: "all-notifications",
        channelName: "All notifications channel",
    },
    (created) => console.log(`createChannel returned '${created}'`)
    );

    PushNotification.configure({
        onNotification: (notification) => {
            const clicked = notification.userInteraction;

            if (clicked && notification.data.navigateTab) {
                navigation.navigate(notification.data.navigateTab);
            }
        },

    });

    const showNotification = async (remoteMessage: any) => {
        PushNotification.localNotification({
            channelId: "all-notifications",
            message: remoteMessage.notification?.body,
            title: remoteMessage.notification?.title,// eslint-disable-next-line max-len
            largeIconUrl: "https://media-exp1.licdn.com/dms/image/C4E0BAQEhqEYDn2-LkA/company-logo_200_200/0/1580391093627?e=2159024400&v=beta&t=dmRP8IQMGiZ683h8dALtCWl1YY29f7ggubgd8u5VEJs",
        });
    };

    messaging().onMessage(showNotification);
    messaging().setBackgroundMessageHandler(showNotification);
};

export default ConfigPushNotifications;