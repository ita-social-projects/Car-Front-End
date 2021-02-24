import { Alert } from "react-native";

let IsAlertShowing = false;

const AlertWindow = (message: string, func?: any) => {
    if (!IsAlertShowing) {
        IsAlertShowing = true;

        Alert.alert("Error", message, [{
            text: "OK", onPress: () => {
                if (func !== undefined) {
                    func();
                }
                
                IsAlertShowing = false
            }
        }]);
    }
}
export default AlertWindow;