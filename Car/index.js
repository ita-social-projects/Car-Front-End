import { AppRegistry } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import App from "./App";
import { name as appName } from "./app.json";
import configPushNotifications from "./src/components/notifications/PushNotificationsConfig";

configPushNotifications();

AppRegistry.registerComponent(appName, () => App);
EStyleSheet.build();