const { Popup } = require("../popup-ui");

let IsAlertShowing = false;

const ErrorAlert = (message?: string, func?: () => void) => {
    if (!IsAlertShowing) {
        IsAlertShowing = true;

        Popup.show({
            isShowing: true,
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
