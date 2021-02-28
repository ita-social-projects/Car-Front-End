import axiosRetry from "axios-retry";
import { Popup, Toast } from "popup-ui";
import React from "react";
import { Image } from "react-native";
import Axios from "../../../api-service/Axios";
import ErrorAlertStyle from "./ErrorAlertStyle";

let IsAlertShowing = false;

const ErrorAlert = (message?: string, func?: any) => {
    if (!IsAlertShowing) {
        IsAlertShowing = true;

        Popup.show({
            type: "Warning",
            title: "The Internet?",
            button: true,
            textBody: "That thing is still around?",
            buttonText: "Retry",
            icon: (
                <Image
                    source={require("../../../assets/images/surprised-car.png")}
                    style={ErrorAlertStyle.icon}
                    resizeMode="contain"
                />
            ),
            callback: () => {
                axiosRetry(Axios, {
                    retries: 200,
                    retryDelay: axiosRetry.exponentialDelay
                });
                IsAlertShowing = false;
                Popup.hide();
            }
        });
    }
};
export default ErrorAlert;
