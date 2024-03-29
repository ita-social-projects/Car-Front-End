import { AppRegistry, Platform } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import App from "./App";
import { name as appName } from "./app.json";
import ConfigPushNotifications from "./src/components/notifications/ConfigPushNotifications";
import ConfigTextScaling from "./src/components/text/ConfigTextScaling";

if (Platform.OS === "android") {
    ConfigPushNotifications();
}

ConfigTextScaling();

AppRegistry.registerComponent(appName, () => App);
EStyleSheet.build();