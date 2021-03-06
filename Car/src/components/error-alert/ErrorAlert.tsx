import React from "react";
import { Image } from "react-native";
import ErrorAlertStyle from "./ErrorAlertStyle";

const { Popup } = require("popup-ui");

let IsAlertShowing = false;

const ErrorAlert = (message?: string, func?: () => void) => {
    if (!IsAlertShowing) {
        IsAlertShowing = true;

        Popup.show({
            type: "Warning",
            title: "Error",
            button: true,
            textBody: message,
            buttonText: "Retry",
            icon: (
                <Image
                    source={require("../../../assets/images/surprised-car.png")}
                    style={ErrorAlertStyle.icon}
                    resizeMode="contain"
                />
            ),
            callback: () => {
                if (func != null) {
                    func();
                }
                IsAlertShowing = false;
                Popup.hide();
            }
        });
    }
};

export default ErrorAlert;
